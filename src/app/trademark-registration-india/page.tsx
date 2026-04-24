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
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Registration India | Low Cost Online Filing',
    description: 'Register your trademark online in India with IPR Karo. Lowest fees for Startups & MSMEs. 100% Online process with expert legal support and 24/7 assistance.',
    keywords: [
        'trademark registration india',
        'how to register brand name in india',
        'trademark india online',
        'brand protection india',
        'logo registration india',
        'trademark rules 2017 india',
        'ip india portal guide',
        'trademark filing india',
        'cost of trademark india',
        'trademark attorney india'
    ],
    openGraph: {
        title: 'The Ultimate Guide to Trademark Registration in India',
        description: 'Protect your brand identity in the Indian market. From public search to registration certificate, we explain every step of the journey.',
        url: 'https://www.iprkaro.com/trademark-registration-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-registration-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Trademark Registration in India: An Overview' },
    { id: 'legal-framework', title: 'The Legal Landscape: Trade Marks Act 1999' },
    { id: 'benefits', title: 'Strategic Benefits for Indian Businesses' },
    { id: 'types-of-trademarks', title: 'What Can You Register in India?' },
    { id: 'step-by-step', title: 'The Filing Process: Step-by-Step' },
    { id: 'docs-checklist', title: 'Checklist of Required Documents' },
    { id: 'fee-structure', title: 'Government and Professional Fees' },
    { id: 'classes-info', title: 'Navigating the 45 Service and Goods Classes' },
    { id: 'search-importance', title: 'Why a Public Search is Mandatory' },
    { id: 'objection-replies', title: 'Common Objections & How to Reply' },
    { id: 'opposition-guide', title: 'Fending Off Third Party Oppositions' },
    { id: 'msme-startup', title: 'Incentives for MSMEs and Startups' },
    { id: 'renewal-maint', title: 'Maintaining Your Mark (Renewals)' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'The Path Ahead for Your Brand' },
];

const faqs = [
    {
        question: "Is online trademark registration in India mandatory?",
        answer: "While physical filing is still an option, online registration (e-filing) is highly recommended. It is 10% cheaper in terms of government fees and ensures faster processing since documents are immediately uploaded to the electronic registry."
    },
    {
        question: "What is the processing time for trademark registration in India?",
        answer: "With recent reforms, the processing time has been reduced to approximately 6-8 months for applications that face no objections. If an objection or opposition arises, the timeline can extend to 12-18 months."
    },
    {
        question: "Can a non-resident of India apply for trademark registration?",
        answer: "Yes, a foreign national or an overseas business entity can apply for trademark registration in India. However, they must provide an address for service within India, which is usually their designated trademark attorney's address."
    },
    {
        question: "What items cannot be registered as a trademark in India?",
        answer: "Trademarks that are generic, purely descriptive, scandalous, deceptive, or represent national symbols and emblems are generally prohibited from registration under Sections 9 and 11 of the Act."
    },
    {
        question: "Do I need a lawyer for trademark registration in India?",
        answer: "While the portal allows for self-filing, the legal complexities of classification, user affidavits, and responding to examination reports mean that professional assistance from a qualified IPR attorney significantly increases your success rate."
    },
    {
        question: "What is the validity of a trademark in India?",
        answer: "A trademark is valid for 10 years from the date of application. It can be renewed for successive periods of 10 years indefinitely, provided the renewal fees are paid on time."
    },
    {
        question: "Can sounds and smells be trademarked in India?",
        answer: "Yes, India recognizes non-traditional trademarks. Sounds can be registered if they can be represented graphically through musical notations. Smell marks are theoretically possible but extremely rare due to the difficulty of graphical representation."
    },
    {
        question: "What is the difference between a trademark and a brand?",
        answer: "A brand is a marketing concept representing the image and reputation of a business. A trademark is a legal protection for identifying elements of that brand, giving the owner exclusive rights to use them."
    },
    {
        question: "How do I check my trademark status in India?",
        answer: "You can check your status on the official IP India website using your application number. Statuses like 'Marked for Exam', 'Advertised before Acc', and 'Registered' signify different stages of the process."
    },
    {
        question: "Can I transfer my trademark to another person?",
        answer: "Yes, a trademark is an assignable asset. You can transfer ownership through a legal process called Assignment, which must be recorded with the Trademark Registry using Form TM-P."
    }
];

export default function TrademarkRegistrationIndiaPage() {
    const breadcrumbItems = [
        { label: "Trademark Registration India", href: "/trademark-registration-india" },
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
                "name": "Trademark Registration India",
                "item": "https://www.iprkaro.com/trademark-registration-india"
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
        "headline": "Trademark Registration India: The 2026 Comprehensive Business Guide",
        "description": "Navigate the complexities of brand protection in Bharat. Our guide covers legal frameworks, online filing steps, document checklists, and strategic insights for Indian businesses.",
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
            "@id": "https://www.iprkaro.com/trademark-registration-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Expert Trademark Registration Service India",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "Professional assistance for trademark filing and brand protection in Bharat.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2850"
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
                            Navigating <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Registration India</span> in 2026
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Own your brand name and logo legally. Dive into the complete process of trademark registration in India, from initial search on the IP portal to the final issuance of your registration certificate.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Brand Identity
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
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Trademark Registration India: Scaling Your Brand in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        As Bharat ascends to become the world's third largest economy, the importance of <strong>trademark registration India</strong> has transitioned from a backend legal requirement to a front end business priority. In a marketplace as vast and as competitive as ours, the ability to distinguish your offering from the noise is the difference between an overnight success and an also-ran. A trademark is not just a government certificate; it is the soul of your business's public identity.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The registration process in India is a journey through precision, patience, and legal expertise. Governed by the Trade Marks Act of 1999 and updated by the Trade Marks Rules of 2017, the system has been radically digitized to support the vision of Digital India. Today, a founder in a remote village can file an application with the same efficiency as a boardroom in Mumbai. This democratization of IP rights is the fuel for our booming startup ecosystem.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we have seen firsthand how a single registration can protect a startup from a corporate giant or enable a small local manufacturer to transition into a national powerhouse. India's IP laws are complex, but they are also deeply protective of those who follow the process correctly. This guide provides the strategic roadmap you need to navigate these waters with confidence and clarity.
                                    </p>
                                    <div className="bg-purple-50 border-l-8 border-[#6E5E93] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "India's future is in its brands. Protecting these brands through trademark registration is not just a legal choice, it is an economic imperative for every Indian entrepreneur."
                                        </p>
                                    </div>
                                </section>

                                <section id="legal-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Legal Foundation: Trade Marks Act 1999</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        To understand <strong>trademark registration India</strong>, one must understand the legislative framework that supports it. The Trade Marks Act, 1999, replaced the earlier 1958 legislation to align Indian laws with the TRIPS (Trade Related Aspects of Intellectual Property Rights) agreement. This modernization ensured that Indian trademarks are recognized and respected on the global stage.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Act provides legal definitions for what constitutes a mark, sets the criteria for registrability, and outlines the remedies for infringement. It emphasizes the concept of "exclusive use", ensuring that the title holder of a registered mark has the sole right to profit from its distinctiveness. Furthermore, it introduces the concept of 'Well Known Trademarks', providing extra protection for brands that have achieved massive public recognition across the country.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The 2017 amendments further streamlined the process by reducing the number of forms and enabling e-communications. This shift towards a paperless registry has significantly reduced the application processing time, making India one of the most proactive IP jurisdictions in Asia.
                                    </p>
                                </section>

                                <section id="benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Strategic Benefits: Why Indian Businesses Must Register</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        In the Indian context, where localized copies and "passing off" are common occurrences, a registered trademark offers several non negotiable benefits:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm border-l-[10px] border-l-indigo-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-900 text-xl mb-2">Legal Remedy per Section 29</h4>
                                                <p className="text-indigo-800">Registration gives you the power to sue for 'Infringement' rather than just 'Passing Off'. Infringement is easier to prove in court and leads to faster injunctions against copycats.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm border-l-[10px] border-l-indigo-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-900 text-xl mb-2">Builds Global Valuation</h4>
                                                <p className="text-indigo-800">Investors look at the IP portfolio of an Indian company during due diligence. A secured trademark increases the valuation and makes the company attractive for VC funding or acquisitions.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Furthermore, having a registered trademark in India is a prerequisite for the Amazon Brand Registry. With E commerce booming in every Tier 2 and Tier 3 city, an Indian business without online IP protection is essentially leaving its digital storefront open for theft.
                                    </p>
                                </section>

                                <section id="types-of-trademarks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">What Can You Register? The Spectrum of Indian Trademarks</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The scope of protection in India is wider than most founders realize. You can secure a wide range of brand identifiers:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Word Marks
                                            </h4>
                                            <p className="text-gray-600">The brand name itself in plain text. Examples: TATA, GOOGLE.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Device Marks
                                            </h4>
                                            <p className="text-gray-600">Specific artistic logo designs, symbols, and stylized text.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Non-Conventional Marks
                                            </h4>
                                            <p className="text-gray-600">Unique sounds (like the Britannia jingle) and 3D shapes of packaging.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Trust Marks
                                            </h4>
                                            <p className="text-gray-600">Collective and Certification marks like the Woolmark or CA logo.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="step-by-step" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step By Step: The Lifecycle of an Indian Trademark Application</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The registration of trademark India process is a series of milestones that test the robustness of your brand's legal standing:
                                    </p>
                                    <div className="space-y-10 my-10">
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Public Search & Classification</h4>
                                                <p className="text-gray-700">We analyze the IP India records for phonetically and visually similar marks. We also determine the correct class (out of 45) to ensure maximum coverage.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Online Filing (Form TM-A)</h4>
                                                <p className="text-gray-700">The application is submitted to the registry. You receive an application number instantly and can start using the ™ symbol.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Departmental Examination</h4>
                                                <p className="text-gray-700">A government official reviews the application. If they find issues, an 'Examination Report' is issued with objections like Section 9 (distinctiveness) or Section 11 (similarity).</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Show Cause Hearing (If Required)</h4>
                                                <p className="text-gray-700">If the written response to an objection isn't enough, we represent you in a hearing before the Registrar to argue your brand's uniqueness.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">5</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Journal Publication</h4>
                                                <p className="text-gray-700">The mark is published in the Trademark Journal for 4 months. This is the window for third-parties to file an opposition.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">6</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2">Final Certification</h4>
                                                <p className="text-gray-700">If no one opposes, the digital registration certificate is issued. You can now use the ® symbol and enjoy a 10 year protection period.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="docs-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Consolidated Checklist: Documents You Need</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Errors in documentation are the number one cause of 'Formalities Chk Fail' status. Ensure your dossier is ready with:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-indigo-900 text-xl mb-4">For Individual Applicants</h4>
                                            <ul className="space-y-3">
                                                <li>- Signed Power of Attorney (TM-48)</li>
                                                <li>- Identity Proof (Aadhaar/Voter ID)</li>
                                                <li>- PAN Card Scanned Copy</li>
                                                <li>- Soft Copy of the Logo/Design</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-indigo-900 text-xl mb-4">For Corporate/Legal Entities</h4>
                                            <ul className="space-y-3">
                                                <li>- Certificate of Incorporation (COI)</li>
                                                <li>- Udyam registration (for fee rebate)</li>
                                                <li>- Board Resolution for Authorized Signatory</li>
                                                <li>- Partnership Deed (if firm)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        <strong>Critical Note:</strong> If you are claiming a user date earlier than today, you MUST provide a User Affidavit on stamp paper along with supporting proof. Without this, your priority claim will be rejected.
                                    </p>
                                </section>

                                <section id="fee-structure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Transparent Fees: Cost of Trademark Registration India</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The Indian government incentivizes digital and small business growth. Our pricing models reflect this transparency:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-blue-50 rounded-3xl text-center border-b-8 border-b-blue-600 shadow-xl">
                                            <p className="text-blue-800 font-bold uppercase tracking-widest text-sm mb-2">Startup Friendly</p>
                                            <h4 className="text-[#0C002B] text-5xl font-bold mb-4">₹4,500 <span className="text-lg text-gray-500 font-normal">/class</span></h4>
                                            <p className="text-gray-600">Applicable for Individuals, MSMEs, and DPIIT Recognized Startups (Online Filing).</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl text-center border-b-8 border-b-gray-400">
                                            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Corporate Rate</p>
                                            <h4 className="text-gray-800 text-5xl font-bold mb-4">₹9,000 <span className="text-lg text-gray-400 font-normal">/class</span></h4>
                                            <p className="text-gray-500">Applicable for Large Companies and other legal entities without MSME status.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="msme-startup" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Government Incentives for Small Enterprises</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The Government of Bharat offers specific advantages to ensure SMEs can compete:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-[#6E5E93]/10 rounded-2xl border border-[#6E5E93]/20">
                                            <h5 className="font-bold text-[#0C002B] mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6 mr-2 text-[#6E5E93]" />
                                                50% Fee Subsidy
                                            </h5>
                                            <p className="text-sm opacity-80">By presenting a valid MSME or Udyam certificate, your government fee is cut in half across all classes.</p>
                                        </div>
                                        <div className="p-6 bg-[#6E5E93]/10 rounded-2xl border border-[#6E5E93]/20">
                                            <h5 className="font-bold text-[#0C002B] mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faRocket} className="w-6 h-6 mr-2 text-[#6E5E93]" />
                                                Fast Track Examination
                                            </h5>
                                            <p className="text-sm opacity-80">Registered startups can request an expedited examination, reducing the waiting period for initial reports to just a few weeks.</p>
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

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">The Future of Your Brand in India</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The registration of trademark India is more than a legal hurdle; it is a foundational investment in your business identity. In a country that is rapidly formalizing its economy, your IP is your most valuable currency. By choosing to register, you are telling the world that your brand is here to stay.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        IPR Karo is here to ensure that your journey is successful, smooth, and legally sound. Our team of senior attorneys and technology experts provides the support you need to build a brand that is Bharat's pride and a global contender.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Build a Brand That Lasts</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't leave your brand to chance. Register your trademark in India today and gain the exclusive legal rights you deserve.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Trademark Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Expert Consultation
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Brand Safety Check</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Verify your brand name and logo on the IP India portal. Get our **Expert Opinion** in 1 hour.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Free Search Report
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Trademark Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">What is Trademark?</span>
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
