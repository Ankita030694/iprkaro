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
    faCameraRetro,
    faHashtag,
    faUsers,
    faShareAlt,
    faBullhorn,
    faStar,
    faMobileAlt,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Instagram Brand | Protect Your Identity India',
    description: 'The ultimate 5000+ word guide on trademarking your Instagram brand in India. Secure your handle, prevent impersonation, and build digital equity. Expert legal insights for influencers and businesses.',
    keywords: [
        'trademark for instagram brand',
        'social media brand registration india',
        'protect instagram handle identity',
        'class 41 trademark for influencers',
        'instagram content creator legal protection',
        'register instagram logo india',
        'prevent instagram impersonation',
        'trademark for digital creators',
        'social media intellectual property',
        'instagram monetization legal security'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Instagram Brands in India',
        description: 'Secure your digital legacy. Protect your Instagram brand name and logo with India\'s premier IP legal experts. 100% online, same-day filing.',
        url: 'https://www.iprkaro.com/trademark-for-instagram-brand',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-instagram-brand',
    },
};

const tocSections = [
    { id: 'strategic-necessity', title: 'Strategic Necessity' },
    { id: 'brand-risks', title: 'Brand Risks' },
    { id: 'class-breakdown', title: 'Instagram Classes' },
    { id: 'registration-steps', title: 'Registration Process' },
    { id: 'required-documentation', title: 'Legal Checklist' },
    { id: 'handling-objections', title: 'Legal Hurdles' },
    { id: 'international-expansion', title: 'Global Protection' },
    { id: 'valuation-monetization', title: 'Asset Valuation' },
    { id: 'costs-and-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Is it really necessary to trademark an Instagram handle in India?",
        answer: "Yes, it is highly necessary because your handle is often your primary business identifier. Without a trademark, you have no legal ownership over the name even if you have millions of followers. A trademark gives you the power to shut down imposters and reclaim your brand name if it is ever stolen or misused."
    },
    {
        question: "Which trademark class is most suitable for an Instagram influencer?",
        answer: "Class 41 is the gold standard for entertainment and digital content services. However, if you are also doing promotions or have a talent management aspect, Class 35 for advertising and marketing is equally important for a complete legal shield."
    },
    {
        question: "Can I trademark a name that is already used by someone on Instagram but not trademarked?",
        answer: "Yes, you can apply for it. India follows a 'first-to-file' system but also respects 'prior use'. If the other person has been using it longer, they might oppose you. We conduct a deep search to identify such risks before you spend any money on filing."
    },
    {
        question: "How does a trademark help in recovering a hacked or impersonated Instagram account?",
        answer: "Instagram's legal team prioritizes requests from registered trademark owners. While standard recovery processes are slow, submitting a government issued Trademark Registration Certificate proves your legal authority over the brand, forcing the platform to take immediate action against unauthorized users."
    },
    {
        question: "Do I need to register a separate trademark for my Instagram logo?",
        answer: "It is considered a best practice. You can file for a word mark (the name) and a device mark (the logo). For comprehensive protection, many influencers file for both to ensure their entire visual and verbal identity is legally secured."
    },
    {
        question: "How long does the trademark registration process take for a digital brand?",
        answer: "You can start using the TM symbol within 24 hours of filing your application. The final registration certificate usually arrives in about 6 to 12 months, provided there are no major objections from the government or third parties."
    },
    {
        question: "Can I use my MSME certificate for filing an Instagram trademark?",
        answer: "Absolutely. In fact, we highly recommend it. An MSME or Udyam registration allows individual influencers and small agencies to get a 50 percent discount on the government filing fees, making the process very affordable."
    },
    {
        question: "What if my Instagram brand name is common, like 'FashionTipsIndia'?",
        answer: "Descriptive names often face objections under Section 9 of the Trade Marks Act. We help you build a case for 'Acquired Distinctiveness' by showing your follower count, media mentions, and consistent use, which can convince the registrar that the name has become unique to you."
    },
    {
        question: "Does an Indian trademark protect my Instagram brand in other countries?",
        answer: "A trademark is territorial, so an Indian registration only protects you in India. However, you can use your Indian application as a base to file for international protection in over 130 countries through the Madrid Protocol, which is efficient and cost-effective."
    },
    {
        question: "Is there a renewal requirement for Instagram trademarks?",
        answer: "Yes, your trademark is valid for 10 years from the date of the application. You can renew it indefinitely for subsequent 10 year periods as long as you continue to use the brand and pay the renewal fees."
    },
    {
        question: "Can I trademark my personal name if it is also my Instagram handle?",
        answer: "Yes, many famous creators trademark their own names to prevent unauthorized commercial use and to control how their persona is used in endorsements and brand deals. It is a vital step in building a personal brand empire."
    },
    {
        question: "What happens if a brand asks me to change my handle because of their trademark?",
        answer: "If they have a registered trademark and you do not, you are at a significant legal disadvantage. However, if you have been using the handle for many years, you may have 'prior use' rights. This is why getting your own trademark early is crucial to prevent such bullying."
    }
];

const reviews = [
    {
        name: "Ananya S.",
        role: "Lifestyle Influencer (500K followers)",
        text: "After a copycat account started using my name to sell fake courses, I realized I needed legal protection. IPR Karo handled everything perfectly. Now I have my certificate and peace of mind.",
        rating: 5
    },
    {
        name: "Rohit Malhotra",
        role: "Founder, Zenith Media Agency",
        text: "We manage over 20 creators, and we use IPR Karo for all their trademark needs. Their deep search process is the best in India. They found potential conflicts we would have never seen.",
        rating: 5
    },
    {
        name: "Jessica D.",
        role: "Travel Blogger",
        text: "The MSME discount they suggested was a lifesaver. As a solo creator, every rupee counts. They made a complex legal process feel very simple and straightforward.",
        rating: 5
    }
];

export default function TrademarkForInstagramBrandPage() {
    const breadcrumbItems = [
        { label: "Trademark for Instagram Brand", href: "/trademark-for-instagram-brand" },
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
        "headline": "Trademark for Instagram Brand: The Complete Legal Guide for Digital Success",
        "description": "An exhaustive manual on protecting your Instagram identity. Learn about trademark classes, registration steps, costs, and international protection for influencers.",
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
                "name": "Trademark for Instagram Brand",
                "item": "https://www.iprkaro.com/trademark-for-instagram-brand"
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
                    "name": "Trademark Registration for Instagram Brands",
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
                            Own Your Visual Empire: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark for Instagram Brands
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the world of social media, your handle and branding are your most valuable currency. Stop copycats from diluting your hard earned success. Secure your Instagram identity with India's most trusted IP legal experts. 100 percent online, same day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Claim Your Legal Identity
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto">
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

                                    <section id="strategic-necessity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Necessity of Trademark Protection for Instagram Brands
                                        </h2>
                                        <p className="mb-6">
                                            In the current era of digital commerce, social media platforms have transformed from simple networking sites into massive global marketplaces. Among these, Instagram stands as a titan of visual branding. For an influencer, content creator, or digital business, your Instagram handle is far more than just a username. It is your storefront, your brand identity, and the single most critical point of contact with your audience. As your follower count grows and your engagement numbers climb, your digital identity becomes an extremely valuable intellectual asset. However, without a formal trademark, this asset exists on borrowed time. 
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Instagram Brand</strong> is no longer just an option for celebrities; it is a fundamental pillar of digital business governance. In a platform where handles can be sold for thousands of dollars in the black market and impersonation accounts can be set up in seconds, a registered trademark is your only robust legal defense. It provides you with the exclusive legal right to use your name and logo across the country, preventing anyone else from profiting off the goodwill you have spent years building. 
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Your Instagram handle is the heart of your digital business. A trademark is the shield that ensures no one can ever take it away from you or dilute its value in the marketplace."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The implications of ignoring trademark protection are severe and often irreversible. Imagine waking up one day to find that a competitor has registered your handle as their own trademark. Or worse, a malicious actor starts using your name to sell low quality products, effectively destroying the trust you have cultivated with your followers. Without a trademark, getting Instagram to intervene is a slow and often unsuccessful process. But with a government issued registration, you have the legal power to shut down infringing accounts and protect your audience from being misled.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the value of your brand in the eyes of corporate sponsors and investors is directly linked to your legal ownership of it. When a brand signs a high value partnership deal with you, they are investing in your identity. If they find out that you don't even legally own your own name, the relationship can sour instantly. A registered trademark is a mark of professional maturity, signaling to the world that you are not just a hobbyist, but a serious professional who values their intellectual property and business longevity.
                                        </p>
                                        <p className="mb-6">
                                            As you progress in your creative journey, you will find that your name becomes synonymous with your content quality. This association is what we in the legal field call 'Goodwill'. Protecting this goodwill is essential. If a third party uses your name to endorse products you don't approve of, your reputation is the one that suffers. By holding a trademark, you retain complete authority over your brand's voice and associations. You decide who can and cannot use your identity, ensuring that your brand story remains authentic and under your absolute control.
                                        </p>
                                        <p className="mb-6">
                                            In the Indian context, the Trade Marks Act of 1999 provides comprehensive protection for names, logos, and even specific color combinations that have become associated with a brand. For an Instagram brand, this means you can protect not just your name, but also the unique visual elements of your profile. This level of protection is vital in an ecosystem where visual discovery is the primary driver of growth. Your trademark ensures that your 'first impression' remains your own, legally secured against any form of imitation or theft.
                                        </p>
                                    </section>

                                    <section id="brand-risks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding the Critical Intellectual Property Risks on Social Media
                                        </h2>
                                        <p className="mb-6">
                                            The decentralized and rapid nature of Instagram makes it a breeding ground for various intellectual property violations. Understanding these risks is the first step toward building a strong legal defense. Many creators only realize the importance of a trademark after a significant problem occurs, by which time the damage is often widespread and difficult to contain.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mr-4" />
                                                    <h3 className="font-bold text-lg text-gray-900">Impersonation & Phishing</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Fake accounts often steal your professional photos and handle name to trap your followers into fraudulent giveaways or malicious links. A trademark allows you to use Instagram's expedited legal tools to shut these dangerous accounts down within a matter of hours.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faShareAlt} className="w-8 h-8 mr-4" />
                                                    <h3 className="font-bold text-lg text-gray-900">Brand Dilution</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">When multiple accounts use confusingly similar names, your audience authority gets fragmented. This makes it harder for new potential followers to identify your official profile, directly impacting your growth and commercial conversion rates.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 mr-4" />
                                                    <h3 className="font-bold text-lg text-gray-900">Reverse Hijacking</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is a major strategic risk where a competitor registers your established brand name as their trademark first and then uses that legal standing to force you to rename your profile. Only your own registration can prevent such a devastating loss.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-8 h-8 mr-4" />
                                                    <h3 className="font-bold text-lg text-gray-900">Unauthorized Merchandising</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Third parties may start selling physical products using your logo and handle. Without a registered trademark in the relevant product classes, you have very limited legal standing to stop these unauthorized shops from profiting off your name.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            The digital landscape is inherently global and perpetually active. An incident that starts with a single copycat account can quickly escalate into a full scale brand identity crisis that threatens your livelihood. By having a trademark in place, you are moving from a vulnerable, reactive position to a secure, proactive one. You are telling the entire marketplace that your brand is a protected legal entity. This clear signal acts as a massive deterrent for potential infringers. Most malicious actors target unregistered brands because they know the legal battle will be much easier or non-existent. When they see the ® symbol, they usually move on to an easier, less protected target.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, consider the impact of trademark infringement on your SEO and search discovery. If someone else is using your name, they might rank for your keywords, stealing your organic traffic and potential leads. A registered trademark gives you the right to issue 'Cease and Desist' notices not just to the account holders, but also to search engines to remove infringing results. This level of total brand control is only possible when you hold a government recognized trademark certificate.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the risk of data theft and account hacking is real. In many cases where an account is hacked and the handle is changed, having a trademark registered in your name is the single most effective piece of evidence to prove to Instagram's internal safety teams that you are the rightful owner. It provides a clear legal trail that predates the hacking incident, making the recovery of your digital assets significantly faster and more certain. Your trademark is, in many ways, the ultimate 'Blue Tick' of legal ownership.
                                        </p>
                                    </section>

                                    <section id="class-breakdown" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Choosing the Right Trademark Classes for Instagram Success
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Registry in India, following the international Nice Classification, divides all products and services into 45 specific classes. For an Instagram brand, identifying the correct classes is both an art and a science. Filing in too few classes leaves you vulnerable in key areas, while filing in too many can lead to unnecessary costs and bureaucratic delays. We specialize in finding the perfect strategic balance for digital entrepreneurs and influencers.
                                        </p>
                                        <div className="space-y-8">
                                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white p-6 rounded-2xl shadow-lg">
                                                    <FontAwesomeIcon icon={faCameraRetro} className="w-12 h-12" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Class 41: The Creative Home</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        This is the single most important class for every digital content creator on Instagram. It covers entertainment services, education, training, and the 'production of video content'. Whether you are a fitness coach sharing routines, a beauty vlogger giving tutorials, or a comedian posting reels, Class 41 is where your brand primarily resides. It protects your brand name in the context of being a source of high quality information and entertainment.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white p-6 rounded-2xl shadow-lg">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-12 h-12" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Class 35: The Business Engine</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        If you earn money through brand collaborations, affiliate marketing, or if you run a boutique marketing agency, Class 35 is vital. This class covers 'marketing services' and the 'provision of advertising space'. As you move from being a solo creator to a professional who provides promotional services to other brands, having protection in Class 35 ensures that your commercial identify is legally secured against any form of competition.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white p-6 rounded-2xl shadow-lg">
                                                    <FontAwesomeIcon icon={faMobileAlt} className="w-12 h-12" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Class 38: The Transmission Shield</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        While Class 41 covers the *content* itself, Class 38 covers the *act of transmission*. It includes services related to telecommunications and providing access to digital platforms. In our experience, this class is a strategic must for creators who plan to eventually launch their own independent apps, forums, or member-only streaming platforms. It ensures your brand is protected as it moves across the digital infrastructure of the internet.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white p-6 rounded-2xl shadow-lg">
                                                    <FontAwesomeIcon icon={faCheck} className="w-12 h-12" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Class 25 & 9: Scalability Classes</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        For those with ambitions to launch a clothing line (Class 25) or downloadable digital products like presets, courses, or eBooks (Class 9), these classes are the foundation of your merchandizing empire. Merchandizing is the primary scaling strategy for top tier Instagram brands. Registering in these classes early prevents opportunists from selling inferior products using your branding and damaging your hard won reputation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            We follow a 'Future Mapping' strategy for every digital brand we help. We don't just look at what your Instagram profile is doing today. We discuss where you want your business to be in the next five to ten years. If you plan to launch a physical store, a specialized software tool, or a series of offline mentorship workshops, we ensure that your trademark application covers those classes from the very start. This forward thinking approach saves you from the future hassle and expense of filing multiple new applications every time your brand enters a new market segment.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, misclassification is one of the most common reasons for trademark rejection or legal weakness. If you register in Class 41 but your primary income is from selling beauty products (Class 3), your protection will be insufficient. Our legal team performs a 'Revenue Flow Audit' to identify exactly where your brand's financial value lies and ensures that those specific areas are given the highest level of legal priority in the registration process.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Absolute Legal Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: AI Driven Phonetic Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We start with a search that goes far beyond simple word matches. Our proprietary AI tools analyze phonetic similarities, visual look alikes, and existing marks in all related classes. For Instagram brands, where names often utilize creative spellings or scientific prefixes, this deep analysis is the only way to ensure safety. We provide you with a comprehensive report so you can proceed with 100 percent confidence, knowing your chosen name is legally vacant and ready for your ownership.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Legal Drafting & Digital Filing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the name is cleared, we draft your official trademark application with extreme technical precision. The description of services is written to encompass every potential monetization angle of your brand. We handle the entire digital filing process, providing you with the official government receipt within 24 hours. From this moment, you can legally use the ™ symbol, signaling to the entire industry that your brand is now a protected intellectual asset.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Government Prosecution & Issuance</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The registration does not stop at filing. We actively monitor your application through the government examination phase. If any objections are raised regarding the distinctiveness of your name, our senior IP attorneys draft robust legal responses. We gather evidence of your brand's market presence to prove your unique identity. Once the mark is published and cleared, you receive your final registration certificate, granting you the exclusive power to use the ® symbol for 10 years.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            The entire process is designed to be invisible to you. As an influencer or business owner, your focus should be on creating high quality content and engaging with your audience. We take the entire legal burden off your shoulders. From the initial search result to the final delivery of your registration certificate, our team manages every legal detail, giving you regular updates and total peace of mind. We have streamlined the process so that what used to take months of paperwork now happens with a few simple digital clicks.
                                        </p>
                                    </section>

                                    <section id="required-documentation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Checklist: Documentation for a Secure Filing
                                        </h2>
                                        <p className="mb-8">
                                            Building a strong legal foundation requires the correct documentation from the start. For a social media brand, the Registry looks for specific evidence of brand use. We ensure that your documentation is not only complete but also strategically framed to ensure a smooth path to registration.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Individual Creators & Influencers
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Applicant's PAN Card and Aadhaar Card.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>High resolution image of your Brand Logo or Word Mark.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Highly recommended for 50 percent fee savings).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit: Proof of first use (Screenshots of early posts or profile creation).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Social Media Agencies & Teams
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation (for Pvt Ltd or LLP entities).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN Card and official GST Registration details.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Authorization Letter or Board Resolution from the Director.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Proof of brand use in B2B contracts or client invoices (if applicable).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            One of the most critical documents for an established brand is the 'User Affidavit'. If you have been using your handle for several years, you have already built significant goodwill. The affidavit is a formal legal document where you declare the duration of your use. Accompanying this with dated screenshots from Instagram or media mentions allows us to claim 'Prior Use' rights. This is a powerful legal shield that can protect you even if someone else tries to register a similar name later on. We help you compile this evidence in a way that is highly persuasive to the Trademark Registrar.
                                        </p>
                                    </section>

                                    <section id="handling-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Legal Hurdles: Navigating Section 9 and 11
                                        </h2>
                                        <p className="mb-6">
                                            The Indian Trade Marks Act is designed to prevent individual entities from monopolizing words that are generic or essential to the trade. For digital content creators, this often leads to two specific legal hurdles that require sophisticated legal handling to overcome.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong> objections are raised if the registry finds your name 'descriptive'. For example, a name like 'ProFashionTips' might be seen as merely describing the type of service. Our legal strategy involves proving that the name has 'acquired distinctiveness'. We provide the registry with data on your massive engagement rates, your media appearances, and your consistent branding across multiple platforms to prove that to the average Instagram user, this name no longer just means fashion tips, it specifically identifies *your* professional identity. 
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong> objections occur when your mark is deemed too similar to an existing one. In the densely populated ecosystem of Instagram, this is almost inevitable. We utilize a 'Market Segmentation' defense here. We argue that your audience (for instance, Gen Z fitness enthusiasts) is distinctly different from the audience of a software firm with a similar name. By highlighting visual differences in your trade dress and citing established high court precedents, we successfully argue for the peaceful co-existence of similar marks in different niches.
                                        </p>
                                        <p className="mb-6">
                                            Beyond these common sections, social media brands can also face 'Opposition' from third parties. This happens after the mark is published in the Trade Marks Journal. If a competitor feels your brand is too close to theirs, they have four months to file a formal opposition. This is where having a professional IP firm like IPR Karo becomes invaluable. We provide robust litigation support, drafting high quality counter statements and representing you in hearings to ensure your registration is not derailed by competitive bullying.
                                        </p>
                                    </section>

                                    <section id="international-expansion" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Protecting Your Global Influence: The Madrid Protocol
                                        </h2>
                                        <p className="mb-6">
                                            Every major Instagram brand eventually reaches an international audience. Whether you have followers in the United States, the UK, or Southeast Asia, you are operating as a global entity. However, a fundamental truth of trademark law is that it is territorial. An Indian registration protects you only within India. This is where the <strong>Madrid Protocol</strong> becomes your most critical expansion tool.
                                        </p>
                                        <p className="mb-6">
                                            As a member of this international treaty, Indian creators can file a single application through the Indian Trademark Office and extend their protection to over 130 member countries. This system is extremely efficient, allowing you to secure your brand in the world's largest markets without the need to manage dozens of different legal processes in various languages. We manage this entire international portfolio for you, ensuring that as your global influence expands, your legal ownership remains absolute in every major jurisdiction.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Global Advantage</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                An international trademark is not just a defensive shield; it is a powerful commercial asset. It signifies to global sponsors that you are a world class creator. It is also essential if you ever want to launch physical products in international retail markets, providing you with the necessary legal clearance to operate globally without fear of brand hijacking.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, global protection is the only way to effectively handle cross border impersonation. If a malicious actor in another country starts selling courses or products using your identity, an Indian trademark will not help you in their local courts. But a Madrid Protocol registration gives you the standing to take legal action across borders, ensuring your reputation is protected regardless of where the infringer is located. This level of total brand coverage is what separates the top 1 percent of creators from everyone else.
                                        </p>
                                    </section>

                                    <section id="valuation-monetization" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Turning Your Fame into a Tangible Financial Asset
                                        </h2>
                                        <p className="mb-6">
                                            As an Instagram creator moves from being a solo influencer to a high revenue media company, the conversation must shift toward brand asset valuation. In any potential acquisition, merger, or high value legacy deal, your trademark is the legal vessel for all the 'Goodwill' you have built over the years. In professional business accounting, goodwill is a massive intangible asset that adds millions to a company's valuation. Without a registered trademark, this value remains purely theoretical. With it, it becomes a documented financial asset.
                                        </p>
                                        <p className="mb-6">
                                            Additionally, you cannot legally license your brand to third parties without a registered trademark. Whether you are franchising your content format or licensing your name for a beauty line or a tech product, a trademark is the legal prerequisite for any such contract. It gives you the power to dictate exactly how your name is used and ensures you receive fair royalty payments for its use. At IPR Karo, we help you understand the full financial potential of your intellectual property, turning your online fame into a powerful engine for long term generational wealth.
                                        </p>
                                        <p className="mb-6">
                                            Think about the long term. Many creators eventually move away from the camera and transition into a more executive role. Your trademark is what allows you to continue profiting from your legacy long after you have stopped posting daily content. It is the key to creating a brand that can outlive your own active participation, and that level of business sustainability only begins when you take the definitive step of legal registration. Don't just build a profile; build a protected, valuable, and tradable brand empire.
                                        </p>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Financial Clarity: Understanding Registration Costs
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in complete transparency. Understanding the financial requirements allows you to budget for your brand's security as a legitimate business expense.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">These are the non-negotiable fees paid to the Intellectual Property Office of India.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Large Corporations</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Expert handling from initial deep search to final certificate issuance.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm shadow-inner">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes deep AI search, drafting, status monitoring, and regular updates until registration is complete. Includes all legal communication with the registry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                                            Trust from India's Premier Instagram Community
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden relative">
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full group-hover:bg-[rgb(110,94,147)] transition-colors opacity-20"></div>
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 relative z-10">"{review.text}"</p>
                                                    <div className="flex items-center relative z-10">
                                                        <div className="w-12 h-12 bg-gradient-to-tr from-[#0C002B] to-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-base">{review.name}</p>
                                                            <p className="text-xs text-gray-500 font-medium">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Influencer's Legal Handbook: FAQ
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50/50 p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black flex-shrink-0">QUESTION:</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-4 md:pl-24 leading-relaxed border-l-2 border-gray-200">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
                                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px]"></div>
                                        </div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Secure Your Visual Digital Legacy</h2>
                                            <p className="text-lg md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
                                                Building your Instagram brand took incredible vision and hard work. Don't leave your most valuable asset unprotected. Join the elite community of protected creators.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-[0_0_40px_rgba(110,94,147,0.4)] text-xl uppercase tracking-widest text-white">
                                                        Consult Legal Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="group">
                                                    <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300">
                                                        <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
                                                            <FontAwesomeIcon icon={faPhone} className="w-12 h-12" />
                                                        </div>
                                                        <div className="text-left">
                                                            <p className="text-xs uppercase tracking-widest opacity-60">Call Us Anytime</p>
                                                            <p className="text-xl font-black">+91-9289707648</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10 leading-tight">Check Your Handle Availability</h3>
                                <p className="text-sm opacity-60 mb-8 leading-relaxed relative z-10">
                                    Avoid expensive rebrands. Get a **Free AI Legal Search Report** within 24 hours to see if your brand name is legally available.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-lg transform hover:-translate-y-2 active:scale-95 text-white shadow-[0_10px_20px_rgba(110,94,147,0.3)]">
                                        Start Search Now
                                    </button>
                                </Link>
                                <div className="mt-10 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Direct Legal Support</p>
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-2xl hover:text-white transition-colors flex items-center justify-center tracking-tighter text-white">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-8 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-center">Creator Protection</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-for-youtube-channel-name" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all group-hover:scale-125"></div>
                                            <span className="font-bold text-base">YouTube Brand Safety</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-digital-marketing-agency" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all group-hover:scale-125"></div>
                                            <span className="font-bold text-base">Digital Agencies</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all group-hover:scale-125"></div>
                                            <span className="font-bold text-base">E-commerce Assets</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all group-hover:scale-125"></div>
                                            <span className="font-bold text-base">View All Industries</span>
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
