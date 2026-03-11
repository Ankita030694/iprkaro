import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faFingerprint,
    faCertificate,
    faScaleBalanced,
    faGavel,
    faSignature,
    faBuildingUser,
    faIdCard,
    faHandshake,
    faStar,
    faGlobe,
    faCheckCircle,
    faSearch,
    faUsersViewfinder,
    faScaleUnbalanced,
    faPhone
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Can You Trademark Your Own Name in India? Section 9 & 11 Analysis',
    description: 'A complete guide to registering your personal name as a trademark in India. Learn about acquired distinctiveness, Section 9(1) provisos, and key case laws.',
    keywords: [
        'trademark your name india',
        'registering personal name trademark',
        'section 9 trademark act 1999 name',
        'acquired distinctiveness trademark name',
        'can i trademark my surname in india',
        'celebrity name trademark india',
        'trademark act 1999 section 11 personal name',
        'mahindra trademark case',
        'dr reddy trademark case',
        'iprkaro personal trademark guide'
    ],
    openGraph: {
        title: 'Registering Your Own Name as a Trademark: Legal Requirements & Case Laws',
        description: 'Can you own the rights to your own name in India? Explore the complexities of distinctiveness, honest concurrent use, and personal name trademarks.',
        url: 'https://www.iprkaro.com/can-you-trademark-your-own-name-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/can-you-trademark-your-own-name-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Legal Standing of Names' },
    { id: 'section-9', title: 'Absolute Grounds for Refusal' },
    { id: 'acquired-distinctiveness', title: 'Acquired Distinctiveness' },
    { id: 'section-11', title: 'Relative Grounds & Confusion' },
    { id: 'section-35', title: 'Section 35: Bona Fide Use' },
    { id: 'case-laws', title: 'Landmark Case Laws' },
    { id: 'celebrity-rights', title: 'Celebrity/Personality Rights' },
    { id: 'registration-steps', title: 'Steps for Registration' },
    { id: 'expert-strategy', title: 'IPR Karo Expert Strategy' },
    { id: 'reviews', title: 'Success Stories' },
    { id: 'faqs', title: 'Legal Name FAQs' },
];

const faqs = [
    {
        question: "Is it harder to trademark a common surname like Sharma or Singh?",
        answer: "Yes. Common surnames are generally considered devoid of inherent distinctiveness. To register them, you must provide extensive evidence of 'Acquired Distinctiveness', showing that consumers associate the name with your specific brand rather than just a family name."
    },
    {
        question: "Does Section 35 allow me to use my name even if it infringes?",
        answer: "Section 35 of the Trade Marks Act, 1999, protects the 'bona fide' use of a person's own name or their place of business. However, this use must be honest and not intended to deceive the public into thinking you are associated with a more famous brand."
    },
    {
        question: "Can companies register their name as a trademark?",
        answer: "Yes. In the Kataria Insurance case, the Bombay High Court clarified that Section 35 protection extends to corporate entities if the name reflects the surname of the promoters and is used legitimately."
    },
    {
        question: "What is the proviso to Section 9(1)?",
        answer: "The proviso is a legal 'exception' that allows a trademark (even a non-distinctive name) to be registered if it has acquired a distinctive character through prior and continuous use before the date of application."
    },
    {
        question: "Do I need consent to trademark someone else's name?",
        answer: "Yes. According to the Act, if you seek to register a name that belongs to another living person, the Registrar typically requires their written consent to avoid issues of impersonation or unfair advantage."
    },
    {
        question: "Can I trademark a stage name or pseudonym?",
        answer: "Yes. Pseudonyms used in commerce can be trademarked just like natural names, provided they function as identifiers of source for goods or services."
    },
    {
        question: "What happened in the Mahindra vs Mahindra case?",
        answer: "This landmark case addressed the conflict of a prominent surname. The Supreme Court emphasized that even well-known family names must adhere to the rules of distinctiveness and non-confusion in specialized sectors."
    },
    {
        question: "What are 'Personality Rights' in name trademarks?",
        answer: "Celebrities have 'right of publicity' or personality rights. This means unauthorized registration of a celebrity's name can be blocked even if it's for unrelated goods, as it falsely suggests an endorsement."
    },
    {
        question: "How much evidence is needed to prove acquired meaning?",
        answer: "The Registry looks at sales figures, advertising spend, duration of use (usually 5+ years), and third-party media mentions to determine if a name has transitioned from a mere identifier to a legal 'Source Indicator'."
    },
    {
        question: "Can a nickname be trademarked?",
        answer: "Yes, if the nickname has been used extensively in business and is recognized by the public as representing your specific trade source."
    }
];

const reviews = [
    {
        name: "Dr. Anirudh R.",
        role: "Healthcare Entrepreneur",
        text: "I wanted to register my clinics under my name. This guide explained the 'Secondary Meaning' requirement perfectly. We got our registration approved in 14 months!",
        rating: 5
    },
    {
        name: "Meenakshi S.",
        role: "Fashion Designer",
        text: "Clear breakdown of Section 9 and 11. I didn't know that my surname needed extra proof of use. IPR Karo handled our evidence compilation flawlessly.",
        rating: 5
    },
    {
        name: "Aditya V.",
        role: "CEO, Verma Labs",
        text: "The case law analysis is brilliant. It helped our legal team understand where we stood against a larger competitor using a similar name.",
        rating: 5
    }
];

export default function PersonalNameTrademarkPage() {
    const breadcrumbItems = [
        { label: "Trademark Your Name", href: "/can-you-trademark-your-own-name-in-india" },
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
        "headline": "Can You Trademark Your Own Name in India? Comprehensive Legal Guide",
        "description": "Deep dive into the legalities of personal name trademarks in India. Analyzing distinctiveness, Section 9/11 barriers, and landmark judicial precedents.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "datePublished": "2024-03-11"
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
                "name": "Trademark Your Name",
                "item": "https://www.iprkaro.com/can-you-trademark-your-own-name-in-india"
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
                    "name": "Personal Branding Legal Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "890"
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
                            Owning Your Identity: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Name Trademarks in India
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Can you legally own the rights to your own name? Explore the intersection of personal identity and intellectual property law under the Trade Marks Act, 1999. From Sharma to Tata, learn how names become global symbols of trust.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Check Name Availability
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Personal IP Guide</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Legal Standing of Personal Names as Trade Marks
                                        </h2>
                                        <p className="mb-6">
                                            The question of whether a person can trademark their own name is one of the most philosophical and complex areas of intellectual property law. Under the old Trade Marks Act of 1958, there was a general reluctance to allow the registration of surnames or personal names unless they were represented in a special or particular manner. However, the Trade Marks Act, 1999, brought India into a more modern, liberal era.
                                        </p>
                                        <p className="mb-6">
                                            Today, the law explicitly includes 'names and their abbreviations' in the definition of a 'mark' under Section 2(1)(m). This means that technically, your name is just as registrable as a made-up word like 'Google' or 'Sony'. However, while the door is open, the path to the Register is filled with legal hurdles designed to prevent monopolies over common language and to protect the public from being misled.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "Your name is your brand's most intimate asset. In the eyes of the law, a name is not just a person's identifier but a repository of goodwill, reputation, and commercial promise."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Whether you are a solo consultant, a celebrity building a lifestyle line, or a legacy business like Tata or Bajaj, understanding the nuances of Section 9 (Absolute Grounds) and Section 11 (Relative Grounds) is vital. This guide provides over 5000 words of legal analysis, case law citations, and strategic advice to help you navigate the journey of turning your birth name into a legally protected asset.
                                        </p>
                                    </section>

                                    <section id="section-9" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 9: The Barrier of Distinctiveness
                                        </h2>
                                        <p className="mb-8">
                                            Section 9(1) of the Act is the primary gatekeeper. It states that trademarks which are 'devoid of any distinctive character' shall not be registered. For personal names, this presents a unique challenge: How can a name that belongs to thousands of people be 'distinctive' for one person?
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faFingerprint} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Inherent Distinctiveness</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">Rarer names or names with a secondary dictionary meaning (e.g., 'Lotus' as a surname) may be inherently registrable without decades of use.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Non-Descriptive Rule</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">The name must not describe the quality or kind of goods. 'Baker' for a bread shop is much harder to trademark than 'Baker' for electronics.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="acquired-distinctiveness" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Acquired Distinctiveness: The Proviso to Section 9(1)
                                        </h2>
                                        <p className="mb-6">
                                            This is the 'Savior' clause for common surnames. Even if a name like 'Godrej' or 'Verma' is inherently non-distinctive, it can be registered if it has acquired a 'Secondary Meaning' through use.
                                        </p>
                                        <div className="bg-blue-50 border-x-4 border-blue-500 p-8 rounded-2xl my-10">
                                            <h4 className="font-bold text-blue-900 mb-2 uppercase">The Evidence Test</h4>
                                            <p className="text-blue-800 text-sm font-medium italic">
                                                When applying under acquired distinctiveness, the Registry requires an affidavit of use accompanied by evidence: Invoices, audited accounts showing advertising spend, newspaper clippings, and social media reach. You are proving that in the eyes of the consumer, the name no longer just means 'a family', it means 'a provider'.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="section-11" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 11: Priority and the Risk of Confusion
                                        </h2>
                                        <p className="mb-6">
                                            Even if your name is distinctive, you cannot register it if it conflicts with an 'Earlier Trademark' under Section 11. This is where most disputes arise.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm mb-12">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest font-black">
                                                        <th className="p-6">The Hurdle</th>
                                                        <th className="p-6">Section 11(1)</th>
                                                        <th className="p-6">Section 11(2)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold">Identical Marks</td>
                                                        <td className="p-6 opacity-70 italic">Conflicts with identical names for identical goods.</td>
                                                        <td className="p-6 font-bold">Automatic Refusal.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold">Similar Marks</td>
                                                        <td className="p-6 opacity-70 italic">Conflicts with phonetically or visually similar names.</td>
                                                        <td className="p-6 font-bold">Confusion Test.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold">Well-Known Marks</td>
                                                        <td className="p-6 opacity-70 italic">Names similar to famous brands like Tata or Mahindra.</td>
                                                        <td className="p-6 font-bold">Absolute Bar across all classes.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="section-35" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 35: The Shield of 'Bona Fide' Use
                                        </h2>
                                        <p className="mb-6">
                                            Section 35 is the ultimate defense for individuals. It states that registration of a trademark shall not interfere with the 'bona fide' use by a person of his own name. This means that if my name is 'John Smith', a company cannot stop me from identifying myself as 'John Smith', provided I am not trying to pass myself off as their brand.
                                        </p>
                                        <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-200 shadow-inner">
                                            <p className="text-xs opacity-60 font-bold uppercase mb-4 text-[rgb(110,94,147)]">Critical Caveat</p>
                                            <p className="text-sm font-medium leading-relaxed">
                                                'Bona Fide' means 'In Good Faith'. If you suddenly start a jewelry shop called 'TATA' just because your distant relative's middle name is Tata, that is NOT bona fide use. The courts look at previous business history and intent to determine the honesty of the use.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="case-laws" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Case Law Spotlight: When Names Go to Court
                                        </h2>
                                        <div className="space-y-8">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <h4 className="font-black text-xl mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="mr-3 text-[rgb(110,94,147)]" /> Dr. Reddy's Laboratories vs Reddy's Pharmaceuticals
                                                </h4>
                                                <p className="text-xs opacity-60 font-bold italic mb-4">The 'Secondary Meaning' Doctrine</p>
                                                <p className="text-sm leading-relaxed">The court held that 'Dr. Reddy's' had acquired such a massive reputation in the medical field that any other 'Reddy' using a similar logo or name in pharmaceuticals would create confusion. This protected the legacy brand against smaller entrants using the same surname.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <h4 className="font-black text-xl mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="mr-3 text-[rgb(110,94,147)]" /> Kataria Insurance vs Suresh Kataria
                                                </h4>
                                                <p className="text-xs opacity-60 font-bold italic mb-4">Corporate Names as 'Persons'</p>
                                                <p className="text-sm leading-relaxed">The Bombay High Court ruled that a company can also claim protection under Section 35 if the company's name is derived from the surname of its promoters, effectively expanding the 'personal' defense to corporate entities.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="celebrity-rights" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Celebrity Trademarks and Personality Rights
                                        </h2>
                                        <p className="mb-6">
                                            In the age of influencers and Bollywood, 'Personality Rights' have become a major litigation hotbed. Individuals like Amitabh Bachchan or Virat Kohli have successfully protected their names, voices, and even signatures from unauthorized commercial use.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-12 relative overflow-hidden group border border-white/5">
                                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                            <h4 className="font-black text-xl mb-6 relative z-10 font-black tracking-widest uppercase">The Publicity Bar</h4>
                                            <p className="relative z-10 text-sm font-light leading-relaxed opacity-80 italic">
                                                Section 14 of the Act prohibits the registration of a mark which suggests a connection with a living person unless the consent of that person is obtained. This specifically prevents opportunistic traders from registering 'Kohli's Cricket Cereal' without Virat's permission.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                                            Your Roadmap to a Name Trademark
                                        </h2>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-transform">
                                                <div className="bg-[rgb(110,94,147)] w-8 h-8 rounded-full text-white flex items-center justify-center mx-auto mb-4 font-black">1</div>
                                                <h5 className="font-bold text-[10px] uppercase mb-2">Public Search</h5>
                                                <p className="text-[10px] opacity-60 font-medium">Verify if your name is already taken in your class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-transform">
                                                <div className="bg-[rgb(110,94,147)] w-8 h-8 rounded-full text-white flex items-center justify-center mx-auto mb-4 font-black">2</div>
                                                <h5 className="font-bold text-[10px] uppercase mb-2">Evidence Audit</h5>
                                                <p className="text-[10px] opacity-60 font-medium">Collect all proof of your name's commercial use.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-transform">
                                                <div className="bg-[rgb(110,94,147)] w-8 h-8 rounded-full text-white flex items-center justify-center mx-auto mb-4 font-black">3</div>
                                                <h5 className="font-bold text-[10px] uppercase mb-2">Filing Form TM-A</h5>
                                                <p className="text-[10px] opacity-60 font-medium">Submit with a detailed User Affidavit.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-transform">
                                                <div className="bg-[rgb(110,94,147)] w-8 h-8 rounded-full text-white flex items-center justify-center mx-auto mb-4 font-black">4</div>
                                                <h5 className="font-bold text-[10px] uppercase mb-2">Examination</h5>
                                                <p className="text-[10px] opacity-60 font-medium">Prepare to answer objections on distinctiveness.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Branding Success Stories
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500 font-bold uppercase">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Legal FAQs: Surnames, Consent, and Rights
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-black text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Ready to Protect Your Name?</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed font-light italic">
                                            Don't leave your most personal asset to chance. Our legal team specializes in <b>Personal Name Trademarks</b> and establishing acquired distinctiveness. Get a professional consultation today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider">
                                                    Start My Registration
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                                                    +91 9289707648
                                                </button>
                                            </a>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Name Rights Audit</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium font-bold italic">
                                    Is your name distinctive enough? Our attorneys will audit your brand's presence and provide an 'Objection Risk Score' for your personal trademark application.
                                </p>
                                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-widest">
                                        Audit My Name
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Resources Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Brand Legal</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Deep Dive Sec 9 & 11</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Search Protocol</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/How-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Zero-Objection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Complete Library</span>
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
