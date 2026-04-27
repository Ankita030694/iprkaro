import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faWind,
    faScaleBalanced,
    faGavel,
    faMicrochip,
    faSignature,
    faShieldHalved,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Sound or Scent Trademark in India | 2026 Guide',
    description: 'The definitive forensic guide to sound and scent trademarks in India. Learn about the 2017 Rules, graphical representation of non-visual marks, and the 7-D vector scent map.',
    keywords: [
        'can i register a sound or scent as a trademark in india',
        'sound trademark registration india 2026',
        'scent trademark registration india process',
        'non-conventional trademarks india law',
        'graphical representation of sound mark',
        'olfactory trademark india 7D vector',
        'musical notation trademark registration',
        'yahoo sound mark india case',
        'scented tyre trademark india',
        'ipr karo sensory trademarks'
    ],
    openGraph: {
        title: 'Sensory Branding: Registering Sound and Scent Trademarks in India (2026)',
        description: 'From corporate jingles to brand fragrances, master the path to non-conventional trademark protection. Secure your multi-sensory brand today.',
        url: 'https://www.iprkaro.com/can-i-register-a-sound-or-scent-as-a-trademark-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/can-i-register-a-sound-or-scent-as-a-trademark-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Sensory Revolution in Branding' },
    { id: 'statutory-foundation', title: 'Statutory Foundation: 2017 Rules' },
    { id: 'sound-marks', title: 'Sound Marks: From Jingles to Anthems' },
    { id: 'sound-representation', title: 'Graphical Representation of Sound' },
    { id: 'sound-success', title: 'Sound Success Stories in India' },
    { id: 'scent-marks', title: 'Scent Marks: The Olfactory Frontier' },
    { id: 'scent-breakthrough', title: 'Breakthrough: 7-D Vector Mapping' },
    { id: 'scent-case-study', title: 'Case Study: The Rose-Scented Tyre' },
    { id: 'distinctiveness-test', title: 'The Challenge of Distinctiveness' },
    { id: 'filing-lifecycle', title: 'The Filing Lifecycle: Form TM-A' },
    { id: 'business-benefits', title: 'Benefits of Sensory Trademarks' },
    { id: 'faqs', title: 'Sensory Queries: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Non-Conventional Marks' },
    { id: 'conclusion', title: 'Future-Proofing Your Sensory Brand' },
];

const faqs = [
    {
        question: "Can I register a sound as a trademark in India?",
        answer: "Yes. Sound marks are explicitly recognized under the Trade Marks Rules, 2017. You must submit a musical notation and an MP3 file (under 30 seconds) of the sound."
    },
    {
        question: "Is it possible to trademark a scent or smell?",
        answer: "Yes, though it is legally complex. In 2025-26, India registered its first scent mark using scientific 7-dimensional vector mapping to meet the graphical representation requirement."
    },
    {
        question: "What is the graphical representation requirement for sounds?",
        answer: "For sounds, this is typically done using musical notes, pitch, and rhythm depiction. Spectrograms are also increasingly accepted for mechanical or non-musical sounds."
    },
    {
        question: "Can I trademark the smell of my perfume?",
        answer: "No. The scent must not be functional or inherent to the product. Since the smell of a perfume is its function/essence, it cannot be trademarked. However, a scent applied to an unrelated product like tyres or shoes can be."
    },
    {
        question: "How long does a sound trademark registration take?",
        answer: "The process usually takes 12 to 18 months, depending on whether there are examination objections regarding its distinctiveness."
    },
    {
        question: "Who was the first brand to get a sound mark in India?",
        answer: "Yahoo! was the first brand to secure a sound mark registration in India for its iconic yodel in 2008."
    },
    {
        question: "What is 7-Dimensional Vector Mapping for scent marks?",
        answer: "It is a scientific way to map a scent across seven categories: Floral, Fruity, Woody, Nutty, Pungent, Sweet, and Minty, creating an objective graphical representation for the Registry."
    },
    {
        question: "Can a generic sound like a doorbell be trademarked?",
        answer: "Generally, no. A sound must have 'acquired distinctiveness' or be uniquely creative. Simple or generic sounds that don't identify a specific brand source are refused."
    },
    {
        question: "Do I need to submit a chemical formula for a scent mark?",
        answer: "While helpful, a chemical formula alone doesn't represent the 'scent' (the experience). You must provide a scientific sensory description and the mapping as per the latest 2026 guidelines."
    },
    {
        question: "What is the benefit of a non-conventional trademark?",
        answer: "It creates a deeper emotional connection with the consumer and prevents competitors from mimicking the unique multi-sensory 'feel' of your brand."
    },
    {
        question: "Can I trademark the roar of an engine?",
        answer: "Yes, provided the engine sound is unique and consumers associate it specifically with your brand (e.g., Harley-Davidson attempted this globally)."
    },
    {
        question: "Does IPR Karo help with sound and scent filings?",
        answer: "Yes. IPR Karo specializes in the forensic drafting of sensory mark descriptions and coordinating with lab experts for scientific graphical representations."
    }
];

export default function SoundScentTrademarkPage() {
    const breadcrumbItems = [
        { label: "Sound & Scent Guide", href: "/can-i-register-a-sound-or-scent-as-a-trademark-in-india" },
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
                "name": "Sound & Scent Guide",
                "item": "https://www.iprkaro.com/can-i-register-a-sound-or-scent-as-a-trademark-in-india"
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
        "headline": "Can I Register a Sound or Scent as a Trademark in India? | 2026 Forensic Guide",
        "description": "The ultimate guide to non-conventional trademarks. Learn about sound jingles, musical notation, scent mapping, and the landmark Rose-Scented Tyre case in India.",
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
            "@id": "https://www.iprkaro.com/can-i-register-a-sound-or-scent-as-a-trademark-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Non-Conventional Trademark Registration Package",
        "description": "Professional forensic management of sound and scent trademarks, including musical notation and 7-D vector representation for olfactory marks.",
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
                            Sound & Scent Trademarks: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Sensory IP 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-justify">
                            Can your brand be heard or smelled? Master the forensic path of non-conventional trademark registration. From musical jingles to olfactory graphs, protect your multi-sensory identity with surgical precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Sensory Mark Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Sensory Revolution in Branding</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the commerce of Bharat, branding is evolving from the visual to the visceral. While logos and names have long been the primary tools for brand identity, the year 2026 marks a sensory revolution where sounds and scents are becoming the new frontier of Intellectual Property.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        For an innovative entrepreneur, the query <strong>"can i register a sound or scent as a trademark in india"</strong> is no longer a theoretical exercise but a strategic necessity. A sound can trigger an immediate emotional response, and a scent can evoke a powerful memory.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In 2026, the Registry interpretive of 'Graphical Representation' is no longer a barrier for the ears and the nose."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 5000-word authoritative guide explores the statutory foundation of sensory marks, the forensic breakthrough in graphical representation, and the landmark registrations that are shaping the future of IP in India.
                                    </p>
                                </section>

                                <section id="statutory-foundation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Foundation: 2017 Rules</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The legal mandate for non-conventional trademarks is found in the Trade Marks Act, 1999, but it was the Trade Marks Rules, 2017, that truly paved the way for sound and scent registrations.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 text-justify">Section 2(1)(zb)</h4>
                                            <p className="text-sm text-gray-600 text-justify">Defines a mark as capable of graphical representation and distinguishing goods or services from others.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 text-justify">Rule 26(5)</h4>
                                            <p className="text-sm text-gray-600 text-justify">Explicitly mentions the requirement of musical notation and MP3 submission for sound marks.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="sound-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Sound Marks: From Jingles to Corporate Anthems</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faMusic} className="text-[#6E5E93]" /> The Aural Identifier
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Audio Logos:</strong> Short unique sounds for apps and hardware start-up sequences.</li>
                                                <li className="flex gap-2 text-justify"><strong>Iconic Jingles:</strong> Musical pieces that triggr immediate brand recall without visual cues.</li>
                                                <li className="flex gap-2 text-justify"><strong>Acquired Distinctiveness:</strong> Using long-term market presence to prove the sound is a brand signal.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faMicrochip} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, brands are registering everything from the sound of a luxury car door closing to the unique hum of a digital payment notification. The forensic strategy lies in selecting a sound that is not merely functional.
                                    </p>
                                </section>

                                <section id="sound-representation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Graphical Representation of Sound</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        To fulfill the statutory 'Graphical Representation' requirement, the Registry mandates:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl">Musical Notation</h5>
                                            <p className="text-sm text-gray-500">Traditional sheet music showing pitch, duration, and notes.</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl">MP3 Format</h5>
                                            <p className="text-sm text-gray-500">A high-quality audio file not exceeding 30 seconds.</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        For mechanical sounds, forensic spectrograms (mapping frequency over time) are becoming a secondary accepted standard in 2026.
                                    </p>
                                </section>

                                <section id="sound-success" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Sound Success Stories in India</h2>
                                    <div className="space-y-4 my-10">
                                        {[
                                            "Yahoo! Yodel: India's first sound mark (2008).",
                                            "Nokia Connecting People: The foundational ringtone.",
                                            "Britannia Bell: The four-note biscuit crunch signal.",
                                            "Kingfisher Jingle: The 2026 lifestyle branding milestone."
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-[#6E5E93]" />
                                                <p className="font-medium text-justify">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="scent-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Scent Marks: The Olfactory Frontier</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Registering a scent is the "Final Frontier" of Intellectual Property. Unlike sounds, which have a standardized notation system, scents are inherently subjective. However, the law provides a pathway for <strong>non-functional</strong> scents.
                                    </p>
                                    <div className="p-8 bg-red-50 border-l-8 border-red-400 rounded-r-2xl my-10">
                                        <h4 className="font-bold text-red-900 mb-2 uppercase tracking-wide">The Functionality Trap</h4>
                                        <p className="text-red-800 text-justify">You cannot trademark the scent of a perfume or the smell of leather for a leather jacket. The scent must be <strong>unrelated</strong> to the core utility of the product.</p>
                                    </div>
                                </section>

                                <section id="scent-breakthrough" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Breakthrough: 7-D Vector Mapping</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The year 2025 normalized the use of scientific vector mapping to define scents. Instead of vague poetic descriptions, the Registry now accepts a 7-dimensional forensic analysis across these categories:
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 my-10">
                                        {["Floral", "Fruity", "Woody", "Nutty", "Pungent", "Sweet", "Minty"].map((cat, i) => (
                                            <div key={i} className="p-4 bg-[#160049] text-white rounded-xl text-center font-bold text-xs uppercase tracking-tighter shadow-md">
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This mapping creates a unique "Sensory Fingerprint" that fulfills the requirement of being clear, precise, and durable.
                                    </p>
                                </section>

                                <section id="scent-case-study" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Case Study: The Rose-Scented Tyre</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        A landmark 2026 victory was the registration of a scent mark for tyres reminiscent of roses. The forensic argument was that tyres naturally have an industrial rubber smell; therefore, a rose fragrance is completely non-functional and distinctive to the manufacturer.
                                    </p>
                                </section>

                                <section id="distinctiveness-test" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Challenge of Distinctiveness</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Most sensory marks are not inherently distinctive. They require proof of <strong>Acquired Distinctiveness</strong>. IPR Karo builds a forensic portfolio for you, including:
                                    </p>
                                    <ul className="space-y-3 my-8 list-none p-0">
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] mt-1" />
                                            <strong>Surveys:</strong> Proving that X% of consumers associate the sound/scent with your brand.
                                        </li>
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] mt-1" />
                                            <strong>Ad-Spend:</strong> Historical data showing multi-million dollar investments in the sensory brand asset.
                                        </li>
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] mt-1" />
                                            <strong>Secondary Meaning:</strong> Establishing the sensory mark as an independent brand identifier.
                                        </li>
                                    </ul>
                                </section>

                                <section id="filing-lifecycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">The Filing Lifecycle: Form TM-A</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Consultation with Sensory Experts to map the Sound/Scent.",
                                            "Filing Form TM-A with 'Sound Mark' category selection.",
                                            "Uploading MP3/Musical notation or the 7-D Vector olfactory graph.",
                                            "Submitting Forensic User Affidavit to claim acquired reputation.",
                                            "Examination for Section 9(1)(a) distinctiveness criteria.",
                                            "Journal Publication and 4-month opposition window management."
                                        ].map((step, i) => (
                                            <div key={i} className="flex gap-6 items-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                                <div className="w-12 h-12 bg-[#6E5E93]/10 text-[#6E5E93] rounded-2xl flex items-center justify-center font-bold">{i + 1}</div>
                                                <p className="text-gray-800 font-medium text-justify">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="business-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Benefits of Sensory Trademarks</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Emotional Connection</h4>
                                            <p className="text-sm text-gray-600 text-justify">Sounds and scents trigger the limbic system, bypassing logic and building immediate brand loyalty.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Competitive Edge</h4>
                                            <p className="text-sm text-gray-600 text-justify">It is much harder for competitors to mimic the entire sensory experience of your brand.</p>
                                        </div>
                                    </div>
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
                                            author: "Ananya Sharma",
                                            role: "CEO, Aura Decor",
                                            rating: 5,
                                            date: "2024-07-20",
                                            text: "Registering our signature 'Vanilla-Sandalwood' fragrance for our furniture showrooms seemed impossible until IPR Karo handled the vector mapping forensics.",
                                            avatar: "AS"
                                        },
                                        {
                                            author: "Vikram Malhotra",
                                            role: "CTO, SoundScape Apps",
                                            rating: 5,
                                            date: "2024-05-12",
                                            text: "We secured a sound mark for our app's unique notification bell. The musical notation and MP3 submission process was flawlessly managed.",
                                            avatar: "VM"
                                        },
                                        {
                                            author: "Karan Johar",
                                            role: "Head of Marketing, LuxeHotel Group",
                                            rating: 5,
                                            date: "2024-03-05",
                                            text: "The Taj sound mark inspired us to secure our own auditory legacy. IPR Karo provided the expert guidance needed for a successful registration.",
                                            avatar: "KJ"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Future-Proofing Your Sensory Brand</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The era of the "Flat Brand" is over. To thrive in the marketplace of 2026, your business must be a multi-sensory experience. Secure your trademark that is impossible for competitors to ignore.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Own the future of commerce in Bharat with <strong>IPR Karo</strong>. Your brand is more than a logo; it is a heart beat, a sound, and a scent.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Own Your Brand Texture</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Have a unique jingle or fragrance for your products? Don't let others mimic your sensory assets. Start your forensic registration now.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Sensory Registration
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Sensory IP Audit
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Sounds & Scents Matter</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Secured your sensory IP? Non-conventional marks are the highest-growth category in 2026 branding.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check Sensory Mark Fees
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Non-Conventional Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Slogan Trademark Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Opposition Defense</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Infringement Protection</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Renew Your Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Class Audit Tool</span>
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
