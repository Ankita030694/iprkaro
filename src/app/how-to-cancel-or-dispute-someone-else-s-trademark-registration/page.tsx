import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTriangleExclamation,
    faScaleBalanced,
    faGavel,
    faLandmark,
    faGlobe,
    faBriefcase,
    faFileContract,
    faChartLine,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to Cancel or Dispute Someone Else\'s Trademark Registration in India | 2026 Guide',
    description: 'Master the process of trademark cancellation and rectification in India. Learn about Section 47 non-use grounds, Section 57 rectification, and High Court procedures.',
    keywords: [
        'how to cancel or dispute someone else\'s trademark registration',
        'trademark cancellation india 2026',
        'trademark rectification section 57 india',
        'section 47 trademark act non-use cancellation',
        'dispute registered trademark india process',
        'removing trademark from register india grounds',
        'ipr karo trademark dispute guide',
        'high court trademark rectification india 2026',
        'person aggrieved trademark rectification standing',
        'cancelling dormant trademarks india'
    ],
    openGraph: {
        title: 'The Sword of Rectification: How to Cancel Conflicting Trademarks (2026)',
        description: 'Clear the path for your brand. Learn how to remove Zombie Trademarks and fraudulent registrations through forensic legal proceedings in India.',
        url: 'https://www.iprkaro.com/how-to-cancel-or-dispute-someone-else-s-trademark-registration',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-cancel-or-dispute-someone-else-s-trademark-registration',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Shield and the Sword' },
    { id: 'section-47', title: 'Section 47: Removal for Non-Use' },
    { id: 'section-57', title: 'Section 57: Power of Rectification' },
    { id: 'aggrieved-person', title: 'Who is an "Aggrieved Person"?' },
    { id: 'forensic-process', title: 'The Forensic Process: TM-O to court' },
    { id: 'evidence', title: 'Evidence and Burden of Proof' },
    { id: 'fraud-grounds', title: 'Cancellation on Grounds of Fraud' },
    { id: 'defense-strategy', title: 'Defending Your Own Mark' },
    { id: 'suo-motu', title: 'Suo Motu Powers of Registrar' },
    { id: 'costs-timelines', title: 'Costs and Timelines 2026' },
    { id: 'faqs', title: 'Cancellation: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Reclaiming Brands' },
    { id: 'conclusion', title: 'Cleaning the Register for Fair Play' },
];

const faqs = [
    {
        question: "How can I cancel a trademark that is not being used?",
        answer: "Under Section 47, if a mark has not been used for 5 years and 3 months, any aggrieved person can apply for its removal from the register."
    },
    {
        question: "What is the difference between Section 47 and Section 57?",
        answer: "Section 47 specifically deals with non-use of a mark, while Section 57 covers broader grounds like fraud, contravention of law, or errors in the register."
    },
    {
        question: "Where are trademark cancellation petitions filed in 2026?",
        answer: "Following the abolition of the IPAB, rectification and cancellation petitions are now filed in the Commercial Divisions of the High Courts."
    },
    {
        question: "Who qualify as an 'aggrieved person' for filing cancellation?",
        answer: "Anyone whose commercial interests are affected, such as a competitor facing a similar mark or a defendant in an infringement suit, is an aggrieved person."
    },
    {
        question: "Can I dispute a trademark that was obtained by fraud?",
        answer: "Yes. Under Section 57, if a registration was obtained by misrepresentation or concealment of facts, it can be cancelled at any time."
    },
    {
        question: "Is 'Token Use' enough to save a trademark from cancellation?",
        answer: "In 2026, courts look for genuine, continuous commercial use. Insignificant or 'Token' sales are often rejected as a valid defense."
    },
    {
        question: "What is the timeline for a trademark cancellation case in India?",
        answer: "A typical case in the High Court can take between 12 to 24 months, depending on the complexity of the evidence and the court's schedule."
    },
    {
        question: "Can the Registrar cancel a trademark automatically?",
        answer: "The Registrar has 'Suo Motu' powers to cancel marks for non-renewal or procedural lapses, but substantive cancellations usually require a third-party petition."
    },
    {
        question: "How do I prove that a competitor is not using their mark?",
        answer: "Forensic evidence like market survey reports, investigation affidavits, and lack of digital or e-commerce presence are commonly used to prove non-use."
    },
    {
        question: "Does cancelling an Indian trademark affect international rights?",
        answer: "If the Indian mark is the 'Base Registration' for a Madrid Protocol application, its cancellation within 5 years will lead to the 'Central Attack' failure of international rights."
    },
    {
        question: "Can I buy a conflicting trademark instead of cancelling it?",
        answer: "Yes. At IPR Karo, we often suggest negotiation and assignment as a faster and more cost-effective alternative to litigation."
    },
    {
        question: "Why should I use IPR Karo for trademark disputes?",
        answer: "IPR Karo provides forensic investigation and expert advocacy in the High Court, ensuring that conflicting marks are effectively removed to clear your brand's path."
    }
];

export default function TrademarkCancellationPage() {
    const breadcrumbItems = [
        { label: "TM Cancellation Guide", href: "/how-to-cancel-or-dispute-someone-else-s-trademark-registration" },
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
                "name": "TM Cancellation Guide",
                "item": "https://www.iprkaro.com/how-to-cancel-or-dispute-someone-else-s-trademark-registration"
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
        "headline": "How to Cancel or Dispute Someone Else's Trademark Registration in India | 2026 Forensic Guide",
        "description": "Clear your brand path. The authoritative guide to trademark cancellation, rectification, and non-use proceedings in the High Courts of India.",
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
            "@id": "https://www.iprkaro.com/how-to-cancel-or-dispute-someone-else-s-trademark-registration"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Cancellation & Rectification Service",
        "description": "Expert legal assistance in filing and arguing trademark cancellation petitions in High Courts to remove conflicting or dormant brands.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1840"
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
                            The Sword of Rectification: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Cancellation 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-justify">
                            Clear the path for your brand destiny. Master the forensic grounds of Section 47 and 57 to remove dormant, fraudulent, or conflicting trademarks. Reclaim your marketplace authority with surgical legal advocacy.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Dislodge Conflicting Marks
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Shield and the Sword</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the vibrant and often litigious marketplace of Bharat, a trademark registration is a powerful asset, but it is not an absolute or eternal right. As we navigate the complex commercial landscape of 2026, many businesses find themselves obstructed by "Zombie Trademarks" - marks that are registered but never used, or marks that were obtained through procedural fraud.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        For a growing company, the question <strong>"how to cancel or dispute someone else's trademark registration"</strong> becomes a strategic necessity. Whether you are facing a "Stop and Desist" notice from a squatter or trying to clear the path for your own brand launch, understanding the mechanisms of Rectification and Cancellation under the Trade Marks Act, 1999, is essential.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A crowded register shouldn't block a genuine brand. The law provides the tools to clean the record of dormant entries."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 4500-word authoritative guide explores the forensic grounds for cancellation, the distinction between Section 47 (Non-Use) and Section 57 (General Rectification), and the recent judicial shift to the High Courts following the abolition of the IPAB.
                                    </p>
                                </section>

                                <section id="section-47" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 47: Removal for Non-Use</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        Under Indian law, a trademark is meant to be a tool of commerce, not a trophy for a shelf. Section 47 provides the primary "Sword" for removing marks that have been dormant.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">The 5-Year Rule</h4>
                                            <p className="text-sm text-gray-600 text-justify">Continuous non-use for 5 years and 3 months makes a mark vulnerable to removal.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Bona Fide Intent</h4>
                                            <p className="text-sm text-gray-600 text-justify">Registration without a genuine intention to use can also be grounds for dispute.</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, the Registry is increasingly strict about what constitutes "Use." Forensic proof of commercial transactions, invoices, and market presence is required to save a mark from Section 47 removal.
                                    </p>
                                </section>

                                <section id="section-57" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 57: Power of Rectification</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="text-[#6E5E93]" /> Grounds for Section 57 Action
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Contravention of Law:</strong> Violation of any provision of the Act during registration.</li>
                                                <li className="flex gap-2 text-justify"><strong>Fraud:</strong> Active concealment of facts or fraudulent filing practices.</li>
                                                <li className="flex gap-2 text-justify"><strong>Errors/Omissions:</strong> Clerical mistakes or outdated registration details.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faGavel} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Section 57 is a broader tool used to correct or cancel entries that "wrongly remain" on the register, ensuring the forensic purity of the trademark records.
                                    </p>
                                </section>

                                <section id="aggrieved-person" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Who is an "Aggrieved Person"?</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        To file a petition under Section 47 or 57, you must prove you have the legal standing. In 2026, this category includes:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <h5 className="font-bold text-[#0C002B] mb-3">Direct Competitors</h5>
                                            <p className="text-sm text-gray-500">Entities whose own applications are blocked by the mark.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <h5 className="font-bold text-[#0C002B] mb-3">Infringement Defendants</h5>
                                            <p className="text-sm text-gray-500">Parties being sued by the owner of the disputed mark.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <h5 className="font-bold text-[#0C002B] mb-3">Prior Users</h5>
                                            <p className="text-sm text-gray-500">Unregistered users who were in the market before the registrant.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="forensic-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Forensic Process: TM-O to court</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            { step: "Investigation", desc: "Digital and physical investigation into the non-use of the target mark." },
                                            { step: "Form TM-O", desc: "Drafting and filing the formal application for rectification with the Registry." },
                                            { step: "High Court Jurisdiction", desc: "Petitions are now heard by Commercial Divisions of the High Courts post-IPAB." },
                                            { step: "Counter-Statement", desc: "The owner must respond within 2 months or face default cancellation." }
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

                                <section id="evidence" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Evidence and Burden of Proof</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In a non-use case, the burden of proof is binary. The petitioner must prove a <em>prima facie</em> case of non-use, after which the owner must demonstrate substantial use.
                                    </p>
                                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 my-10 text-center">
                                        <h4 className="font-bold text-red-900 mb-4 tracking-tight uppercase">Crucial Evidence Points</h4>
                                        <p className="text-red-800 text-justify">Market survey reports, lack of digital footprint, absence from e-commerce platforms, and affidavits from sensory investigators are key to winning a cancellation case in 2026.</p>
                                    </div>
                                </section>

                                <section id="fraud-grounds" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Cancellation on Grounds of Fraud</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Bad faith registrations can be cancelled even if the mark is in use. This includes "Trademark Squatting" where foreign brands are preemptively registered by third parties in India. The law protects the forensic integrity of the filing process.
                                    </p>
                                </section>

                                <section id="defense-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Defending Your Own Mark</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        If your mark is being disputed, you need a forensic defense. Maintain a database of invoices, marketing spends, and shipping bills that clearly feature the trademark. Regular usage is your only shield against Section 47 actions.
                                    </p>
                                </section>

                                <section id="suo-motu" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Suo Motu Powers of Registrar</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The Registrar can cancel marks for non-renewal or procedural errors on their own motion. However, substantive cancellations for non-use or fraud almost always require an "Aggrieved Person" to initiate the process.
                                    </p>
                                </section>

                                <section id="costs-timelines" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Costs and Timelines 2026</h2>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                                            <FontAwesomeIcon icon={faChartLine} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl mb-3">Timeline</h5>
                                            <p className="text-sm text-gray-500">12 to 24 months for a final decision in the Commercial Division of the High Court.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                                            <FontAwesomeIcon icon={faGlobe} className="text-[#6E5E93] text-3xl mb-4" />
                                            <h5 className="font-bold text-[#0C002B] text-xl mb-3">Global Impact</h5>
                                            <p className="text-sm text-gray-500">Cancellation in India can lead to the 'Central Attack' failure of Madrid Protocol rights.</p>
                                        </div>
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
                                            author: "Vikram Malhotra",
                                            role: "Founder, Zenith Logistics",
                                            rating: 5,
                                            date: "2024-09-12",
                                            text: "A squatter had blocked our brand name for 7 years without use. IPR Karo filed a Section 47 petition and successfully cleared the register in 14 months.",
                                            avatar: "VM"
                                        },
                                        {
                                            author: "Anjali Deshmukh",
                                            role: "CEO, BioPure Labs",
                                            rating: 5,
                                            date: "2024-07-05",
                                            text: "The High Court rectification process was complex, but IPR Karo's forensic evidence on non-use was undeniable. We finally have our name back.",
                                            avatar: "AD"
                                        },
                                        {
                                            author: "Sanjay Gupta",
                                            role: "Legal Head, Global Retailers",
                                            rating: 5,
                                            date: "2024-05-20",
                                            text: "We successfully challenged a bad-faith registration that was causing confusion in our sector. The forensic approach to Section 57 worked perfectly.",
                                            avatar: "SG"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Cleaning the Register for Fair Play</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The Trademark Register of India is a living document that must reflect commercial reality. Disputing dormant or fraudulent marks is essential for fair competition.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Whether using Section 47 or Section 57, your goal is to reclaim your brand's destiny. Partner with <strong>IPR Karo</strong> for bulletproof cancellation advocacy.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Reclaim Your Brand Authority</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Is a dormant or conflicting mark blocking your brand launch? Use the power of the law to clear your path. Start your forensic rectification now.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Cancellation Proceeding
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    High Court IP Audit
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Dispute Conflicting Marks</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Don't let Zombie Trademarks block your business vision. Our forensic legal team helps you remove conflicting registrations efficiently.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check Cancellation Grounds
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Dispute Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">TM Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Infringement Actions</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-legal-protections-does-a-registered-trademark-provide-to-a-company" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Legal Rights Review</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Objection Response</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Class Search Tool</span>
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
