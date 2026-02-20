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
    faLaptopCode,
    faBolt,
    faHistory,
    faLock,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Online Trademark Registration India | Fast E-Filing Guide 2026',
    description: 'Apply for online trademark registration in India. Get step-by-step guidance on e-filing, digital certificates, government fees, and 24-hour processing with IPR Karo.',
    keywords: [
        'online trademark registration',
        'e-filing trademark india',
        'apply trademark online',
        'digital trademark registration',
        'online brand name registration',
        'trademark portal india',
        'e-trademark filing fees',
        'fast trademark registration',
        'remote trademark filing',
        'online ipr services'
    ],
    openGraph: {
        title: 'Modern Brand Protection: Online Trademark Registration in Bharat',
        description: 'Secure your brand from the comfort of your home. Learn how the digital IP India portal has revolutionized trademark filing for startups and MSMEs.',
        url: 'https://www.iprkaro.com/online-trademark-registration',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/online-trademark-registration',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Digital Revolution in Trademark Registration' },
    { id: 'benefits-online', title: 'Why Online Filing is the Superior Choice' },
    { id: 'portal-overview', title: 'Navigating the IP India E-Filing Portal' },
    { id: 'eligibility-e-filing', title: 'Who Can Register a Trademark Online?' },
    { id: 'e-filing-steps', title: 'Step-by-Step Guide to Online Registration' },
    { id: 'docs-digital', title: 'Digital Document Requirements Checklist' },
    { id: 'cost-efficiency', title: 'Cost Analysis: Online vs. Physical Filing' },
    { id: 'dsc-importance', title: 'The Role of Digital Signature Certificates (DSC)' },
    { id: 'tracking-status', title: 'Monitoring Your Application in Real-Time' },
    { id: 'e-examination', title: 'Digital Examination and Hearing Processes' },
    { id: 'security-privacy', title: 'Data Security on the Official Trademark Portal' },
    { id: 'startup-speed', title: 'Fast-Tracking for Startups and MSMEs' },
    { id: 'why-digital-iprkaro', title: 'IPR Karo: Your Technology Partner in IP' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Embracing the Future of Brand Protection' },
];

const faqs = [
    {
        question: "Is online trademark registration faster than physical filing?",
        answer: "Yes, significantly. Online applications generate an acknowledgment and application number instantly, whereas physical filing can take several days for data entry. Moreover, the government provides a 10% discount on the filing fee for online submissions."
    },
    {
        question: "What is the government fee for online trademark registration?",
        answer: "For individuals, startups, and MSMEs, the online filing fee is ₹4,500 per class. For large companies and other entities, the fee is ₹9,000 per class. This is the official rate set by the Trademark Registry of India."
    },
    {
        question: "Do I need a Digital Signature (DSC) for online filing?",
        answer: "Yes, if you are filing the application yourself, a Class 3 Digital Signature Certificate is required to sign the online forms. However, when you file through IPR Karo, we use our professional DSC, saving you the hassle and cost of acquiring one."
    },
    {
        question: "Can I track my trademark application status online?",
        answer: "Absolutely. The IP India portal provides a 'Free Search' and 'E-Register' tool where you can enter your application number to see real time updates on your mark's lifecycle, from 'Formalities Chk Pass' to 'Registered'."
    },
    {
        question: "Is the online trademark registration process secure?",
        answer: "The official IP India portal uses advanced encryption and secure payment gateways to ensure that your sensitive business data and financial transactions remain protected throughout the filing process."
    },
    {
        question: "Can I apply for online trademark registration from anywhere in India?",
        answer: "Yes, that is the primary advantage. Whether your business is in a metropolitan city like Delhi or a remote town in North East India, you can file your application via the internet without visiting the trademark office."
    },
    {
        question: "How long does it take to get the online registration certificate?",
        answer: "Once the mark is cleared for registration (usually after the 4-month opposition window), the digital certificate is issued on the portal. The entire process typically takes 6 to 12 months depending on the workload of the registry."
    },
    {
        question: "What happens if there is a technical error during online filing?",
        answer: "Technical glitches are rare but can happen. If a filing fails after payment, the registry has a established protocol for manual intervention and refund/recovery. Our technical team monitors every filing to ensure zero errors."
    },
    {
        question: "Can I register a logo and a name together online?",
        answer: "Yes, you can file a 'Device Mark' application which includes both the graphical logo and the brand name. This counts as a single application provided they are part of the same visual assembly."
    },
    {
        question: "What support does IPR Karo provide for online filers?",
        answer: "We provide an end to end digital experience. From professional searches to drafting, filing, and responding to objections, our platform ensures you don't have to handle any complex paperwork or portal navigation."
    }
];

export default function OnlineTrademarkRegistrationPage() {
    const breadcrumbItems = [
        { label: "Online Trademark Registration", href: "/online-trademark-registration" },
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
                "name": "Online Trademark Registration",
                "item": "https://www.iprkaro.com/online-trademark-registration"
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
        "headline": "Online Trademark Registration in India: The 2026 Digital Guide",
        "description": "The complete manual for e-filing your trademark in Bharat. Learn about digital fees, portal navigation, DSC requirements, and fasttrack processing for brands.",
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
            "@id": "https://www.iprkaro.com/online-trademark-registration"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Instant Online Trademark Filing",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "High-speed digital trademark registration services with 24-hour application filing guarantee.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "4150"
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
                            Instant <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Online Trademark Registration</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Welcome to the future of brand protection. Experience the speed, efficiency, and cost-effectiveness of the official online trademark registration process in Bharat. Secure your assets in minutes, not months.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Start Online Filing Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Digital Transformation of IP Rights</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the bold new Bharat, where technology touches every layer of governance, <strong>online trademark registration</strong> has emerged as a cornerstone of the Digital India movement. The days of physically visiting the Trademark Registry with bundles of paper, waiting in long queues, and dealing with manual discrepancies are a relic of the past. Today, the entire lifecycle of a brand—from initial filing to final certification—happens in a high-speed, transparent, and secure digital environment.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The introduction of the Comprehensive e-Filing system by the Controller General of Patents, Designs and Trade Marks has definitively revolutionized how startups, gig economy workers, and established enterprises perceive intellectual property. By removing geographical barriers and administrative bottlenecks, the government has empowered ambitious entrepreneurs from Srinagar to Kanyakumari to protect their innovations with the mere click of a button. This system has democratized access to legal monopolies over brand identifiers.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        At IPR Karo, we have enthusiastically embraced this digital shift by creating a technology-first legal platform. We don't just file generic forms; we provide a seamless, strategically sound bridge between your brilliant brand vision and the official registry. This extensive guide profoundly explores the nuances of the online system, ensuring that you can confidently navigate the virtual hallways of brand protection with ease, precision, and ultimate success.
                                    </p>
                                    <div className="bg-[#6E5E93]/10 border-l-8 border-[#0C002B] p-8 my-10 rounded-r-3xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Digital speed is the new currency of comprehensive brand protection. Superior online trademark registration practically ensures that your business identity is secured precisely at the rapid pace of modern innovation."
                                        </p>
                                    </div>
                                </section>

                                <section id="benefits-online" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Online Filing is the Superior Choice</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        While physical filing still technically exists for obscure historical reasons, the <strong>online trademark registration</strong> system systematically offers compelling financial and operational advantages that objectively make it the only logical choice for forward-thinking modern businesses:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faBolt} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">Instant Acknowledgment and Concrete Priority</h4>
                                                <p className="text-blue-800">The exact moment you boldly hit 'Submit', you instantly receive an official application number. This permanently establishes your legal priority date, strictly preventing anyone else from successfully filing for the exact same name a minute after you do.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">Substantially Lower Government Fees</h4>
                                                <p className="text-blue-800">The government actively incentivizes digital filing by deliberately offering a full 10% discount on the official government fees universally across all application categories and legal entities, directly saving you crucial working capital.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faHistory} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">Unrestricted 24/7 Accessibility</h4>
                                                <p className="text-blue-800">The official digital portal is exceptionally accessible round the clock, 365 days a year. You fundamentally don't have to wait for restrictive office hours or painfully deal with physical registry queues to securely establish your brand identity.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="portal-overview" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Navigating the IP India E-Filing Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        The official e-filing portal (ipindiaonline.gov.in) is the gateway to <strong>online trademark registration</strong>. While powerful, the interface can be technical for first time users. It requires a registered user ID, mapping of a Digital Signature Certificate (DSC), and an understanding of the various modules:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] mb-2 flex items-center text-gray-800">
                                                <FontAwesomeIcon icon={faLaptopCode} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                New Application Module
                                            </h4>
                                            <p className="text-sm text-gray-600">Where fresh TM-A applications are drafted, verified, and signed digitally before submission.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#160049] mb-2 flex items-center text-gray-800">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Examination Module
                                            </h4>
                                            <p className="text-sm text-gray-600">The section where you view examination reports and upload your legal responses to objections.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="e-filing-steps" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step By Step: The Online Registration Workflow</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        The digital workflow is designed for transparency and speed. Here is how your application moves through the virtual registry:
                                    </p>
                                    <div className="space-y-10 my-10 relative">
                                        <div className="flex gap-6 items-start relative z-10">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-white shadow-lg">1</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2 text-gray-800">Digital Search and Verification</h4>
                                                <p className="text-gray-700">We utilize the portal's databases to ensure your mark doesn't conflict with existing records. This is the foundation of a successful filing.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start relative z-10">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-white shadow-lg">2</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2 text-gray-800">Form TM-A Generation</h4>
                                                <p className="text-gray-700">The application form is populated with your business details, trademark class, and user date. This form is the blueprint of your IP claim.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start relative z-10">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-white shadow-lg">3</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2 text-gray-800">Digital Signing (DSC)</h4>
                                                <p className="text-gray-700">The application is cryptographically signed using a Digital Signature Certificate, ensuring the authenticity and non repudiation of the submission.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start relative z-10">
                                            <div className="w-12 h-12 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-white shadow-lg">4</div>
                                            <div>
                                                <h4 className="font-bold text-[#160049] text-xl mb-2 text-gray-800">E-Payment and Acknowledgment</h4>
                                                <p className="text-gray-700">The system processes the government fee through a secure gateway and issues an instant receipt. You can now start using the ™ symbol.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="dsc-importance" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Role of Digital Signature Certificates (DSC)</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        A Digital Signature Certificate is the online equivalent of a physical signature. For <strong>online trademark registration</strong>, a Class 3 DSC is mandatory for all filings. This certificate is issued by licensed Certifying Authorities and contains encrypted data that verifies the identity of the signer.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800 font-bold">
                                        Crucial Advantage: When you partner with IPR Karo, you do not need to purchase or manage a DSC. Our registered trademark attorneys use their official certificates to sign and file your application, reducing your upfront costs and technical burden.
                                    </p>
                                </section>

                                <section id="cost-efficiency" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Cost Analysis: Online vs. Physical Filing 2026</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800 text-center">
                                        The government's heavily modernized fee structure highly favors the direct digital path. Here is a granular financial comparison:
                                    </p>
                                    <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl my-10">
                                        <table className="w-full text-left bg-white">
                                            <thead className="bg-[#0C002B] text-white">
                                                <tr>
                                                    <th className="p-6 font-bold">Applicant Category Profile</th>
                                                    <th className="p-6 font-bold">Online E-Filing (Digital)</th>
                                                    <th className="p-6 font-bold">Obsolete Physical Filing (Paper)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-lg">
                                                <tr>
                                                    <td className="p-6 bg-gray-50 font-bold text-gray-800">Individual/Proprietor/MSME/Recognized Startup</td>
                                                    <td className="p-6 text-green-600 font-bold">₹4,500 <FontAwesomeIcon icon={faCheck} className="w-6 h-6 ml-2" /></td>
                                                    <td className="p-6 text-gray-400">₹5,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 bg-gray-50 font-bold text-gray-800">Other Entities (Large Corporates, Unregistered Firms)</td>
                                                    <td className="p-6 text-green-600 font-bold">₹9,000 <FontAwesomeIcon icon={faCheck} className="w-6 h-6 ml-2" /></td>
                                                    <td className="p-6 text-gray-400">₹10,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="trademark-infringement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Guarding Digital Assets against Online Trademark Infringement</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        In the e-commerce era, trademark infringement routinely happens instantly across digital borders. It fundamentally occurs when a hostile third party illicitly exploits a logo or name that is misleadingly identical or deceptively similar to your legally registered trademark, applied to identical or highly related goods/services. This deeply confuses your consumer base, forcefully siphons your hard-earned revenue, and fatally tarnishes your carefully constructed reputation overnight.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Due to Section 29 of the monumental <strong>Trade Marks Act, 1999</strong>, completing an online trademark registration arms you with an iron-clad statutory shield. It grants you the exclusive legal standing necessary to directly issue devastating website takedown notices (like on Amazon or Shopify), quickly freeze counterfeit merchant accounts, and confidently secure heavy financial damages through civil court injunctions. A registered brand name actively turns you from a vulnerable market target into a heavily fortified IP fortress.
                                    </p>
                                </section>

                                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Crucial Common Mistakes to Avoid During Your Application</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Despite the streamlined UI of the online portal, a shockingly high percentage of novice trademark applications inevitably face catastrophic rejection due to entirely avoidable amateur errors. The system requires acute legal precision. Here are the most prominent pitfalls to aggressively avoid:
                                    </p>
                                    <ul className="space-y-6 my-8 p-0 list-none">
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Neglecting the Essential Trademark Public Search</strong> Filing an arbitrary name forcefully without performing an exhaustive, professional trademark public search across the national IP India database virtually guarantees a harsh objection under Section 11 for "Likelihood of Confusion."</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Applying in the Wrong Trade Classification</strong> Incorrectly identifying your goods/services and violently forcing your application into a completely mismatched Nice Classification class renders your subsequent registration legally useless when trying to enforce your trademark rights against a direct competitor.</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Filing Highly Generic or Directly Descriptive Names</strong> Words that merely describe the core nature, quality, or primary geographical origin of the product (e.g., "Best Cotton Shirts" or "Fast Delivery Mumbai") completely lack "inherent distinctiveness" and routinely fail examination.</p>
                                        </li>
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
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What <span className="text-[#FFB703]">Clients Say</span> About Online Filing</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">Entrepreneurs share how online trademark registration through IPR Karo streamlined their brand protection journey.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">SB</div>
                                                        <div><h3 className="text-white font-bold">Sanjay Bhatt</h3><p className="text-white/50 text-xs">Founder, EdTech Platform</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;I was dreading physical filings and lawyer visits. IPR Karo handled our entire online trademark registration remotely. From search to filing, everything was done digitally in under 48 hours!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">RD</div>
                                                        <div><h3 className="text-white font-bold">Ritu Deshpande</h3><p className="text-white/50 text-xs">Owner, Organic Beauty Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;The online e-filing process explained by IPR Karo saved me ₹4,500 compared to physical filing. Their team guided me through the IP India portal step by step. Incredible value!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">HM</div>
                                                        <div><h3 className="text-white font-bold">Harsh Malhotra</h3><p className="text-white/50 text-xs">CTO, SaaS Company</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;As a tech person, I appreciated how seamless the online process was. IPR Karo filed our software trademark through the e-filing portal and we received our TM-A acknowledgement the same day!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Securing Your Brand in a Digital First World</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The immense ease of <strong>online trademark registration</strong> has fully removed the final archaic barriers for fiercely independent Indian entrepreneurs relentlessly looking to enter the heavily structured formal economy. By aggressively digitizing the complex art of brand protection, Bharat has miraculously created an equitable, level playing field where a tiny, bootstrapped home business can proudly possess the exact same legal armor as a multi-billion dollar multinational conglomerate.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        IPR Karo is immensely proud to be operating at the razor sharp forefront of this digital revolution. Our customized platform fundamentally simplifies the extreme complexities of the government IP portal, actively giving you a spectacularly smooth, blazingly fast, and legally foolproof registration experience. Don't wrongly let your invaluable brand identity unnecessarily go unprotected against hostile competitors. Powerfully go digital, go completely secure, and decisively build your massive future today with unshakeable confidence.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Go Digital?</h2>
                                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                            Experience the fastest way to protect your brand name and logo in India. File your online trademark registration with expert guidance.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start E-Filing Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Digital IP Expert
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Online Speed</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Why wait for paperwork? Get your **TM Application Number** in 24 hours with our e-filing service.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Apply Online Today
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-gray-800">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">India Filing Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Portal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trade-mark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Direct Word Mark Search</span>
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
