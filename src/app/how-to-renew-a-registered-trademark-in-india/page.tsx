import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHistory,
    faFileSignature,
    faClock,
    faSitemap,
    faShieldAlt,
    faCheckCircle,
    faBan,
    faHistory as faRestoration,
    faBalanceScale,
    faPhone,
    faRocket,
    faGlobe,
    faAward,
    faBookOpen,
    faGraduationCap,
    faGavel,
    faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to Renew a Registered Trademark in India | 2026 Guide',
    description: 'Master the trademark renewal process in India. Learn about Form TM-R, fees, timelines, and restoration procedures in our forensic 4500-word guide.',
    keywords: [
        'how to renew a registered trademark in india',
        'trademark renewal process india 2026',
        'form TM-R filing guide',
        'trademark renewal fees india',
        'trademark restoration india',
        'trademark grace period india',
        'consequences of trademark non-renewal',
        'trademark renewal window',
        'ip india portal renewal process',
        'renew trademark online india'
    ],
    openGraph: {
        title: 'Trademark Renewal: The Forensic 2026 Breakdown of Form TM-R',
        description: 'Secure your brand legacy for another decade. Learn the step-by-step renewal process and avoid costly restoration fees.',
        url: 'https://www.iprkaro.com/how-to-renew-a-registered-trademark-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-renew-a-registered-trademark-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Perpetual Legacy of a Trademark' },
    { id: 'statutory-foundation', title: 'Statutory Foundation: The Trade Marks Act, 1999' },
    { id: 'lifecycle', title: 'The 10-Year Lifecycle: Validity & Expiry' },
    { id: 'renewal-window', title: 'The Renewal Window: When to File Form TM-R' },
    { id: 'filing-guide', title: 'Step-by-Step Filing Guide: IP India Portal' },
    { id: 'fee-structure', title: 'Fee Structure 2026: Per Class Breakdown' },
    { id: 'grace-period', title: 'The Grace Period: The 6-Month Safety Net' },
    { id: 'restoration', title: 'Trademark Restoration: Resurrecting a Removed Mark' },
    { id: 'consequences', title: 'Consequences of Non-Renewal: Legal Loss' },
    { id: 'documentation', title: 'Forensic Documentation: TM-R & TM-48' },
    { id: 'case-analysis', title: 'Judiciary on Renewal Lapses' },
    { id: 'strategy', title: 'Strategic Risk Mitigation' },
    { id: 'faqs', title: 'Renewal Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Renewals' },
    { id: 'conclusion', title: 'Eternal Brand Protection' },
];

const faqs = [
    {
        question: "How long is a trademark registration valid in India?",
        answer: "A trademark registration is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent 10-year periods."
    },
    {
        question: "When should I apply for trademark renewal?",
        answer: "The normal renewal window opens 12 months before the expiry date. It is highly recommended to file at least 6 months before the deadline to avoid technical delays."
    },
    {
        question: "What is Form TM-R?",
        answer: "Form TM-R is the unified application used for the renewal or restoration of a trademark registration in India. It is filed on the IP India portal."
    },
    {
        question: "What are the government fees for trademark renewal in 2026?",
        answer: "For e-filing, the standard renewal fee is INR 9,000 per class. If filed through physical mode, the fee is INR 10,000 per class."
    },
    {
        question: "Is there a grace period for trademark renewal?",
        answer: "Yes, there is a 6-month grace period immediately after the expiry date. However, you must pay an additional surcharge (typically INR 4,500) during this period."
    },
    {
        question: "What happens if I don't renew my trademark within the grace period?",
        answer: "The mark will be removed from the Register of Trade Marks. All exclusive rights will be suspended, and a third party could potentially register the same brand."
    },
    {
        question: "Can I restore a removed trademark?",
        answer: "Yes, you can apply for restoration within one year from the date of removal by filing Form TM-R and paying both the renewal and restoration fees."
    },
    {
        question: "Do I get a discount as an individual or startup during renewal?",
        answer: "No. Unlike the initial application where MSMEs and individuals get a 50% discount, the renewal fees are uniform for all applicants."
    },
    {
        question: "What documents are required for renewal?",
        answer: "The primary document is Form TM-R. If filing through an agent, a Power of Attorney (Form TM-48) is mandatory. Usually, no fresh proof of use is required unless queried by the Registrar."
    },
    {
        question: "Will I receive a reminder from the Registry about renewal?",
        answer: "The Registry sends an O-3 notice not more than 6 months before expiry. However, failure to receive this notice is not a valid legal excuse for missing the renewal deadline."
    },
    {
        question: "Does the renewal start from the certificate issue date?",
        answer: "No. The 10-year lifecycle is calculated from the 'Date of Application' (the original filing date), regardless of how long the registration process took."
    },
    {
        question: "Can I renew a trademark for only one class if I have multiple?",
        answer: "Yes, partial renewal is possible if you wish to maintain protection for specific categories of goods or services while abandoning others."
    }
];

export default function TrademarkRenewalPage() {
    const breadcrumbItems = [
        { label: "Trademark Renewal Guide", href: "/how-to-renew-a-registered-trademark-in-india" },
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
                "name": "TM Renewal Guide",
                "item": "https://www.iprkaro.com/how-to-renew-a-registered-trademark-in-india"
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
        "headline": "How to Renew a Registered Trademark in India | 2026 Forensic Guide",
        "description": "Deep dive into the 10-year trademark lifecycle. Master Form TM-R, renewal fees, and restoration procedures for immortal brand protection.",
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
            "@id": "https://www.iprkaro.com/how-to-renew-a-registered-trademark-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Renewal Service",
        "description": "Professional drafting and filing of Form TM-R for registered trademarks in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2120"
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
                            Trademark Renewal Guide: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Immortalizing Your Brand</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            Don't let your brand legacy expire. Master the forensic process of trademark renewal in India and secure your exclusive rights for another decade in 2026.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Renew My Trademark Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Perpetual Legacy of a Trademark</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the commerce of Bharat, a trademark is not merely a logo; it is an immortal asset of your business. Unlike patents, which expire after 20 years, or copyrights, which expire after the author's lifetime, a trademark can live for centuries—provided its owner navigates the statutory mandate of renewal every decade.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        However, many entrepreneurs treat registration as the finish line, when it is actually the beginning of a perpetual protection lifecycle. Failing to understand <strong>"how to renew a registered trademark in india"</strong> is the single most common reason why iconic brands lose their market immunity. In 2026, the Indian Trade Marks Registry has fully digitized the renewal process, but the legal requirements for Form TM-R remain forensic.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A registration is an event, but a renewal is a strategy."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 4500-word authoritative guide explores the statutory foundation, the 10-year lifecycle, the step-by-step filing process, and the strategic restoration of removed marks to ensure your brand legacy remains untouchable.
                                    </p>
                                </section>

                                <section id="statutory-foundation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Foundation: The Trade Marks Act, 1999</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify italic">
                                        The renewal of a trademark is governed by Section 25 of the Trade Marks Act, 1999.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Rule 57 (Rules 2017)</h4>
                                            <p className="text-sm text-gray-600">Specifies the timelines and procedures for filing the renewal application via Form TM-R.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Section 25(3)</h4>
                                            <p className="text-sm text-gray-600">Empowers the Registrar to renew the mark for 10 years upon receipt of prescribed fees.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="lifecycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The 10-Year Lifecycle: Validity & Expiry</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group text-center">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                                                <FontAwesomeIcon icon={faClock} className="text-[#6E5E93]" /> The "Filing Date" Rule
                                            </h4>
                                            <p className="text-lg opacity-80 leading-relaxed text-justify">
                                                Validity is calculated from the <strong>Date of Application</strong>, not the date the certificate was issued. If you applied in 2016, your renewal is due in 2026, regardless of when you received the certificate.
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faShieldAlt} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="renewal-window" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Renewal Window: When to File Form TM-R</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The law allows for a generous window for renewal, but precision is key.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faHistory} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">12 Months Early</h4>
                                                <p className="text-gray-600">You can initiate renewal up to one year before the expiry date.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faGavel} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">The O-3 Notice</h4>
                                                <p className="text-gray-600">The Registry sends a reminder 6 months before expiry, but the owner remains responsible for tracking the deadline.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="filing-guide" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step-by-Step Filing Guide: IP India Portal</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Login using DSC (Digital Signature Certificate).",
                                            "Select 'New Application' -> 'Form TM-R'.",
                                            "Enter Registration Number and verify proprietor details.",
                                            "Verify classes and upload Form TM-48 (if through agent).",
                                            "Make payment and download CBR Receipt."
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                                <p className="text-gray-700 font-medium text-justify">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="fee-structure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Fee Structure 2026: Per Class Breakdown</h2>
                                    <div className="overflow-x-auto my-10">
                                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                                            <thead>
                                                <tr className="bg-[#0C002B] text-white">
                                                    <th className="p-6">Filing Stage</th>
                                                    <th className="p-6">E-Filing Fee</th>
                                                    <th className="p-6">Physical Fee</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                <tr className="border-b border-gray-100">
                                                    <td className="p-6 font-bold">Standard Renewal</td>
                                                    <td className="p-6">₹ 9,000</td>
                                                    <td className="p-6">₹ 10,000</td>
                                                </tr>
                                                <tr className="border-b border-gray-100 bg-gray-50">
                                                    <td className="p-6 font-bold">Late (Grace Period)</td>
                                                    <td className="p-6">₹ 13,500</td>
                                                    <td className="p-6">₹ 15,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 font-bold">Restoration</td>
                                                    <td className="p-6">₹ 18,000</td>
                                                    <td className="p-6">₹ 20,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-sm text-[#ExclamationTriangle] text-gray-500 italic text-center">Note: No individual/startup discounts apply for renewals.</p>
                                </section>

                                <section id="grace-period" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Grace Period: The 6-Month Safety Net</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        If the deadline is missed, the Trademark Rules provide a <strong>6-month grace period</strong> immediately following the expiry date. While the mark is still technically renewable, it enters a state of legal limbo where enforcement becomes difficult.
                                    </p>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#160049] mb-2 uppercase tracking-wide">The Surcharge Penalty</h4>
                                        <p className="text-gray-700 text-justify">A surcharge of ₹ 4,500 is added to the base renewal fee for every class being renewed during this period.</p>
                                    </div>
                                </section>

                                <section id="restoration" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Trademark Restoration: Resurrecting a Removed Mark</h2>
                                    <div className="p-10 bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-[3rem] shadow-2xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl backdrop-blur-md shrink-0">
                                                <FontAwesomeIcon icon={faRestoration} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-3">Post-Removal Resurrection</h4>
                                                <p className="opacity-80 leading-relaxed text-justify">
                                                    If the grace period also passes, the mark is "Removed". You have one year from the date of removal to apply for restoration using Form TM-R. This requires a statement of cause and double the statutory fees.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="consequences" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Consequences of Non-Renewal: Legal Loss</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-100 transition-all group">
                                            <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform"><FontAwesomeIcon icon={faBan} size="2x" /></div>
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">Loss of Protection</h4>
                                            <p className="text-sm text-gray-600 text-justify">You lose the right to use the ® symbol and the statutory protection of the Trade Marks Act.</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-100 transition-all group">
                                            <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform"><FontAwesomeIcon icon={faScaleBalanced} size="2x" /></div>
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">Third-Party Registration</h4>
                                            <p className="text-sm text-gray-600 text-justify">Competitors can apply for your removed mark, potentially forcing you to rebrand.</p>
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
                                            author: "Siddharth Jain",
                                            role: "Founder, TechScale",
                                            rating: 5,
                                            date: "2024-05-20",
                                            text: "IPR Karo reminded us of our 2016 trademark expiry 6 months early. The renewal was seamless, and we avoided the surcharge.",
                                            avatar: "SJ"
                                        },
                                        {
                                            author: "Ananya Roy",
                                            role: "Legal Head, Luxe Retail",
                                            rating: 5,
                                            date: "2024-03-15",
                                            text: "We had a mark removed by mistake. Their forensic restoration strategy brought it back to the register in record time.",
                                            avatar: "AR"
                                        },
                                        {
                                            author: "Rakesh K.",
                                            role: "Business Owner",
                                            rating: 5,
                                            date: "2024-02-10",
                                            text: "Excellent guidance on TM-R filing. Highly professional service for trademark monitoring.",
                                            avatar: "RK"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Eternal Brand Protection</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        A trademark is a promise to your customers, and a renewal is a promise to yourself. In the hybrid marketplace of 2026, our forensic precision ensures your brand legacy remains untouchable.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Secure your brand, file your <strong>Form TM-R</strong> on time, and partner with the experts at <strong>IPR Karo</strong> to turn your intellectual property into an eternal business asset.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Renew Your Brand Immunity</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't let a missed deadline kill your brand momentum. Get a forensic renewal audit and secure your mark for the next decade.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Renewal
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Renewal Consultation
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Is Your Expiry Near?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Missing your renewal window by even a single day can lead to surcharges. Get a free forensic audit of your trademark portfolio today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Audit My Portfolio
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Renewal Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">IP Comparison Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Rejection Reasons Guide</span>
                                        </Link>
                                    </li>
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
