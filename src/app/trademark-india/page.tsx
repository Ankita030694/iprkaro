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
    faLandmark,
    faFlag,
    faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark India | Comprehensive Brand Protection Guide 2026',
    description: 'The definitive guide to trademarks in India. Explore the legal landscape, registration benefits, and strategic importance of protecting your brand in Bharat.',
    keywords: [
        'trademark india',
        'indian trademark law',
        'brand protection india',
        'trademark registry bharat',
        'ipr india guide',
        'trademark rules 2017 india',
        'make in india trademark',
        'startup india ipr',
        'trademark classification india',
        'indian intellectual property'
    ],
    openGraph: {
        title: 'Protecting Brands in Bharat: The Global Guide to Trademark India',
        description: 'Secure your legacy in one of the world\'s fastest growing economies. A deep dive into the Indian trademark ecosystem for founders and investors.',
        url: 'https://www.iprkaro.com/trademark-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-india',
    },
};

const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Statutory Law" },
    { id: "why-india", title: "Why India?" },
    { id: "registry-offices", title: "Registry Offices" },
    { id: "startup-incentives", title: "Startup Incentives" },
    { id: "trademark-infringement", title: "Trademark Infringement" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Client Reviews" },
    { id: "conclusion", title: "Conclusion" },
];

const faqs = [
    {
        question: "What is the territorial extent of a trademark registered in India?",
        answer: "A trademark registered with the Office of the Controller General of Patents, Designs and Trademarks (CGPDTM) provides protection across the entire territory of India, including all states and Union Territories."
    },
    {
        question: "How long does a trademark registration take in India currently?",
        answer: "Thanks to digitization, a straightforward application without objections or oppositions can now be registered in as little as 6 to 8 months. However, if legal issues arise, it can take 1.5 to 2 years."
    },
    {
        question: "Is 'Prior Use' recognized under Indian trademark law?",
        answer: "Yes. India follows a 'First to Use' principle for many common law remedies. Even if you haven't registered your mark, many courts will protect you against a newcomer if you can prove long standing usage and public reputation."
    },
    {
        question: "What is the Madrid Protocol and does India participate?",
        answer: "Yes, India joined the Madrid Protocol in 2013. This allows Indian businesses to protect their marks in over 130 member countries through a single application filed with the Indian registry."
    },
    {
        question: "Can I register a trademark for a service in India?",
        answer: "Absolutely. India provides protection for both goods (Classes 1-34) and services (Classes 35-45). Service marks cover industries like software, hospitality, finance, and telecommunications."
    },
    {
        question: "Why should I use an Indian attorney instead of a generic service?",
        answer: "Expert Indian trademark attorneys understand the specific nuances of registry behavior, local case laws, and the procedural technicalities of the five different branches. This localized expertise prevents rejections."
    }
];

export default function TrademarkIndiaPage() {
    const breadcrumbItems = [
        { label: "Trademark India", href: "/trademark-india" },
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
                "name": "Trademark India",
                "item": "https://www.iprkaro.com/trademark-india"
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
        "headline": "Trademark India: Navigating Brand Protection in Bharat 2026",
        "description": "The ultimate encyclopedia for trademarks in India. Discover legal frameworks, registration steps, and strategic insights for protecting intellectual property in the Indian market.",
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
            "@id": "https://www.iprkaro.com/trademark-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "National Trademark Registration Services",
        "image": "https://www.iprkaro.com/assets/trademark-india-og.jpg",
        "description": "Comprehensive intellectual property services for domestic and international brands operating in Bharat.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5120"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen font-sans">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
                            The Definitive Guide to <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark India</span> 2026
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Secure your brand in the world's most vibrant market. From the winding streets of local commerce to the high tech corridors of global enterprise, learn how to protect your identity in Bharat.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Protect Your Brand in India
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Rise of Intellectual Property in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        India has rapidly transformed into a spectacular global powerhouse of technological innovation and aggressive commercial activity. As the nation confidently eyes a dominant position as the third largest economy worldwide, the defining role of intellectual property has decisively moved from the corporate periphery directly to the very center of foundational business strategy. In this intensely competitive landscape, a <strong>trademark India</strong> registration represents exponentially more than just an administrative legal filing. It is a powerful, highly visible symbol of an ambitious business's unwavering commitment to premium quality and its relentless ambition to dramatically scale within a massive, incredibly diverse marketplace of over a billion consumers.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The complex Indian trademark ecosystem is universally acknowledged as one of the oldest, most intricate, and inherently robust legal frameworks in the entire world. With its deep historical roots firmly planted in fundamental common law and its highly sophisticated modern structure shaped by vital international treaties like the Madrid Protocol, it provides an unparalleled, world-class level of iron-clad security for both local proprietor startups and massive multinational global brands alike. Whether you are a proud participant in the "Make in India" manufacturing revolution or a cutting-edge, digital-native software startup building the future, practically understanding the subtle, highly specific nuances of the Indian IP registry is absolutely critical to your company's long-term commercial survival and financial success.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        At IPR Karo, we are fiercely dedicated to brilliantly simplifying the extreme legal complexities of actively operating in the vibrant economy of Bharat. We fundamentally believe that absolutely every Indian entrepreneur, regardless of their current scale, directly deserves seamless, affordable access to supreme, high-quality brand protection that rivals the largest corporations. This comprehensive, exhaustive guide serves as the ultimate professional encyclopedia for absolutely anyone actively looking to masterfully navigate the trademark landscape in India, dependably providing the hard-hitting strategic insights and actionable legal maneuvers needed to decisively win in today's fiercely contested market.
                                    </p>
                                    <div className="bg-[#6E5E93]/10 border-l-8 border-[#0C002B] p-10 my-10 rounded-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In the dynamic, hyper-scale Bharat of 2026, your unique brand name is both your ultimate digital domain and your absolute physical home. A registered trademark is the unbreakable statutory lock and uncopiable legal key that practically ensures only you permanently remain the undisputed master of your commercial house."
                                        </p>
                                    </div>
                                </section>

                                <section id="legal-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Statutory Architecture: From 1999 to the Digital Era</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        The foundation of <strong>trademark India</strong> is the Trade Marks Act of 1999. This landmark legislation brought Indian law in line with the Agreement on Trade Related Aspects of Intellectual Property Rights (TRIPS). It replaced the older 1958 Act, introducing modern concepts like Service Marks, Collective Marks, and the protection of well known trademarks.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                Rule of Law
                                            </h4>
                                            <p className="text-sm opacity-80">The 1999 Act provides a clear, statutory path for registration and enforcement, ensuring that rights are predictable and enforceable in court.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faSync} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                2017 Rules
                                            </h4>
                                            <p className="text-sm opacity-80">The 2017 Amendment streamlined processes further, introducing digital filing incentives and simplifying the fee structure for SMEs.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-india" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Protecting Your Mark in India is Non Negotiable</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        India's colossal market size is undeniably a dangerous double-edged sword. While it exponentially offers massive, once-in-a-generation commercial opportunities for explosive revenue growth, it simultaneously attracts an army of aggressive copycats, unethical counterfeiters, and opportunistic infringers actively looking to piggyback on your hard-earned reputation. A formal <strong>trademark India</strong> registration fundamentally provides an indestructible statutory framework and these critical strategic advantages that literally ensure corporate survival:
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="flex gap-6 items-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0"><FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" /></div>
                                            <p className="font-medium text-blue-900 leading-relaxed"><strong className="block text-xl mb-1 text-black">Indisputable Prima Facie Evidence of Ownership:</strong> In any fiercely contested legal dispute, civil litigation, or rapid website takedown request, a formal registration certificate serves as the absolute, undeniable proof that you are the sole, rightful owner of the mark, immediately flipping the heavy burden of proof entirely onto the hostile infringer.</p>
                                        </div>
                                        <div className="flex gap-6 items-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0"><FontAwesomeIcon icon={faRocket} className="w-6 h-6" /></div>
                                            <p className="font-medium text-blue-900 leading-relaxed"><strong className="block text-xl mb-1 text-black">Unchallenged National Commercial Monopoly:</strong> It instantly grants you sweeping, exclusive legal rights to confidently use the specific mark across all 28 states and 8 union territories of the vast Indian subcontinent, effectively establishing a massive nationwide legal moat around your core business activities.</p>
                                        </div>
                                        <div className="flex gap-6 items-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0"><FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6" /></div>
                                            <p className="font-medium text-blue-900 leading-relaxed"><strong className="block text-xl mb-1 text-black">Explosive Intangible Asset Valuation:</strong> For ambitious founders actively seeking elite venture capital funding, negotiating premium franchise agreements, or strategically planning to eventually sell the entire business for a high multiple, a heavily protected, officially registered trademark is routinely evaluated as a massively valuable, deeply tangible financial asset on the corporate balance sheet.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="registry-offices" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Jurisdictional Map: The Five Trademark Offices</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        To manage the sheer volume of applications, the <strong>trademark India</strong> registry is divided into five regional branches. The office where you file depends on your principal place of business:
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-10 text-center">
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h5 className="font-bold text-[#6E5E93]">Delhi</h5>
                                            <p className="text-xs opacity-60">North India</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h5 className="font-bold text-[#6E5E93]">Mumbai</h5>
                                            <p className="text-xs opacity-60">West/Central</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h5 className="font-bold text-[#6E5E93]">Chennai</h5>
                                            <p className="text-xs opacity-60">South India</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h5 className="font-bold text-[#6E5E93]">Kolkata</h5>
                                            <p className="text-xs opacity-60">East India</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h5 className="font-bold text-[#6E5E93]">Ahmedabad</h5>
                                            <p className="text-xs opacity-60">Gujarat/RJ</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="startup-incentives" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Incentives for Startups & MSMEs in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Government of India is heavily invested in its "Startup India" and "MSME" Missions. To support these entities, special provisions have been made in the trademark process:
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-xl my-10">
                                        <h4 className="font-bold text-2xl mb-4 italic text-[#6E5E93]">The MSME Dividend</h4>
                                        <p className="opacity-80 leading-relaxed mb-6">Registered startups and MSMEs pay only **₹4,500** per class, compared to ₹9,000 for regular companies. This 50% discount is designed to ensure that even the smallest garage startup can afford professional legal protection.</p>
                                        <div className="flex gap-4">
                                            <span className="bg-white/10 px-4 py-1 rounded-full text-xs">Expedited Exam Options</span>
                                            <span className="bg-white/10 px-4 py-1 rounded-full text-xs">IPR Facilitators Program</span>
                                        </div>
                                    </div>
                                </section>

                                <section id="trademark-infringement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Addressing Trademark Infringement in India</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        In the booming digital marketplace, trademark infringement poses a catastrophic risk to Indian businesses. It occurs when unauthorized competitors intentionally deploy brand names, striking logos, or confusingly similar taglines that inherently mimic your legally protected intellectual property. This predatory behavior predictably causes rampant consumer confusion, aggressively dilutes your high-value brand equity, and relentlessly siphons away your hard-earned revenue.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Under the formidable provisions of the <strong>Trade Marks Act, 1999</strong>, holding a valid, active registration arms you with an arsenal of overwhelming statutory remedies. Indian commercial courts will decisively grant severe civil injunctions to instantly freeze the illegal operations of infringers, forcefully execute dramatic Anton Piller orders to entirely seize all counterfeit goods in sudden police raids, and rigorously mandate substantial compensatory damages to make you whole. Simply put, registration radically transforms you from a helpless victim into an aggressively commanding enforcer of your business rights.
                                    </p>
                                </section>

                                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Fatal Blunders to Avoid During Trademark Application</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The highly technical IP India registration portal strictly demands flawless legal accuracy. Naive applicants consistently run into disastrous bureaucratic roadblocks due to fundamental, easily avoidable rookie mistakes. Avoid these destructive pitfalls:
                                    </p>
                                    <ul className="space-y-6 my-8 p-0 list-none">
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Skipping the Comprehensive Pre-Filing Clearance Search</strong> Blindly filing for a brand name without deeply executing a sophisticated phonetic and visual search specifically within the IP India government database practically guarantees a swift, severe objection for "Likelihood of Confusion."</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Applying with Highly Descriptive or Generic Words</strong> Words that plainly describe the precise utility, exact nature, or specific geographic origin of your product (such as trying to register "Sweet Mango Juice" for fruit beverages) utterly lack the required "distinctiveness" and are routinely rejected outright by examiners.</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Choosing the Completely Wrong Trademark Class</strong> Filing the entire application into an absolutely misplaced Nice Classification category fundamentally invalidates all the legal protection you thought you secured once a competitor challenges you in your actual industry sector.</p>
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
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Voices from <span className="text-[#FFB703]">Across Bharat</span></h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">Indian entrepreneurs share their trademark registration journey and how IPR Karo made it effortless.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">PP</div>
                                                        <div><h3 className="text-white font-bold">Pooja Pandey</h3><p className="text-white/50 text-xs">Founder, Handicraft Export House</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;Navigating the Indian trademark system seemed impossible from our small town in UP. IPR Karo handled everything remotely through the Delhi office. Our handicraft brand is now officially protected across India!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">AS</div>
                                                        <div><h3 className="text-white font-bold">Aditya Srinivasan</h3><p className="text-white/50 text-xs">MD, Chennai-based Pharma Company</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;We used the Startup India incentive for our pharma brand registration. IPR Karo guided us through the government concession process and we filed at half the standard fees. Brilliant team!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">LS</div>
                                                        <div><h3 className="text-white font-bold">Lakshmi Subramaniam</h3><p className="text-white/50 text-xs">Owner, Traditional Silk Saree Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;Our family brand has been in business for 40 years but was never registered. IPR Karo helped us secure our trademark in India, and now we export with the ® symbol proudly on every product!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Building a Resilient Brand in the Indian Era</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The truly momentous journey of securing a reliable <strong>trademark India</strong> registration is a profoundly accurate reflection of the rising nation's own extraordinary journey-one defined by explosive, unyielding economic growth, mass digitalization, and vastly increasing global commercial influence. By making the absolutely critical decision to strategically secure your brand identity today, you are not just passively conforming to a standard legal requirement; you are aggressively and proactively participating in the rapid formalization of the modern Indian economy, forever cementing your place in its incredibly bright future.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        IPR Karo stands resolutely as your most trusted, hyper-efficient legal partner in this incredibly vital corporate journey. We masterfully bridge the massive gap between deeply entrenched traditional legal wisdom and the blistering speed of modern technology. Whether you are ambitiously launching an innovative software startup in Bangalore, forcefully scaling a massive manufacturing unit in Pune, or aggressively disrupting retail in Mumbai, we guarantee that your invaluable intellectual property is just as heavily fortified as your grandest business vision. Protect your deepest passion, heavily shield your brand assets, and definitively secure your company's future dominance in Bharat today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Secure Your Piece of the Indian Market</h2>
                                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                            Don't let your brand identifier be unprotected in the land of opportunity. Join thousands of brands who trust IPR Karo for their Indian trademark needs.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Trademark India
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an Expert
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#160049] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">National Protection</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Ready to conquer the Indian market? Ensure your brand is **Legally Shielded** in all 28 states and 8 union territories.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Start Protection Now
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-gray-800">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/online-trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">E-Filing Benefits</span>
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
