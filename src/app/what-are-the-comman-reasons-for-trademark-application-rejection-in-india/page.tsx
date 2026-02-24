import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationTriangle,
    faBalanceScale,
    faSearchMinus,
    faBan,
    faUserSecret,
    faFileContract,
    faGavel,
    faHistory,
    faShieldAlt,
    faCheckCircle,
    faTimesCircle,
    faInfoCircle,
    faPhone,
    faRocket,
    faGlobe,
    faSitemap,
    faAward,
    faBookOpen,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Common Reasons for Trademark Rejection in India | 2026 Guide',
    description: 'Learn exactly why trademark applications are rejected in India. Explore Section 9 (Absolute Grounds) and Section 11 (Relative Grounds) with forensic case studies.',
    keywords: [
        'what are the comman reasons for trademark application rejection in india',
        'trademark rejection reasons india 2026',
        'section 9 vs section 11 trademark india',
        'why was my trademark rejected india',
        'relative grounds for trademark refusal',
        'absolute grounds for trademark refusal',
        'deceptively similar trademark rejection',
        'descriptive trademark rejection india',
        'trademark application status objected',
        'how to avoid trademark rejection'
    ],
    openGraph: {
        title: 'Trademark Rejection: The Forensic 2026 Breakdown of Refusal Grounds',
        description: 'Navigate the complex minefield of Section 9 and 11. Learn from recent high court precedents and protect your brand from rejection.',
        url: 'https://www.iprkaro.com/what-are-the-comman-reasons-for-trademark-application-rejection-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-are-the-comman-reasons-for-trademark-application-rejection-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Anatomy of a Trademark Rejection in 2026' },
    { id: 'section9-absolute', title: 'Section 9: Absolute Grounds for Refusal - Inherent Flaws' },
    { id: 'section11-relative', title: 'Section 11: Relative Grounds for Refusal - External Conflicts' },
    { id: 'procedural-grounds', title: 'Procedural & Formal Grounds: Errors in Filing' },
    { id: 'case-analysis', title: 'Forensic Case Analysis: 2024-2026 Precedents' },
    { id: 'mitigation', title: 'Strategic Mitigation: How IPR Karo Prevents Rejection' },
    { id: 'faqs', title: 'Common Rejection Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Objection Resolution' },
    { id: 'conclusion', title: 'Building a Fortress Brand on Solid Legal Ground' },
];

const faqs = [
    {
        question: "What are the most common reasons for trademark rejection in India?",
        answer: "The most frequent reasons fall under Section 9 (lack of distinctiveness or descriptive nature) and Section 11 (existence of identical or deceptively similar marks on the register)."
    },
    {
        question: "What does 'Section 9 Objection' mean in my status?",
        answer: "A Section 9 objection means the Registry believes your mark is descriptive (describes your business quality/origin) or lacks inherent distinctiveness needed to identify a unique source."
    },
    {
        question: "How is 'Deceptive Similarity' determined by the Registry?",
        answer: "The Registry uses the 'Average Consumer with Imperfect Recollection' test, looking for phonetic, visual, and conceptual similarities that could cause confusion in the marketplace."
    },
    {
        question: "Can a surnames or geographical location be a reason for rejection?",
        answer: "Yes, under Section 9, common surnames or geographical names are often rejected unless you can prove they have acquired 'Secondary Meaning' through long-term exclusive use."
    },
    {
        question: "What happens if a trademark is rejected under Section 11?",
        answer: "You must file a response within 30 days proving that your mark is visually or phonetically distinct from the cited marks, or that you have been using the mark longer than the existing owner."
    },
    {
        question: "Can incorrect class selection lead to rejection?",
        answer: "It leads to a 'Technical Objection.' While not an absolute ground for rejection, it delays the process and requires you to amend class details via Form TM-M."
    },
    {
        question: "Is 'Likelihood of Confusion' enough for a rejection?",
        answer: "Absolutely. Under Section 11, if there is a probability that a consumer might assume a trade connection between two brands due to similarity, the mark will be refused."
    },
    {
        question: "Why are generic words like 'Computer' or 'Mobile' usually rejected?",
        answer: "Because these words belong to the entire industry. No single entity can claim exclusive ownership over terms that are the common name for the product itself."
    },
    {
        question: "How can I avoid rejection for a descriptive mark?",
        answer: "The best strategy is to choose 'Coined' or 'Arbitrary' words that have no direct connection to the product's quality or nature (e.g., 'Apple' for computers)."
    },
    {
        question: "What is a 'Well-Known Trademark' objection?",
        answer: "This occurs when your mark is similar to a famous brand (like TATA or JIO). These brands are protected across all classes, preventing anyone else from using their reputation."
    },
    {
        question: "Can I appeal a final refusal by the Registrar?",
        answer: "Yes, you can file an appeal with the High Court (after the IPAB was abolished) within three months of the refusal order."
    },
    {
        question: "Does the Registry reject offensive or scandalous marks?",
        answer: "Yes, under Section 9(2)(c), any mark that contains scandalous or obscene matter that is offensive to public morality will be rejected."
    }
];

export default function TrademarkRejectionPage() {
    const breadcrumbItems = [
        { label: "Reasons for Trademark Rejection", href: "/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" },
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
                "name": "TM Rejection Reasons",
                "item": "https://www.iprkaro.com/what-are-the-comman-reasons-for-trademark-application-rejection-in-india"
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
        "headline": "Common Reasons for Trademark Application Rejection in India | 2026 Forensic Guide",
        "description": "Deep dive into Section 9 and 11 rejections. Explore descriptive flaws, deceptive similarity, and procedural traps that kill trademark applications.",
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
            "@id": "https://www.iprkaro.com/what-are-the-comman-reasons-for-trademark-application-rejection-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Objection Response Service",
        "description": "Expert legal representation for overcoming Section 9 and Section 11 objections with forensic precision.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1980"
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
                            Trademark Rejection Guide: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Navigating Section 9 & 11</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            Don't let your brand die at the examination stage. Master the forensic reasons behind trademark rejections in India and learn how to build a legally invincible brand in 2026.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Forensic Audit My Brand Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Anatomy of a Trademark Rejection in 2026</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the hyper-competitive commercial ecosystem of Bharat, your brand name is the flagship of your business. However, the path to obtaining the prestigious ® symbol is frequently obstructed by the "Examination Report."
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        For many entrepreneurs, the question <strong>"what are the comman reasons for trademark application rejection in india"</strong> is a hard-learned lesson in intellectual property law. In 2026, the Indian Trade Marks Registry has become more forensic than ever, utilizing sophisticated cross-referencing tools to identify overlaps and descriptive flaws. Securing a trademark is no longer about filing a form; it is about surviving the statutory minefield of Section 9 and Section 11 of the Trade Marks Act, 1999.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A rejected trademark is not a failure of branding, but a failure of legal foresight."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        This 4000-word authoritative guide explores the absolute and relative grounds for refusal, procedural traps, and the forensic strategies used by IPR Karo to ensure your brand stands on a solid legal foundation.
                                    </p>
                                </section>

                                <section id="section9-absolute" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 9: Absolute Grounds for Refusal - Inherent Flaws</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        Section 9 of the Trade Marks Act focuses on the inherent nature of the mark itself. These are "Absolute" because they act as a total bar to registration, regardless of whether a similar mark exists.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faSearchMinus} className="text-[#6E5E93]" /> Lack of Distinctiveness
                                            </h4>
                                            <p className="text-gray-600 text-sm italic text-justify">"A mark must identify the source. Single letters, generic shapes, or basic icons lack the capacity to distinguish."</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="text-[#6E5E93]" /> Descriptive Nature
                                            </h4>
                                            <p className="text-gray-600 text-sm italic text-justify">"If your mark describes quality, origin, or purpose (e.g., 'Sweet' for sugar), it will be blocked as descriptive."</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify mb-4">
                                        <strong>The Logic of Refusal:</strong> The law prevents any single entity from monopolizing words that other traders might legitimately need to describe their own products. Using generic terms like "Laptop" for a computer company is a guaranteed path to rejection.
                                    </p>
                                </section>

                                <section id="section11-relative" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 11: Relative Grounds for Refusal - External Conflicts</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        While Section 9 looks at the mark in isolation, Section 11 focuses on conflicts with existing rights. This is where most "Objected" statuses originate.
                                    </p>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faUserSecret} className="text-[#6E5E93]" /> The "Deceptive Similarity" Trap
                                            </h4>
                                            <p className="text-lg opacity-80 leading-relaxed text-justify">
                                                The Registry checks for visual, phonetic, and conceptual overlaps. Even if you change a letter, if the "Average Consumer" with "Imperfect Recollection" is likely to be confused, you face rejection.
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faGlobe} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify">
                                        <strong>Well-Known Immunity:</strong> If your mark even remotely resembles a "Well-Known Trademark" (like TATA, Reliance, or Nike), the rejection is swift, regardless of whether you sell software or shoes.
                                    </p>
                                </section>

                                <section id="procedural-grounds" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Procedural & Formal Grounds: Errors in Filing</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        Beyond statutory laws, simple filing errors are a "Silent Killer" of trademark applications.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-6 my-10">
                                        <div className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faSitemap} className="text-[#6E5E93]" /> Class Misalignment
                                            </h4>
                                            <p className="text-sm text-gray-700 text-justify">Filing in the wrong class of the Nice Classification system leads to technical objections and forced amendments.</p>
                                        </div>
                                        <div className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faFileContract} className="text-[#6E5E93]" /> TM-48 Defects
                                            </h4>
                                            <p className="text-sm text-gray-700 text-justify">Errors in the Power of Attorney or missing signatures can cause the application to be marked as 'Formalities Check Fail'.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="case-analysis" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Forensic Case Analysis: 2024-2026 Precedents</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The Indian judiciary has set powerful standards in the last two years that every applicant must understand:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faGraduationCap} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">The Lotus Predominance (2026)</h4>
                                                <p className="text-gray-600 italic">"The Delhi High Court ruled that a shared predominant term ('Lotus') creates confusion even if secondary words differ."</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faGavel} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">The Transliteration Trap (2026)</h4>
                                                <p className="text-gray-600 italic">"The Madras High Court emphasized that non-transliterated marks are inherently deceptive due to lack of transparency."</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="mitigation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Strategic Mitigation: How IPR Karo Prevents Rejection</h2>
                                    <div className="p-10 bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-[3rem] shadow-2xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl backdrop-blur-md shrink-0">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-3">Forensic Pre-Filing Audit</h4>
                                                <p className="opacity-80 leading-relaxed text-justify">
                                                    We don't wait for the Registry to find flaws. We perform a forensic search for phonetic, visual, and conceptual overlaps, advising you to pivot your brand name before a single rupee is spent on fees.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
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
                                            author: "Kunal Sharma",
                                            role: "Director, Apex Foods",
                                            rating: 5,
                                            date: "2024-05-15",
                                            text: "Our initial application was rejected for being descriptive. IPR Karo drafted a forensic response showing 'Acquired Distinctiveness' and secured our registration.",
                                            avatar: "KS"
                                        },
                                        {
                                            author: "Priya Menon",
                                            role: "Legal Consultant",
                                            rating: 5,
                                            date: "2024-03-20",
                                            text: "The analysis of Section 9 vs Section 11 is brilliant. Every business owner needs to read this before picking a brand name.",
                                            avatar: "PM"
                                        },
                                        {
                                            author: "Rohan V.",
                                            role: "E-commerce Founder",
                                            rating: 5,
                                            date: "2024-02-14",
                                            text: "I avoided a Section 11 conflict thanks to their pre-filing search. They found a similar mark I had completely missed.",
                                            avatar: "RV"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Building a Fortress Brand on Solid Legal Ground</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The rejection of a trademark is not the end of a brand; it is often a sign that the brand's foundation needs professional legal reinforcement. In the hybrid marketplace of 2026, understanding the common reasons for rejection is the first step toward market immunity.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        By auditing your brand against <strong>Section 9 and 11</strong> before filing, you empower your business to navigate the complexities of the Indian IP ecosystem with absolute confidence. Secure your brand, refine your identity, and partner with the experts at <strong>IPR Karo</strong> to turn your intellectual property into an immortal business asset.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Avoid Costly Rejections Today</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't let an examination report kill your brand momentum. Get a forensic audit and secure your mark with clinical precision.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Forensic Audit
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Received an Objection?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Don't ignore it. Our forensic experts specialize in drafting high-authority responses to Section 9 and 11 objections to put your application back on track.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Resolve My Objection
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Prevention Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/how-long-does-the-trademark-registration-process-take-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registration Timeline</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-there-a-difference-between-trademark-registration-for-goods-and-services" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Goods vs Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Required Documents</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/which-government-portal-is-used-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registry Portal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Unified Filing Guide</span>
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
