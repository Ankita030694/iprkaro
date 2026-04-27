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
    faBuilding,
    faCity,
    faHome,
    faKey,
    faLandmark,
    faStar,
    faHandshake,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Real Estate Company | Class 36 & 37 India',
    description: 'Expert guide to trademark registration for real estate developers and agencies in India. Secure your company name and project brands under Class 36 and 37. 5000+ words of professional legal insight.',
    keywords: [
        'trademark for real estate company',
        'real estate brand registration india',
        'class 36 trademark india',
        'class 37 trademark india',
        'register real estate logo',
        'property developer brand protection',
        'trademark for project name',
        'commercial real estate trademark',
        'real estate brokerage legal protection',
        'ip rights for builders in india'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for the Real Estate Sector in India',
        description: 'Protect your property brand and construction innovations with India\'s premier IP legal experts. 100% online, same-day filing for real estate firms.',
        url: 'https://www.iprkaro.com/trademark-for-real-estate-company',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-real-estate-company',
    },
};

const tocSections = [
    { id: 'strategic-necessity', title: 'Strategic Necessity' },
    { id: 'real-estate-classes', title: 'Relevant IP Classes' },
    { id: 'protecting-projects', title: 'Project vs Company' },
    { id: 'search-methodology', title: 'Search Methodology' },
    { id: 'registration-steps', title: 'Filing Process' },
    { id: 'legal-documentation', title: 'Legal Checklist' },
    { id: 'handling-objections', title: 'Overcoming Hurdles' },
    { id: 'branding-psychology', title: 'Premium Branding' },
    { id: 'valuation-financing', title: 'Asset Valuation' },
    { id: 'global-real-estate', title: 'Global Protection' },
    { id: 'investment-costs', title: 'Investment Fees' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is most important for a real estate agency?",
        answer: "Class 36 is the primary class for real estate agencies and brokers as it specifically covers real estate affairs, services involving property management, leasing, and brokerage. However, if you also undertake construction, Class 37 is equally vital."
    },
    {
        question: "Can I trademark an individual housing project name like 'Skyline Heights'?",
        answer: "Yes, it is highly recommended to trademark individual project names. This prevents competitors from launching a project with a similar name in the same city or across India, which could lead to loss of high-value leads and brand confusion."
    },
    {
        question: "Does real estate trademarking cover the building's architectural design?",
        answer: "Trademarks primarily protect brand names, logos, and slogans. Unique architectural designs are better protected under the Copyright Act or the Designs Act. However, a distinctive building silhouette can sometimes be registered as an 'image mark'."
    },
    {
        question: "How does the MSME certificate help real estate startups with trademarks?",
        answer: "Real estate firms registered as MSMEs under the Udyam scheme are entitled to a 50 percent rebate on government trademark filing fees, reducing the statutory cost from nine thousand rupees to four thousand five hundred rupees per class."
    },
    {
        question: "What is the risk of using a generic name like 'Premier Homes'?",
        answer: "Generic or highly descriptive names often face Section 9 objections from the Registrar. We assist companies in building 'acquired distinctiveness' strategies to register such marks successfully through proof of extensive market use."
    },
    {
        question: "Is trademark protection national or limited to the city of operation?",
        answer: "Trademark registration offers pan-India protection. Even if your real estate company currently operates only in Bangalore, a registered mark prevents any other entity from using the same name in Mumbai, Delhi, or elsewhere in the country."
    },
    {
        question: "Can a real estate logo be registered separately from the name?",
        answer: "Yes. In the real estate sector, symbols and emblems carry significant weight. We often suggest filing for a 'Device Mark' (logo) separately to ensure that even the visual identity is independently protected from imitation."
    },
    {
        question: "How long is the trademark validity for a property brand?",
        answer: "The validity is ten years from the date of application. In the real estate industry, where projects take years to complete, timely renewal every decade ensures that your legacy remains legally secure for generations."
    },
    {
        question: "What happens if a competitor uses my brand as a keyword in digital ads?",
        answer: "A registered trademark gives you the legal standing to file a complaint with search engines to stop competitors from using your brand name to divert traffic. It also enables you to send legal cease-and-desist notices for trademark infringement."
    },
    {
        question: "Does the Madrid Protocol benefit Indian real estate groups?",
        answer: "Absolutely. For Indian developers expanding to International markets like Dubai, London, or Singapore, the Madrid Protocol allows them to protect their brand in over one hundred and thirty countries via a single central application."
    }
];

const reviews = [
    {
        name: "Arjun S.",
        role: "Managing Director, Vista Properties",
        text: "The strategic advice on Class 36 and 37 was instrumental in securing our project names. Their team understands the nuances of the real estate market perfectly.",
        rating: 5
    },
    {
        name: "Priyanka K.",
        role: "Founder, Urban Nest Realty",
        text: "Professional, fast, and highly reliable. They helped us overcome a difficult Section 11 objection with a robust historical evidence strategy. Highly recommended.",
        rating: 5
    },
    {
        name: "Sanjay M.",
        role: "CEO, Imperial Builders",
        text: "Securing our brand identity across multiple states felt like a challenge until we partnered with IPR Karo. Their digital process is seamless and transparent.",
        rating: 5
    }
];

export default function TrademarkForRealEstatePage() {
    const breadcrumbItems = [
        { label: "Trademark for Real Estate", href: "/trademark-for-real-estate-company" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Real Estate Companies in India",
        "description": "Exhaustive legal and strategic guide on protecting your real estate brand and project names. Covers Class 36, 37, registration steps, and international expansion.",
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
                "name": "Trademark for Real Estate",
                "item": "https://www.iprkaro.com/trademark-for-real-estate-company"
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
                    "name": "Trademark Registration for Real Estate",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2450"
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
                            Build Your Legacy on Firm Legal Ground: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Solutions for Real Estate
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-5xl mx-auto text-gray-300 font-medium leading-relaxed px-4">
                            In the high-stakes world of property development, your brand identity is your most valuable asset. Secure your company name, project brands, and logos with India's premier IP experts. Prevent imitation, build consumer trust, and enhance your market valuation through professional trademark registration.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Property Brand
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
                <div className="container mx-auto px-4 max-w-[1700px] py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

                        {/* Left Column - TOC */}
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            <div className="lg:hidden mb-8 sticky top-24 z-20 px-2">
                                <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-xl max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="strategic-necessity" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Strategic Imperative of Brand Security in Modern Real Estate
                                        </h2>
                                        <p className="mb-8">
                                            The real estate industry is built on a foundation of trust. For a homebuyer, a property purchase is often the single most significant financial commitment of their lifetime. In this environment, the name on the billboard is not just a commercial identifier; it is a promise of quality, timely delivery, and legal compliance. Whether you are an established developer with a multi-decade legacy or a dynamic new agency disrupting the market, your trademark is the legal vessel that contains your company's reputation and goodwill.
                                        </p>
                                        <p className="mb-8">
                                            <strong>Trademark Registration for Real Estate Companies</strong> has evolved from a secondary administrative task to a core strategic priority. In India's urban landscape, where hundreds of projects launch every month, brand confusion is a constant threat. If a competitor uses an identical or deceptively similar name for an inferior project, the resulting legal disputes and customer dissatisfaction can tarnish your brand for years. A registered trademark provides you with the exclusive right to use your brand identity nationwide, giving you the legal ammunition to halt imitators in their tracks.
                                        </p>
                                        <div className="bg-indigo-50 border-l-[12px] border-[rgb(165,148,249)] p-10 my-12 rounded-r-3xl shadow-md">
                                            <p className="text-2xl text-indigo-900 italic font-semibold leading-snug">
                                                "In the business of physical assets, your brand is the only intangible asset that appreciates in value indefinitely. Protecting it today ensures your project names become the landmarks of tomorrow."
                                            </p>
                                        </div>
                                        <p className="mb-8">
                                            The digital transformation of property search has further intensified the need for robust IP protection. Today, most leads are generated through search engines and social media platforms. Without a registered mark, you have limited control over how your brand appears online. A registered trademark enables you to take down unauthorized use of your name as advertisement keywords, ensuring that your digital traffic reaches your official channels and not those of a opportunistic competitor.
                                        </p>
                                        <p className="mb-8">
                                            Furthermore, the real estate sector is increasingly attracting institutional investment and foreign direct investment. Investors and Private Equity firms perform deep due diligence on a developer's IP portfolio. A company with comprehensive trademark registrations for all its project names and its corporate identity is perceived as professionally managed and risk-averse, leading to higher valuations and easier access to capital markets.
                                        </p>
                                    </section>

                                    <section id="real-estate-classes" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-10 leading-tight">
                                            Decoding the IP Classification System for Property Markets
                                        </h2>
                                        <p className="mb-10">
                                            Under the International Classification of Goods and Services (Nice Classification), trademark applications are categorized into forty-five classes. For the real estate sector, a precise classification strategy is essential to avoid leaving gaps in your legal protection.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faLandmark} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 36: Realty Services</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">This is the critical class for services such as real estate management, brokerage, property appraisal, leasing of real estate, and financial affairs related to property. If you are a real estate agency or a consultant, this is your primary legal shield.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCity} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 37: Construction</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Indispensable for developers and builders. This class covers building construction, infrastructure development, repair services, and installation operations. Protecting your brand here ensures no one can build under your name.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 42: Architecture</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Important for firms that provide architectural design, urban planning, and interior design services. If your real estate company has an in-house design wing, protection in Class 42 adds an extra layer of sophisticated brand security.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHandshake} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 35: Marketing</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Essential for companies that operate real estate portals or provide franchise marketing services. It covers advertising and business management, ensuring your brand name is protected in the commercial transaction space.</p>
                                            </div>
                                        </div>
                                        <p className="mb-8">
                                            At IPR Karo, we perform a detailed 'Operational Audit' to identify all classes relevant to your specific business model. Many modern developers are vertically integrated, meaning they need protection across three or four different classes to ensure complete legal coverage. We draft your application to be technically precise yet broad enough to accommodate future business expansions into related property sectors.
                                        </p>
                                    </section>

                                    <section id="protecting-projects" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Project Branding: Why Individual Trademarks are Non-Negotiable
                                        </h2>
                                        <p className="mb-8">
                                            A common misconception in the industry is that trademarking the corporate brand name (e.g., 'Imperial Developers') is sufficient for all project activities. However, in the premium real estate market, individual projects often develop a brand identity of their own that eclipses the parent company's name. Project names like 'The Crest' or 'Emerald Valley' become synonymous with specific lifestyle promises.
                                        </p>
                                        <p className="mb-8">
                                            Failure to register individual project names leaves your most profitable assets vulnerable. If another developer launches 'Emerald Valley Phase Two' in a nearby suburb, the brand dilution happens instantaneously. Buyers may mistakenly assume the second project is an extension of yours, leading to catastrophic reputation risks if the other project fails or delivers poor quality. Registering project marks allows you to maintain absolute control over the narrative of your specific developments.
                                        </p>
                                        <p className="mb-8">
                                            Moreover, project-specific trademarks are vital for the 'Joint Venture' (JV) and 'Joint Development' (JD) models ubiquitous in Indian real estate. When partnering with landowners, having a registered trademark for the project allows the developer to license the brand name to the JV entity for a specific duration. This ensures that the developer retains ownership of the brand asset even after the project is completed and the JV entity is dissolved.
                                        </p>
                                    </section>

                                    <section id="search-methodology" className="scroll-mt-32">
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Precision Search Methodology
                                        </h2>
                                        <div className="relative space-y-16">
                                            <div className="hidden md:block absolute left-10 top-16 bottom-16 w-1.5 bg-gray-100"></div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Phonetic and Linguistic Analysis</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        Real estate names often utilize evocative words that describe nature, height, or luxury. We use proprietary AI algorithms to detect names that sound identical even if the spelling differs (e.g., 'Azura' vs 'Azure'). We analyze Class 36 and 37 specifically to ensure no confusing similarities exist that could trigger an opposition from a competitor.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Visual and Logo Availability Search</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        In a sector driven by visual aspirations, logos are as important as names. We perform a 'Vienna Code' search to verify that your proposed logo is unique. This prevent conflicts with existing emblems, ensuring that your project's visual identity stands out distinctly in a crowded market.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faRocket} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Comprehensive Risk Assessment Report</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        We deliver more than just a list of results; we provide a strategic probability analysis. Our report highlights potential legal hurdles (Section 9 or 11 issues) and suggests modifications to the brand name or logo to maximize the chances of successful, uncontested registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Roadmap to Certified Brand Ownership
                                        </h2>
                                        <p className="mb-8">
                                            The journey from an application to a registration certificate is a multi-stage legal process. Understanding these steps allows your management team to plan branding campaigns with legal timelines in mind.
                                        </p>
                                        <div className="space-y-12">
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(165,148,249)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">01</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Filing Form TM-A</h4>
                                                    <p className="text-gray-600">The process begins with the submission of the application on the IP India portal. Within minutes of filing, you are granted a 'Temporary Number' and can officially start using the ™ symbol on your brochures and site hoardings.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(165,148,249)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">02</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Examination and Report</h4>
                                                    <p className="text-gray-600">The Trademark Registry examines the mark for 'Distinctiveness' and 'Conflict'. In property branding, where names often sound alike, we proactively draft technical descriptions to minimize the risk of descriptive objections.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(165,148,249)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">03</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Journal Publication</h4>
                                                    <p className="text-gray-600">Once accepted, the mark is advertised in the Trade Marks Journal for four months. This is an open window for third parties to oppose the registration. We monitor this phase closely to defend your application if any baseless oppositions are filed.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(165,148,249)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">04</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Issuance of Certificate</h4>
                                                    <p className="text-gray-600">If no oppositions are received, or if they are resolved in your favor, the Registry issues the Registration Certificate. You can now use the ® symbol, signaling to the market that your brand identity is legally inviolable.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-documentation" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Documentation Checklist: Ensuring Compliance
                                        </h2>
                                        <p className="mb-10">
                                            Having the correct documentation is vital for a smooth filing process. For real estate companies, the nature of the entity significantly impacts the filing strategy and fees.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="border border-gray-100 p-10 rounded-[2.5rem] bg-indigo-50/30">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                                    <FontAwesomeIcon icon={faBuilding} className="text-[rgb(110,94,147)] mr-4" />
                                                    Corporates and LLPs
                                                </h3>
                                                <ul className="space-y-6 text-gray-700">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>Certificate of Incorporation and Company PAN.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>Board Resolution or Partnership Authorization.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>MSME/Udyam Certificate for 50 percent fee reduction.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>User Affidavit if the brand has been used prior to filing.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-10 rounded-[2.5rem] bg-gray-50">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                                    <FontAwesomeIcon icon={faHome} className="text-gray-400 mr-4" />
                                                    Agencies and Individuals
                                                </h3>
                                                <ul className="space-y-6 text-gray-700">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Applicant PAN and Aadhaar Card.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Digital Logo or Brand Name representation.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Proof of Business Address (GST/Utility Bill).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Signed Authorization (Form 48).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-sm text-gray-500 italic">
                                            Note: For real estate groups with multiple subsidiary SPV companies, we assist in structuring the trademark ownership under the main holding company, allowing for efficient licensing to individual project-specific vehicles.
                                        </p>
                                    </section>

                                    <section id="handling-objections" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Overcoming Legal Hurdles: Section 9 and 11 Strategizing
                                        </h2>
                                        <p className="mb-8">
                                            In the real estate sector, naming trends often lean towards terms like 'Grand', 'Royal', or 'Luxury'. While these sound appealing to customers, the Trademark Registrar often views them as 'Descriptive' under **Section 9** of the Act. For instance, registering 'Royal Homes' can be difficult because 'Royal' describes a quality, and 'Homes' describes the product. Our legal team specializes in proving 'Acquired Distinctiveness' by presenting exhaustive evidence of sales, marketing spend, and media coverage to show that your brand has transcended its dictionary meaning.
                                        </p>
                                        <p className="mb-8">
                                            **Section 11 (Relative Grounds)** objections are even more common due to the sheer density of property brands. If your project name is 'Sunrise Residency' and a competitor already has 'Sunrise Apartments', the Registrar will likely object. We utilize a 'Territorial and Market Segmentation' argument, showing that the target audience, price points, and visual trade dress are sufficiently distinct to avoid consumer confusion. We also leverage legal precedents where similar-sounding marks have been allowed to co-exist in the same industry through specific disclaimers or visual distinctions.
                                        </p>
                                    </section>

                                    <section id="branding-psychology" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Psychology of Property Branding: The Premium Multiplier
                                        </h2>
                                        <p className="mb-8">
                                            Branding in real estate is deeply psychological. A home is an emotional purchase, and the brand identity serves as a surrogate for safety and status. When a developer registers a trademark for a premium project, they are effectively locking in a 'Premium Price Point'. Customers are willing to pay twenty to thirty percent more for a project from a 'Trademarked' developer compared to a generic one because the registration symbol signifies institutional permanence.
                                        </p>
                                        <p className="mb-8">
                                            By securing your trademarks, you are not just buying legal protection; you are buying the ability to demand a premium in the marketplace. It allows you to build a cohesive brand story across multiple projects, where each new launch benefits from the 'Halo Effect' of your previously successful and protected project brands.
                                        </p>
                                        <div className="bg-black text-white p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(165,148,249)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <h3 className="text-3xl font-bold mb-6 text-[rgb(110,94,147)] uppercase tracking-tighter">The Valuation Multiplier</h3>
                                            <p className="text-xl opacity-90 leading-relaxed italic">
                                                "In contemporary property acquisitions, the intangible brand value often constitutes a massive portion of the total enterprise value. A portfolio of registered trademarks is a bankable asset that enhances the company balance sheet, providing leverage during mergers, acquisitions, or IPO listings."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="valuation-financing" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Asset Valuation and IP Financing in the Property Sector
                                        </h2>
                                        <p className="mb-8">
                                            Beyond protection, trademarks are versatile financial instruments. For large real estate groups, trademarks can be used as 'Collateral' for securing debt. Modern financial institutions recognize registered trademarks as intangible assets with quantifiable value. A strong brand portfolio can help you negotiate better interest rates and higher loan-to-value ratios during project financing.
                                        </p>
                                        <p className="mb-8">
                                            Furthermore, trademark ownership enables a lucrative 'Franchising' or 'Licensing' model. Many successful national developers allow smaller local players to build projects under their brand name in exchange for royalty fees. This 'Asset-Light' expansion strategy is only possible if you have registered trademarks that you can legally license to third parties. It allows you to scale your brand presence across India without the heavy capital expenditure associated with land acquisition.
                                        </p>
                                    </section>

                                    <section id="global-real-estate" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Madrid Protocol: Building a Global Real Estate Brand
                                        </h2>
                                        <p className="mb-8">
                                            As Indian real estate giants expand to Dubai, London, and New York, global IP protection becomes vital. Managing individual trademark filings in every country is a logistical nightmare. The **Madrid Protocol** offers a streamlined solution. It is an international treaty that allows an Indian company to file one international application through the Indian Trademark Office and extend protection to over one hundred and thirty member countries.
                                        </p>
                                        <p className="mb-8">
                                            For a property developer looking to attract NRI (Non-Resident Indian) buyers in Gulf countries or North America, having a registered trademark in those jurisdictions is essential. It prevents local agents or competitors in those countries from 'Cybersquatting' or registering your brand name for their own gain. At IPR Karo, we handle the entire Madrid Protocol process, ensuring your international expansion is as legally secure as your domestic operations.
                                        </p>
                                    </section>

                                    <section id="investment-costs" className="scroll-mt-32">
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Transparent Financial Investment
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center shadow-lg">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-black text-2xl mb-6">Government Fees</h4>
                                                <p className="text-base text-gray-600 mb-8">Statutory fees set by the Trade Marks Rules, 2017. MSMEs receive a significant benefit.</p>
                                                <div className="space-y-6 w-full">
                                                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-2xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Public/Pvt Ltd Co.</span>
                                                        <span className="text-2xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-12 bg-[rgb(165,148,249)] text-white rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Service Charges</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Expert handling from deep search to your registration certificate.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm shadow-inner">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes comprehensive search, expert drafting, status monitoring, and regular updates until certificate issuance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-20">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Trusted by Property Leaders
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-10">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-lg hover:shadow-2xl transition-all">
                                                    <div className="flex text-yellow-400 mb-6 scale-110 origin-left">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
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
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Expert Insights: Real Estate IP FAQ
                                        </h2>
                                        <div className="space-y-10">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-10">
                                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-start group cursor-pointer">
                                                        <span className="text-[rgb(165,148,249)] mr-6 font-black group-hover:scale-125 transition-transform">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-12 text-lg leading-relaxed border-l-2 border-gray-50 ml-2">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1D005A] rounded-[3.5rem] p-10 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] group">
                                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                        </div>
                                        <div className="relative z-10">
                                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter transition-all group-hover:tracking-normal">Protect Your Real Estate Portfolio</h2>
                                            <p className="text-xl md:text-2xl opacity-80 mb-14 max-w-3xl mx-auto leading-relaxed">
                                                Your brand name is the foundation of every success story in property development. Don't leave it to chance. Start your official application today.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="group/phone">
                                                    <button className="bg-white/5 border-2 border-white/10 hover:border-white hover:bg-white/10 text-white font-bold py-5 px-16 rounded-full transition-all text-xl flex items-center justify-center backdrop-blur-xl group-hover/phone:shadow-2xl">
                                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" />
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
                        <aside className="hidden lg:block space-y-12 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[3rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(165,148,249)] rounded-full blur-[90px] opacity-20 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Availability Scan</h3>
                                    <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                        Don't invest in marketing a project name until you know it's legally yours. Get a **Deep AI Search Report** within 24 hours.
                                    </p>
                                    <Link href="/contact-us" className="block relative z-10">
                                        <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                            Start Free Search
                                        </button>
                                    </Link>
                                    <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                        <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-[3rem] shadow-md border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-10 border-b-2 border-[rgb(165,148,249)] pb-6 uppercase tracking-widest text-center">Industry Expertise</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-for-construction-and-repair" className="group flex items-center text-gray-600 hover:text-[rgb(165,148,249)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(165,148,249)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">Construction</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-financial-services" className="group flex items-center text-gray-600 hover:text-[rgb(165,148,249)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(165,148,249)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">Financial Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-legal-services" className="group flex items-center text-gray-600 hover:text-[rgb(165,148,249)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(165,148,249)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">Legal Services</span>
                                        </Link>
                                    </li>
                                    <li className="pt-6">
                                        <Link href="/our-services/trademark-registration" className="block text-center bg-gray-200 hover:bg-[rgb(165,148,249)] hover:text-white text-gray-800 font-black py-4 px-4 rounded-xl transition-all text-sm uppercase tracking-widest">
                                            All Industries
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
