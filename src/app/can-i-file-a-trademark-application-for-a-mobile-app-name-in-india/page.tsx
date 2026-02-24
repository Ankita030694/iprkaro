import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMobileScreenButton,
    faCode,
    faCubes,
    faShieldHalved,
    faGlobe,
    faBriefcase,
    faCheckDouble,
    faChartLine,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Can I File a Trademark Application for a Mobile App Name in India? | 2026 Guide',
    description: 'Learn how to trademark your mobile app name, icon, and logo in India. Discover the dual classification of Class 9 and Class 42 for complete app protection.',
    keywords: [
        'can i file a trademark application for a mobile app name in india',
        'mobile app trademark registration india 2026',
        'trademark class 9 vs class 42 for mobile apps',
        'how to protect app name from clones india',
        'registering app icon as trademark india',
        'trademark for software as a service saas india',
        'ipr karo app brand protection guide',
        'app store trademark enforcement india',
        'ui ux design trademark india 2026',
        'startup app name registration process'
    ],
    openGraph: {
        title: 'App Armor: Trademarking Your Mobile Application in India (2026)',
        description: 'Secure your digital identity. From naming strategies to Play Store takedowns, master the forensics of mobile app trademark registration in India.',
        url: 'https://www.iprkaro.com/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The App Revolution' },
    { id: 'dual-classification', title: 'Dual-Classification Strategy' },
    { id: 'beyond-name', title: 'Icons, Logos, and Slogans' },
    { id: 'generic-trap', title: 'Avoid the Generic App Name Trap' },
    { id: 'filing-lifecycle', title: 'The Filing Lifecycle: TM-A to Store' },
    { id: 'uiux-protection', title: 'Protecting UI/UX and Look-Feel' },
    { id: 'app-store-disputes', title: 'Handling App Store Disputes' },
    { id: 'global-madrid', title: 'Global Expansion: Madrid Protocol' },
    { id: 'ai-apps', title: 'Trademarks and AI-Powered Apps' },
    { id: 'white-labeling', title: 'White-Labeling and Licensing' },
    { id: 'faqs', title: 'Mobile App TM: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Scale Securely' },
    { id: 'conclusion', title: 'Future-Proofing Your Digital Legacy' },
];

const faqs = [
    {
        question: "Is it mandatory to trademark a mobile app name in India?",
        answer: "While not mandatory, a trademark is the only forensic shield against clones and icon-pirates in the app stores. It is essential for investor due diligence in 2026."
    },
    {
        question: "Which trademark class should I choose for my mobile app?",
        answer: "For comprehensive protection, you should file under both Class 9 (Downloadable Software) and Class 42 (Software Services/SaaS)."
    },
    {
        question: "Can I trademark my app icon and logo too?",
        answer: "Yes. You can file for the app icon as a 'Device Mark' to prevent rivals from using a similar visual identity on the home screen."
    },
    {
        question: "Can I register a descriptive name like 'Free Music Downloader'?",
        answer: "No. Descriptive or generic names are rarely granted trademark protection. It is better to use 'Fanciful' or 'Arbitrary' names like Zomato or Instagram."
    },
    {
        question: "How does a trademark help with Play Store takedowns?",
        answer: "A registered trademark certificate from India is a powerful forensic tool used to get clone apps removed from Google Play and Apple App Store quickly."
    },
    {
        question: "What is the role of Class 42 in app trademarking?",
        answer: "Class 42 protects the services provided through the app, which is crucial for SaaS platforms that deliver value via the cloud."
    },
    {
        question: "Can I protect the UI/UX design of my app through a trademark?",
        answer: "Unique 'Look and Feel' (Trade Dress) and specific motion animations (Motion Marks) can be protected if they are distinctive of the brand."
    },
    {
        question: "How long does it take to register an app trademark in 2026?",
        answer: "Since the process is now digital-first, you can get a registration certificate in 6 to 10 months if there are no objections or oppositions."
    },
    {
        question: "Does an Indian trademark protect my app in the USA market?",
        answer: "Only in India. However, you can use your Indian filing as a base to apply for international protection in the USA via the Madrid Protocol."
    },
    {
        question: "Is social media keyword squatting illegal if I have a trademark?",
        answer: "Yes. Using a trademarked app name in meta-keywords to siphon traffic is 'Digital Passing Off,' and your registration allows you to stop it."
    },
    {
        question: "What if my app uses AI? Do I need a different trademark?",
        answer: "If you name your internal AI engine (e.g., 'Grok'), that name should be trademarked separately from the main app name."
    },
    {
        question: "Why choose IPR Karo for app trademarking?",
        answer: "IPR Karo understands the dual-class technical requirements and provides forensic advice to ensure your digital identity is bulletproof from day one."
    }
];

export default function MobileAppTrademarkPage() {
    const breadcrumbItems = [
        { label: "Mobile App TM Guide", href: "/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india" },
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
                "name": "Mobile App TM Guide",
                "item": "https://www.iprkaro.com/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india"
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
        "headline": "Can I File a Trademark Application for a Mobile App Name in India? | 2026 Forensic Guide",
        "description": "Secure your code and your brand. The complete guide to mobile app trademarking in India, covering Class 9, Class 42, and App Store enforcement.",
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
            "@id": "https://www.iprkaro.com/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "App Brand Protection Package",
        "description": "Digital-first trademark registration for mobile apps, covering multiple classes, UI/UX protection, and app store takedown assistance.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1420"
        }
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            App Armor: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Mobile App Trademarks 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-justify">
                            From naming strategies to Play Store takedowns, secure your digital legacy. Master the forensics of Class 9 and 42 registration in India. Secure your startup's future with surgical legal precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your App Name
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The App Revolution</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the digital-first economy of 2026, a mobile application is more than just code; it is the face of a company. Whether it is a fintech giant, a hyper-local delivery service, or a niche AI utility, the name and icon of an app are the primary touchpoints for millions of users.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        However, the Google Play Store and Apple App Store are flooded with "Look-alike" apps and "Icon-pirates" who thrive on stealing brand equity. For any developer, the question <strong>"can i file a trademark application for a mobile app name in india"</strong> is the most critical step in their roadmap.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In the digital shelf, your icon is your handshake. A trademark ensures that handshake belongs strictly to you."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        A registered trademark in India provides the forensic security needed to protect your app from clones, ensures you are "Investor-Ready," and allows for rapid global expansion via the Madrid Protocol.
                                    </p>
                                </section>

                                <section id="dual-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Dual-Classification Strategy</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        In 2026, the Indian Trademark Registry expects a multi-dimensional approach to software protection. To have a legally bulletproof brand, you must register in both classes.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Class 9 (The Goods)</h4>
                                            <p className="text-sm text-gray-600 text-justify">Covers the downloadable software itself, including the mobile application file, computer programs, and APIs.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Class 42 (The Services)</h4>
                                            <p className="text-sm text-gray-600 text-justify">Protects the 'Software as a Service' (SaaS) platform, hosting, and cloud-based value delivery to users.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="beyond-name" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Icons, Logos, and Slogans</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 text-justify">
                                                <FontAwesomeIcon icon={faCubes} className="text-[#6E5E93]" /> Professional Visual Assets
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>App Icon:</strong> Registration as a 'Device Mark' to prevent copycat icons on home screens.</li>
                                                <li className="flex gap-2 text-justify"><strong>Splash Screens:</strong> Securing the first-look animation or static logo that users see.</li>
                                                <li className="flex gap-2 text-justify"><strong>App Taglines:</strong> Catchy phrases used in the app store description as 'Slogan Marks'.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faMobileScreenButton} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="generic-trap" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Avoid the Generic App Name Trap</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Developers often choose descriptive names like "Food Delivery" or "Music Player." From a forensic standpoint, these are nearly impossible to trademark. In 2026, the Registry prioritizes:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl">Inherently Distinctive</h5>
                                            <p className="text-sm text-gray-500">Names like 'Zomato' or 'Instagram' with no dictionary link to the service.</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl">Suggestive Names</h5>
                                            <p className="text-sm text-gray-500">Names like 'Netflix' (Net + Flicks) that hint at the service subtly.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="filing-lifecycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Filing Lifecycle: TM-A to Store</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            { step: "Public Search", desc: "Digital search on IP India for phonetic similarities in Class 9 and 42." },
                                            { step: "Form TM-A Filing", desc: "Submitting owner details and User Affidavit if the app is already live." },
                                            { step: "Examination", desc: "The Registrar checks for distinctiveness and relative grounds of refusal." },
                                            { step: "Journal Publication", desc: "A 4-month window for competitors to file an opposition notice." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                                                <span className="bg-[#6E5E93] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                                                <div className="text-justify">
                                                    <strong className="text-[#0C002B] block text-xl mb-1">{item.step}</strong>
                                                    <p className="text-gray-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="uiux-protection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Protecting UI/UX and Look-Feel</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, Indian courts recognize the 'Look and Feel' (Trade Dress) of an app as protectable if it is unique. This includes specific color palettes and button layouts. Furthermore, unique opening animations can be registered as 'Motion Marks'.
                                    </p>
                                </section>

                                <section id="app-store-disputes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Handling App Store Disputes</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        A trademark certificate is a forensic weapon in the digital world.
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        {[
                                            { title: "Takedowns", text: "Removing clone apps from Google Play and Apple App Store using your R certificate." },
                                            { title: "ASO Hijacking", text: "Stopping competitors from using your trademark in meta-keywords." },
                                            { title: "Brand Identity", text: "Verified checkmarks on social media and store listings demand a trademark." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-[#6E5E93] mt-1" />
                                                <div className="text-justify">
                                                    <strong className="text-[#0C002B]">{item.title}:</strong> {item.text}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section id="global-madrid" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Global Expansion: Madrid Protocol</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Most apps are global from day one. An Indian registration is the "Base" for the world. Through the <strong>Madrid Protocol</strong>, you can use a single application to protect your app name in the USA, Europe, and UAE with forensic cost-efficiency.
                                    </p>
                                </section>

                                <section id="ai-apps" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Trademarks and AI-Powered Apps</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        If your app uses a specifically named AI engine (like Grok or Siri), that core name should be trademarked independently of the app name. In 2026, the distinction between the tool and the platform is a vital forensic pivot.
                                    </p>
                                </section>

                                <section id="white-labeling" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">White-Labeling and Licensing</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#0C002B] mb-2 uppercase tracking-wide">License Management</h4>
                                        <p className="text-gray-700 text-justify">If you build apps for others or white-label your software, a registered trademark allows you to legally assign rights or charge licensing royalties for the brand identity, not just the code.</p>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start text-justify">
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
                                            author: "Anshul Mehta",
                                            role: "Founder, PayDroid Fintech",
                                            rating: 5,
                                            date: "2024-10-02",
                                            text: "IPR Karo helped us secure Class 9 and 42 trademarks for our app. When a clone appeared on the Play Store, our R certificate got it removed in 24 hours.",
                                            avatar: "AM"
                                        },
                                        {
                                            author: "Sara Ibrahim",
                                            role: "CEO, GlowApp Beauty",
                                            rating: 5,
                                            date: "2024-08-14",
                                            text: "Our investors specifically asked for our trademark registration certificate during Series A. IPR Karo had us ready and compliant from day one.",
                                            avatar: "SI"
                                        },
                                        {
                                            author: "Rahul Varma",
                                            role: "Dev Lead, GameSphere India",
                                            rating: 5,
                                            date: "2024-06-25",
                                            text: "The advice on filing for the app icon separately was a game-changer. We successfully stopped three look-alike games in their tracks.",
                                            avatar: "RV"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Future-Proofing Your Digital Legacy</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        In the ocean of apps, your name is your lighthouse. It is the only thing that guides users back to you in a world of endless choices.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify text-justify">
                                        Filing a trademark for your mobile app in India is a business strategy for the digital age. Secure your digital identity with <strong>IPR Karo</strong> and lead the app revolution of 2026.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Your Digital Fortress</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't build on rented ground. Secure your app name and icon with the full power of Class 9 and 42. Start your forensic registration now.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Register Your App Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    App IP Audit
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Startup App Shield</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify text-justify">
                                    Protecting your app name is the first step in building a long-term tech company. Registering under Class 9 & 42 is our forensic specialty.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check App Name
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-justify">Software Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Class 9 & 42 Audit</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-cancel-or-dispute-someone-else-s-trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">TM Cancellation Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">App Tagline Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Opposition Defense</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-legal-protections-does-a-registered-trademark-provide-to-a-company" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Legal Protections</span>
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
