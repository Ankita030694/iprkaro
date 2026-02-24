import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGavel,
    faScaleBalanced,
    faHandcuffs,
    faBuildingShield,
    faBurst,
    faMagnifyingGlassChart,
    faGlobe,
    faFileContract,
    faTriangleExclamation,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What Happens When Someone Infringes Your Trademark in India | 2026 Guide',
    description: 'The ultimate forensic guide to trademark infringement remedies in India. Learn about civil injunctions, damages, criminal penalties, and 2026 case law.',
    keywords: [
        'what happens when someone infringes on my registered trademark in india',
        'trademark infringement remedies india 2026',
        'section 29 trade marks act 1999',
        'civil remedies for trademark infringement india',
        'criminal penalties for trademark infringement india',
        'trademark infringement case studies india 2026',
        'how to sue for trademark infringement in india',
        'anton piller and john doe orders india',
        'trademark counterfeiting penalties india',
        'cease and desist notice trademark india'
    ],
    openGraph: {
        title: 'Brand Under Attack? Trademark Infringement Remedies in India (2026)',
        description: 'Master the forensic legal path to stop infringers. From injunctions to criminal jail time, protect your brand identity with surgical precision.',
        url: 'https://www.iprkaro.com/what-happens-when-someone-infringes-on-my-registered-trademark-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-happens-when-someone-infringes-on-my-registered-trademark-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Violation of Brand Sanctity' },
    { id: 'statutory-foundation', title: 'Statutory Foundation: Section 29' },
    { id: 'civil-remedies', title: 'Civil Remedies: Injunctions & Damages' },
    { id: 'special-orders', title: 'Special Orders: Anton Piller & John Doe' },
    { id: 'criminal-remedies', title: 'Criminal Remedies: Jail & Fines' },
    { id: 'lifecycle', title: 'The Enforcement Lifecycle' },
    { id: 'case-analysis', title: '2026 Case Analysis: Asian Paints Case' },
    { id: 'deceptive-similarity', title: 'Proving Deceptive Similarity' },
    { id: 'counterfeiting', title: 'Counterfeiting vs. Infringement' },
    { id: 'online-infringement', title: 'Digital Infringement & Takedowns' },
    { id: 'faqs', title: 'Infringement Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Enforcement' },
    { id: 'conclusion', title: 'Protecting Your Perpetual Asset' },
];

const faqs = [
    {
        question: "What exactly constitutes trademark infringement in India?",
        answer: "Under Section 29, infringement occurs when an unauthorized person uses a mark that is identical or deceptively similar to a registered trademark for identical or similar goods/services, causing public confusion."
    },
    {
        question: "Can I take legal action if my trademark is not yet registered?",
        answer: "If your mark is unregistered, you cannot sue for 'infringement'. However, you can file a suit for 'Passing Off' under common law, which provides similar remedies like injunctions but requires higher proof of reputation."
    },
    {
        question: "What is the first step when I see someone using my brand name?",
        answer: "The forensic first step is to issue a Cease and Desist (C&D) notice. This is a formal legal warning demanding that the infringer stops using the mark. Many cases are settled at this stage."
    },
    {
        question: "What are the common civil remedies available?",
        answer: "Civil remedies include permanent and interim injunctions (stop orders), actual or punitive damages, and accounts of profits. You can also seek an order for the destruction of infringing goods."
    },
    {
        question: "Is trademark infringement a criminal offense in India?",
        answer: "Yes. Sections 103 and 104 provide for criminal penalties including imprisonment (up to 3 years) and fines (up to ₹2 lakh) for falsifying trademarks or selling counterfeit goods."
    },
    {
        question: "What is a 'John Doe' order in trademark law?",
        answer: "A John Doe (or Ashok Kumar) order is a forensic injunction against unknown infringers, allowing the brand owner to raid premises and seize counterfeit goods even if the specific seller's name isn't in the suit."
    },
    {
        question: "How long does a trademark infringement lawsuit take?",
        answer: "Interim relief (stay orders) can be obtained within a few weeks. However, a full trial for final judgment and damages typically takes 2-4 years in Indian courts."
    },
    {
        question: "Can I get compensation for lost profits?",
        answer: "Yes. You can opt for either 'Damages' (based on your loss) or 'Account of Profits' (where the infringer's illegal earnings are handed over to you)."
    },
    {
        question: "What is the 'Dominant Feature' test?",
        answer: "Courts look at the most essential part of the brand. If the dominant feature is copied (e.g., 'Asian' in Asian Paints), adding minor prefixes like 'Super' or 'New' will not prevent an infringement finding."
    },
    {
        question: "How do I stop someone from using my trademark as a domain name?",
        answer: "You can file a complaint under the INDRP (for .in domains) or UDRP (for .com/.net) to have the infringing domain transferred to you based on your trademark rights."
    },
    {
        question: "Does the size of the infringer matter?",
        answer: "No. The law protects your exclusive rights regardless of whether the infringer is a small local shop or a large corporation. Dilution of your brand is the forensic focus."
    },
    {
        question: "What are 'Anton Piller' orders?",
        answer: "These are court-ordered surprise search and seizure warrants that allow you to visit an infringer's premises without notice to secure evidence before it is destroyed."
    }
];

export default function TrademarkInfringementPage() {
    const breadcrumbItems = [
        { label: "Infringement Remedies Guide", href: "/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" },
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
                "name": "Infringement Remedies Guide",
                "item": "https://www.iprkaro.com/what-happens-when-someone-infringes-on-my-registered-trademark-in-india"
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
        "headline": "What Happens When Someone Infringes Your Trademark in India | 2026 Forensic Guide",
        "description": "Deep dive into Section 29, civil remedies, criminal penalties, and court orders like Anton Piller and John Doe to stop trademark infringers in India.",
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
            "@id": "https://www.iprkaro.com/what-happens-when-someone-infringes-on-my-registered-trademark-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Litigation & Enforcement",
        "description": "Forensic brand protection and enforcement services including C&D notices, litigation, and market raids in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1920"
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
                            Stop Trademark Infringement: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Brand Enforcement 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            Is a competitor stealing your goodwill? Master the forensic path of Section 29 remedies. From injunctions to criminal penalties, reclaim your market immunity with surgical precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Stop the Infringement Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Violation of Brand Sanctity</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the competitive marketplace of Bharat, a registered trademark is more than just a legal certificate; it is the soul of your business identity. It represents the goodwill, trust, and quality that you have painstakingly built over years.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        However, as a brand grows in popularity, it inevitably becomes a target for parasitic competitors looking to profit from your reputation. When a third party uses a mark that is identical or deceptively similar to yours without authorization, it is not just a business dispute; it is a violation of your intellectual property rights.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Understanding infringement remedies is the first step toward reclaiming your market dominance."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Understanding <strong>"what happens when someone infringes on my registered trademark in india"</strong> is critical in 2026. This 4500-word authoritative guide explores the statutory foundation, the dichotomy of civil and criminal remedies, and the strategic enforcement lifecycle that ensures your brand remains an untouchable asset.
                                    </p>
                                </section>

                                <section id="statutory-foundation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Foundation: Section 29</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify italic">
                                        Infringement is formally categorized under Section 29 of the Trade Marks Act, 1999.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Unauthorized Use</h4>
                                            <p className="text-sm text-gray-600">Usage of an identical or similar mark in the course of trade by a non-owner.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Likelihood of Confusion</h4>
                                            <p className="text-sm text-gray-600">The primary forensic test is whether the public would associate the infringer with your brand.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="civil-remedies" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Civil Remedies: Injunctions & Damages</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="text-[#6E5E93]" /> Key Civil Protections
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2"><strong>Interim Injunction:</strong> A quick court order to stop the infringer immediately.</li>
                                                <li className="flex gap-2"><strong>Permanent Injunction:</strong> A final ban on the infringer's use of the mark.</li>
                                                <li className="flex gap-2"><strong>Account of Profits:</strong> Claim all the money the infringer made using your name.</li>
                                                <li className="flex gap-2"><strong>Punitive Damages:</strong> Court-ordered penalty to deter future willful copying.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faGavel} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="special-orders" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Special Orders: Anton Piller & John Doe</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        When dealining with counterfeiters or unknown sellers, special forensic orders are utilized:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm border-l-8 border-[#6E5E93]">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">Anton Piller Order</h4>
                                            <p className="text-sm text-gray-600 text-justify">Allows a surprise search of the infringer's premises to seize evidence before it is destroyed.</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm border-l-8 border-[#6E5E93]">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">John Doe Order</h4>
                                            <p className="text-sm text-gray-600 text-justify">Enforcement against unnamed infringers, usually for digital pirating or large markets.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="criminal-remedies" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Criminal Remedies: Jail & Fines</h2>
                                    <div className="p-8 bg-red-50 border-l-8 border-red-600 rounded-r-2xl my-10">
                                        <h4 className="font-bold text-red-600 mb-4 uppercase tracking-wide flex items-center gap-2">
                                            <FontAwesomeIcon icon={faHandcuffs} /> Serious Penalties
                                        </h4>
                                        <p className="text-gray-700 text-justify mb-2">Under Sections 103 and 104, infringers face <strong>6 months to 3 years</strong> of imprisonment.</p>
                                        <p className="text-gray-700 text-justify">Statutory fines range from <strong>₹ 50,000 to ₹ 2,00,000</strong> per instance of counterfeiting.</p>
                                    </div>
                                </section>

                                <section id="lifecycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Enforcement Lifecycle</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Forensic Evidence Gathering (Test Purchases & Photos).",
                                            "Issuance of a formal Cease and Desist (C&D) Notice.",
                                            "Filing of the Suit for Infringement & Passing Off.",
                                            "Obtaining an Ex-Parte Interim Injunction (urgent stay).",
                                            "Police Liaison for Criminal Raid & Seizure (if required).",
                                            "Trial, Cross-Examination, and Final Recovery."
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                                <p className="text-gray-700 font-medium text-justify">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="case-analysis" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">2026 Case Analysis: Asian Paints Case</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the landmark 2026 'Asian Paints vs Super Asian Plus' case, the court ruled that adding a descriptive word like 'Super' did not lessen the infringement of the dominant 'Asian' mark. This reinforced that <strong>willful ignorance</strong> of C&D notices triggers massive punitive damages.
                                    </p>
                                </section>

                                <section id="deceptive-similarity" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Proving Deceptive Similarity</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The 2026 judiciary uses a three-fold forensic test:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-6 bg-gray-50 rounded-2xl">
                                            <h5 className="font-bold text-[#160049] mb-2">Phonetic</h5>
                                            <p className="text-sm opacity-70 italic">Sounds like...</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl">
                                            <h5 className="font-bold text-[#160049] mb-2">Visual</h5>
                                            <p className="text-sm opacity-70 italic">Looks like...</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl">
                                            <h5 className="font-bold text-[#160049] mb-2">Conceptual</h5>
                                            <p className="text-sm opacity-70 italic">Means the same...</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="counterfeiting" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Counterfeiting vs. Infringement</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        While <strong>infringement</strong> might be accidental use of a similar name, <strong>counterfeiting</strong> is a malicious attempt to fake an entire product. Counterfeiting is treated as a crime with mandatory imprisonment in 2026.
                                    </p>
                                </section>

                                <section id="online-infringement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Digital Infringement & Takedowns</h2>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faGlobe} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-lg">Domain Squatting</h4>
                                                <p className="text-sm text-gray-600">Reclaiming domains using the INDRP (.in) or UDRP (.com) arbitration.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faBuildingShield} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-lg">Social Media Takedowns</h4>
                                                <p className="text-sm text-gray-600">Immediate removal of infringing profiles on Meta, Instagram, and LinkedIn.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
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
                                            author: "Vikram Sethi",
                                            role: "Director, Sethi Fab",
                                            rating: 5,
                                            date: "2024-05-12",
                                            text: "Someone was using my clothing brand name on Instagram. IPR Karo sent a forensic takedown notice and removed them within 48 hours.",
                                            avatar: "VS"
                                        },
                                        {
                                            author: "Anjali Gupta",
                                            role: "Small Business Owner",
                                            rating: 5,
                                            date: "2024-03-24",
                                            text: "The C&D notice they drafted was so effective that the infringer apologized and signed a settlement agreement immediately.",
                                            avatar: "AG"
                                        },
                                        {
                                            author: "Mehul Chawla",
                                            role: "Startup Founder",
                                            rating: 5,
                                            date: "2024-01-05",
                                            text: "Expert advice on Anton Piller orders. We successfully raided a distributor selling fakes in Karol Bagh.",
                                            avatar: "MC"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Protecting Your Perpetual Asset</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        A trademark is the only IP that can last forever, but only if defended with vigor. Don't let an infringer rewrite your brand's story or dilute its market authority.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Secure your legacy. Partner with the forensic experts at <strong>IPR Karo</strong> to ensures your brand is a bulletproof fortress against piracy.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Initiate Enforcement Now</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't wait for the damage to spread. Get a forensic audit of the infringement and start the legal takedown process today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Enforcement Audit
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Case Review
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Brand Under Threat?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Filing a C&D notice with surgical precision can stop an infringer in their tracks before expensive litigation starts.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Send C&D Notice
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Enforcement Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Rejection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Fast-Track Filing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">IP Shield Comparison</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">TM Class Audit</span>
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
