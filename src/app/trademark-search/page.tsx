import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
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
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Search India | Free Brand Availability Check',
    description: 'Perform a free trademark search on the official IP India database. Check brand name availability, phonetic similarities, and get expert legal reports instantly.',
    keywords: [
        'trademark search',
        'free trademark search india',
        'brand name search',
        'logo availability check',
        'public search trademark',
        'tm search india online',
        'trademark database search',
        'phonetic trademark search',
        'vienna code search portal',
        'check trademark status'
    ],
    openGraph: {
        title: 'Complete Guide to Trademark Search in Bharat',
        description: 'Learn how to verify your brand name availability using the official Indian trademark database. Step by step instructions and expert tips.',
        url: 'https://www.iprkaro.com/trademark-search',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-search',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Trademark Search: The First Step to Brand Protection' },
    { id: 'search-portals', title: 'Top Portals for Trademark Search in 2026' },
    { id: 'how-to-search', title: 'Step-by-Step: Conducting a Manual Search' },
    { id: 'phonetic-nuances', title: 'Mastering the Phonetic Search' },
    { id: 'class-selection', title: 'Choosing the Right Class for Your Search' },
    { id: 'logo-search', title: 'The Visual Search: Vienna Classification' },
    { id: 'global-search-tools', title: 'Global Tools: WIPO and TMview' },
    { id: 'search-risk-levels', title: 'Understanding Risk Levels: Green, Yellow, Red' },
    { id: 'legal-analysis', title: 'Beyond the Data: Need for Legal Analysis' },
    { id: 'common-mistakes', title: 'Avoid These Common Search Errors' },
    { id: 'ongoing-monitoring', title: 'The Importance of Periodic Trademark Monitoring' },
    { id: 'why-iprkaro-search', title: 'Why Trust IPR Karo for Your Search?' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Build Your Brand on Solid Ground' },
];

const faqs = [
    {
        question: "Why is a trademark search necessary implementation?",
        answer: "A search is necessary to identify existing marks that might conflict with your proposed name. It prevents the rejection of your application, saves non refundable government fees, and protects you from future infringement lawsuits."
    },
    {
        question: "How do I perform a free trademark search for my business?",
        answer: "You can use the official IP India Public Search portal. Select 'Wordmark', enter your name and class, and the system will display matching records. For a more thorough check, include phonetic and Vienna code searches."
    },
    {
        question: "What does 'phonetic similarity' mean in a search?",
        answer: "It refers to names that sound similar, even if they look different. For instance, 'Zenith' and 'Xenith' are phonetically similar. The Indian Trademark Registry will likely object to a new application if a phonetically similar mark already exists in the same class."
    },
    {
        question: "What is the Vienna Code in the context of logo search?",
        answer: "The Vienna Code is an international system for classifying the artistic elements of a logo. It allows you to search for specific symbols, like a mountain or a lion, to see if similar designs are already registered."
    },
    {
        question: "Can I register a brand if the search shows it as 'Abandoned'?",
        answer: "Yes, you usually can, but you should verify why it was abandoned. If the original owner is still using the mark in business (common law rights), they might still oppose your registration later."
    },
    {
        question: "What are the 45 classes in trademark search?",
        answer: "Trademarks are categorized into 45 classes under the Nice Classification. Classes 1 to 34 are for goods (products), and 35 to 45 are for services. You must search within the classes relevant to your specific business activities."
    },
    {
        question: "Does a trademark search cover social media handles?",
        answer: "The official trademark search only covers applications filed with the Registry. It does not automatically check Instagram, Facebook, or Twitter handles. However, a comprehensive brand search should ideally include digital presence checks."
    },
    {
        question: "How long is a trademark search report valid?",
        answer: "A search report is a snapshot of the database at a specific moment. Since new applications are filed every hour, a report is most accurate for about 24 to 48 hours. It is best to file your application immediately after a successful search."
    },
    {
        question: "What is a 'Well-Known' mark in search results?",
        answer: "A well known mark (like Pepsi or Reliance) has protection across all 45 classes. You cannot use these names for any business, even if it is completely unrelated to the famous brand's industry."
    },
    {
        question: "Can I do a trademark search by myself?",
        answer: "Yes, you can perform a basic wordmark search yourself. However, identifying phonetic nuances, interpreting complex legal statuses, and conducting cross class checks require the expertise of an experienced trademark attorney."
    }
];

export default function TrademarkSearchPage() {
    const breadcrumbItems = [
        { label: "Trademark Search", href: "/trademark-search" },
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
                "name": "Trademark Search",
                "item": "https://www.iprkaro.com/trademark-search"
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
        "headline": "Trademark Search India: The Ultimate Brand Availability Guide 2026",
        "description": "Master the art of brand verification. A comprehensive guide on using the IP India portal to conduct professional trademark searches for names and logos.",
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
            "@id": "https://www.iprkaro.com/trademark-search"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Free Brand Name Availability Check",
        "image": "https://www.iprkaro.com/assets/trademark-search-og.jpg",
        "description": "Swift and accurate brand availability reports derived from the official Indian trademark registry.",
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
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
                            Professional <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Search</span> for Your Brand
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Uncover potential conflicts before you launch. Our comprehensive trademark search tool checks the official IP India database to safeguard your business identity.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Search Your Brand Name Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: TOC */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Importance of a Diligent Trademark Search</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        A brand is more than just a name; it is the culmination of your hard work, creativity, and vision. In the rapidly evolving and fiercely competitive Indian marketplace, ensuring that your core brand identity is entirely unique is the absolute first step toward securing long-term commercial success. This is exactly where a rigorous and well-executed <strong>trademark search</strong> becomes functionally indispensable. It is the critical process of systematically scanning the official database of the Trademark Registry to proactively identify if any identical or confusingly similar marks already exist.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Performing a search is absolutely not merely a routine administrative box to be checked. It is a highly strategic defensive exercise that directly protects your vulnerable business from catastrophic costly rebranding, devastating legal disputes, and the potential loss of consumer trust. With thousands of new applications being filed daily in Bharat across various industries, the statistical chances of unintentional trademark overlap are currently higher than ever. A deeply diligent search actively provides the clear legal certainty needed to proudly launch your products and services with supreme confidence.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        At IPR Karo, we have completely simplified this historically complex search process, dependably providing modern entrepreneurs with lightning-fast, highly accurate, and exhaustively comprehensive legal clearance reports. Whether you are a dynamic solo founder launching a startup or a rapidly scaling enterprise expanding its portfolio, our primary goal is to ensure your brand securely stands on rock-solid legal ground right from day one.
                                    </p>
                                    <div className="bg-green-50 border-l-8 border-[#0C002B] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In the fast-moving world of global business, your brand is your ultimate commercial bond. A proper trademark search definitively ensures that your bond is legally enforceable and distinctly, uniquely yours."
                                        </p>
                                    </div>
                                </section>

                                <section id="search-portals" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Top Portals for Trademark Search in 2026</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        Several advanced digital platforms officially allow you to directly conduct a reliable <strong>trademark search</strong>, depending on your target markets. Each specifically offers different depths of raw data, visualization options, and powerful analytical tools.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                IP India Public Search
                                            </h4>
                                            <p className="text-gray-600 text-sm">The primary official government portal providing the most up-to-date, authoritative records for all Indian applications, accepted journals, and active registrations. It is the absolute ground truth for domestic rights.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                WIPO Global Brand Database
                                            </h4>
                                            <p className="text-gray-600 text-sm">Absolutely ideal for internationally focused brands and exporters. It rapidly allows you to seamlessly search across massive multiple global jurisdictions simultaneously under the Madrid System.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                TMview
                                            </h4>
                                            <p className="text-gray-600 text-sm">A highly sophisticated collaborative search tool heavily utilized for European and international trademark tracking, giving incredible insights into multi-national branding trends.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                                                MCA Company Name Search
                                            </h4>
                                            <p className="text-gray-600 text-sm">Provides immediate visibility into exact registered Company and LLP names in India, which is an important complementary check alongside standard trademark registry queries.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="how-to-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">How to Conduct a Manual Trademark Search: A Step by Step Guide</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        If you prefer a hands on approach, follow these steps to use the official Indian Public Search tool:
                                    </p>
                                    <div className="space-y-8 my-10 relative">
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">1</div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">Access the Portal</h4>
                                                <p className="text-gray-600">Navigate to the IP India online search page. Select 'Trademark' from the list of services.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">2</div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">Choose Search Type</h4>
                                                <p className="text-gray-600">Select 'Wordmark' for text based searches or 'Phonetic' to find sound-alike marks.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">3</div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">Input Brand Details</h4>
                                                <p className="text-gray-600">Enter your brand name in the 'Search String' field. Remember to test variations.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">4</div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">Assign Classification</h4>
                                                <p className="text-gray-600">Enter the appropriate Nice Class (1 to 45) for your goods or services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="phonetic-nuances" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mastering the Phonetic Search: Beyond Spelling</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Phonetic similarity is a frequent pitfall for new applicants. The registry's goal is to prevent confusion in the marketplace. If two names sound the same, you might face an objection even if they are spelled differently.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-[#0C002B] text-white rounded-3xl shadow-xl">
                                            <h4 className="font-bold text-xl mb-4 text-[#6E5E93]">The Apple vs. Appel Rule</h4>
                                            <p className="opacity-80">Phonetic confusion can lead a consumer to believe that different products are from the same source. This is why a thorough phonetic search is critical for brand safety.</p>
                                        </div>
                                        <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl">
                                            <h4 className="font-bold text-xl mb-4 text-[#0C002B]">Strategic Phonetic Tips</h4>
                                            <ul className="text-sm space-y-2 text-gray-700">
                                                <li>- Use wildcards to find similar prefixes and suffixes.</li>
                                                <li>- Check for alternative transliterations in Indian languages.</li>
                                                <li>- Consult an expert for complex Metaphone analysis.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="class-selection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Choosing the Right Class for Your Search</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        A <strong>trademark search</strong> must be targeted. Searching in every class is inefficient and often produces irrelevant data. The Nice Classification system divides goods and services into 45 specific classes.
                                    </p>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-200 my-10">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#160049] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold">Industry Example</th>
                                                    <th className="p-5 font-bold">Primary Class</th>
                                                    <th className="p-5 font-bold">Secondary Classes to Search</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="p-4 border">Software & Mobile Apps</td>
                                                    <td className="p-4 font-bold border">Class 42</td>
                                                    <td className="p-4 border">Class 9, Class 35</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">Restaurants & Cafes</td>
                                                    <td className="p-4 font-bold border">Class 43</td>
                                                    <td className="p-4 border">Class 30, Class 35</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">Clothing & Accessories</td>
                                                    <td className="p-4 font-bold border">Class 25</td>
                                                    <td className="p-4 border">Class 14, Class 35</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="logo-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Visual Search: The Vienna Classification Decoded</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Searching for a logo is fundamentally different from searching for text. It requires an understanding of the figurative elements within your design. The Vienna Classification assigns codes to these elements.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        For example, if your brand uses a circle featuring a stylized flower, you would need to search for the Vienna codes corresponding to "Circles" and "Flowers". This ensures that no similar visual identity exists that could block your registration.
                                    </p>
                                </section>

                                <section id="search-risk-levels" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Risk Assessment: Green, Yellow, and Red Signals</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        After conducting your <strong>trademark search</strong>, we categorize the results based on the level of risk they present to your registration.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-6 bg-green-50 rounded-2xl border border-green-200 shadow-sm">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-green-700 text-lg mb-2">Category: Green</h4>
                                            <p className="text-sm opacity-80">Safe to proceed. No conflicting marks found in primary or related classes.</p>
                                        </div>
                                        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm">
                                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-yellow-700 text-lg mb-2">Category: Yellow</h4>
                                            <p className="text-sm opacity-80">Potential conflict found. Requires legal review or slight modification of brand assets.</p>
                                        </div>
                                        <div className="p-6 bg-red-50 rounded-2xl border border-red-200 shadow-sm">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                                <FontAwesomeIcon icon={faGavel} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-red-700 text-lg mb-2">Category: Red</h4>
                                            <p className="text-sm opacity-80">High conflict risk. Identical marks found. Rebranding strongly recommended.</p>
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

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <div className="py-16 bg-[#0C002B] rounded-3xl relative overflow-hidden">
                                        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
                                        <div className="max-w-6xl mx-auto px-6">
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What <span className="text-[#FFB703]">Clients Say</span> About Our Search Reports</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">Entrepreneurs share how our trademark search reports saved them from costly legal conflicts.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">AK</div>
                                                        <div><h3 className="text-white font-bold">Arjun Khanna</h3><p className="text-white/50 text-xs">Founder, Fashion E-commerce</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;IPR Karo&apos;s search report revealed 3 similar brand names in my class that I had completely missed. Had I filed without this search, my application would have been objected immediately. Absolutely worth it!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">MP</div>
                                                        <div><h3 className="text-white font-bold">Meera Pillai</h3><p className="text-white/50 text-xs">CEO, Health Supplement Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;The phonetic search analysis was a game changer. Our brand name sounded similar to an existing registered mark. IPR Karo suggested a slight modification and we sailed through registration!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">TV</div>
                                                        <div><h3 className="text-white font-bold">Tarun Verma</h3><p className="text-white/50 text-xs">Director, Packaging Solutions</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;We needed a Vienna code search for our logo. The IPR Karo team explained the entire classification system and delivered a comprehensive visual search report within 24 hours. Exceptional service!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Protecting Your Brand Identity Starts Here</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-gray-800">
                                        A comprehensive <strong>trademark search</strong> is the most important investment you can potentially make in your business long before you initiate a widespread product launch. It decisively provides the critical peace of mind needed to passionately build your commercial legacy without any lingering fear of unexpected legal interruption or brand infringement claims.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-gray-800">
                                        At IPR Karo, we are relentlessly dedicated to providing the high quality legal insights needed to successfully secure your valuable intellectual property in Bharat. Let our experienced attorneys help you thoroughly verify your brand today and firmly build a fully protected future that is distinctly and uniquely yours.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Search Before You Scale</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Verify your brand name availability in minutes. Get an expert report and file with absolute confidence.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Get Free Search Report
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an Advisor
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Free Availability Check</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Is your chosen brand name available? Get a **Detailed Legal Search Report** within 60 minutes.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Check Now
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration in India</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Complete Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Guide</span>
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
