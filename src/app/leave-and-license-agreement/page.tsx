import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
    faKey,
    faHome,
    faPenNib,
    faSignature,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Leave and License Agreement Guide | Rules, Fees & Registration 2026',
    description: 'Master the Leave and License agreement process in India. Learn the difference between lease and license, mandatory registration, and stamp duty calculation.',
    keywords: [
        'leave and license agreement',
        'difference between lease and license',
        'leave and license registration maharashtra',
        'rent agreement india rules',
        'stamp duty on leave and license',
        'eviction laws for licensee',
        'maharashtra rent control act 1999',
        '11 month rent agreement',
        'leave and license clauses',
        'e-registration rent agreement'
    ],
    openGraph: {
        title: 'Expert Guide: Drafting and Registering Leave and License Agreements',
        description: 'Protect your property rights. Learn how to draft a legally sound leave and license agreement and navigate the registration process efficiently.',
        url: 'https://www.iprkaro.com/leave-and-license-agreement',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/leave-and-license-agreement',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Shield of Property: Understanding Leave and License' },
    { id: 'e-registration-tech', title: 'The Digital Shift: e-Registration and iSarita 2.0' },
    { id: 'legal-definition', title: 'Legal Foundations: Section 52 of the Easements Act' },
    { id: 'license-vs-lease', title: 'The Great Debate: Leave and License vs. Lease' },
    { id: 'essential-clauses', title: 'Mandatory Clauses for a Bulletproof Agreement' },
    { id: 'registration-process', title: 'Registration: Why 11 Months is the Standard' },
    { id: 'maharashtra-rules', title: 'The Maharashtra Landscape: Section 55 Compliance' },
    { id: 'stamp-duty', title: 'Stamp Duty and Registration Fees: The Calculator' },
    { id: 'eviction-rights', title: 'Eviction and Summary Possession: Landlord Safeguards' },
    { id: 'tax-implications', title: 'Income Tax and GST on License Fees' },
    { id: 'termination-penalties', title: 'Termination Penalties: Beyond the Notice Period' },
    { id: 'why-iprkaro', title: 'Why Trust IPR Karo for Your Legal Drafting Needs' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Securing Your Peace of Mind' },
];

const faqs = [
    {
        question: "What is a Leave and License Agreement?",
        answer: "A Leave and License agreement is a legal document where the owner (Licensor) gives permission to another person (Licensee) to use a property for a specific period without transfer of interest. It is governed by the Indian Easements Act, 1882."
    },
    {
        question: "How is a License different from a Lease?",
        answer: "A lease creates an 'interest in the property' and gives the tenant exclusive possession, making eviction difficult. A license is merely a personal permission to occupy, which does not create any interest and is much easier for a landlord to terminate."
    },
    {
        question: "Is it mandatory to register a Leave and License agreement in Maharashtra?",
        answer: "Yes. Under Section 55 of the Maharashtra Rent Control Act, 1999, it is mandatory to register all Leave and License agreements, regardless of their duration. The responsibility for registration lies with the landlord."
    },
    {
        question: "Why are most rent agreements for 11 months?",
        answer: "Agreements for 11 months are common because the Registration Act of 1908 requires mandatory registration for leases of 12 months or more. By keeping it at 11 months, parties in some states try to avoid the cost and complexity of registration (though Maharashtra requires it regardless of tenure)."
    },
    {
        question: "What is the Stamp Duty on Leave and License in 2026?",
        answer: "In states like Maharashtra, stamp duty is generally calculated at 0.25% of the total consideration (total rent + non-refundable deposit + specific percentages of refundable deposits) for the entire duration of the agreement."
    },
    {
        question: "Can handles like security deposits be non-refundable?",
        answer: "Yes, if both parties agree, a portion of the security deposit can be non-refundable. However, this must be explicitly stated in the agreement to be legally enforceable."
    },
    {
        question: "What is the 'Lock-in Period'?",
        answer: "A lock-in period is a duration during which neither the licensor nor the licensee can terminate the agreement. If a party leaves during this time, they are usually liable to pay the license fee for the remaining months of the lock-in."
    },
    {
        question: "Does the licensee have a right to the property after the owner's death?",
        answer: "No. A license is a personal right and typically does not pass to the heirs. However, the exact terms depend on the drafting of the 'Successors and Assigns' clause in the agreement."
    },
    {
        question: "What is a 'Summary Eviction' process?",
        answer: "In Maharashtra, the Competent Authority handles evictions for Leave and License via a summary procedure. This is much faster than a civil suit and allows landlords to recover possession efficiently."
    },
    {
        question: "Can I do the registration online?",
        answer: "Yes, many states like Maharashtra offer e-Registration services through portal like iSarita. This requires Aadhaar and biometric verification and does not require a visit to the Sub-Registrar office."
    }
];

export default function LeaveLicensePage() {
    const breadcrumbItems = [
        { label: "Leave and License Agreement", href: "/leave-and-license-agreement" },
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
                "name": "Leave and License",
                "item": "https://www.iprkaro.com/leave-and-license-agreement"
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
        "headline": "Leave and License Agreement in India: The Complete Legal Guide 2026",
        "description": "Examine the technical details of Leave and License agreements. Learn about the Indian Easements Act, stamp duty calculation, and mandatory registration rules.",
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
            "@id": "https://www.iprkaro.com/leave-and-license-agreement"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Leave and License Drafting & Registration Service",
        "image": "https://www.iprkaro.com/assets/leave-license-og.jpg",
        "description": "Professional drafting and e-registration services for residential and commercial leave and license agreements.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2250"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Solidifying Property Rights: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Leave and License Agreement</span> Masterclass
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Navigate the complexities of property occupation without losing control. From the Easements Act to the Rent Control Act, ensure your property is protected with India’s most trusted legal drafting partner.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Draft Your Agreement Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Shield of Property: Understanding Leave and License</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the dynamic real estate landscape of modern India, protecting your property assets is a high stakes endeavor. For a landlord, the fear of an unauthorized tenant refusing to vacate is a constant anxiety. For a tenant, the need for a stable, transparent living or working arrangement is paramount. At the center of this relationship is a powerful legal document: the <strong>leave and license agreement</strong>. Unlike a traditional lease, which creates an interest in the land, a leave and license agreement is a sophisticated legal instrument that grants a personal right to occupy a space while the legal ownership and possession remain firmly with the landlord.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        As Bharat’s urban centers like Mumbai, Pune, Bangalore, and Delhi continue to grow, the demand for flexible, short term property arrangements has skyrocketed. The law has evolved to keep pace with this demand. Statutes like the Indian Easements Act of 1882 and state specific laws like the Maharashtra Rent Control Act of 1999 provide a robust framework that balances the rights of both parties. However, the true strength of this agreement lies in the precision of its drafting. A single missing clause or an incorrect definition can turn a simple license into a protected tenancy, making eviction a decades long nightmare.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we believe that clarity is the best prevention for conflict. Every year, thousands of property owners face legal hurdles because they used a generic template from the internet or failed to register their agreements. In today’s digital age, the government has made it easier with e-registration and Aadhaar verification, yet the legal nuances remain as critical as ever. This comprehensive 4000-word manual is designed to demystify the leave and license ecosystem. We will explore why the 11-month standard exists, how to calculate stamp duty with forensic accuracy, and why states like Maharashtra have made registration a non negotiable requirement for all residential and commercial properties.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A well drafted license agreement is not just a piece of paper; it is a legal fortress. It defines where your boundaries end and your colleague’s rights begin."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        By the end of this guide, you will understand why the "License" is the preferred choice for landlords and why "Registration" is the ultimate insurance policy for tenants. Whether you are a first time homeowner looking to rent out your apartment or a startup founder seeking your first office space, this manual will provide you with the legal vocabulary and strategic insights needed to navigate the Indian property market with confidence. Let us begin by breaking down the very foundation of this agreement: the statutory definition.
                                    </p>
                                </section>

                                <section id="e-registration-tech" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Digital Shift: e-Registration and iSarita 2.0</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The days of standing in long queues at the Sub-Registrar’s Office (SRO) are largely over in progressive states like Maharashtra. The Department of Registration and Stamps (IGR) has pioneered the <strong>e-Registration</strong> system, powered by the iSarita application. This system allows for the entire process—from drafting to biometric verification—to be completed from the comfort of your home or an ASP (Authorized Service Provider) center.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The technology uses Aadhaar-based authentication coupled with an optical biometric scanner. When you sign a digital Leave and License agreement, your thumbprint and photo are captured in real-time and matched against the UIDAI database. This level of security virtually eliminates the risk of impersonation—a common scam in traditional paper-based agreements. At IPR Karo, we leverage this e-registration ecosystem to provide a 24-hour turnaround time for residential agreements, ensuring that your legal compliance moves at the speed of your business.
                                    </p>
                                </section>

                                <section id="legal-definition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Legal Foundations: Section 52 of the Indian Easements Act 1882</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        To understand the power of a <strong>leave and license agreement</strong>, one must look at the primary legislation that governs it. Section 52 of the Indian Easements Act provides the definitive legal baseline:
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <p className="text-gray-700 leading-relaxed text-lg italic">
                                            "Where one person grants to another, or to a definite number of other persons, a right to do, or continue to do, in or upon the immovable property of the grantor, something which would, in the absence of such right, be unlawful, and such right does not amount to an easement or an interest in the property, the right is called a license."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Two key phrases in this definition are critical: <strong>"in the absence of such right, be unlawful"</strong> and <strong>"does not amount to an interest in the property."</strong> This means that without the agreement, the licensee would be a trespasser. Crucially, because no "interest" is created, the licensee cannot claim any rights over the title of the property. This is what makes a license a "personal right" rather than a "proprietary right." If you sell the property, the license generally ends because the personal relationship between the original grantor and the grantee is severed.
                                    </p>
                                </section>

                                <section id="license-vs-lease" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Great Debate: Leave and License vs. Lease</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Choosing between a lease and a license is the most important decision a property owner will make. For a layman, they might seem identical, but in the eyes of the law, they are worlds apart.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold border">Feature</th>
                                                    <th className="p-5 font-bold border">License (Easements Act)</th>
                                                    <th className="p-5 font-bold border">Lease (Transfer of Property Act)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-base">
                                                <tr>
                                                    <td className="p-4 font-bold border">Nature of Right</td>
                                                    <td className="p-4 border">Personal Permission</td>
                                                    <td className="p-4 border">Transfer of Interest</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Possession</td>
                                                    <td className="p-4 border">Landlord retains legal possession</td>
                                                    <td className="p-4 border">Tenant gets exclusive possession</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Transferability</td>
                                                    <td className="p-4 border">Generally not transferable</td>
                                                    <td className="p-4 border">Can be sub-let (per agreement)</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Termination</td>
                                                    <td className="p-4 border">Easier; revoked as per contract</td>
                                                    <td className="p-4 border">Harder; complex eviction laws</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Heritability</td>
                                                    <td className="p-4 border">Ends with life of licensee</td>
                                                    <td className="p-4 border">Inherited by legal heirs</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Landlords in major cities almost universally prefer a license because it offers a "summary procedure" for eviction. If a tenant refuses to leave, you don't have to wait for ten years in a civil court; you can approach the Competent Authority which is designed to handle property recovery swiftly.
                                    </p>
                                </section>

                                <section id="essential-clauses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mandatory Clauses for a Bulletproof Agreement</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A strong agreement leaves no room for interpretation. At IPR Karo, we ensure every document includes these high performance clauses:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faPenNib} className="mr-3 text-[#6E5E93]" /> No Tenancy Rights
                                            </h4>
                                            <p className="text-gray-600">This clause explicitly states that nothing in the agreement shall be construed as creating a tenancy or a lease. It reaffirms that the licensor remains in "de-facto" possession of the property.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="mr-3 text-[#6E5E93]" /> Restrictive Usage
                                            </h4>
                                            <p className="text-gray-600">The agreement must define what the property can be used for (e.g., "Family Residential only"). This prevents the licensee from starting a commercial venture in a residential society, which could lead to legal trouble for the owner.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3 text-[#6E5E93]" /> Security Deposit Type
                                            </h4>
                                            <p className="text-gray-600">Clearly demarcate how much is refundable and under what conditions. Does the owner have the right to deduct for painting or damage? Define it to avoid last minute disputes.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-[#6E5E93]" /> Termination & Lock in
                                            </h4>
                                            <p className="text-gray-600">Specify a 1 or 2 month notice period. More importantly, include a lock in period (e.g., first 6 months) during which the licensee must pay even if they leave, ensuring a stable income for the landlord.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="registration-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Registration: Why 11 Months is the Indian Standard</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        You may have noticed that most <strong>leave and license agreement</strong> drafts are for a duration of exactly 11 months. This is not a coincidence or a tradition; it is a calculated legal move. Under Section 17 of the Registration Act, 1908, any lease for a term exceeding one year must be compulsorily registered. By keeping the term at 11 months, parties in many states avoid the mandatory requirement to visit the Sub-Registrar's office, although they should still pay stamp duty.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        However, there is a catch. If you keep renewing the 11-month agreement without a break, a court could interpret this as a long term tenancy. At IPR Karo, we recommend a "one week cooling period" between renewals or drafting a fresh agreement with updated terms to ensure the license nature of the contract is maintained in any future legal dispute.
                                    </p>
                                </section>

                                <section id="maharashtra-rules" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Maharashtra Landscape: Section 55 Compliance</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        For properties in Maharashtra, the rules are significantly stricter. Unlike other states, Maharashtra does not care if your agreement is for 1 month or 11 months. Section 55 of the Maharashtra Rent Control Act, 1999, states:
                                    </p>
                                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic my-10">
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            "Any agreement for leave and license or letting of any premises... shall be in writing and shall be registered under the Registration Act, 1908."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Failure to register in Maharashtra is a punishable offense. The landlord can be fined up to ₹5,000 and even face imprisonment for up to 3 months. More dangerously, if the agreement is not registered, the licensee's claims about the terms of the agreement (like a lower rent) will be accepted as truth unless the landlord can prove otherwise. This puts the entire burden of proof on the landlord, making registration a mandatory self-defense mechanism.
                                    </p>
                                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 italic my-10">
                                        <p className="text-red-900 leading-relaxed text-lg">
                                            <strong>Critical Insight (Section 49):</strong> In many states, Section 49 of the Registration Act, 1908, explicitly states that an unregistered document which requires mandatory registration cannot be received as evidence of any transaction affecting such property. Without registration, your "Agreement" is legally invisible to a judge in an eviction suit.
                                        </p>
                                    </div>
                                </section>

                                <section id="stamp-duty" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stamp Duty and Registration Fees: The Calculator</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Calculating the cost of the agreement is often the most confusing part for users. In 2026, the rates are generally standardized but vary based on the location.
                                    </p>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 my-10">
                                        <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Sample Calculation Table (Maharashtra)</h4>
                                        <ul className="space-y-4 text-lg">
                                            <li className="flex justify-between border-b pb-2"><span>Monthly License Fee:</span> <span className="font-bold">₹ 40,000</span></li>
                                            <li className="flex justify-between border-b pb-2"><span>Duration:</span> <span className="font-bold">12 Months</span></li>
                                            <li className="flex justify-between border-b pb-2"><span>Refundable Deposit:</span> <span className="font-bold">₹ 1,00,000</span></li>
                                            <li className="flex justify-between border-b pb-2"><span>Approx. Stamp Duty (0.25%):</span> <span className="font-bold">₹ 1,200</span></li>
                                            <li className="flex justify-between pb-2"><span>Registration Fee (Flat):</span> <span className="font-bold">₹ 1,000</span></li>
                                        </ul>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Stamp duty is paid to make a document legally admissible in a court of law. An unstamped agreement is just a piece of paper; it cannot be used as evidence in an eviction hearing or a police complaint. At IPR Karo, we handle the entire payment of e-Stamp and Franking to ensure your document is perfectly compliant before it is signed.
                                    </p>
                                </section>

                                <section id="eviction-rights" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Eviction and Summary Possession: Landlord Safeguards</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The biggest advantage of a license is the ease of eviction. Under Section 24 of the Maharashtra Rent Control Act, a landlord is entitled to recover possession of the premises on expiry of the license.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-red-100 shadow-sm border-l-[10px] border-l-red-500">
                                            <div className="w-12 h-12 shrink-0 bg-red-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-red-900 text-xl mb-1">Competent Authority Jurisdiction</h4>
                                                <p className="text-red-800">You do not go to a regular Civil Court. You approach the Competent Authority. Their decision is final and binding, and they follow a summary procedure that minimizes delays.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-red-100 shadow-sm border-l-[10px] border-l-red-500">
                                            <div className="w-12 h-12 shrink-0 bg-red-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-red-900 text-xl mb-1">Double License Fee Damages</h4>
                                                <p className="text-red-800">If a licensee stays beyond the expiry date, they can be ordered to pay double the agreed license fee for every day of unauthorized stay. This act as a massive deterrent against squatting.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="tax-implications" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Navigating Finances: Income Tax and GST</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Many landlords are unaware of the tax implications of their <strong>leave and license agreement</strong>. Under the Income Tax Act, the license fee is treated as "Income from House Property." You are entitled to a standard deduction of 30% for maintenance, which is a significant tax benefit.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        For commercial licenses, GST might apply if your total turnover exceeds ₹20 Lakhs (or ₹40 Lakhs in some states). In 2026, GST has also been introduced on residential properties used for commercial or co-living purposes. Proper drafting of the agreement can help you define who bears the GST burden, avoiding surprises during your annual tax filings.
                                    </p>
                                </section>

                                <section id="termination-penalties" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Termination Penalties: Beyond the Notice Period</h2>
                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 my-10">
                                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                            A standard <strong>leave and license agreement</strong> often fails because it only defines the *notice* period. What if the licensee breaks the lock-in? A professional draft must specify "Liquidated Damages." This is a pre-estimated amount (usually the rent for the remaining lock-in period) that the defaulting party must pay. In 2026, the courts have upheld these clauses as long as they are reasonable and are not "punitive" in nature. At IPR Karo, we ensure your termination clauses are balanced yet firm, protecting your cash flow projections.
                                        </p>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Thousands of Property Owners Trust IPR Karo</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We don't just provide a template; we provide a legal shield. Our property law division is staffed by specialists who understand the local nuances of every major Indian city.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faSignature} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Custom Drafting</h4>
                                            <p className="text-sm opacity-70">No one size fits all templates. We draft specific clauses for maintenance, society rules, and usage restrictions relevant to your property.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faFileSignature} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Doorstep e-Registration</h4>
                                            <p className="text-sm opacity-70">From biometric scanning to final registration certificate, we handle everything at your convenience, without you stepping out.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Compliance First</h4>
                                            <p className="text-sm opacity-70">We ensure Police Verification and Society NOCs are handled alongside the agreement, giving you a 360-degree safety net.</p>
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
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Vikram Gadgil",
                                            role: "Property Owner, Pune",
                                            rating: 5,
                                            date: "2024-02-18",
                                            text: "Registering a Leave and License in Maharashtra is usually a nightmare, but IPR Karo's remote registration service was flawless. Didn't have to visit the Sub-Registrar office even once!",
                                            avatar: "VG"
                                        },
                                        {
                                            author: "Anjali Deshpande",
                                            role: "Investment Consultant",
                                            rating: 5,
                                            date: "2024-01-12",
                                            text: "I use IPR Karo for all my clients' rental agreements. Their clauses on maintenance and lock-in periods are very well-drafted and protect the owner's interest effectively.",
                                            avatar: "AD"
                                        },
                                        {
                                            author: "Sameer Sheikh",
                                            role: "Commercial Tenant",
                                            rating: 5,
                                            date: "2023-11-25",
                                            text: "Fast and professional. We needed an agreement registered within 24 hours to secure our office space, and they delivered exactly on time. The dashboard tracking is a great bonus.",
                                            avatar: "SS"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Peace of Mind</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        A property is perhaps the most significant investment you will ever make. Letting someone else occupy that property, whether for compensation or convenience, requires a high level of legal protection. A <strong>leave and license agreement</strong> is the gold standard for such protection in India. By choosing the right legal framework, ensuring mandatory registration, and drafting precise clauses, you transform a potentially risky transaction into a secure, income generating asset.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don't leave your property's future to chance. Whether you are dealing with a residential home or a multi floor commercial complex, let IPR Karo be your legal partner. We combine deep statutory knowledge with modern digital convenience to ensure your property remains your fortress, now and forever.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Property?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get your Leave and License agreement drafted and registered by experts. Start the process today and sleep better tonight.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Registration
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult a Legal Expert
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Quick Drafting</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Negotiating a new rental? Get a **Priority Draft** in less than 4 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Order Draft
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Real Estate Links</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/non-disclosure-agreement-format" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">NDA Formats</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Udyam Registration</span>
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
