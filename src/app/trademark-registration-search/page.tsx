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
    faMapMarkerAlt,
    faClock,
    faCogs,
    faCheckCircle,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Registration Search | Free Public Search Guide 2026',
    description: 'Conduct a comprehensive trademark registration search on the IP India portal. Learn how to identify phonetic similarities, avoid conflicts, and ensure your brand name is available.',
    keywords: [
        'trademark registration search',
        'free trademark search india',
        'check brand name availability',
        'public search trademark india',
        'phonetic trademark search',
        'vienna code search',
        'ip india search portal',
        'trademark clearance report',
        'logo availability check',
        'trademark database india'
    ],
    openGraph: {
        title: 'Expert Guide to Trademark Registration Search in India',
        description: 'Master the art of brand availability checks. A detailed guide on using the official IP India search tools to protect your intellectual property.',
        url: 'https://www.iprkaro.com/trademark-registration-search',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-registration-search',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Bedrock of Brand Creation' },
    { id: 'why-search', title: 'Why You Must Conduct a Search Before Filing' },
    { id: 'ip-india-portal', title: 'Using the Official IP India Search Portal' },
    { id: 'phonetic-search', title: 'Phonetic vs Wordmark Search: Key Differences' },
    { id: 'vienna-classification', title: 'The Vienna Classification for Logos' },
    { id: 'common-errors', title: 'Common Mistakes to Avoid' },
    { id: 'interpret-results', title: 'How to Interpret Search Results' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Your Brand\'s First Line of Defense' },
];

const faqs = [
    {
        question: "Is the trademark registration search on IP India free?",
        answer: "Yes, the public search tool provided by the Controller General of Patents, Designs and Trademarks is absolutely free for anyone to use. You can access it via the official portal at ipindiaonline.gov.in."
    },
    {
        question: "What is a phonetic search in trademarking?",
        answer: "A phonetic search identifies marks that sound similar to yours, even if they are spelled differently. For example, a phonetic search for 'Kool' would identify 'Cool' and 'Quhl'. This is vital because the law prevents phonetic confusion among consumers."
    },
    {
        question: "How do I check if my logo is already registered?",
        answer: "Checking a logo requires a Vienna Code search. Designs are assigned specific numeric codes based on their visual elements (like animals, geometric shapes, or celestial bodies). You must search for these codes in your respective class."
    },
    {
        question: "Can I use a name if the search shows it as 'Abandoned'?",
        answer: "Technically, yes, an abandoned mark no longer holds exclusive rights. However, you should still proceed with caution. The original owner might have common law rights or might be in the process of rectifying the abandonment."
    },
    {
        question: "Does a 'No records found' result mean my mark is 100% safe?",
        answer: "Not necessarily. A search might not capture very recent filings or phonetic nuances. Also, common law rights (unregistered trademarks) are not listed on the government portal but can still block your registration."
    },
    {
        question: "What are the common search statuses on the IP portal?",
        answer: "Common statuses include 'Registered', 'Objected', 'Abandoned', 'Withdrawn', 'Opposed', and 'Refused'. Each status provides a different level of risk or opportunity for your new application."
    },
    {
        question: "Should I search only in my primary class?",
        answer: "No. You should search in related classes as well. For example, if you are in software (Class 42), you should also check hardware (Class 9) and advertising (Class 35) to ensure no 'likelihood of confusion' exists."
    },
    {
        question: "How long does a professional trademark search take?",
        answer: "At IPR Karo, we provide a preliminary report within 60 minutes. A comprehensive legal clearance report, which includes attorney analysis of similar marks, typically takes 4 to 24 hours."
    },
    {
        question: "What is a 'Well-Known' trademark search?",
        answer: "Well known marks (like Samsung or Tata) have protection across ALL classes. Even if your business is completely different, you cannot use a name that is identical to a well known mark."
    },
    {
        question: "What is the Vienna Code for trademark search?",
        answer: "The Vienna Code is an international classification for the figurative elements of marks. It consists of 29 categories, such as 'Human beings' (Category 2) or 'Animals' (Category 3), allowing for systematic visual searches."
    }
];

export default function TrademarkRegistrationSearchPage() {
    const breadcrumbItems = [
        { label: "Trademark Registration Search", href: "/trademark-registration-search" },
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
                "name": "Trademark Registration Search",
                "item": "https://www.iprkaro.com/trademark-registration-search"
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
        "headline": "Trademark Registration Search Guide: Avoiding Legal Pitfalls 2026",
        "description": "The definitive guide to brand availability checks in India. Learn the step-by-step process of conducting a public search on the IP India database.",
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
            "@id": "https://www.iprkaro.com/trademark-registration-search"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Professional Trademark Search Service",
        "image": "https://www.iprkaro.com/assets/trademark-search-og.jpg",
        "description": "Comprehensive brand and logo availability reports via official IP India records.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1940"
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
                            Comprehensive <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Registration Search</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Don't guess, verify! Learn how to use the official IP India public search tool to ensure your brand name is unique, legally sound, and ready for successful registration.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Get Free Search Report
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
                            <div className="lg:hidden mb-6 sticky top-[72px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Bedrock of Brand Creation</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Imagine passionately investing months of extremely hard work, meticulously designing a beautiful logo, aggressively printing expensive premium packaging, and heavily launching a massive, high-profile marketing campaign, only to suddenly receive a terrifying legal "Cease and Desist" notice the very next morning. This absolute nightmare scenario is shockingly common for over-eager founders who dangerously and recklessly skip the single most critical, foundational step of any successful business launch: conducting a comprehensive, deeply analytical <strong>trademark registration search</strong>.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the brutally competitive, hyper-crowded modern Indian marketplace specifically governed by the strict provisions of the <strong>Trade Marks Act, 1999</strong>, mere ignorance is absolutely never a valid legal defense. The heavy statutory burden overwhelmingly falls entirely on the new applicant to definitively prove that their chosen brand name, logo, or slogan is completely unique and specifically does not inherently cause any "likelihood of confusion" with the tens of millions of existing active marks already residing in the official registry. Actively executing a highly systematic search is definitively not just a simple preliminary box to aggressively tick off before filing; it is the ultimate, non-negotiable strategic framework required to safely secure your entire corporate identity.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        This exhaustive, professional-grade guide meticulously deconstructs the exact, highly technical methodologies utilized by elite IP attorneys specifically for navigating the often-clunky public IP India database. We will decisively empower you to flawlessly orchestrate complex phonetic queries, heavily decode confusing historical registry statuses, and rapidly evaluate hidden commercial risks with extreme absolute precision.
                                    </p>
                                    <div className="bg-[#160049] text-white p-8 my-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                        <p className="text-xl italic font-medium leading-relaxed relative z-10">
                                            "A professional trademark search fundamentally acts as a massive, high-powered legal radar for your incredibly fragile newly-launched brand. It proactively detects devastating multi-million dollar collision courses years before you are permanently legally bound by them."
                                        </p>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6E5E93]/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                    </div>
                                </section>

                                <section id="why-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why You Must Conduct a Search Before Filing</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Far too many impatient first-time founders mistakenly view the critical search process as an unnecessary, annoying delay. However, directly plunging into a highly expensive, multi-year application process completely blindly severely risks utter financial disaster. Here is precisely exactly why an aggressive <strong>trademark registration search</strong> is structurally vital:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl transition-transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                            <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-blue-600 mb-4" />
                                            <h4 className="font-bold text-xl mb-2 text-black">Avert Immediate Rejection Risk</h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">Under <strong className="text-blue-900">Section 11</strong> of the Act, examiners are legally absolutely mandated to outright refuse any new registration specifically if heavily conflicting marks heavily already exist, aggressively wasting all your time entirely.</p>
                                        </div>
                                        <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl transition-transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6 text-blue-600 mb-4" />
                                            <h4 className="font-bold text-xl mb-2 text-black">Preserve Massive Capital Waste</h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">Filing an entirely doomed application permanently burns the strictly non-refundable ₹4,500/₹9,000 government fees, inherently plus substantial expensive attorney drafting fees and potential crushing litigation dispute costs.</p>
                                        </div>
                                        <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl transition-transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                            <FontAwesomeIcon icon={faCogs} className="w-6 h-6 text-blue-600 mb-4" />
                                            <h4 className="font-bold text-xl mb-2 text-black">Enable Strategic Brand Pivots</h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">Rapidly discovering a dangerous major conflict incredibly early easily allows you to safely, cheaply tweak the specific brand name slightly *before* massively spending heavily on permanent fixed physical assets.</p>
                                        </div>
                                        <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl transition-transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-blue-600 mb-4" />
                                            <h4 className="font-bold text-xl mb-2 text-black">Confirm Absolute Absolute Distinctiveness</h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">A truly comprehensive search actively ensures your mark isn't just legally "available," but actually intrinsically strong enough to completely heavily fiercely fiercely completely strictly completely defend against competitors.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="ip-india-portal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Using the Official IP India Search Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The Indian government provides a public search portal that is the gold standard for trademark data. To conduct a basic <strong>trademark registration search</strong>, anyone can follow these steps:
                                    </p>
                                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 my-10">
                                        <ol className="space-y-6">
                                            <li className="flex gap-4">
                                                <span className="font-black text-3xl text-gray-300">01</span>
                                                <div>
                                                    <p className="font-bold">Select 'Wordmark' or 'Phonetic' Search Type:</p>
                                                    <p className="text-sm opacity-70">Wordmark looks for text; Phonetic looks for sounds.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="font-black text-3xl text-gray-300">02</span>
                                                <div>
                                                    <p className="font-bold">Enter the 'Match with' String:</p>
                                                    <p className="text-sm opacity-70">Use 'Starts with', 'Contains', or 'Match with' for different results.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="font-black text-3xl text-gray-300">03</span>
                                                <div>
                                                    <p className="font-bold">Assign the Class:</p>
                                                    <p className="text-sm opacity-70">Enter the 1-45 class relevant to your industry.</p>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </section>

                                <section id="phonetic-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Phonetic vs Wordmark: The Trap of the Similar Sound</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        One of the most common reasons for trademark rejection in India is phonetic similarity. The law posits that a consumer might be confused by hearing a name, even if they can distinguish it when reading it.
                                    </p>
                                    <div className="overflow-hidden rounded-3xl border border-gray-200 my-10">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#0C002B] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold">Your Proposed Name</th>
                                                    <th className="p-5 font-bold">Phonetic Conflict (Existing)</th>
                                                    <th className="p-5 font-bold">Likely Result</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-lg">
                                                <tr>
                                                    <td className="p-5 font-bold text-red-600">QuickBite</td>
                                                    <td className="p-5 text-gray-600">KwikBite</td>
                                                    <td className="p-5 bg-red-50 font-bold border-l-4 border-l-red-500 text-red-700">Refused</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-red-600">Cynic</td>
                                                    <td className="p-5 text-gray-600">Sinnick</td>
                                                    <td className="p-5 bg-red-50 font-bold border-l-4 border-l-red-500 text-red-700">Refused</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-green-600">Nexura</td>
                                                    <td className="p-5 text-gray-600">No Match</td>
                                                    <td className="p-5 bg-green-50 font-bold border-l-4 border-l-green-500 text-green-700">Accepted</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        A phonetic search uses algorithms like Soundex or Metaphone to find these matches. At IPR Karo, we perform exhaustive phonetic checks across all variations of your brand name to ensure the examiner has zero grounds for a Section 11 objection.
                                    </p>
                                </section>

                                <section id="vienna-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Vienna Code Search: Decoding Visual Identity</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        How do you search for a "logo of a blue eagle" in a database of millions of images? The answer is the <strong>Vienna Classification</strong>. This international treaty categorizes every possible figurative element into a hierarchical numerical system.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-indigo-50 rounded-2xl text-center">
                                            <p className="font-bold text-2xl text-[#6E5E93] mb-2">Category 3</p>
                                            <p className="text-sm font-bold text-[#160049]">Animals</p>
                                            <p className="text-xs opacity-60">Lions, Birds, Insects, etc.</p>
                                        </div>
                                        <div className="p-6 bg-indigo-50 rounded-2xl text-center">
                                            <p className="font-bold text-2xl text-[#6E5E93] mb-2">Category 26</p>
                                            <p className="text-sm font-bold text-[#160049]">Geometric Figures</p>
                                            <p className="text-xs opacity-60">Circles, Triangles, Waves.</p>
                                        </div>
                                        <div className="p-6 bg-indigo-50 rounded-2xl text-center">
                                            <p className="font-bold text-2xl text-[#6E5E93] mb-2">Category 1</p>
                                            <p className="text-sm font-bold text-[#160049]">Celestial Bodies</p>
                                            <p className="text-xs opacity-60">Stars, Suns, Planets.</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        If your logo uses a specific symbol, we identify the relevant Vienna Codes (e.g., a circle containing a star would be searched under 26.1.1 and 1.1.1). Failing to do a Vienna search is a fatal flaw for brands that rely heavily on their iconography.
                                    </p>
                                </section>

                                <section id="common-errors" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Top 5 Mistakes in Public Searches</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Most DIY searches fail because of one or more of these common blind spots:
                                    </p>
                                    <div className="space-y-4 my-8">
                                        <div className="p-6 rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">1</div>
                                            <div>
                                                <p className="font-bold text-gray-900">Searching Only for Exact Matches:</p>
                                                <p className="text-gray-600">Missing 'similar' names that have the same prefix or suffix.</p>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">2</div>
                                            <div>
                                                <p className="font-bold text-gray-900">Incorrect Class Selection:</p>
                                                <p className="text-gray-600">e.g., searching for a clothing store only in Class 25 (Goods) but missing Class 35 (Retail Services).</p>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">3</div>
                                            <div>
                                                <p className="font-bold text-gray-900">Ignoring 'Abandoned' or 'Withdrawn' Status:</p>
                                                <p className="text-gray-600">Mistakenly believing these are always safe to use without further investigation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="interpret-results" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Status Decoding: Interpreting your Search results</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A search result without interpretation is just noise. Understanding what the status means allows you to assess risk effectively:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-[#0C002B] text-white rounded-[3rem] shadow-2xl">
                                            <h4 className="font-bold text-2xl mb-6">High Risk Statuses</h4>
                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-400 rounded-full"></div> Registered (Active Monopoly)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-400 rounded-full"></div> Advertised (About to be Registered)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Opposed (Currently in Litigation)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Objected (Registry has concerns)</li>
                                            </ul>
                                        </div>
                                        <div className="p-8 bg-gray-50 border border-gray-200 rounded-[3rem]">
                                            <h4 className="font-bold text-2xl mb-6 text-[#160049]">Potential Opportunities</h4>
                                            <ul className="space-y-4 text-gray-600">
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Abandoned (Fees not paid/dead)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Withdrawn (Applicant gave up)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gray-400 rounded-full"></div> Removed (Lapsed due to non-renewal)</li>
                                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Refused (Permanently rejected)</li>
                                            </ul>
                                        </div>
                                    </div>
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
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What <span className="text-[#FFB703]">Brands Say</span> About Our Clearance Reports</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">Discover how our pre-filing trademark registration search reports prevented costly mistakes for these businesses.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">GA</div>
                                                        <div><h3 className="text-white font-bold">Gaurav Anand</h3><p className="text-white/50 text-xs">Founder, Quick Commerce App</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;Our original app name had 5 similar marks in Class 42. IPR Karo&apos;s registration search report helped us rebrand BEFORE filing, saving us the ₹9,000 government fee and months of wasted time!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">IS</div>
                                                        <div><h3 className="text-white font-bold">Isha Saxena</h3><p className="text-white/50 text-xs">Brand Manager, Luxury Jewellery House</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;The cross-class search for our jewellery brand was thorough. IPR Karo checked Classes 14, 35, and 42, finding a similar name in Class 35 we would have missed. Their search methodology is truly comprehensive!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">KR</div>
                                                        <div><h3 className="text-white font-bold">Kunal Rawat</h3><p className="text-white/50 text-xs">CEO, Agri-Tech Startup</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;We needed both a wordmark and device mark search before investor due diligence. IPR Karo delivered a detailed clearance report within 24 hours that impressed our VCs. Professional and thorough!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Your Brand's First Line of Defense</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Executing an aggressive, meticulously detailed <strong>trademark registration search</strong> is structurally the most undeniably powerful heavily proactive defensive legal measure you can completely implement to aggressively safeguard your growing enterprise. Never rigidly casually view it as a mere bureaucratic stepping stone; explicitly view it as the indestructible foundational bedrock upon which your entire massive future corporate empire will be relentlessly built.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The public government search registry undeniably is an incredibly complex, constantly shifting massive chaotic labyrinth. Partner safely and securely exclusively with the immensely seasoned, highly experienced expert IP veterans right here at IPR Karo. We will expertly comprehensively execute rigorous clearance checks strictly for you, guaranteeing completely secure and definitive successful official registration.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Know Before You Grow</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't risk your brand's future. Get a professional, attorney backed search report today and file with 100% confidence.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Check Name Availability
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an Advisor
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Search Experts</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    DIY searches often miss phonetic and cross class conflicts. Get a **Professional Search Report** today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Order Search Report
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration in India</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Complete Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Class Finder Tool</span>
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
