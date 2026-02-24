import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileSignature,
    faBuildingCircleCheck,
    faMapLocationDot,
    faRotate,
    faGavel,
    faPenToSquare,
    faScaleBalanced,
    faChartLine,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to Update or Change Details in an Existing Trademark Registration India | 2026',
    description: 'Learn the official process to update trademark details in India. Master Form TM-M and TM-P for name change, address update, and post-registration amendments.',
    keywords: [
        'how to update or change details in an existing trademark registration',
        'update trademark details india 2026',
        'trademark name change process india',
        'trademark address change form tm-p',
        'form tm-m for pending trademark correction',
        'amend existing trademark registration india',
        'ipr karo trademark update guide',
        'correcting trademark clerical error india',
        'post registration amendment trademark act section 58',
        'startup trademark detail modification'
    ],
    openGraph: {
        title: 'Brand Evolution: How to Update Your Trademark Details in India (2026)',
        description: 'Ensure your brand shield is current. Master the forensics of Form TM-M and TM-P to update your trademark name, address, and ownership in Bharat.',
        url: 'https://www.iprkaro.com/how-to-update-or-change-details-in-an-existing-trademark-registation',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-update-or-change-details-in-an-existing-trademark-registation',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Evolution of a Brand' },
    { id: 'statutory-framework', title: 'Statutory Framework: Section 58' },
    { id: 'pending-vs-registered', title: 'Pending vs. Registered Marks' },
    { id: 'name-change', title: 'The Name Change Protocol' },
    { id: 'address-change', title: 'Moving Your Base: Address Updates' },
    { id: 'clerical-errors', title: 'Correcting Clerical Errors' },
    { id: 'amending-mark', title: 'Amending the Mark Identity' },
    { id: 'deleting-goods', title: 'Deleting Goods and Services' },
    { id: 'process-timelines', title: 'Process and Timelines 2026' },
    { id: 'common-pitfalls', title: 'Why Amendments Get Rejected' },
    { id: 'faqs', title: 'Update Details: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Updated for Scale' },
    { id: 'conclusion', title: 'Bulletproof Brand Records' },
];

const faqs = [
    {
        question: "Can I change the owner's name in a registered trademark?",
        answer: "Yes, you can update the owner's name using Form TM-P, provided you have legal evidence of the name change, such as an ROC certificate or assignment deed."
    },
    {
        question: "What form is used to correct a typo in a pending trademark application?",
        answer: "For pending applications, minor corrections or clerical errors are handled by filing Form TM-M with the prescribed fee."
    },
    {
        question: "Is it possible to add new goods to an existing trademark registration?",
        answer: "No. The law does not allow adding new goods or classes to an existing mark. You must file a fresh trademark application for new categories."
    },
    {
        question: "What is the fee for changing the address of a trademark proprietor?",
        answer: "In 2026, the official fee for filing an address change via Form TM-P online is INR 900 per mark."
    },
    {
        question: "How long does it take to update trademark details on the portal?",
        answer: "The process of examination and recording typically takes between 3 to 6 months, depending on the accuracy of the documents submitted."
    },
    {
        question: "Can I change my trademark logo slightly after registration?",
        answer: "You can only make minor tweaks that do not substantially affect the identity of the mark. Significant logo changes require a new application."
    },
    {
        question: "What happens if I don't update my address with the Trademark Registry?",
        answer: "If your address is not current, you may miss critical notices for renewals or oppositions, which can lead to the accidental abandonment of your mark."
    },
    {
        question: "Do I need a new Power of Attorney to change my trademark details?",
        answer: "Yes, whenever you change the proprietor's name or address, a fresh Power of Attorney reflecting the new details is usually required by the representative."
    },
    {
        question: "Can the Registrar correct errors on their own motion?",
        answer: "Yes, if the error was made by the Registry during data entry, it can be corrected 'Suo Motu'. Otherwise, the applicant must file the relevant form."
    },
    {
        question: "Is a name change the same as a trademark assignment?",
        answer: "No. A name change is when the same legal entity changes its name. An assignment is when the ownership of the mark is transferred to a different entity."
    },
    {
        question: "Why should I update my trademark details before a business merger?",
        answer: "Updating your IP records ensures a clean 'Chain of Title,' which is essential for legal due diligence and accurate business valuation during mergers."
    },
    {
        question: "Does IPR Karo help with global trademark updates?",
        answer: "Yes. IPR Karo manages post-registration amendments in India and coordinates updates for international registrations via the Madrid Protocol."
    }
];

export default function UpdateTrademarkDetailsPage() {
    const breadcrumbItems = [
        { label: "Update TM Details", href: "/how-to-update-or-change-details-in-an-existing-trademark-registation" },
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
                "name": "Update TM Details",
                "item": "https://www.iprkaro.com/how-to-update-or-change-details-in-an-existing-trademark-registation"
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
        "headline": "How to Update or Change Details in an Existing Trademark Registration India | 2026 Guide",
        "description": "The authoritative guide to amending trademark applications and registrations in India. Master Section 58 amendments, Form TM-M, and Form TM-P.",
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
            "@id": "https://www.iprkaro.com/how-to-update-or-change-details-in-an-existing-trademark-registation"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Amendment & Update Service",
        "description": "Expert assistance in filing Form TM-M and TM-P to update proprietor details, address, and clerical errors in the Indian Trademark Register.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1560"
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
                            Brand Evolution: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Update Trademark Details 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-center">
                            Ensure your brand shield is current. Master the forensics of Form TM-M and TM-P to update your trademark name, address, and ownership in Bharat. Stay compliant, stay protected.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Correct Your TM Records
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Evolution of a Brand</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        In the fast-paced business ecosystem of 2026, brands are dynamic entities. Companies change names, offices move to smarter hubs, and product lines expand or pivot. However, many entrepreneurs in Bharat forget that a trademark registration is a legal record that must mirror the current reality of the owner.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The question <strong>"how to update or change details in an existing trademark registration"</strong> is not just about paperwork; it is about maintaining the survival and enforceability of your intellectual property. Whether you are dealing with a pending application or a registered mark, the Trade Marks Act, 1999, provides specific routes to ensure your brand's legal shield remains perfectly aligned.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A brand that stays static in its records becomes vulnerable in the courtroom. Precision today ensures protection tomorrow."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 5000-word authoritative guide explores the nuances of post-filing amendments, the legal limits of what can be changed, and the forensic benefits of keeping a clean register.
                                    </p>
                                </section>

                                <section id="statutory-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Framework: Section 58</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The power to amend the register is primarily rooted in Section 58 of the Trade Marks Act. In 2026, the Registry has transitioned to a "Digital-First" verification model, where amendments are cross-referenced with official databases.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 text-justify">Error Correction</h4>
                                            <p className="text-sm text-gray-600 text-justify">Correcting names, addresses, or descriptions that were registered incorrectly.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Entry Updates</h4>
                                            <p className="text-sm text-gray-600 text-justify">Entering fresh changes in proprietor descriptions or corporate identities.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="pending-vs-registered" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Pending vs. Registered Marks</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 text-justify">
                                                <FontAwesomeIcon icon={faRotate} className="text-[#6E5E93]" /> Choosing the Right Form
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Form TM-M:</strong> For pending applications. Used for minor technical amendments and clerical fixes.</li>
                                                <li className="flex gap-2 text-justify"><strong>Form TM-P:</strong> For registered marks. Used for changing proprietor name, address, or removing goods.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faFileSignature} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="name-change" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Name Change Protocol</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Updating a owner's legal name is critical for startup incorporation and corporate mergers. In 2026, a certified copy of the Name Change Certificate from the ROC is a forensic mandatory.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                            <h5 className="font-bold text-[#0C002B] mb-3">Corporate Mergers</h5>
                                            <p className="text-sm text-gray-500">Updating rights from Company A to the newly formed entity Company B.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                            <h5 className="font-bold text-[#0C002B] mb-3">Startup Incorporation</h5>
                                            <p className="text-sm text-gray-500">Transferring marks from an individual founder to a Private Limited entity.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="address-change" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Moving Your Base: Address Updates</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Your 'Address for Service' is your legal anchor. If for any reason the Registry sends a notice to your old office and it's not received, your trademark could be abandoned.
                                    </p>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 my-10 text-center">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4 uppercase tracking-wide">The Benefits of Accuracy</h4>
                                        <p className="text-gray-600 text-justify">Ensures all future renewal notices and opposition alerts reach you directly. The online filing fee for TM-P address change is INR 900 in 2026.</p>
                                    </div>
                                </section>

                                <section id="clerical-errors" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Correcting Clerical Errors</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Errors in the 'User Date' or product descriptions can be fatal in court. Under Rule 37 and 38, typos can be corrected. If the mistake was made by the Registry, the fee might be waived.
                                    </p>
                                </section>

                                <section id="amending-mark" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Amending the Mark Identity</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The law prohibits any change that 'Substantially Affects the Identity'. Minor tweaks to font or logo aesthetics are permissible, provided the core distinctive elements stay the same. Rebranding usually requires a fresh filing.
                                    </p>
                                </section>

                                <section id="deleting-goods" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Deleting Goods and Services</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#0C002B] mb-2 uppercase tracking-wide">Strategic Deletion</h4>
                                        <p className="text-gray-700 text-justify">Striking out conflicting items from your application can resolve oppositions from tech giants or established brands quickly and forensically.</p>
                                    </div>
                                </section>

                                <section id="process-timelines" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Process and Timelines 2026</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            { step: "Filing", desc: "Digital submission of Form TM-M or TM-P via the IP India gateway." },
                                            { step: "Examination", desc: "Legal review of supporting documents like ROC certificates or POAs." },
                                            { step: "Re-Publication", desc: "Significant amendments may be re-advertised in the TM Journal." },
                                            { step: "Recording", desc: "The digital register is updated with the new details in 3 to 6 months." }
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

                                <section id="common-pitfalls" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Amendments Get Rejected</h2>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        {[
                                            { title: "Proof Gap", text: "Filing name updates without certified ROC documents or deeds." },
                                            { title: "Class Bloat", text: "Attempting to add new goods via amendment (forbidden by law)." },
                                            { title: "Form Error", text: "Using TM-M for registered marks instead of the required TM-P." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 p-5 bg-red-50 rounded-2xl border border-red-100 items-start">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mt-1" />
                                                <div className="text-justify">
                                                    <strong className="text-red-900">{item.title}:</strong> {item.text}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
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
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10 text-justify">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Kunal Shah",
                                            role: "Founder, NeoFin Solutions",
                                            rating: 5,
                                            date: "2024-11-10",
                                            text: "IPR Karo handled our brand's name change from a proprietorship to a Private Limited. The transition was seamless and updated on the portal in 4 months.",
                                            avatar: "KS"
                                        },
                                        {
                                            author: "Meera Reddy",
                                            role: "Director, Urban Greens",
                                            rating: 5,
                                            date: "2024-09-22",
                                            text: "We moved our head office and needed to update 12 trademarks. IPR Karo filed all the address changes efficiently. Great peace of mind.",
                                            avatar: "MR"
                                        },
                                        {
                                            author: "Rajiv Malhotra",
                                            role: "Legal Counsel, Texo Group",
                                            rating: 5,
                                            date: "2024-08-05",
                                            text: "Correcting a typo in our goods and services description saved us from a potential opposition. Their forensic attention to detail is remarkable.",
                                            avatar: "RM"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Bulletproof Brand Records</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify text-justify">
                                        A trademark is a 'Living Asset' that must mirror your company's reality. Precision in your digital records today ensures total protection in the courtroom tomorrow.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify text-justify">
                                        Partner with <strong>IPR Karo</strong> to handle the forensic complexity of amendments and keep your IP portfolio investor-ready. Secure your future in Bharat 2026.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Update Your Legal Shield</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Is your trademark record outdated? Moving offices or changing company names? Ensure your brand's legal record is perfectly aligned with your business reality.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Correct My TM Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Portfolio IP Audit
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Maintain Your Edge</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify text-justify">
                                    Inaccurate trademark records are a liability. Our forensic team ensures your TM-M and TM-P filings are error-free and legally binding.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Update Details Today
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-justify">Amendment Hub</h3>
                                <ul className="space-y-4 text-justify">
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">TM Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-a-trademark-objection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Objection Response</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Trademark Search Portal</span>
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
                                            <span className="font-medium text-sm text-justify">Legal Rights Review</span>
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
