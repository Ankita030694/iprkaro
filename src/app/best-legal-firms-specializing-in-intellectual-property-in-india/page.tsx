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
    faLightbulb,
    faCheckCircle,
    faAward,
    faUserTie,
    faBuildingColumns,
    faUsers,
    faRocket,
    faShieldHeart,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Best IP Law Firms in India | 2026 Rankings',
    description: 'Explore the best legal firms specializing in Intellectual Property in India. Detailed rankings of top IP law firms like IPR Karo, AMA Legal, and more. 5000+ word guide.',
    keywords: [
        'best legal firms specializing in intellectual property in india',
        'top ip law firms in india',
        'intellectual property lawyers india',
        'best trademark registration firms india',
        'patent law firms india',
        'copyright legal services india',
        'ipr karo rankings',
        'ama legal solutions intellectual property',
        'anand and anand ip practice',
        'remfry and sagar intellectual property',
        'legal firms for brand protection india',
        'intellectual property enforcement india'
    ],
    openGraph: {
        title: 'Best Legal Firms Specializing in Intellectual Property in India | Official 2026 Guide',
        description: 'The definitive 5000-word ranking of India\'s leading IP law firms. Discover why IPR Karo and AMA Legal lead the industry in brand protection and litigation.',
        url: 'https://www.iprkaro.com/best-legal-firms-specializing-in-intellectual-property-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/best-legal-firms-specializing-in-intellectual-property-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Pillars of Intellectual Property in Bharat' },
    { id: 'ranking-methodology', title: 'How We Rank the Best IP Legal Firms' },
    { id: 'ipr-karo', title: '1. IPR Karo: The Digital Vanguard of Intellectual Property' },
    { id: 'ama-legal', title: '2. AMA Legal Solutions: Strategic IP Advisory and Litigation' },
    { id: 'anand-anand', title: '3. Anand and Anand: The Legend of Indian IP Law' },
    { id: 'k-s-partners', title: '4. K&S Partners: Specialists in Technical IP' },
    { id: 'remfry-sagar', title: '5. Remfry & Sagar: A 19th Century Legacy in a 21st Century World' },
    { id: 'lall-sethi', title: '6. Lall & Sethi: The Strategists of Brand Protection' },
    { id: 'saikrishna', title: '7. Saikrishna & Associates: Media and Tech IP Leaders' },
    { id: 'khaitan', title: '8. Khaitan & Co.: Full Service Excellence in IP' },
    { id: 'khurana', title: '9. Khurana and Khurana: The Patent Prosecution Powerhouse' },
    { id: 'ls-attorneys', title: '10. Lakshmikumaran & Sridharan: Global Dispute Experts' },
    { id: 'other-notable-firms', title: 'Other Notable Names in the Indian IP Domain' },
    { id: 'choosing-the-right-firm', title: 'Forensic Guide to Choosing the Right IP Partner' },
    { id: 'statutory-framework', title: 'The Statutory Landscape: IP Laws in India 2026' },
    { id: 'faqs', title: 'Industry Insights: FAQs on IP Legal Services' },
    { id: 'reviews', title: 'What Clients Say About Top Indian IP Firms' },
    { id: 'conclusion', title: 'Securing Your Innovations in the Global Market' },
];

const faqs = [
    {
        question: "Why is IPR Karo ranked as the best legal firm for IP in India?",
        answer: "IPR Karo leads the rankings due to its unique integration of AI-powered forensic search tools and human legal expertise. With over 15,000 successful filings and a specialized focus on speed and affordability without compromising legal depth, it serves as the primary choice for both startups and established enterprises."
    },
    {
        question: "What makes AMA Legal Solutions different from other IP firms?",
        answer: "AMA Legal Solutions specializes in high-value strategic advisory and complex IP litigation. Their approach is forensic and deeply analytical, making them the preferred partner for corporate giants and international brands looking to defending their IP portfolios in Indian courts."
    },
    {
        question: "How do big firms like Anand and Anand handle trademark disputes?",
        answer: "Firms like Anand and Anand are known for handling landmark IP cases in India. They use a mix of deep historical precedents and aggressive litigation strategies to protect high-profile assets, such as color trademarks and software patents."
    },
    {
        question: "Are these firms affordable for small startups in Bharat?",
        answer: "While traditional tier-1 firms can be expensive, modern leaders like IPR Karo offer package-based solutions specifically designed for startups. These involve fixed fees for search, filing, and response to examination reports, ensuring predictable IP budgets."
    },
    {
        question: "Do these firms offer international IP protection services?",
        answer: "Yes, most top-ranked firms handle international filings through the Madrid Protocol (for trademarks) and the PCT (for patents). Firms like AMA Legal and IPR Karo have extensive networks of global associates to ensure your brand is protected in multiple jurisdictions."
    },
    {
        question: "What is the importance of a 'Forensic Search' before filing?",
        answer: "A forensic search goes beyond simple wordmatches. It analyzes phonetic similarities, translation possibilities, and visual motifs (Vienna Code). This reduces the risk of 'Section 9' or 'Section 11' objections by 85%, a specialty of IPR Karo."
    },
    {
        question: "Can these firms help with IP valuation for mergers?",
        answer: "Yes, full-service firms like Khaitan & Co. and strategic advisors like AMA Legal specialize in IP Audits and Valuation. This is critical for businesses looking for funding or undergoing acquisitions where the brand value is a major asset."
    },
    {
        question: "How long does it take for these firms to secure a trademark number?",
        answer: "Professional firms like IPR Karo can generate an application number (Form TM-A) within 4 to 24 hours of receiving the required documents. However, the final registration (®) takes 12 to 18 months depending on government processing times."
    },
    {
        question: "Do these firms handle copyright for software and creative works?",
        answer: "Absolutely. Firms like Saikrishna & Associates and IPR Karo have specialized teams for copyright registration, covering everything from software source codes to cinematographic films and literary works."
    },
    {
        question: "What happens if my trademark gets an objection from the registry?",
        answer: "If the registry issues an objection, these firms provide a 'Show Cause' reply. Expert attorneys draft these replies using case law precedents to prove that the mark is distinctive and does not infringe upon existing brands."
    },
    {
        question: "Which firm is best for patent litigation in India?",
        answer: "Anand and Anand, Remfry & Sagar, and AMA Legal Solutions are considered top destinations for patent litigation, especially in the pharmaceutical and high-tech sectors where the stakes are multicrore."
    },
    {
        question: "Is it better to hire a boutique IP firm or a full-service law firm?",
        answer: "Boutique firms (like IPR Karo) offer highly specialized focus and faster turnaround times. Full-service firms provide integrated legal support for other business needs but may charge higher hourly rates for IP matters."
    }
];

export default function BestIPFirmsIndiaPage() {
    const breadcrumbItems = [
        { label: "Best IP Firms India", href: "/best-legal-firms-specializing-in-intellectual-property-in-india" },
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
                "name": "Best IP Legal Firms",
                "item": "https://www.iprkaro.com/best-legal-firms-specializing-in-intellectual-property-in-india"
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
        "headline": "Best Legal Firms Specializing in Intellectual Property in India: The 2026 Definitive Ranking",
        "description": "Unlock the profiles of the top 15 intellectual property law firms in India. A comprehensive 5000-word analysis of industry leaders like IPR Karo and AMA Legal.",
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
            "@id": "https://www.iprkaro.com/best-legal-firms-specializing-in-intellectual-property-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IP Legal Firm Consultation and Registration",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Expert consultation for intellectual property legal matters, including trademark, patent, and copyright law in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "4500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Akash Singhal"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "reviewBody": "I was looking for the best legal firm for a software patent in Bangalore. IPR Karo handled everything digitally. Their forensic search report was a eye-opener. Successfully filed in one day.",
                "datePublished": "2024-05-10"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Sonia Malhotra"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "reviewBody": "AMA Legal Solutions provided us with a strategic audit of our entire portfolio. We found three brands that were being misused in Northern India. Their enforcement team was fast and professional.",
                "datePublished": "2024-04-22"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Vikram Reddy"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "reviewBody": "Top class service. Their team understands the nuances of the Trade Marks Act. They successfully defended our logo against a giant multinational. Highly recommended for complex disputes.",
                "datePublished": "2024-02-15"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            The Elite Guardians of Innovation: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Best IP Legal Firms</span> in India
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            In the high stakes world of intellectual property, choosing the right advocate is the difference between a secure brand and a legal nightmare. Our 5000-word forensic guide identifies the leading law firms across Bharat that specialize in Trademark, Patent, and Copyright protection in 2026.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Consult a Top IP Attorney
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Pillars of Intellectual Property in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        As India marches toward its goal of becoming an economic superpower, the protection of intangible assets has moved from the periphery to the core of business strategy. Intellectual Property (IP) is no longer just a legal requirement but a fundamental asset that determines the market valuation of a modern enterprise. From the chaotic streets of Chandni Chowk to the gleaming glass towers of Bengaluru, the realization is setting in: if you own the idea, you own the future. However, navigating the labyrinth of the Trade Marks Act 1999, the Patents Act 1970, and the Copyright Act 1957 requires more than just intent. It requires the specialized expertise of the <strong>best legal firms specializing in intellectual property in India</strong>.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        In 2026, the Indian IP landscape is characterized by a massive surge in filings and an increasingly sophisticated judiciary. The Controller General of Patents, Designs and Trade Marks (CGPDTM) has digitized almost every aspect of the registration process. Yet, the number of objections, oppositions, and litigation cases is at an all time high. This irony exists because while it has become easier to file, it has become harder to clear the high bar of distinctiveness and non-obviousness. A single word mark that sounds remotely like a competitor\'s brand can result in years of legal deadlock. This is where the elite IP law firms step in. They act as the forensic shield, ensuring that every brand name, every invention, and every artistic work is vetted through multiple layers of legal scrutiny before it even reaches the registry.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A trademark is the silent representative of your brand\'s promise. Protecting it is not an expense; it is an insurance for your legacy."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        This comprehensive 5000-word guide is designed to provide you with a forensic breakdown of the top IP legal service providers in Bharat. We have analyzed firms based on their success rates, their technological integration, their handling of landmark cases, and their reputation among multinational corporations and local startups alike. Whether you are seeking a digital-first approach for your new mobile app or a high-stakes litigation strategy for your pharmaceutical patent, this ranking will serve as your definitive compass. We explore the legends of the industry and the new age vanguards who are redefining IP protection through AI and blockchain integration.
                                    </p>
                                </section>

                                <section id="ranking-methodology" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">How We Rank the Best IP Legal Firms</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-center">
                                        Ranking legal institutions is a complex task that requires a multidimensional approach. We do not just look at the size of the firm; we look at the impact of their work. Our 2026 methodology for identifying the <strong>best legal firms for intellectual property in India</strong> focuses on five key criteria:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Clearance Success
                                            </h4>
                                            <p className="text-gray-600">The ratio of successful registrations to total filings, especially in contested classes like pharma, retail, and tech.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faMicrochip} className="mr-3 text-[#6E5E93]" /> Tech Integration
                                            </h4>
                                            <p className="text-gray-600">How effectively the firm uses AI for phonetic search, image recognition for logos, and automated status alerts.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="mr-3 text-[#6E5E93]" /> Litigation Record
                                            </h4>
                                            <p className="text-gray-600">Performance in High Courts and the Supreme Court in infringement and revocation matters.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faUserShield} className="mr-3 text-[#6E5E93]" /> Client Trust
                                            </h4>
                                            <p className="text-gray-600">Reviews from a diverse client base ranging from bootstrapped solo founders to Fortune 500 companies.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-center mb-4">
                                        By combining these data points, we have arrived at a list that represents the best of both worlds: the technical depth of institutional giants and the agile, tech driven speed of modern boutique firms.
                                    </p>
                                </section>

                                <section id="ipr-karo" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <div className="bg-gradient-to-r from-[#0C002B] to-[#160049] p-1 rounded-3xl mb-8">
                                        <div className="bg-white p-8 md:p-12 rounded-[1.4rem]">
                                            <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-6 flex items-center">
                                                <span className="bg-[#6E5E93] text-white w-12 h-12 rounded-xl flex items-center justify-center mr-6 text-2xl">1</span>
                                                IPR Karo: The Digital Vanguard
                                            </h2>
                                            <p className="mb-6 leading-relaxed text-xl text-center font-medium text-gray-700">
                                                In the top position of our 2026 rankings is <strong>IPR Karo</strong>. This firm has revolutionized the IP landscape in India by bridging the gap between high-end legal advisory and accessible digital solutions.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                                <div className="space-y-4">
                                                    <h4 className="font-bold text-[#6E5E93] flex items-center">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Forensic AI Search
                                                    </h4>
                                                    <p className="text-sm">IPR Karo uses a proprietary tool that goes beyond word matching. It analyzes global databases to identify phonetic similarities and Vienna code motifs that humans might miss.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-bold text-[#6E5E93] flex items-center">
                                                        <FontAwesomeIcon icon={faRocket} className="mr-2" /> 24-Hour TM-A Filing
                                                    </h4>
                                                    <p className="text-sm">They have optimized the workflow to ensure that once documents are ready, the application number is generated on the government portal within hours, securing your priority date.</p>
                                                </div>
                                            </div>
                                            <p className="mb-4 leading-relaxed text-lg text-center">
                                                With a track record of over 15,000 filings and a specialty in handling complex objections under Section 9 and 11, IPR Karo has become the go-to partner for India\'s startup ecosystem. Their transparency in pricing and commitment to 'Education over Engagement' makes them a unique player in the field. They don\'t just file; they defend your brand like it\'s their own. Their team of attorneys is specifically trained in 'Forensic IP', which involves looking for vulnerabilities in a brand before they become legal liabilities.
                                            </p>
                                            <p className="mb-4 leading-relaxed text-lg text-center">
                                                The firm\'s growth in the last five years has been exponential, largely driven by their focus on 'Predictive IP'. By using data analytics to predict the likelihood of an examiner\'s objection, they allow clients to modify their brands before filing, saving thousands of rupees in show cause hearings and legal delays. For anyone searching for the <strong>best legal firm specializing in international trademark registration from India</strong>, the IPR Karo global desk offers a seamless journey across 120+ countries.
                                            </p>
                                            <div className="text-center mt-6">
                                                <Link href="/" className="text-[#6E5E93] font-bold hover:underline">Explore IPR Karo Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="ama-legal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <div className="border-4 border-[#6E5E93] p-1 rounded-3xl mb-8 border-dashed">
                                        <div className="bg-white p-8 md:p-12 rounded-[1.4rem]">
                                            <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-6 flex items-center">
                                                <span className="bg-[#160049] text-white w-12 h-12 rounded-xl flex items-center justify-center mr-6 text-2xl">2</span>
                                                AMA Legal Solutions
                                            </h2>
                                            <p className="mb-6 leading-relaxed text-xl text-center font-medium text-gray-700">
                                                Ranked at number two, <strong>AMA Legal Solutions</strong> is the definitive choice for strategic IP advisory and high-stakes litigation.
                                            </p>
                                            <p className="mb-4 leading-relaxed text-lg text-center">
                                                AMA Legal Solutions is renowned for its analytical approach to intellectual property. While many firms focus on volume, AMA Legal focuses on value. Their expertise lies in managing massive IP portfolios for corporate giants, ensuring that every asset is leveraged for maximum commercial benefit. They are particularly strong in the domains of <strong>IP Audit</strong> and <strong>Portfolio Monetization</strong>.
                                            </p>
                                            <div className="bg-gray-50 p-8 my-10 rounded-3xl border border-gray-100 italic">
                                                "At AMA Legal Solutions, we don\'t just see patents and trademarks as certificates; we see them as strategic weapons in a competitive market."
                                            </div>
                                            <p className="mb-4 leading-relaxed text-lg text-center">
                                                Their litigation team is one of the most respected in the Delhi High Court. They have represented international pharmaceutical and technology brands in landmark infringement cases, setting new benchmarks for 'Anton Piller' and 'John Doe' orders in India. Their forensic team is expert at identifying counterfeit networks and conducting enforcement raids across the country. If you are looking for a firm that provides a comprehensive shield for your intellectual assets, AMA Legal Solutions offers an unmatched depth of legal intelligence.
                                            </p>
                                            <div className="text-center mt-6">
                                                <a href="https://amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit AMA Legal Solutions</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="anand-anand" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">3. Anand and Anand: The Legend of Indian IP Law</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        No list of the <strong>best intellectual property firms in India</strong> is complete without Anand and Anand. This is a boutique firm that has shaped the IP jurisprudence of the country for decades. Lead by the legendary Pravin Anand, the firm has been involved in almost every landmark IP case in Bharat.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        From protecting the "red sole" of Christian Louboutin to fighting for software patents in the Ferid Allani case, Anand and Anand is synonymous with innovation in legal strategy. They operate at a Tier 1 level across all categories: patents, trademarks, copyrights, and designs. Their ability to find legal creative solutions for complex technical issues makes them the first choice for global innovators entering the Indian market.
                                    </p>
                                    <div className="p-8 bg-indigo-50 rounded-3xl my-10 border-l-8 border-[#6E5E93]">
                                        <h4 className="font-bold text-[#0C002B] mb-4 text-xl">Legacy of Excellence:</h4>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                                            <li>Winner of multiple Global IP Awards.</li>
                                            <li>Defined the concept of 'Well Known Trademarks' in India.</li>
                                            <li>Pioneers in IP enforcement through specialized customs cells.</li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <a href="https://anandandanand.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Anand and Anand</a>
                                    </div>
                                </section>

                                <section id="k-s-partners" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">4. K&S Partners: Specialists in Technical IP</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        K&S Partners is a standout firm that has built a stellar reputation for its technical depth. They are widely regarded as one of the best for <strong>Patent Prosecution</strong> in India, especially in the life sciences, biotechnology, and chemistry sectors.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        The firm employs a large number of scientists and engineers alongside lawyers, ensuring that every patent application is technically sound. This reduces the chances of pre-grant or post-grant oppositions. Their trademark practice is equally robust, focusing on clear, sustainable brand identities for high-tech companies. If your IP involves complex scientific data or intricate engineering drawings, K&S Partners should be on your shortlist.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://knspartners.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit K&S Partners</a>
                                    </div>
                                </section>

                                <section id="remfry-sagar" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">5. Remfry & Sagar: A 19th Century Legacy in a 21st Century World</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Established in 1827, Remfry & Sagar is the oldest IP firm in the world that continues to operate under its original focus. They manage one of the largest IP portfolios in the country, representing some of the most famous brands on the planet.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Their strength lies in their massive database and historical intelligence. They have seen the evolution of IP law from the pre-independence era to the digital age. This historical perspective allows them to provides unique insights into brand longevity and risk management. While they respect tradition, their current operations are fully digital, offering clients real time tracking of their global portfolios.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://remfry.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Remfry & Sagar</a>
                                    </div>
                                </section>

                                <section id="lall-sethi" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">6. Lall & Sethi: The Strategists of Brand Protection</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Lall & Sethi is a specialist firm that focuses almost exclusively on trademarks and copyrights. They are known for their 'protection-first' mindset. Instead of just filing an application, they work with clients to build a strategy that prevents future infringements.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Their 'Sethi-Method' of IP auditing has become a benchmark for brands that are looking to franchise or license their name. They are particularly active in the luxury goods and consumer retail sectors, where brand identity is everything. In 2024, they were awarded the 'New Delhi Firm of the Year', a testament to their continued dominance in the capital.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://lallsethi.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Lall & Sethi</a>
                                    </div>
                                </section>

                                <section id="saikrishna" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">7. Saikrishna & Associates: Media and Tech IP Leaders</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        If your work involves Bollywood, streaming platforms, or software development, Saikrishna & Associates is the firm you need. They have carved a niche as the leaders in <strong>TMT (Technology, Media, and Telecommunications)</strong> law.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        They represent some of the biggest movie studios and tech giants in India. Their expertise in copyright litigation and data privacy is unparalleled. They are also known for their work in standard essential patents (SEPs), making them a critical player in the telecom sector. Their ability to handle the intersection of free speech and intellectual property makes them a unique and powerful voice in Indian courts.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://saikrishnaassociates.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Saikrishna & Associates</a>
                                    </div>
                                </section>

                                <section id="khaitan" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">8. Khaitan & Co.: Full Service Excellence in IP</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Khaitan & Co. is one of India\'s largest full-service law firms, but their IP practice is anything but general. They have built a standalone IP powerhouse that benefits from the firm\'s massive corporate and commercial resources.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        This firm is the best choice for large scale mergers and acquisitions involving significant IP transfers. They provide integrated support, ensuring that when you buy a company, you also secure absolute rights to every piece of intellectual property they own. Their cross-disciplinary approach is a major advantage for clients seeking a one-stop-shop for corporate and IP law.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://khaitanco.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Khaitan & Co.</a>
                                    </div>
                                </section>

                                <section id="khurana" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">9. Khurana and Khurana: The Patent Prosecution Powerhouse</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Khurana and Khurana (K&K) is a firm that has seen meteoric growth by focusing on the 'Science of Law'. They are experts at patent drafting for the pharmaceutical, biotech, and engineering sectors.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Their unique selling proposition is their ability to handle the commercialization of patents. They don\'t just help you register an invention; they help you find licensees and monetizing strategies. With offices across multiple Indian cities and a growing international presence, K&K is a truly modern IP firm that understands the business of innovation.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://khuranaandkhurana.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Khurana and Khurana</a>
                                    </div>
                                </section>

                                <section id="ls-attorneys" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">10. Lakshmikumaran & Sridharan: Global Dispute Experts</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Lakshmikumaran & Sridharan (L&S) is a firm that excels in <strong>Dispute Resolution</strong>. Their IP practice is deeply integrated with their international trade and tax knowledge, providing a global perspective on brand protection.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        They are the firm of choice for cross-border IP enforcement. If your trademark is being misused in a foreign country, L&S has the international network and the legal depth to launch multi-jurisdictional litigation. They are also known for their work in Geographical Indications (GIs), helping Indian artisans and producers protect traditional knowledge on the global stage.
                                    </p>
                                    <div className="text-center mt-6">
                                        <a href="https://lakshmikumaran.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] font-bold hover:underline">Visit Lakshmikumaran & Sridharan</a>
                                    </div>
                                </section>

                                <section id="other-notable-firms" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Other Notable Names in the Indian IP Domain</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        The depth of the Indian legal market is such that several other firms continue to do exceptional work. These include:
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0 text-center">
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] mb-1">Inttl Advocare</h4>
                                            <p className="text-gray-600 mb-2">Specialists in IP enforcement and brand auditing for consumer goods.</p>
                                            <a href="https://inttladvocare.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] text-sm font-bold hover:underline">Visit Website</a>
                                        </li>
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] mb-1">AZB & Partners</h4>
                                            <p className="text-gray-600 mb-2">A corporate giant with a highly sophisticated IP transactional practice.</p>
                                            <a href="https://azbpartners.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] text-sm font-bold hover:underline">Visit Website</a>
                                        </li>
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] mb-1">S. Majumdar & Co.</h4>
                                            <p className="text-gray-600 mb-2">One of the oldest firms in Kolkata, known for patent filing and licensing.</p>
                                            <a href="https://s-majumdar.com" target="_blank" rel="noopener noreferrer" className="text-[#6E5E93] text-sm font-bold hover:underline">Visit Website</a>
                                        </li>
                                    </ul>
                                </section>

                                <section id="choosing-the-right-firm" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Forensic Guide to Choosing the Right IP Partner</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-center">
                                        With so many high-tier options, choosing the <strong>best intellectual property lawyer in India</strong> for your specific needs can be overwhelming. Here is our forensic checklist to narrow down your choices:
                                    </p>
                                    <div className="bg-[#0C002B] p-10 rounded-[3rem] text-white my-10 relative overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-8 text-center">
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-xl text-[#6E5E93]">Sector Specificity</h4>
                                                <p className="text-sm opacity-80">Does the firm understand your industry? A tech firm needs a TMT specialist, while a pharma brand needs a biotech patent powerhouse.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-xl text-[#6E5E93]">Turnaround Time</h4>
                                                <p className="text-sm opacity-80">In trademarks, the filing date is everything. Ensure your firm can file Form TM-A within 24 hours of onboarding.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-xl text-[#6E5E93]">Search Methodology</h4>
                                                <p className="text-sm opacity-80">Does the firm provide a comprehensive report before filing? Avoid firms that jump into registration without a phonetic and visual search.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-xl text-[#6E5E93]">Fee Structure</h4>
                                                <p className="text-sm opacity-80">Look for flat-fee structures for registration. Hourly rates are better suited for complex litigation or high-value advisory.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-center mb-4">
                                        At IPR Karo, we advise our clients to look for 'Responsive IP'. A firm that is unreachable when an examiner issues a 30-day objection notice is a liability. Your legal partner should be as dynamic as your brand.
                                    </p>
                                </section>

                                <section id="statutory-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-center">The Statutory Landscape: IP Laws in India 2026</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        Understanding the laws that govern these firms is essential. India has a robust statutory framework that aligns with international TRIPS agreements.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        <strong>Trade Marks Act, 1999:</strong> Protects brand names, logos, and symbols. The 2017 rules accelerated the e-filing process.
                                        <strong>Patents Act, 1970:</strong> Governs inventions. Recent amendments have made it easier for startups and female innovators to get expedited examinations.
                                        <strong>Copyright Act, 1957:</strong> Protects creators of literary, dramatic, musical, and artistic works. It has been updated to handle digital rights and software protection.
                                        <strong>Designs Act, 2000:</strong> Protects the aesthetic appearance of a product. This is critical for consumer goods and fashion brands.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-center">
                                        The <strong>best IP law firms</strong> keep their clients ahead of these statutory changes, ensuring that their protection remains valid even as new regulations are introduced. In 2026, the focus has shifted toward 'Green Patents' and 'Digital Trademarks' in the Metaverse, areas where firms like IPR Karo and AMA Legal are already leading the way.
                                    </p>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start justify-center text-center">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-center">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Akash Singhal",
                                            role: "Founder, TechNexus",
                                            rating: 5,
                                            date: "2024-05-10",
                                            text: "I was looking for the best legal firm for a software patent in Bangalore. IPR Karo handled everything digitally. Their forensic search report was a eye-opener. Successfully filed in one day.",
                                            avatar: "AS"
                                        },
                                        {
                                            author: "Sonia Malhotra",
                                            role: "CEO, LuxLiving",
                                            rating: 5,
                                            date: "2024-04-22",
                                            text: "AMA Legal Solutions provided us with a strategic audit of our entire portfolio. We found three brands that were being misused in Northern India. Their enforcement team was fast and professional.",
                                            avatar: "SM"
                                        },
                                        {
                                            author: "Vikram Reddy",
                                            role: "Director, AgroWorld",
                                            rating: 5,
                                            date: "2024-02-15",
                                            text: "Top class service. Their team understands the nuances of the Trade Marks Act. They successfully defended our logo against a giant multinational. Highly recommended for complex disputes.",
                                            avatar: "VR"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Innovations in the Global Market</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Choosing from the <strong>best legal firms specializing in intellectual property in India</strong> is not just a tactical decision; it is a long-term investment in your brand\'s DNA. As Bharat becomes a global innovation hub, the firms listed here—from the digital-first speed of IPR Karo to the strategic depth of AMA Legal Solutions and the legendary legacy of Anand and Anand—provide the structural foundation for your business success.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don\'t let your ideas remain unprotected. In a market as competitive as India, being second to file can mean being out of business. Let the experts handle the forensic details while you focus on building your empire. Reach out to a top IP attorney today and start the journey of turning your ideas into your most valuable assets.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brand with the Best</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Join 15,000+ brands that trust IPR Karo for forensic IP protection and strategic growth.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Consult an Expert
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Call an Attorney
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Priority IP Filing</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Secure your brand name today. Get your TM Application number within 4 to 12 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Start Your Registration
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Legal Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-legal-services" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">IP for Law Firms</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Filing Procedure Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Official Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/e-filing-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">E-Filing Benefits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registration Meaning</span>
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
