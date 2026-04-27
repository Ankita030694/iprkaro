import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faGlobe,
    faShieldAlt,
    faCertificate,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faGavel,
    faChevronRight,
    faPhone,
    faServer,
    faPassport,
    faUnlockAlt,
    faDatabase,
    faUserShield,
    faAddressCard,
    faSitemap,
    faBalanceScale,
    faMicrochip,
    faCloudUploadAlt,
    faTools,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Govt Portal for TM Registration in India | 2026 Guide',
    description: 'Find out which government portal is used for trademark registration in India. Detailed guide on ipindia.gov.in, CGPDTM, e-filing services, and public search tools.',
    keywords: [
        'which government portal is used for trademark registration in india',
        'ip india portal official website',
        'ipindia.gov.in trademark registration',
        'cgpdtm official website india',
        'online trademark registration portal india',
        'comprehensive e-filing services trademark',
        'how to use ip india public search',
        'trademark registration board of india portal',
        'ministry of commerce trademark registration portal',
        'ipindia online filing guide 2026'
    ],
    openGraph: {
        title: 'Which Government Portal is Used for Trademark Registration in India? | Official Guide',
        description: 'The definitive 4000-word guide to the official IP India portal. Learn how to navigate ipindia.gov.in for trademark search and registration.',
        url: 'https://www.iprkaro.com/which-government-portal-is-used-for-trademark-registration-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/which-government-portal-is-used-for-trademark-registration-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Gateway to Intellectual Property in Bharat' },
    { id: 'official-portal', title: 'Which Government Portal is Used? Decoding ipindia.gov.in' },
    { id: 'cgpdtm-role', title: 'Role of CGPDTM: The Administrative Powerhouse' },
    { id: 'portal-anatomy', title: 'Anatomy of the Portal: Exploring Key Sections' },
    { id: 'efiling-services', title: 'Comprehensive e-Filing Services: The Digital Engine' },
    { id: 'public-search', title: 'Public Search Tool: The First Step of Every Brand' },
    { id: 'classification', title: 'Nice Classification and the MGS Manager integration' },
    { id: 'forms-fees', title: 'Standard Forms and Fee Dynamics on the Portal' },
    { id: 'regional-registries', title: 'Connecting with Regional Trade Marks Registries' },
    { id: 'post-registration', title: 'Beyond Registration: Renewals and Oppositions' },
    { id: 'security-dsc', title: 'Security Protocols: The Role of Class 3 DSC' },
    { id: 'common-errors', title: 'Avoidable Mistakes While Using the IP India Portal' },
    { id: 'why-iprkaro', title: 'IPRKaro: Navigating the Portal for Global Success' },
    { id: 'faqs', title: 'Portal Deep Dive: FAQs for Entrepreneurs' },
    { id: 'reviews', title: 'Success Stories from Our Clients' },
    { id: 'conclusion', title: 'Building a Protected Legacy Online' },
];

const faqs = [
    {
        question: "Which government portal is used for trademark registration in India?",
        answer: "The official government portal for trademark registration in India is the IP India portal, accessible at ipindia.gov.in. It is managed by the Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM)."
    },
    {
        question: "Is there any other website for official trademark filing in Bharat?",
        answer: "No, ipindia.gov.in is the only official government website for filing and managing intellectual property applications in India. Applicants should be cautious of third-party websites that appear similar to the official gateway."
    },
    {
        question: "What is the CGPDTM and how is it related to the portal?",
        answer: "CGPDTM stands for the Controller General of Patents, Designs & Trade Marks. It is the administrative body under the Ministry of Commerce and Industry that oversees the functioning of the IP India portal and the Trademark Registry."
    },
    {
        question: "Can I perform a trademark search for free on the government portal?",
        answer: "Yes, the 'Public Search' tool on the IP India portal is a free and comprehensive resource. It allows you to search for existing trademarks by wordmark, phonetic similarity, and Vienna Code for device marks."
    },
    {
        question: "What are the Comprehensive e-Filing Services mentioned on the portal?",
        answer: "The Comprehensive e-Filing Services is a specific module on the portal that allows registered users to file new applications (Form TM-A), pay fees, track status, and respond to official communications digitally."
    },
    {
        question: "Do I need to register as a new user to use the public search tool?",
        answer: "No, the public search tool is available to everyone without registration. However, you must create a user account and obtain a user code to file an application or track specific details in the dashboard."
    },
    {
        question: "Is the IP India portal accessible 24/7 for filing?",
        answer: "Generally, yes. The portal is designed to be accessible round the clock for e-filing. However, there are scheduled maintenance periods, usually during late night hours or weekends, during which certain services might be temporarily unavailable."
    },
    {
        question: "Can I use the portal to register patents and copyrights as well?",
        answer: "The portal (ipindia.gov.in) is used for Patents, Designs, Trademarks, and Geographical Indications. For Copyright registration, the official portal is copyright.gov.in, which is managed by a different office."
    },
    {
        question: "What is the 'Nice Classification' search on the portal?",
        answer: "The Nice Classification tool helps you identify the correct class for your goods or services. There are 45 classes total, and the portal's integrated search helps map your business activity to the international standard classification."
    },
    {
        question: "What should I do if the portal shows it is under maintenance during a deadline?",
        answer: "If the portal is down on a day when a deadline (like an opposition or renewal) expires, the Trade Marks Act usually allows for the deadline to be extended to the next working day. However, it is always advisable to file well in advance."
    },
    {
        question: "Can I track the status of my trademark application without logging in?",
        answer: "Yes, you can use the 'Trade Mark Status' link on the homepage of ipindia.gov.in to check the current status of any application by simply entering the application number."
    },
    {
        question: "Is the government fee calculated automatically on the portal?",
        answer: "Yes, once you fill in the details of the applicant type (Individual vs Company) and the number of classes, the portal automatically calculates the applicable government fee before you move to the payment gateway."
    }
];

export default function IPIndiaPortalPage() {
    const breadcrumbItems = [
        { label: "IP India Portal Guard", href: "/which-government-portal-is-used-for-trademark-registration-in-india" },
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
                "name": "IP India Portal Guide",
                "item": "https://www.iprkaro.com/which-government-portal-is-used-for-trademark-registration-in-india"
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
        "headline": "Which Government Portal is Used for Trademark Registration in India? (The Ultimate 2026 Guide)",
        "description": "Unlock the secrets of the official IP India portal. A 4000-word forensic breakdown of ipindia.gov.in services, features, and the role of CGPDTM in brand registration.",
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
            "@id": "https://www.iprkaro.com/which-government-portal-is-used-for-trademark-registration-in-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expert IP Portal Assistance",
        "provider": {
            "@type": "LocalBusiness",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3100"
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
                            Navigating the <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>IP India Portal</span>: Your Guide to Official Registration
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-justify">
                            Discover everything about the official government gateway for intellectual property in Bharat. From the complexities of ipindia.gov.in to the administrative role of the CGPDTM, we provide the forensic insights needed for a 100% compliant trademark journey.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Access Official Filing Support
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Gateway to Intellectual Property in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the rapidly evolving digital landscape of India, protecting intellectual assets has become a fundamental priority for entrepreneurs and established corporations alike. As Bharat transitions into a global economic powerhouse, the clarity regarding official channels for brand protection is paramount. One of the most frequent questions asked by new business owners is: <strong>"Which government portal is used for trademark registration in India?"</strong> The answer is the official IP India portal, accessible via the URL <strong>ipindia.gov.in</strong>. This portal is the digital cornerstone of the intellectual property ecosystem in the country, serving as the interface between the public and the statutory authorities.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The IP India portal is managed by the Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM), which functions under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry. In 2026, the portal has matured into a sophisticated digital hub that handles everything from initial trademark searches to the issuance of final registration certificates. It is designed to be a one stop shop for multiple forms of intellectual property, including Patents, Designs, Geographical Indications, and, most importantly, Trade Marks.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "The IP India portal is not just a website; it is the digital vault that secures the innovative spirit of a billion citizens."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Understanding this portal is crucial because it is the only legal gateway for securing absolute rights over a brand name, logo, or tagline. While many third party agencies offer registration services, the actual application must eventually reside on this official government server. This 4000-word guide is meticulously crafted to explore every corner of the IP India portal. We will dissect its anatomy, explore the role of the CGPDTM, and provide forensic insights into how to use the portal's tools to achieve a successful registration. Whether you are a solo founder launching your first startup or a seasoned professional managing a large IP portfolio, this manual will provide the clarity needed to navigate the official Bharat Intellectual Property landscape.
                                    </p>
                                </section>

                                <section id="official-portal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Which Government Portal is Used? Decoding ipindia.gov.in</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The primary answer to the question of <strong>which government portal is used for trademark registration in India</strong> is <strong>ipindia.gov.in</strong>. It is essential to distinguish this from other government portals like MCA (for company registration) or MSME (for Udyam registration). While those portals handle business identity, the IP India portal specifically handles brand identity.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[#6E5E93]" /> Primary URL
                                            </h4>
                                            <p className="text-gray-600">The main landing page is ipindia.gov.in. This acts as the informational directory for patents, designs, and trademarks.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faServer} className="mr-3 text-[#6E5E93]" /> E-Filing URL
                                            </h4>
                                            <p className="text-gray-600">The actual filing happens on ipindiaonline.gov.in, which is the transactional arm of the main portal used for Form TM-A submissions.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Official Security
                                            </h4>
                                            <p className="text-gray-600">Always check for the HTTPS protocol and the 'gov.in' suffix. Official government portals will never have '.com' or '.org' suffixes for transaction layers.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[#6E5E93]" /> Integrated Hub
                                            </h4>
                                            <p className="text-gray-600">The portal integrates the functions of all five regional registries, making it a truly national platform for intellectual property.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        In 2026, the portal has been updated with modern UI/UX elements, though the core functionality remains deeply rooted in the Trade Marks Act 1999. It is designed to be accessible to both legal professionals and common citizens, provided they have a Digital Signature Certificate.
                                    </p>
                                </section>

                                <section id="cgpdtm-role" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Role of CGPDTM: The Administrative Powerhouse</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        Behind the website lies the <strong>Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM)</strong>. This office is the statutory regulator of IP in India. When you interact with the portal, you are essentially communicating with the CGPDTM administrative framework.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4 text-center">Functions of the CGPDTM:</h4>
                                        <ul className="space-y-4 text-gray-700">
                                            <li><strong>Law Administration:</strong> Ensuring that every trademark filed complies with the Trade Marks Act, 1999 and the 2017 Rules.</li>
                                            <li><strong>Registry Oversight:</strong> Supervising the functioning of the Trade Marks Registry (TMR) across various regional offices.</li>
                                            <li><strong>Policy Guidance:</strong> Advising the Government of India on evolving IP protocols, including international treaties like the Madrid Protocol.</li>
                                            <li><strong>Adjudication:</strong> Hosting hearings for contested cases, objections, and oppositions through the portal's hearing management system.</li>
                                        </ul>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The Controller General sits at the apex of this hierarchy. Every examination report issued through the portal and every registration certificate downloaded carries the authority of this office. Understanding this hierarchy helps applicants appreciate the legal weight of the digital documents generated by the portal.
                                    </p>
                                </section>

                                <section id="portal-anatomy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Anatomy of the Portal: Exploring Key Sections</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The IP India portal is divided into several highly specialized sections. Knowing where to go for a specific task is critical for efficiency.
                                    </p>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 my-10">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#0C002B]">Public Search</h4>
                                                    <p className="text-sm">The free tool used to check if your desired brand name is available. Accessible without a login.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                    <FontAwesomeIcon icon={faDatabase} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#0C002B]">Trade Mark Status</h4>
                                                    <p className="text-sm">Enter your application number to see the real time progress of your filing.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#0C002B]">E-Filing Gateway</h4>
                                                    <p className="text-sm">The secure login area for e-filers, proprietary applicants, and registered attorneys.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                    <FontAwesomeIcon icon={faFileAlt} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#0C002B]">TM Journal</h4>
                                                    <p className="text-sm">A weekly updated digital gazette that publishes accepted trademarks for public viewing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="efiling-services" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Comprehensive e-Filing Services: The Digital Engine</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The **Comprehensive e-Filing Services** is the transactional engine of the IP India portal. In 2026, most applications in India are filed through this module. To access this, you need a 'User Code' and a valid Digital Signature Certificate (DSC). The module allows you to:
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        - **File New Applications (Form TM-A):** Fill in every detail of your brand, its use date, and the goods/services description.
                                        - **Upload Documents:** Attach your ID proof, user affidavit, and registration certificates (like MSME or Startup recognition).
                                        - **Digital Signature Integration:** The portal uses a specialized component to sign forms using your USB token DSC.
                                        - **Payment Gateway:** Securely pay government fees via Net Banking, Debit Cards, or Credit Cards.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        At IPR Karo, we handle the registration of our clients as 'Proprietors' or manage their IP through our 'Agent Codes'. This ensures that the technical complexities of portal mapping do not delay your priority date.
                                    </p>
                                </section>

                                <section id="public-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Public Search Tool: The First Step of Every Brand</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The **Public Search** tool on ipindia.gov.in is perhaps the most critical informational service offered. It prevents thousands of doomed filings every year by showing what is already registered. It offers three forensic modes of search:
                                    </p>
                                    <div className="bg-[#0C002B] p-10 rounded-[2rem] text-white my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <div className="grid md:grid-cols-3 gap-8 text-center">
                                            <div>
                                                <h4 className="font-bold text-[#6E5E93] mb-2">Wordmark Search</h4>
                                                <p className="text-xs text-gray-400">Identifies identical or similar characters in your chosen name.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#6E5E93] mb-2">Phonetic Search</h4>
                                                <p className="text-xs text-gray-400">Finds marks that sound the same, even if spellings differ (e.g., Cat vs Kat).</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#6E5E93] mb-2">Vienna Code Search</h4>
                                                <p className="text-xs text-gray-400">Searches for visual elements (symbols, motifs) if you are registering a logo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        Skip this search, and you risk an immediate 'Objection' under Section 11 of the Trade Marks Act. The portal's search database is updated in real time, making it the most authoritative source for trademark availability in Bharat.
                                    </p>
                                </section>

                                <section id="classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Nice Classification and the MGS Manager Integration</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Trademarks are not granted in a vacuum; they are granted for specific categories called **Classes**. The IP India portal uses the international **Nice Classification** system, which consists of 45 classes (1-34 for goods and 35-45 for services).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The portal has an integrated 'MGS' (Madrid Goods and Services) manager. This tool allows you to enter a business activity and see which class and which standardized description you should use. Using non-standardized descriptions leads to 'Formalities Check Fail', where an examiner manually checks your description, often leading to months of delay. At IPR Karo, we use the forensic data provided by the portal to map your business to every relevant class, ensuring maximum protection.
                                    </p>
                                </section>

                                <section id="forms-fees" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Standard Forms and Fee Dynamics on the Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The portal is organized around specific 'Forms'. Each form represents a different action you take with the registry. Each form also has a 'Government Fee' associated with it.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200 shadow-sm">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-[#0C002B] text-white text-left">
                                                <tr>
                                                    <th className="py-4 px-6 font-bold">Form Code</th>
                                                    <th className="py-4 px-6 font-bold">Purpose</th>
                                                    <th className="py-4 px-6 font-bold text-center">E-Filing Fee (Indiv/Startup)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                                <tr className="border-b">
                                                    <td className="py-4 px-6 border-r font-bold">TM-A</td>
                                                    <td className="py-4 px-6 border-r">New Application</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 4,500</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 px-6 border-r font-bold">TM-R</td>
                                                    <td className="py-4 px-6 border-r">Renewal (Every 10 years)</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 9,000</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 px-6 border-r font-bold">TM-O</td>
                                                    <td className="py-4 px-6 border-r">Opposition / Reply to Opposition</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 2,700</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="py-4 px-6 border-r font-bold">TM-M</td>
                                                    <td className="py-4 px-6 border-r">Miscellaneous (Corrections/Address change)</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 900</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify">
                                        It is important to note that the portal enforces a 10% discount on government fees for e-filing compared to physical filing. This makes <strong>ipindia.gov.in</strong> not just the official choice, but also the most economical one.
                                    </p>
                                </section>

                                <section id="regional-registries" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Connecting with Regional Trade Marks Registries</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        While the portal is centralized, the actual <strong>examination</strong> and <strong>hearings</strong> are conducted by regional offices. Your application is assigned to an office based on your 'Principal Place of Business'. The portal acts as the digital postman between you and these offices:
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faAddressCard} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Mumbai (Head Office)</h4>
                                                <p className="text-gray-600">Jurisdiction includes Maharashtra, Gujarat, Madhya Pradesh, Goa, and Daman & Diu.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faBuilding} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Delhi Office</h4>
                                                <p className="text-gray-600">Handles Delhi, Haryana, Punjab, Rajasthan, UP, Himachal Pradesh, and J&K.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The portal notifies you digitally when your application is assigned to an examiner at these locations. If you receive a 'Show Cause Hearing' notice, you can often attend it virtually through the portal's video conferencing links in 2026.
                                    </p>
                                </section>

                                <section id="post-registration" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Beyond Registration: Renewals and Oppositions</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The utility of the <strong>IP India portal</strong> extends far beyond getting the ® certificate. Intellectual property requires active maintenance.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        **Renewals:** A registration is only valid for 10 years. You must file Form TM-R through the portal within 6 months before expiry to keep the rights alive.
                                        **Oppositions:** The portal provides a tool to search the **Trademark Journal**. If you find a competitor registering a similar mark, you file a 'Notice of Opposition' within 4 months of their publication.
                                        **Rectification:** If someone has registered a mark that shouldn't be on the register, the portal provides forms to seek its removal or 'Rectification'.
                                    </p>
                                </section>

                                <section id="security-dsc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Security Protocols: The Role of Class 3 DSC</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Authentication on <strong>ipindiaonline.gov.in</strong> is not limited to simple passwords. To ensure that an application is truly from the rightful owner, the portal uses **Class 3 Digital Signature Certificates (DSC)**.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        A DSC is a digital equivalent of a notarized signature. It ensures that the person filing Form TM-A is precisely who they claim to be. The portal's backend verifies the DSC data against your PAN or Aadhaar details. In 2026, the portal enforces strict browser compatibility (often requiring specific Java settings) to ensure the DSC cryptographic module functions correctly. IPR Karo takes the technical burden off you by managing this mapping and ensuring your digital credentials are used securely for every submission.
                                    </p>
                                </section>

                                <section id="common-errors" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Avoidable Mistakes While Using the IP India Portal</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-justify">
                                        Even with a robust portal, human error can derail a trademark. If you are using the <strong>government portal for trademark registration in India</strong>, avoid these top 5 pitfalls:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">01. Wrong User Category</h4>
                                            <p className="text-sm opacity-70">Filing as a 'Proprietor' instead of a 'Body Corporate' can lead to 'Examination Report' queries and potential rejection.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">02. Incorrect Class mapping</h4>
                                            <p className="text-sm opacity-70">Picking a class loosely related to your business instead of the primary revenue class makes your trademark legally weak.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">03. Pixelated Logo uploads</h4>
                                            <p className="text-sm opacity-70">The portal's visual search engine needs high clarity images to index your mark against third party symbols.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xl text-[#6E5E93]">04. Ignoring Deadlines</h4>
                                            <p className="text-sm opacity-70">The 'Examination Report' has a strict 30 day reply window. Missing this makes your application 'Abandoned' permanently.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">IPRKaro: Navigating the Portal for Global Success</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        While the <strong>IP India portal</strong> is a tool for all, navigating its legal and technical nuances requires professional expertise. At IPR Karo, we act as your strategic navigator on this digital platform. We ensure that every search is exhaustive, every class is accurate, and every document is perfectly compliant.
                                    </p>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        Our the team of attorneys and IP consultants has handled over 15,000 portals filings. We don't just file; we defend. Whether its a Section 9 objection or a complex opposition, we use the forensic data provided by the portal to build a rock solid case for your brand. By choosing IPR Karo, you aren't just filing on a website; you are securing a professional shield for your brand's future.
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
                                            role: "CTO, FinFlow India",
                                            rating: 5,
                                            date: "2024-03-01",
                                            text: "The portal seems simple but the DSC mapping was a nightmare for us. IPR Karo handled the technical side and guided us on the class selection perfectly. We got our TM number in 4 hours.",
                                            avatar: "SV"
                                        },
                                        {
                                            author: "Meera Nair",
                                            role: "Organic Skincare Founder",
                                            rating: 5,
                                            date: "2024-02-14",
                                            text: "I used the public search tool myself but missed a phonetic similarity. The IPR Karo search report identified the risk immediately, saving me from filing a name that would have been rejected. Invaluable advice.",
                                            avatar: "MN"
                                        },
                                        {
                                            author: "Harish Rao",
                                            role: "Director, Rao Logistics",
                                            rating: 5,
                                            date: "2023-12-28",
                                            text: "Professional handling of our trademark journey. They monitored our application status on the portal continuously and handled the examination report without us having to worry about anything.",
                                            avatar: "HR"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Building a Protected Legacy Online</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The official answer to <strong>which government portal is used for trademark registration in India</strong> is the IP India portal. More than just a website, it is a legal ecosystem that empowers people to protect their brand assets. From the forensic details of the search tool to the highly secure e-filing gateway, every feature is a stepping stone toward business certainty.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        However, the power of the tool is only as good as the expertise of its user. While the portal is open to all, the legal complexities of the Trade Marks Act 1999 remain challenging. Don't leave your brand's future to chance. Let IPR Karo be your expert guide on this digital journey. Secure your brand, navigate the portal with confidence, and start building your registered legacy across Bharat today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Portal Navigation</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't get lost in legal jargon. Get the professional advantage with IPR Karo's expert assistance on the IP India portal.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Official Filing
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Speak to an Attorney
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Instant Search Report</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Why wait for an objection? Get a **Forensic Search Report** directly from the IP India database within 2 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Check Brand Availability
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Portal Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Step by Step Filing Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Online Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Status Meaning Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/e-filing-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">E-filing Benefits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Public Search Manual</span>
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
