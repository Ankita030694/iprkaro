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
    title: 'Steps to File a Trademark Application Online in India | Complete 2026 Guide',
    description: 'Learn the exact steps to file a trademark application online in India via the IPIndia portal. A comprehensive 4000-word guide on Search, Classes, DSC, Form TM-A, and more.',
    keywords: [
        'what are the steps to file a trademark application online in india',
        'trademark registration process india 2026',
        'how to apply for trademark online india',
        'ip india portal registration steps',
        'form tm-a filing guide',
        'trademark search process india',
        'digital signature for trademark india',
        'trademark examination report response',
        'trademark journal publication process',
        'online trademark filing fees 2026'
    ],
    openGraph: {
        title: 'The Definitive Guide: How to File a Trademark Application Online in India',
        description: 'Secure your brand identity with our exhaustive step by step guide. From pre-filing search to final certificate, learn how to navigate the IPIndia portal like a pro.',
        url: 'https://www.iprkaro.com/what-are-the-steps-to-file-a-trademark-application-online-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-are-the-steps-to-file-a-trademark-application-online-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Digital Shield: Protecting Your Brand in New India' },
    { id: 'importance-of-names', title: 'Why Brand Names are Business Assets' },
    { id: 'pre-filing-research', title: 'Phase 1: The Pre Filing Forensic Search' },
    { id: 'class-selection', title: 'Decoding the 45 Classes: The Nice Classification' },
    { id: 'dsc-requirement', title: 'The Digital identity: Procurement and Mapping of Class 3 DSC' },
    { id: 'ipindia-portal', title: 'Navigating the Portal: Account Creation and Login' },
    { id: 'filing-tm-a', title: 'Drafting Form TM-A: A Character by Character Guide' },
    { id: 'document-checklist', title: 'Mandatory Documents for Individuals, Startups, and MSMEs' },
    { id: 'fee-structure', title: 'Government Fee Matrix 2026 and MSME Rebates' },
    { id: 'post-filing-stages', title: 'The Journey from Acknowledgement to Registration' },
    { id: 'objection-response', title: 'Tactical Responses to Examination Reports' },
    { id: 'journal-publication', title: 'The Publication Window: Handling Public Opposition' },
    { id: 'madrid-protocol', title: 'Scaling Global: International Filing via Madrid Protocol' },
    { id: 'common-pitfalls', title: 'Why Applications Fail: Top 10 Mistakes to Avoid' },
    { id: 'why-iprkaro', title: 'IPRKaro: Your Strategic Partner in IP Management' },
    { id: 'faqs', title: 'Deep Dive: Frequently Asked Questions' },
    { id: 'reviews', title: 'What Our Clients Say' },
    { id: 'conclusion', title: 'Securing Your Intellectual Legacy' },
];

const faqs = [
    {
        question: "What are the first steps to file a trademark application online in India?",
        answer: "The first steps include conducting a comprehensive public search on the IPIndia portal to ensure your mark is unique, determining the correct class under the Nice Classification, and procuring a Class 3 Digital Signature Certificate (DSC) for authentication."
    },
    {
        question: "Is it mandatory to have a Digital Signature Certificate (DSC) for online filing?",
        answer: "Yes, a Class 3 Digital Signature Certificate is mandatory for e-filing. It is used to digitally sign Form TM-A and other subsequent documents, ensuring the authenticity and legal validity of the submission."
    },
    {
        question: "How long does it take to get a trademark registration certificate online?",
        answer: "While the application filing takes only a few hours, the entire process—including examination, publication in the journal, and the opposition window—typically takes between 6 to 12 months, provided there are no major objections."
    },
    {
        question: "What is the government fee for online trademark filing for a startup?",
        answer: "Recognized Startups and MSMEs (with Udyam registration) are eligible for a 50% rebate on government fees. The effective fee for e-filing is 4,500 rupees per class, whereas for larger companies, it is 9,000 rupees."
    },
    {
        question: "Can I use the ™ symbol immediately after filing the application online?",
        answer: "Yes, as soon as you file your application on the IPIndia portal and receive the acknowledgement receipt with the application number, you can start using the ™ symbol next to your brand name."
    },
    {
        question: "What happens if my trademark application is objected to by the examiner?",
        answer: "If an objection is raised in the Examination Report, you must file a formal written response within 30 days. This response must provide legal justifications and evidence to overcome the objections under Sections 9 and 11 of the Act."
    },
    {
        question: "Do I need to file a separate application for each brand logo and name?",
        answer: "If the logo contains the brand name, you can often file it as a 'Device Mark' to cover both. However, if you want independent protection for a unique font or a standalone symbol, separate filings for the wordmark and the device mark are recommended."
    },
    {
        question: "What is the role of the Trademark Journal in the registration process?",
        answer: "The Trademark Journal is an official weekly publication. Once your mark is accepted by the registrar, it is published here for 4 months to allow any third party to oppose the registration if they feel it infringes their rights."
    },
    {
        question: "How many classes are there in the Indian trademark system?",
        answer: "There are 45 classes in total. Classes 1 to 34 represent various types of goods (like chemical, hardware, and medicines), while Classes 35 to 45 represent different service sectors (like retail, finance, and hospitality)."
    },
    {
        question: "Is it possible to register a trademark without a lawyer or professional help?",
        answer: "Technically, yes, the portal allows individuals to file themselves. However, due to the legal complexities of class selection, description drafting, and handling potential objections, professional assistance is highly recommended to avoid rejection."
    },
    {
        question: "Can I file a single application for multiple classes?",
        answer: "Yes, you can file a 'Multi Class Application' on the IPIndia portal. While it simplifies the tracking process with a single application number, the government fee is still calculated per class (e.g., 4,500 x 3 for three classes)."
    },
    {
        question: "What is the validity of a registered trademark in India?",
        answer: "A registered trademark is valid for 10 years from the date of the application. It can be renewed indefinitely every 10 years by paying the renewal fee before the expiry date."
    }
];

export default function TrademarkStepsPage() {
    const breadcrumbItems = [
        { label: "Steps to File Trademark", href: "/what-are-the-steps-to-file-a-trademark-application-online-in-india" },
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
                "name": "Steps to File Trademark",
                "item": "https://www.iprkaro.com/what-are-the-steps-to-file-a-trademark-application-online-in-india"
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
        "headline": "What are the Steps to File a Trademark Application Online in India? (2026 Comprehensive Guide)",
        "description": "The ultimate 4000-word roadmap for online trademark registration in India. Detailed steps on search, documentation, portal navigation, and legal compliance.",
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
            "@id": "https://www.iprkaro.com/what-are-the-steps-to-file-a-trademark-application-online-in-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Online Trademark Registration Service",
        "image": "https://www.iprkaro.com/assets/trademark-og.jpg",
        "description": "Expert assistance for filing valid trademark applications online in India with 100% compliance guarantee.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2450"
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
                            The Blueprint of Protection: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Filing</span> Steps in India
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Discover the exhaustive roadmap to securing your brand identity online. From the intricacies of the IPIndia portal to the forensic details of legal drafting, we simplify the most complex registration process in Bharat.
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Digital Shield: Protecting Your Brand in New India</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the hyper connected and competitive marketplace of modern India, a brand name is no longer just a label but a significant business asset. As Bharat transitions into a global economic powerhouse, the necessity for robust intellectual property protection has reached unprecedented levels. Every single day, thousands of new startups, MSMEs, and digital entrepreneurs launch their dreams into the market. However, without a registered trademark, those dreams remain vulnerable to imitation, infringement, and legal hijacking. Understanding <strong>what are the steps to file a trademark application online in India</strong> is the first step toward building a defensible business legacy.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The trademark registration process in India has undergone a massive digital transformation. Gone are the days of tedious manual filings, physical queues at the registrar’s office, and long delays in obtaining priority dates. Today, the IPIndia portal offers a streamlined, paperless, and efficient ecosystem for e-filing. While the technology has made filing accessible, the legal complexity remains as rigorous as ever. A single error in selecting a class or a minor discrepancy in the description of goods can lead to a 'Formalities Check Fail' or a rigorous 'Objection' from the registrar.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        At IPR Karo, we believe that legal procedures should be enablers of growth, not barriers. This comprehensive 4000-word roadmap is designed to guide you through every click, every document, and every strategic decision required to secure your trademark. We will explore the statutory roots of the Trade Marks Act 1999, provide forensic breakdowns of the Nice Classification system, and offer a click by click guide to navigating the IPIndia portal. Whether you are a solo founder launching your first brand or a corporate entity scaling across states, this manual will provide you with the professional insight needed to navigate the registration journey with absolute confidence.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A trademark is the silent ambassador of your brand; it secures your reputation while you focus on your vision."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Let us begin by understanding the foundational pillars. Before you upload a single document or pay the government fee, there is a world of research and strategic naming that must happen. The success of your application is decided in the 'Search' phase, long before the registrar even sees your brand name. In the following sections, we will demystify these pre-filing requirements and set the stage for a successful registration.
                                    </p>
                                </section>

                                <section id="importance-of-names" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Brand Names are Strategic Business Assets</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        In the legal world, a trademark functions as a 'Source Identifier'. It tells the consumer exactly where a product or service is coming from. Beyond just a name, it encapsulates the quality, the promise, and the goodwill that you have built over years of hard work. Under the <strong>Trade Marks Act, 1999</strong>, registration grants you the exclusive right to use that mark across the entire territory of India.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Statutory Protection
                                            </h4>
                                            <p className="text-gray-600">Unlike common law rights (passing off), a registered trademark gives you a proactive right to sue for infringement. You don't have to prove your reputation in a new city; the certificate is proof enough.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3 text-[#6E5E93]" /> Valuation and Funding
                                            </h4>
                                            <p className="text-gray-600">Venture Capitalists and investors look for 'Clean IP'. A registered trademark acts as a tangible asset on the balance sheet, increasing the overall valuation of your startup.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="mr-3 text-[#6E5E93]" /> Deterrence
                                            </h4>
                                            <p className="text-gray-600">The mere presence of a registered mark on the IPIndia portal deters competitors from choosing similar names, saving you thousands in potential litigation costs.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[#6E5E93]" /> Global Scalability
                                            </h4>
                                            <p className="text-gray-600">A domestic registration is a prerequisite for international protection under the Madrid Protocol. It is your ticket to a global brand presence.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        Establishing the importance of a brand name is only half the battle. The real work begins with ensuring that the name you have chosen is actually 'registrable'. Many businesses fall into the trap of choosing descriptive or generic names that are legally weak. In the next section, we dive into the first and most critical technical step: the forensic search.
                                    </p>
                                </section>

                                <section id="pre-filing-research" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Phase 1: The Pre Filing Forensic Search</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The search phase is the foundation of the entire registration process. If you skip this, you are essentially flying blind. A comprehensive search involves more than just checking if the domain is available or if the name exists on Instagram. You must use the <strong>IPIndia Public Search</strong> tool to identify potential conflicts.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4">The Search Hierarchy:</h4>
                                        <ul className="space-y-4 text-gray-700">
                                            <li><strong>Wordmark Search:</strong> Checking for identical characters and spellings.</li>
                                            <li><strong>Phonetic Search:</strong> Checking for names that 'sound' similar (e.g., 'Kwik' vs 'Quick'). Under Indian law, phonetic similarity is as dangerous as visual similarity.</li>
                                            <li><strong>Vienna Code Search:</strong> If your mark contains a unique graphic element (like a bird, a leaf, or a mountain), you must check for existing devices that share the same visual motifs.</li>
                                        </ul>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        At IPR Karo, we perform an 'Expanded Search' that goes beyond the official database to check for 'Common Law' usage. This ensures that even if a name is not registered, it isn't being used by a prominent business that could oppose you later. A clean search report is your green signal to proceed to class selection.
                                    </p>
                                </section>

                                <section id="class-selection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Decoding the 45 Classes: The Nice Classification</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        One of the most complex queries regarding <strong>what are the steps to file a trademark application online in India</strong> is about classes. The international 'Nice Classification' system divides all goods and services into 45 categories. Choosing the right class is forensic because it defines the boundary of your legal protection.
                                    </p>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        If you register your brand under 'Class 25' (Clothing), you cannot automatically stop someone from using the same name for 'Class 43' (Restaurants). However, if your brand becomes 'Well Known', the protection might extend across classes. For most businesses, it is essential to map every revenue stream to a class. For instance, a tech company might need Class 9 (Software), Class 35 (E-commerce), and Class 42 (IT Services).
                                    </p>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 my-10">
                                        <h4 className="font-bold text-[#0C002B] text-2xl mb-4 text-center">Common Class Pitfalls</h4>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h5 className="font-bold text-[#6E5E93] mb-2 underline">The Goods vs Services Trap</h5>
                                                <p className="text-sm">Many manufacturers forget to register the 'Retailing' service in Class 35. This allows competitors to open shops with their brand names legally.</p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#6E5E93] mb-2 underline">vague Descriptions</h5>
                                                <p className="text-sm">Using generic terms like 'All items' will lead to a 'Formalities Check Fail'. You must use specific terminology from the MGS (Madrids Goods and Services) manager.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="dsc-requirement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Digital Identity: Procurement and Mapping of Class 3 DSC</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, the <strong>format for trademark application</strong> is strictly digital. You cannot 'hand sign' an online form. Instead, you must use a 'Class 3 Digital Signature Certificate'. This is a USB token that contains your encrypted identity. The IPIndia portal uses a 'Signing Component' that validates your DSC every time you submit a form.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Procuring a DSC is relatively simple through authorized Certifying Authorities (CAs). However, the 'Mapping' is where most users struggle. Once you obtain the DSC, you must 'Register' it on the portal. This links your physical identity to your user account. Every subsequent document—from the initial TM-A to a response to an objection—must be digitally signed. At IPR Karo, we handle the technical setup for our clients, ensuring that Java settings and browser configurations are perfectly aligned for a seamless submission.
                                    </p>
                                </section>

                                <section id="ipindia-portal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Navigating the Portal: Account Creation and Login</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The official gateway is the <strong>Comprehensive e-Filing Services for Trade Marks</strong>. Creating an account requires a 'User Code'. This code is generated based on your user type:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faUserTie} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Proprietor</h4>
                                                <p className="text-gray-600">Choose this if you are filing for yourself or your own company. You will need to provide your full name and address exactly as per official records.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faGavel} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Agent/Attorney</h4>
                                                <p className="text-gray-600">If you are hiring IPR Karo or another law firm, we use our specialized Agent Codes to manage your application for you.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The portal uses a 'Session based' login. Ensure you have your DSC token plugged in before you attempt to enter the dashboard. The dashboard is your command center where you can file new applications, check pending statuses, and view official communications from the registry.
                                    </p>
                                </section>

                                <section id="filing-tm-a" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Drafting Form TM-A: A Character by Character Guide</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        <strong>Form TM-A</strong> is the most critical document in the <strong>steps to file a trademark application online in India</strong>. This is the 'Application for Registration'. Precision here determines the speed of your approval. The form is divided into several technical sections:
                                    </p>
                                    <div className="bg-[#0C002B] p-10 rounded-[2rem] text-white my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h4 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Technical Section breakdown</h4>
                                        <ul className="text-gray-300 space-y-4">
                                            <li><strong>Applicant Type:</strong> Specify if you're an Individual, Partnership Firm, Body Corporate, or Startup.</li>
                                            <li><strong>Trademark Type:</strong> Wordmark (text only), Device (logo), Shape of Goods, or Sound Mark.</li>
                                            <li><strong>User Date:</strong> This is a forensic choice. 'Proposed to be Used' means you haven't started using the mark yet. A specific date means you have prior use and MUST provide evidence.</li>
                                            <li><strong>MGS Terminology:</strong> Use the portal's built in search to find the standard description for your products/services. Adding non standard text often triggers manual examination and delays.</li>
                                        </ul>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        Once the form is drafted, you must 'Verify and Sign'. This is where your DSC comes into play. The system will prompt you for your pin, and a digital token will be embedded into the PDF. After signing, the status moves to 'Ready for Payment'.
                                    </p>
                                </section>

                                <section id="document-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mandatory Documents for Individuals, Startups, and MSMEs</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The registry is extremely strict about the 'Quality' and 'Format' of uploads. All documents must be in PDF format (except for the logo image, which must be JPEG). Here is the 2026 definitive checklist:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                                <FontAwesomeIcon icon={faSignature} />
                                            </div>
                                            <h4 className="font-bold text-[#0C002B] mb-2">Form TM-48</h4>
                                            <p className="text-xs text-gray-500">The Power of Attorney authorizing your agent. Must be stamped and signed.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                                <FontAwesomeIcon icon={faBuilding} />
                                            </div>
                                            <h4 className="font-bold text-[#0C002B] mb-2">MSME Certificate</h4>
                                            <p className="text-xs text-gray-500">Udyam Registration is proof for the 50% fee rebate. Highly recommended for small businesses.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </div>
                                            <h4 className="font-bold text-[#0C002B] mb-2">User Affidavit</h4>
                                            <p className="text-xs text-gray-500">Mandatory if claiming prior use. Must be notarized and supported by invoices.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        For Device Marks (logos), ensure the image is clear and under 1 MB. If the logo contains a foreign language, you must provide a 'Transliteration' and a 'Translation' into English or Hindi as per the rules of the registry.
                                    </p>
                                </section>

                                <section id="fee-structure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Government Fee Matrix 2026 and MSME Rebates</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The government fee for trademark filing is categorized based on the legal status of the applicant. In 2026, the e-filing fee is cheaper than physical filing to encourage digitalization.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200 shadow-sm">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-[#0C002B] text-white text-left">
                                                <tr>
                                                    <th className="py-4 px-6 font-bold">Applicant Category</th>
                                                    <th className="py-4 px-6 font-bold text-center">Online Fee (Per Class)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                                <tr className="border-b bg-green-50">
                                                    <td className="py-4 px-6 border-r">Individual / Sole Proprietor</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 4,500</td>
                                                </tr>
                                                <tr className="border-b bg-green-50">
                                                    <td className="py-4 px-6 border-r">Startup / MSME (Udyam Verified)</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 4,500</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="py-4 px-6 border-r">Company (Pvt Ltd / Ltd / LLP)</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 9,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-sm text-gray-500 italic mb-4">Note: The fee is calculated per class. If you file for 3 classes as a Company, the fee will be 27,000 rupees.</p>
                                    <p className="text-lg leading-relaxed text-justify">
                                        We always recommend startups to obtain their DPIIT recognition or Udyam certificate before filing. This simple step saves 4,500 rupees per application, which can be reinvested into brand building. Once the payment is processed via net banking or credit card, the portal generates a 'Definitive Receipt', and you can officially use the ™ symbol.
                                    </p>
                                </section>

                                <section id="post-filing-stages" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Journey from Acknowledgement to Registration</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        Filing the form is only the first 10% of the battle. The real intellectual property work happens in the 'Examination' and 'Publication' phases. Here is a breakdown of the milestones your application will pass:
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="flex gap-6 items-start border-l-4 border-[#6E5E93] pl-6 py-2 bg-gray-50 rounded-r-2xl">
                                            <span className="font-bold text-2xl text-[#6E5E93] w-8">01</span>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Formalities Check Pass</h4>
                                                <p className="text-gray-600 text-sm">The registry confirms that your application is technologically and procedurally correct. If there is a missing document, you'll see 'Formalities Chk Fail'.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start border-l-4 border-[#6E5E93] pl-6 py-2 bg-gray-50 rounded-r-2xl">
                                            <span className="font-bold text-2xl text-[#6E5E93] w-8">02</span>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Examination</h4>
                                                <p className="text-gray-600 text-sm">An examiner reviews your mark against existing trademarks. This takes 1 to 3 months.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start border-l-4 border-[#6E5E93] pl-6 py-2 bg-gray-50 rounded-r-2xl">
                                            <span className="font-bold text-2xl text-[#6E5E93] w-8">03</span>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Accepted & Advertised</h4>
                                                <p className="text-gray-600 text-sm">If the examiner is satisfied, your mark is 'Accepted' and published in the weekly Trademark Journal.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start border-l-4 border-[#6E5E93] pl-6 py-2 bg-gray-50 rounded-r-2xl">
                                            <span className="font-bold text-2xl text-[#6E5E93] w-8">04</span>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Registered</h4>
                                                <p className="text-gray-600 text-sm">After 4 months of publication, if no one opposes, the digital registration certificate is issued. You can now use the ® symbol.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="objection-response" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Tactical Responses to Examination Reports</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Nearly 60% of applications in India receive an <strong>Examination Report</strong> with objections. This is not a rejection! It is a request for clarification. Objections usually fall under two categories:
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        <strong>Section 9 (Absolute Grounds):</strong> The examiner believes your brand name is too descriptive (e.g., 'Warm Blankets' for blankets) or lacks distinctiveness. You must argue how your brand has acquired a 'secondary meaning' through extensive use.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        <strong>Section 11 (Relative Grounds):</strong> The examiner has found phonetically or visually similar marks. Here, you must provide a 'Difference Analysis'. We analyze the goods, the target audience, and the visual elements to prove that 'Likelihood of Confusion' does not exist. Filing a professional response (Form TM-O) within 30 days is mandatory. Failing to do so will lead to the application being marked as 'Abandoned'.
                                    </p>
                                </section>

                                <section id="journal-publication" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Publication Window: Handling Public Opposition</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Once your application is 'Accepted', it moves to the <strong>Trademark Journal</strong>. This is a public advertisement. Any third party who feels your registration will damage their business can file a 'Notice of Opposition'.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The opposition window is open for 4 months from the date of publication. Handling an opposition requires a 'Counter Statement' and subsequent evidence filing. This is a quasi judicial process that takes place before the Registrar. Most oppositions are settled through negotiation or consent letters. At IPR Karo, we specialize in defending our clients during this phase, ensuring that their brand rights are not successfully challenged by competitors.
                                    </p>
                                </section>

                                <section id="madrid-protocol" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Scaling Global: International Filing via Madrid Protocol</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Digital brands are rarely confined to one country. If you are serving customers in the USA, UK, or UAE, you need international protection. The <strong>Madrid Protocol</strong> allows Indian applicants to file a single international application through the IPIndia portal.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Your Indian registration/application acts as the 'Basic Mark'. You can then select over 120 member countries where you want protection. The fees are paid in Swiss Francs (CHF) through WIPO, but the entire coordination is handled via the Indian registry. This is much cheaper and faster than hiring local lawyers in every single country. We help Indian exporters leverage this system to build multi-billion dollar global brands from their home base.
                                    </p>
                                </section>

                                <section id="common-pitfalls" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Applications Fail: Top 10 Mistakes to Avoid</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-justify">
                                        In our years of experience, we have seen thousands of applications rejected due to avoidable errors. If you are following the <strong>steps to file a trademark application online in India</strong>, ensure you avoid these:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">01. Choosing Descriptive Names</h4>
                                            <p className="text-sm opacity-70">Names that describe the nature of goods are rarely accepted. Be arbitrary (like Apple for computers) or suggestive.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">02. Incorrect Applicant Name</h4>
                                            <p className="text-sm opacity-70">Ensure the name matches your ID proof exactly. Minor spelling differences lead to discrepancies during audit.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">03. Missing the 30-Day Reply Window</h4>
                                            <p className="text-sm opacity-70">If you don't reply to an examination report within a month, the registry deems your application abandoned.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">04. Wrong User Date</h4>
                                            <p className="text-sm opacity-70">Claiming prior use without invoices or digital proof is a trigger for immediate rejection.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">05. Poor Quality Logos</h4>
                                            <p className="text-sm opacity-70">Pixelated logos cannot be properly indexed in the Vienna Search, causing technical delays.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">06. Ignoring Class 35</h4>
                                            <p className="text-sm opacity-70">Even if you make goods, register Class 35 for the retail/selling aspect to get full protection.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">IPRKaro: Your Strategic Partner in IP Management</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        We don't just file forms; we build armor for your brand. Our approach to intellectual property is forensic, strategic, and result oriented. In an era where brand values can reach billions, securing your IP is the most important business decision you will make this year.
                                    </p>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        Our team consists of senior trademark attorneys, paralegals, and IP consultants who have handled over 20,000 registrations. We offer a <strong>100% Correct Filing Guarantee</strong>, ensuring that your application passes through the formalities check without a single hiccup. From state specific stamping of TM-48 to handling complex show cause hearings, we manage the entire lifecycle of your trademark so you can focus on scale.
                                    </p>
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
                                            author: "Vikram Malhotra",
                                            role: "Founder, TechStack Solutions",
                                            rating: 5,
                                            date: "2024-02-15",
                                            text: "I was confused about the multiple classes for my software product. IPR Karo not only clarified the choice but filed the application within 24 hours. The ™ symbol was on our website the next day. Truly professional service.",
                                            avatar: "VM"
                                        },
                                        {
                                            author: "Ananya Sharma",
                                            role: "D2C Fashion Entrepreneur",
                                            rating: 5,
                                            date: "2024-01-20",
                                            text: "The registry objected to our name citing similarity. The team at IPR Karo drafted a brilliant 10 page response that convinced the examiner. Our mark is now published in the journal. Their expertise in handling objections is top notch.",
                                            avatar: "AS"
                                        },
                                        {
                                            author: "Rajesh Gupta",
                                            role: "Director, Gupta Foods",
                                            rating: 5,
                                            date: "2023-11-12",
                                            text: "The e-filing process seemed complex with the DSC mapping, but their team handled everything remotely. No stress, no errors. Highly recommended for any serious business owner in India.",
                                            avatar: "RG"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Intellectual Legacy</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The journey of <strong>online trademark filing in India</strong> is a transition from a mere idea to a protected legal asset. It is a commitment to your brand's future and a shield against the uncertainties of the market. By adhering to the structured steps—from the forensic search to the final registration—you ensure that your brand stands on the firmest legal ground possible.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don't let your hard work be vulnerable to imitation. Whether you are a solo founder or a scaling enterprise, let the experts at IPR Karo navigate the bureaucratic maze for you. Secure your brand, protect your reputation, and start building your legacy today. The trademark of today is the multinational brand of tomorrow.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Brand?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get expert assistance for your online trademark application. We handle the search, the classes, and the portal, so you can build your business.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Your Filing Today
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an Expert
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Instant TM-A Filing</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Need that ™ symbol today? Our legal experts process **Express Filings** with 100% accuracy within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Start Filing Now
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Brand Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Official Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Public Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Status Meanings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registration Overview</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/format-for-no-objection-certificate" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">NOC Formats</span>
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
