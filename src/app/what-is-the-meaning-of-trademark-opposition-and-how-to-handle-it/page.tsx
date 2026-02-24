import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faScaleBalanced,
    faGavel,
    faHourglassHalf,
    faFileSignature,
    faUserShield,
    faBuildingShield,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What is Trademark Opposition and How to Handle It | 2026 Guide',
    description: 'The complete forensic guide to trademark opposition in India. Learn about Section 21, Form TM-O, deadlines, counter-statements, and defense strategies.',
    keywords: [
        'what is the meaning of trademark opposition and how to handle it',
        'trademark opposition process india 2026',
        'section 21 trade marks act 1999 opposition',
        'form TM-O trademark opposition india',
        'trademark counter statement deadline india',
        'how to defend trademark opposition india',
        'trademark journal publication opposition window',
        'trademark opposition hearing procedure india',
        'grounds for trademark opposition india',
        'ipr karo opposition management'
    ],
    openGraph: {
        title: 'Facing a Trademark Opposition? Learn How to Handle It (2026 Guide)',
        description: 'Master the litigation phase of trademark registration. Don\'t let your brand get abandoned. Expert defense strategies for Form TM-O.',
        url: 'https://www.iprkaro.com/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Litigation Phase of Brand Protection' },
    { id: 'statutory-framework', title: 'Statutory Framework: Section 21' },
    { id: 'journal-publication', title: 'The Start of the 4-Month Window' },
    { id: 'who-can-oppose', title: 'Who Can Oppose? The \"Any Person\" Rule' },
    { id: 'filing-notice', title: 'Filing the Notice: Form TM-O' },
    { id: 'counter-statement', title: 'The Critical 2-Month Deadline' },
    { id: 'evidence-opposition', title: 'Evidence in Support of Opposition' },
    { id: 'evidence-application', title: 'Defending Your Brand: Evidence' },
    { id: 'hearing-procedure', title: 'The Hearing Procedure' },
    { id: 'final-decision', title: 'Registration vs. Rejection' },
    { id: 'faqs', title: 'Opposition Queries: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Opposition Defense' },
    { id: 'conclusion', title: 'Navigating the Complex Phase' },
];

const faqs = [
    {
        question: "What is the meaning of trademark opposition?",
        answer: "Opposition is a legal challenge filed by a third party after your trademark is advertised in the Trade Marks Journal. It prevents the mark from being registered unless you successfully defend it."
    },
    {
        question: "How long is the opposition period in India?",
        answer: "There is a strict, non-extendable 4-month window from the date of publication in the Trade Marks Journal to file an opposition."
    },
    {
        question: "What happens if I miss the counter-statement deadline?",
        answer: "If you fail to file a counter-statement within 2 months of receiving the opposition notice, your trademark application is 'Deemed Abandoned' by the Registry and cannot be revived."
    },
    {
        question: "Who can file an opposition against my trademark?",
        answer: "Under Section 21, 'any person' can file an opposition. They do not need to be a trademark owner or have a direct commercial interest."
    },
    {
        question: "What are the common grounds for opposition?",
        answer: "Common grounds include deceptive similarity to an existing mark, the mark being descriptive (lacking distinctiveness), or being filed in bad faith."
    },
    {
        question: "What is Form TM-O used for?",
        answer: "Form TM-O is used for both filing a Notice of Opposition and for filing a Counter-Statement in response to an opposition."
    },
    {
        question: "How many stages are there in an opposition proceeding?",
        answer: "The main stages are: Notice of Opposition, Counter-Statement, Evidence in Support of Opposition, Evidence in Support of Application, Reply Evidence, and the Final Hearing."
    },
    {
        question: "Can an opposition be settled through agreement?",
        answer: "Yes. Parties often enter into 'Co-existence Agreements' where they agree on specific terms to avoid long-term litigation, allowing both marks to co-exist on the register."
    },
    {
        question: "What happens during the trademark hearing?",
        answer: "During the hearing, attorneys for both sides present oral arguments before the Registrar of Trademarks to substantiate their respective cases based on the submitted evidence."
    },
    {
        question: "Is the Registrar's decision on opposition final?",
        answer: "No. The Registrar's decision can be appealed to the respective High Court within three months of the date of the order."
    },
    {
        question: "What is forensic evidence in trademark opposition?",
        answer: "It includes proof of prior use like sales invoices, advertisement records, and market reputation certificates that clearly establish the date your brand entered the market."
    },
    {
        question: "Does IPR Karo help with opposition defense?",
        answer: "Yes. IPR Karo specializes in forensic drafting of counter-statements and handling hearings before the Registry to ensure your brand protection is successful."
    }
];

export default function TrademarkOppositionPage() {
    const breadcrumbItems = [
        { label: "Opposition Guide", href: "/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" },
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
                "name": "Opposition Guide",
                "item": "https://www.iprkaro.com/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it"
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
        "headline": "What is Trademark Opposition and How to Handle It | 2026 Forensic Guide",
        "description": "Exhaustive guide to trademark opposition in India. Learn about Form TM-O, the 2-month counter-statement deadline, evidence stages, and hearing procedures.",
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
            "@id": "https://www.iprkaro.com/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Opposition & Defense Service",
        "description": "Professional forensic management of trademark opposition cases, including counter-statements, evidence filing, and hearing representation.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2150"
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
                            Tradmark Opposition: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Defend Your Brand 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-justify">
                            Has your brand been challenged after publication? Master the forensic steps to handle Form TM-O. Don't let your application die due to missed deadlines. Navigate the opposition phase with surgical precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Rescue Your Trademark Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Litigation Phase of Brand Protection</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the commerce of Bharat, securing a trademark is not a mere administrative checkbox; it is a battle for exclusive space in the consumer's mind. The most critical hurdle in the registration journey is the "Opposition" phase.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        It is the moment when the public and your competitors have a statutory right to challenge your brand's right to exist on the Register of Trade Marks. In 2026, the Indian Trade Marks Registry has become a field of sophisticated legal combat.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A missed deadline in opposition is the permanent death of a trademark application."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Understanding <strong>"what is the meaning of trademark opposition and how to handle it"</strong> is vital. This guide explores the statutory foundation of Section 21 and the strategic defense mechanisms required to protect your brand from being aborted at the finish line.
                                    </p>
                                </section>

                                <section id="statutory-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Framework: Section 21</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The legal mandate for opposition is enshrined in Section 21 of the Trade Marks Act, 1999. This section empowers "any person" to oppose an application after it has been advertised in the Trade Marks Journal.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Any Person Rule</h4>
                                            <p className="text-sm text-gray-600">You don't need a registered mark to oppose; even consumers can challenge a bad mark.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Post-Advertisement</h4>
                                            <p className="text-sm text-gray-600">Opposition only occurs after the mark passes examination and is advertised to the world.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="journal-publication" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">The Start of the 4-Month Window</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faHourglassHalf} className="text-[#6E5E93]" /> The Mandatory Clock
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Digital Journal:</strong> Your mark is published in the weekly Trade Marks Journal.</li>
                                                <li className="flex gap-2 text-justify"><strong>4-Month Window:</strong> The public has exactly 4 months from the publication date to file TM-O.</li>
                                                <li className="flex gap-2 text-justify"><strong>No Extensions:</strong> This timeline is absolute and non-extendable by law in 2026.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faScaleBalanced} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="who-can-oppose" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Who Can Oppose? The "Any Person" Rule</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The law ensures that the Registry remains a platform where the validity of a mark is tested against the collective rights of the marketplace. Opponents often include:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                                            <h5 className="font-bold text-[#0C002B]">Competitors</h5>
                                            <p className="text-sm text-gray-500">Protecting similar names.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                                            <h5 className="font-bold text-[#0C002B]">Prior Users</h5>
                                            <p className="text-sm text-gray-500">Even if unregistered.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                                            <h5 className="font-bold text-[#0C002B]">Consumers</h5>
                                            <p className="text-sm text-gray-500">To prevent public confusion.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="filing-notice" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Filing the Notice: Form TM-O</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify italic">
                                        The opposition statement must cover absolute and relative grounds including:
                                    </p>
                                    <ul className="space-y-3 my-8 list-none p-0">
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faFileSignature} className="text-[#6E5E93] mt-1" />
                                            <strong>Descriptive Terms:</strong> Contending your mark describes the product (e.g., "Apple" for fruit).
                                        </li>
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faFileSignature} className="text-[#6E5E93] mt-1" />
                                            <strong>Deceptive Similarity:</strong> Highlighting confusion with a brand like "Adidas" vs "Abidas".
                                        </li>
                                        <li className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border-l-4 border-[#6E5E93] text-justify">
                                            <FontAwesomeIcon icon={faFileSignature} className="text-[#6E5E93] mt-1" />
                                            <strong>Bad Faith:</strong> Arguing the mark was filed only to extort or block another business.
                                        </li>
                                    </ul>
                                </section>

                                <section id="counter-statement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Critical 2-Month Deadline</h2>
                                    <div className="p-8 bg-red-50 border-l-8 border-red-600 rounded-r-2xl my-10">
                                        <h4 className="font-bold text-red-600 mb-4 uppercase tracking-wide flex items-center gap-2">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> The Finality of Failure
                                        </h4>
                                        <p className="text-gray-700 text-justify mb-2">Applicants must file their <strong>Counter-Statement (Form TM-O)</strong> within 2 months of service.</p>
                                        <p className="text-gray-700 text-justify"><strong>No Condonation:</strong> If you miss this 60-day window, the application is abandoned by law. No excuses or extensions are permitted in 2026.</p>
                                    </div>
                                </section>

                                <section id="evidence-opposition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Evidence in Support of Opposition</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The opponent must file Rule 45 evidence (Affidavit) within 2 months of receiving your counter-statement. This forensic proof includes:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 my-10">
                                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 shrink-0" />
                                            <span className="text-sm font-semibold">Old Sales Invoices</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 shrink-0" />
                                            <span className="text-sm font-semibold">Advertisement Pamphlets</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 shrink-0" />
                                            <span className="text-sm font-semibold">Prior Domain Registration</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 shrink-0" />
                                            <span className="text-sm font-semibold">Market Testimony</span>
                                        </div>
                                    </div>
                                </section>

                                <section id="evidence-application" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Defending Your Brand: Evidence</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        As an applicant, you have 2 months to file your Rule 46 Evidence. This is your forensic defense to prove that your mark is distinctive and entered the market honestly.
                                    </p>
                                </section>

                                <section id="hearing-procedure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Hearing Procedure</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, most hearings are conducted via video conferencing. Attorneys argue the merits of the case based on:
                                    </p>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Phonetic & Visual Similarity Comparison.",
                                            "Class of Goods and Target Consumer Base.",
                                            "Prior Use vs. Filing Date Priority.",
                                            "Nature of Trade and Marketplace Overlap."
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 items-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                                <div className="w-12 h-12 bg-[#6E5E93]/10 text-[#6E5E93] rounded-2xl flex items-center justify-center font-bold">{i + 1}</div>
                                                <p className="text-gray-800 font-medium text-justify">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="final-decision" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Registration vs. Rejection</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        If you win, the opposition is dismissed, and your Registration Certificate is issued within 30 days. If you lose, the application is rejected, but you can appeal to the High Court within 3 months of the order.
                                    </p>
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
                                            author: "Siddharth Jain",
                                            role: "CEO, TechNova Solutions",
                                            rating: 5,
                                            date: "2024-06-15",
                                            text: "Our brand was opposed by a giant multinational. IPR Karo drafted a forensic counter-statement and we won at the hearing phase.",
                                            avatar: "SJ"
                                        },
                                        {
                                            author: "Pooja Malhotra",
                                            role: "Lifestyle Blogger & Entrepreneur",
                                            rating: 5,
                                            date: "2024-04-02",
                                            text: "I almost missed the 2-month deadline. Their automated tracking saved my application from being abandoned. Highly professional.",
                                            avatar: "PM"
                                        },
                                        {
                                            author: "Karan Oberoi",
                                            role: "Oberoi Exports",
                                            rating: 5,
                                            date: "2024-02-12",
                                            text: "They handled three oppositions for our export brand simultaneously. The co-existence agreement they negotiated saved us years of litigation.",
                                            avatar: "KO"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Navigating the most Complex Phase</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Opposition is the "Trial by Fire" for your brand. It is a battle that determines your mark's right to protection.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Secure your registration with the forensic litigation expertise of <strong>IPR Karo</strong>. Don't let your brand legacy be aborted at the finish line.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Defend Your Mark Today</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Received a notice of opposition? You have only 60 days to respond. Get a forensic counter-statement drafted by our experts now.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Opposition Defense
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Legal Consultation
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Facing a Challenge?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Our forensic counter-statements prevent applications from being abandoned. Act before the 2-month clock stops.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Draft Counter-Statement
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Defense Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Infringement Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Rejection Reasons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Fast-Track Registration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Renewal Process</span>
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
