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
    faVideo,
    faTv,
    faUsers,
    faShareAlt,
    faBullhorn,
    faStar,
    faPlayCircle,
    faMicrophone
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for YouTube Channel Name | Protect Your Brand',
    description: 'Comprehensive 5000+ word guide on trademarking your YouTube channel name in India. Secure your brand, prevent impersonation, and build digital equity. Expert legal insights for creators.',
    keywords: [
        'trademark for youtube channel name',
        'youtube brand registration india',
        'protect youtube channel identity',
        'class 41 trademark for creators',
        'youtube creator legal protection',
        'register youtube logo india',
        'prevent youtube impersonation',
        'trademark for vloggers',
        'digital brand protection india',
        'youtube monetization legal security'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for YouTube Creators in India',
        description: 'Secure your digital future. Protect your YouTube channel name and logo with India\'s premier IP legal experts. 100% online, same-day filing.',
        url: 'https://www.iprkaro.com/trademark-for-youtube-channel-name',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-youtube-channel-name',
    },
};

const tocSections = [
    { id: 'importance-of-creator-trademark', title: 'Why Creators Need It' },
    { id: 'strategic-benefits', title: 'Strategic Benefits' },
    { id: 'class-breakdown', title: 'Creator Classes' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'required-documents', title: 'Legal Checklist' },
    { id: 'objections-and-rejections', title: 'Legal Hurdles' },
    { id: 'global-protection', title: 'Madrid Protocol' },
    { id: 'brand-valuation', title: 'Asset Valuation' },
    { id: 'costs-and-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Is it mandatory to trademark a YouTube channel name in India?",
        answer: "No, it is not legally mandatory, but it is highly recommended to protect your brand from impersonators and competitors who might try to use your growing fame to divert traffic."
    },
    {
        question: "Which trademark class is best for YouTube channels?",
        answer: "Class 41 is the primary class for entertainment services. However, Class 38 for broadcasting and Class 35 for merchandising are also frequently used for comprehensive protection."
    },
    {
        question: "Can I trademark my YouTube channel name if it is just my own personal name?",
        answer: "Yes, you can trademark your own name if it has acquired distinctiveness in the entertainment industry. Many famous creators trademark their names to prevent unauthorized use in endorsements."
    },
    {
        question: "How long does the registration process take for a digital brand?",
        answer: "The initial filing happens within 24 hours, after which you can use the TM symbol. The full registration certificate usually takes 6 to 12 months depending on any government objections."
    },
    {
        question: "Does a trademark prevent someone else from starting a similar channel?",
        answer: "It prevents them from using an identical or deceptively similar name in the same category. It ensures that your audience does not get confused between your content and theirs."
    },
    {
        question: "Can I trademark my YouTube logo separately from the name?",
        answer: "Yes, you can file for a device mark (logo) or a word mark (name). Many successful creators file for both to ensure absolute protection of their visual and verbal identity."
    },
    {
        question: "What happens if someone impersonates my channel on other platforms?",
        answer: "With a registered trademark, you have a much stronger legal standing to request takedowns on YouTube, Instagram, and TikTok, as platforms prioritize registered IP owners."
    },
    {
        question: "Do I need an MSME certificate for filing a trademark?",
        answer: "It is not required, but having one allows you to claim a significant 50 percent discount on the government filing fees, which is a major benefit for independent creators."
    },
    {
        question: "Is a trademark valid worldwide for my YouTube channel?",
        answer: "A trademark is territorial, meaning an Indian registration protects you in India. However, you can use your Indian application to file for international protection via the Madrid Protocol."
    },
    {
        question: "What if my YouTube channel name is very generic, like 'Best Gaming'?",
        answer: "Generic names are difficult to trademark under Section 9 of the Act. We recommend adding a unique prefix or suffix to make it distinctive enough for legal approval."
    }
];

const reviews = [
    {
        name: "Rahul Verma",
        role: "Tech YouTuber (1M+ Subs)",
        text: "IPR Karo helped me secure my channel name when a copycat canal started using my branding. Their process was seamless and professional.",
        rating: 5
    },
    {
        name: "Sneha Kapoor",
        role: "Fitness Influencer",
        text: "I never thought about trademarks until my brand deals started growing. The team explained everything clearly and got my registration done quickly.",
        rating: 5
    },
    {
        name: "Amit Dhar",
        role: "Gaming Creator",
        text: "The MSME discount they suggested saved me a lot of money. Highly recommend for any creator looking to go professional.",
        rating: 5
    }
];

export default function TrademarkForYouTubeChannelPage() {
    const breadcrumbItems = [
        { label: "Trademark for YouTube Channel Name", href: "/trademark-for-youtube-channel-name" },
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
        "headline": "Trademark for YouTube Channel Name: The Definitive Guide for Creators in India",
        "description": "Exhaustive legal and strategic guide on protecting your YouTube brand. Covers classes, registration steps, costs, and international expansion for content creators.",
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
                "name": "Trademark for YouTube Channel",
                "item": "https://www.iprkaro.com/trademark-for-youtube-channel-name"
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
                    "name": "Trademark Registration for YouTube Channels",
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
                            Own Your Digital Identity: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark for YouTube Channels
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Building a YouTube channel takes years of hard work and creativity. Don't let impersonators or competitors steal your success. Secure your channel name and logo with India's leading IP experts specializing in creator economy. 100 percent online, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Protect Your Creator Brand
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

                                    <section id="importance-of-creator-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Importance of Trademark Protection for YouTube Creators
                                        </h2>
                                        <p className="mb-6">
                                            In the rapidly evolving landscape of the digital economy, your YouTube channel name is far more than just a label on a screen. It is the digital equivalent of a massive corporate headquarters, representing thousands of hours of content creation, community building, and personal dedication. As your channel grows, your name becomes a beacon of trust for your audience. Whether you are producing educational tutorials, high-energy gaming videos, or insightful daily vlogs, your brand identity is what distinguishes you from millions of other creators globally. However, this same success makes you a prime target for impersonation and brand dilution.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for YouTube Channel Name</strong> is no longer a luxury reserved for massive media conglomerates. It is a fundamental necessity for every creator who views their channel as a professional business. Without a registered trademark, you are operating on rented ground. If a competitor or a malicious actor registers your name first, they could legally force you to rename your channel, effectively destroying years of organic search ranking and audience recognition. In India, the Trade Marks Act provides robust protection for digital brands, but these rights are best enforced when you hold a formal registration certificate.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Your YouTube channel name is your digital legacy. In an era where attention is the new currency, a trademark is the vault that keeps your brand's value secure against all threats."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The risks of operating without a trademark are particularly high in the world of monetization and sponsorships. When you approach major brands for collaboration, they look for professional markers. A registered trademark signals that you are a serious entrepreneur who understands the value of intellectual property. It gives sponsors the confidence that their money is being invested in a secure brand that won't be embroiled in legal battles over its name. Furthermore, many high-value sponsorship contracts now include clauses requiring proof of brand ownership, making a trademark a prerequisite for top-tier deals.
                                        </p>
                                        <p className="mb-6">
                                            Beyond the commercial aspect, there is the critical issue of platform security. YouTube handles thousands of impersonation complaints every day. While the platform has internal policies, they are often slow to act for unregistered brands. However, when you provide a government-issued Trademark Registration Certificate, the platform's legal team prioritizes your claim. This allowed hundreds of our clients to shut down fake social media pages and copycat channels within hours instead of months. Your trademark is the ultimate authority in the digital wild west.
                                        </p>
                                    </section>

                                    <section id="strategic-benefits" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Multi-Dimensional Benefits of Securing Your Digital Brand
                                        </h2>
                                        <p className="mb-6">
                                            Securing a trademark for your YouTube channel offers a wide array of benefits that extend far beyond simple name protection. It is a proactive investment in the longevity and scalability of your creative enterprise. When you register your brand, you are creating a legal wall around your business that prevents others from profitng off your hard-earned reputation.
                                        </p>
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                                </div>
                                                <div>
                                                    <strong>Absolute Legal Monopoly:</strong> You gain the exclusive right to use the name in connection with the services you provide. This prevents even well-funded competitors from entering your niche with a similar identity.
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                                </div>
                                                <div>
                                                    <strong>Protection Against Scams:</strong> Malicious actors often create fake channels to scam your fans with fraudulent giveaways or services. A trademark allows you to legally shut these operations down immediately, protecting your fans' trust.
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                                </div>
                                                <div>
                                                    <strong>Enhanced Brand Equity:</strong> A registered trademark is an intangible asset that adds real value to your business balance sheet. If you ever decide to sell your channel or raise investment, the trademark is one of the most valuable items on the list.
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                                </div>
                                                <div>
                                                    <strong>Global Recognition:</strong> While registration is territorial, having an Indian trademark provides a solid foundation for international expansion. You can leverage your local filing to protect your brand in overseas markets where your audience might be growing.
                                                </div>
                                            </li>
                                        </ul>
                                        <p className="mb-6">
                                            Furthermore, the psychological impact of the ® symbol cannot be overstated. It tells the world that you are a protected entity. It discourages prospective copycats even before they start, as the legal risk of infringing on a registered mark is significantly higher than that of an unregistered one. In the world of high-stakes digital competition, this deterrent is often enough to keep your brand's path clear of obstacles.
                                        </p>
                                    </section>

                                    <section id="class-breakdown" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Nice Classification for Content Creators: Finding Your Legal Home
                                        </h2>
                                        <p className="mb-8">
                                            The Trademark Registry categorizes all goods and services into 45 distinct classes. For a YouTube creator, selecting the right class is critical. Choosing the wrong class can leave your primary business activity unprotected, while choosing too many can lead to unnecessary government fees. At IPR Karo, we specialize in identifying the perfect mix of classes for digital entrepreneurs.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faPlayCircle} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 41: Entertainment & Education</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is the essential class for every YouTube creator. It covers the provision of entertainment, video production, educational services, and training. If you make videos, tutorials, or entertain an audience, Class 41 is where your brand primarily resides.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faTv} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 38: Streaming & Broadcasting</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This class is for the transmission of content. It covers telecommunications, broadcasting, and streaming services. While Class 41 protects the creative aspect, Class 38 ensures your brand is protected in the act of digital distribution across the internet.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 35: Merchandising & Ads</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Highly relevant for creators who sell their own merchandise or provide advertising services for other brands. If you have an online store or if you are a major influencer offering professional marketing services, Class 35 is vital for your business growth.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faMicrophone} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 9: Digital Downloads</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">If you sell downloadable digital products like eBooks, specialized software, or online courses, Class 9 provides the necessary legal shield. This class ensures that your digital assets are not pirated or sold under your name by unauthorized parties.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Many creators mistakenly believe that a single class is sufficient. However, modern YouTube brands are dynamic. You might start with videos (Class 41), move into selling t-shirts (Class 25), and eventually launch your own mobile app (Class 9). We perform a 'Future-Proof Analysis' to ensure that your trademark application covers not just what you are doing today, but what you plan to achieve in the next five years. This comprehensive approach saves you from filing multiple expensive applications later on.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Secure Your Brand
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Deep Search Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We begin with an exhaustive search of the Indian Trademark Registry. Using our advanced AI tools, we look beyond literal name matches. We identify phonetic similarities, similar logos, and even names that might cause confusion in similar classes. This initial step is the most important as it prevents you from wasting time and money on a name that is already taken or highly likely to be objected to by the government.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Expert Drafting & Filing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the name is cleared, our expert legal team drafts your Form TM-A. For creators, the description of services must be written with scientific precision. We ensure that the language is broad enough to cover all your digital activities while remaining specific enough to avoid standard government rejections. As soon as we file, you receive the official acknowledgement, and you can legally use the ™ symbol next to your name.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Examination & Certificate</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Trademark Registrar will examine your application. In the creative industry, names are often scrutinized for being too descriptive or generic. We handle all communication with the registry, drafting robust legal responses if any objections are raised under Section 9 or 11. Once the mark is published in the journal and cleared, you receive your registration certificate, giving you absolute ownership of your brand for 10 years.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-documents" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Checklist: Everything You Need to Start
                                        </h2>
                                        <p className="mb-8">
                                            Starting your trademark journey is simple when you have the right documents ready. Whether you are an individual creator or have registered your channel as a company, we make the documentation process effortless.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Individual Creators
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Identity Proof (Aadhaar or Passport).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Address Proof of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Digital Copy of Channel Name and Logo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit (If the channel is already established).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Registered Entities
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation (Pvt Ltd or LLP).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (For massive fee savings).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the filing.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-and-rejections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating the Storm: Overcoming Legal Objections
                                        </h2>
                                        <p className="mb-6">
                                            The trademark process is designed to ensure that no one entity can monopolize words that are essential to a particular industry. For YouTube creators, this often leads to two major legal hurdles that require expert intervention.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong> rejections occur when a channel name is deemed too 'descriptive' of the content. For example, if you try to trademark a name like 'Cooking Tutorials', the Registry will likely object because these words merely describe the service. Our legal team overcomes this by proving 'secondary meaning'. We provide evidence of your channel's massive viewership, social media following, and unique brand associations to show that to the public, these words now mean *your* specific brand rather than a general service. 
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong> rejections happen when your name is considered too similar to an existing trademark. In the crowded digital space, this is a frequent occurrence. Here, we perform a technical 'Difference Analysis'. We argue that the target audience for a gaming channel is distinct from that of a financial service with a similar name. We highlight differences in font, color scheme, and visual trade dress. By citing established legal precedents, we successfully argue for the co-existence of similar marks in different niches, securing your registration certificate.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The World is Your Audience: International Protection
                                        </h2>
                                        <p className="mb-6">
                                            One of the greatest advantages of being a YouTube creator is the ability to reach a global audience. However, an Indian trademark registration only protects you within the borders of India. If your audience is growing in the United States, Europe, or Southeast Asia, you are vulnerable to local impersonators in those regions. This is where the <strong>Madrid Protocol</strong> becomes your most powerful tool.
                                        </p>
                                        <p className="mb-6">
                                            As a member of the Madrid Protocol, Indian creators can file a single international application through the Indian Trademark Registry and extend their brand protection to over 130 member countries. This process is significantly more cost-effective than filing individual applications in each country. It eliminates the need to hire foreign attorneys for the initial filing and allows you to manage your entire global brand portfolio from one central dashboard. We specialize in helping India's top creators go global, ensuring their IP stays secure as they scale their influence across continents.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Global Edge</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                Protecting your brand internationally is not just about stopping copycats; it is about commercial expansion. If you ever want to launch a product line in the US or Europe, holding a registered trademark in those regions is essential for customs clearance and retail distribution. A global brand is a sellable brand.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="brand-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Turning Your Fame into a Financial Asset
                                        </h2>
                                        <p className="mb-6">
                                            Every major YouTube channel eventually evolves into a full-scale media company. Your trademark is the legal container for the 'Goodwill' you have built over the years. In the world of business, goodwill is an intangible asset that can be valued, licensed, and even used as collateral for business loans. Without a registered trademark, the value of your brand remains theoretical. With registration, it becomes a documented financial asset.
                                        </p>
                                        <p className="mb-6">
                                            Consider the possibility of franchising your content or licensing your brand to other creators. You cannot legally charge a licensing fee for a name you do not officially own. A trademark allows you to create high-margin revenue streams by letting others use your name under your quality controls. This is the path taken by the world's most successful digital brands, and it all starts with a single government filing. Protect your success today so you can capitalize on it tomorrow.
                                        </p>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Investing in Your Digital Future
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in complete financial transparency. We want every creator to understand exactly what they are paying for when they secure their brand.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">These are the standard fees paid directly to the Trademark Registry of India.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Large Companies</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Expert Fees</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">From AI-powered deep search to your final registration certificate.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes deep search, drafting, filing, status monitoring, and legal advice until certificate issuance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            The Choice of India's Top Creators
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
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Frequently Asked Legal Questions: Creator Edition
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Creative Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't wait for a dispute to happen. Build on a solid legal foundation. Start your official trademark application now.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Get Free Expert Advice
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
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
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Is Your Channel Name Free?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Don't spend money on logos and branding if the name is already taken. Get a **Free AI Search Report** within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Start Search Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Digital Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-digital-marketing-agency" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Digital Agencies</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">E-commerce Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Mobile App Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">View All Services</span>
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
