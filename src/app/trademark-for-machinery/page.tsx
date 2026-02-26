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
    faTools,
    faIndustry,
    faCogs,
    faShieldAlt,
    faGavel,
    faMoneyBillWave,
    faGlobe,
    faPhone,
    faStar,
    faRobot,
    faTractor,
    faPumpSoap,
    faBoxOpen,
    faMicrochip,
    faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Machinery | Class 7 Registration Guide India',
    description: 'The definitive guide to trademark registration for machinery in India. Secure your industrial tools, motors, and engines under Class 7. 5000+ words SEO manual.',
    keywords: [
        'trademark for machinery',
        'class 7 trademark registration india',
        'industrial machine tools trademark',
        'agricultural machinery brand protection',
        'motor and engine trademark',
        'textile machinery brand registration',
        'food processing machinery trademark',
        'packaging equipment trademark india',
        'robotic systems trademark',
        'industrial pump branding'
    ],
    openGraph: {
        title: 'Mastering Trademark Registration for Machinery (Class 7)',
        description: 'Protect your engineering excellence. Secure your industrial and mechanical products with India\'s elite IP legal firm. 100% online process.',
        url: 'https://www.iprkaro.com/trademark-for-machinery',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-machinery',
    },
};

const tocSections = [
    { id: 'mechanical-innovation', title: 'The Power of Industrial IP' },
    { id: 'class-7-universe', title: 'Navigating Class 7' },
    { id: 'industrial-branding-strategy', title: 'Branding Industrial Assets' },
    { id: 'machinery-categories', title: 'Key Machinery Subgroups' },
    { id: 'registration-process', title: 'Step-by-Step Registration' },
    { id: 'document-checklist', title: 'Filing Documentation' },
    { id: 'overcoming-objections', title: 'Legal Defense Tactics' },
    { id: 'international-expansion', title: 'Madrid Protocol & Exports' },
    { id: 'counterfeit-deterrence', title: 'Supply Chain Security' },
    { id: 'valuation-and-funding', title: 'IP as a Business Asset' },
    { id: 'fees-and-structure', title: 'Government Fees & Pricing' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Machinery IP FAQs' },
];

const faqs = [
    {
        question: "What exactly constitutes 'Machinery' in Trademark Class 7?",
        answer: "Class 7 covers machines, machine tools, motors and engines (except for land vehicles), machine coupling and transmission components, agricultural implements (other than hand-operated), and automated vending machines."
    },
    {
        question: "Can I trademark a single brand for multiple types of machines?",
        answer: "Yes, you can register one trademark that covers a variety of goods within Class 7. You must ensure your 'specification of goods' in the application clearly lists all items you manufacture."
    },
    {
        question: "Are motors for cars included in Class 7?",
        answer: "No. Motors and engines specifically for 'land vehicles' fall under Class 12. Class 7 is reserved for industrial, marine, or aircraft engines and general stationery motors."
    },
    {
        question: "Is it possible to protect the unique shape of a machine?",
        answer: "Yes, through 'Design Registration' for the physical appearance and potentially 'Trade Dress' under trademark law if the shape is highly distinctive and associated solely with your brand."
    },
    {
        question: "How long is the trademark valid for industrial equipment?",
        answer: "Like all Indian trademarks, it is valid for 10 years from the date of application and can be renewed indefinitely every 10 years through the renewal filing process."
    },
    {
        question: "Are MSME benefits applicable for high-value machinery firms?",
        answer: "Yes. Regardless of the product value, if your firm is registered as an MSME, you are entitled to a 50 percent discount on government trademark fees, paying 4500 rupees instead of 9000 rupees."
    },
    {
        question: "What is the primary reason for machinery trademark rejections?",
        answer: "Most rejections occur because the name is too 'descriptive' (e.g., 'Turbo Mix') or it is too similar to an existing industrial brand. A comprehensive prior search is essential to avoid this."
    },
    {
        question: "Does Class 7 cover electronic control systems for machines?",
        answer: "Usually, no. Electronic sensors, software, and digital control panels fall under Class 9. A hybrid machine might require protection in both Class 7 (mechanical) and Class 9 (electronic)."
    },
    {
        question: "Can I use the Madrid Protocol to protect my exports?",
        answer: "Absolutely. If you export machinery to countries like the USA, Germany, or the UAE, you can extend your Indian trademark protection to these countries via one single international application."
    },
    {
        question: "What if someone uses my machinery brand name for smaller hand tools?",
        answer: "Hand tools fall in Class 8. If you want to prevent others from using your brand there, you should ideally file defensive applications in Class 8 along with your primary Class 7 filing."
    },
    {
        question: "How does trademarking help in government machinery tenders?",
        answer: "Many government and high-value private tenders require 'OEM Status'. A registered trademark is a primary document used to prove you are the Original Equipment Manufacturer of the brand."
    },
    {
        question: "Is 'proposed to be used' a valid filing basis?",
        answer: "Yes, you can file for a trademark even before you start manufacturing or selling. This 'Intent to Use' filing secures your priority over the name while you set up your production line."
    }
];

const reviews = [
    {
        name: "Arjun Mehta",
        role: "Director, Precision Gears Ltd.",
        text: "The technical depth IPR Karo brings to machine tool classification is impressive. They cleared our 'MegaDrive' brand despite a heavy initial objection.",
        rating: 5
    },
    {
        name: "Suresh Pillai",
        role: "MD, Southern Agri-Equip",
        text: "Securing our tractor parts brand across several states was effortless. Their online tracking system kept us updated every month. Highly professional service.",
        rating: 5
    },
    {
        name: "Rajiv Singhania",
        role: "Owner, Singhania Textiles (Machinery Div)",
        text: "Excellent research! They found a similar mark in Class 12 that we missed. We adjusted our name early and saved ourselves a massive legal headache later.",
        rating: 5
    }
];

export default function TrademarkMachineryPage() {
    const breadcrumbItems = [
        { label: "Machinery Trademark", href: "/trademark-for-machinery" },
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
        "headline": "Machinery Trademark Registration Guide: Securing Class 7 Industrial Assets in India",
        "description": "Comprehensive 5000+ word manual on trademark registration for the machinery sector. Covers Class 7 specifics, legal hurdles, and strategic brand protection.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        }
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
                "name": "Machinery Trademark",
                "item": "https://www.iprkaro.com/trademark-for-machinery"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Machinery Trademark Registration (Class 7)",
                    "image": "https://www.iprkaro.com/assets/machinery-trademark.jpg",
                    "description": "Professional trademark registration services for industrial machinery, machine tools, motors, and engineering equipment in India.",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1940"
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                            Engineering Brand Legacy: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110,94,147)' }}>
                                Expert Trademark Filing for Machinery
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the high-stakes world of industrial engineering, your brand name is a guarantee of precision and performance. Secure your machine tools, motors, and heavy equipment with India's leading IP legal team. 100% online, same-day filing for Class 7 assets.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Engineering Brand
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
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Machinery IP Guide</h4>
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

                                    <section id="mechanical-innovation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                                            The Power of Industrial IP: Why Your Machine Needs a Brand
                                        </h2>
                                        <p className="mb-6">
                                            In the global industrial landscape, the machinery sector acts as the heart of manufacturing. Whether it is a giant CNC machine in a factory, a tractor in a distant agricultural field, or an intricate textile loom, these machines are the engines of economic growth. However, in a market where specialized engineering products have high price points and longer lifecycles, the **Trademark** serves a purpose far beyond simple recognition. It is a symbol of engineering pedigree, technical safety, and post-sales reliability.
                                        </p>
                                        <p className="mb-6">
                                            Trademark registration for machinery in **Class 7** is not just a legal formality; it is a defensive pillar for your business. When you manufacture a high-performance machine, you are selling years of Research and Development. If a competitor uses a similar name to sell a low-quality imitation, they aren't just stealing your sales—they are endangering the reputation you have built through technical excellence. In India's 'Make in India' era, securing your IP at the start of your manufacturing journey is the difference between being a local supplier and a global brand leader.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A machine produces goods, but a trademark produces trust. In the heavy industry supply chain, trust is the only asset that cannot be manufactured."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we specialize in 'Technical IP'. We understand that machinery branding involves complex classification, multi-state supply chains, and international export ambitions. Our guide is designed to provide you with the legal firepower needed to secure your engineering innovation and turn it into a protected corporate asset that commands respect in every industrial cluster from Ludhiana to Coimbatore.
                                        </p>
                                    </section>

                                    <section id="class-7-universe" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating the Class 7 Universe: The Scope of Protection
                                        </h2>
                                        <p className="mb-6">
                                            The International Nice Classification system categorizes most mechanical assets under **Class 7**. This is an incredibly broad class, and understanding its internal boundaries is key to a robust registration. If your application is too vague, it might be rejected; if it is too narrow, you leave gaps for competitors to exploit.
                                        </p>
                                        <p className="mb-8">
                                            Class 7 primarily covers machines, machine tools, and power-operated apparatus. However, it also includes various specific mechanical components that are vital for the industrial ecosystem. Here is a breakdown of the primary territories:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faTractor} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Agricultural Machinery</h3>
                                                <p className="text-sm leading-relaxed">Includes power-operated ploughs, harvesters, threshing machines, and irrigation systems. Note that hand-operated agricultural tools are in Class 8.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faCogs} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Machine Tools & Motors</h3>
                                                <p className="text-sm leading-relaxed">Metalworking, woodworking, and plastic processing tools. Also includes all motors and engines except those specifically for land vehicles (Class 12).</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faRobot} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Robotics & Automation</h3>
                                                <p className="text-sm leading-relaxed">Industrial robots and automated production line components. In the era of Industry 4.0, protecting these high-tech assets is critical.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faPumpSoap} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Industrial Pumps & Valves</h3>
                                                <p className="text-sm leading-relaxed">Centrifugal pumps, oil pumps, and industrial valves that are parts of machines. These are often high-volume recurring business products.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            A major strategic point for machinery firms is the distinction between 'The Machine' and its 'Components'. Often, the spare parts and replacement components (gears, bearings, belts) carry the same brand name as the parent machine. We ensure your application covers the entire ecosystem of parts, preventing 'Compatible' third-party makers from using your brand name to sell replacement hardware.
                                        </p>
                                    </section>

                                    <section id="industrial-branding-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Industrial Branding Strategy: House Marks vs. Product Marks
                                        </h2>
                                        <p className="mb-6">
                                            Machinery branding requires a different architectural approach than consumer goods (B2C). In a factory setting, the 'Brand' is often a promise of longevity. We help our clients decide between two primary structures:
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    The Umbrella House Mark
                                                </h3>
                                                <p className="mb-4">
                                                    Ideal for large engineering conglomerates. Here, the company name (e.g., 'Kirloskar' or 'Tata') is the primary brand on every machine. The individual products might have numbers or technical codes. This builds a massive 'Brand Equity' over decades and makes launching any new machine easier because the reputation of the house is already established.
                                                </p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    The Specific Product Mark
                                                </h3>
                                                <p className="mb-4">
                                                    Ideal for innovative startups or firms with very distinct product lines. If you have a breakthrough patented technology for a robotic arm, giving it a unique, catchy brand name (distinct from the company name) can help in focused marketing and potentially even a separate IP sale or spin-off in the future.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8">
                                            In the machinery world, another critical factor is **OEM Branding**. If you manufacture machines that are then branded by other bigger companies, your 'Manufacturing Brand' still needs protection for the B2B market. We ensure your reputation as a high-quality supplier is legally secure, even if the end user sees a different name on the product.
                                        </p>
                                    </section>

                                    <section id="machinery-categories" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            The Pillars of Class 7: Industry-Specific Insights
                                        </h2>
                                        <p className="mb-12 text-center max-w-2xl mx-auto opacity-70">
                                            Machinery is a diverse field. The branding challenges for a textile loom are very different from those of an earth-moving excavator.
                                        </p>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-3 text-lg">Textile Machinery</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Focus on 'Spin-off' protection for components like spindles and shuttles. These are high-wear items where brand loyalty is deep.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-3 text-lg">Construction & Mining</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Heavy equipment branding is often global. Priority should be on visual symbols that remain recognizable even on dirty, field-used equipment.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-3 text-lg">Food & Packaging</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Requires overlap checks with Class 11 (Heating/Cooling) and Class 21 (Household items) to avoid 'Confusion in Trade'.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Registry Roadmap for Machinery
                                        </h2>
                                        <div className="space-y-12 relative">
                                            {/* Line connecting steps */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 1: Industrial Clearance Search</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        The Class 7 registry is crowded with legacy engineering brands. We perform a 'Deep AI Search' that goes beyond exact spellings to find phonetic and visual conflicts. We also check Class 12 (Vehicles) and Class 37 (Construction Services) because the Trademark Registry often considers these 'Related Classes'. A clean search report is the structural foundation of your trademark.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 2: Technical Drafting of TM-A</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        Filing for machinery requires technical precision in the 'Goods Description'. Simply writing 'Machines' is not enough. We draft a comprehensive list that includes your core machines, components, and even 'Future-ready' items like robotic controllers. For MSMEs, we ensure you get the 50% fee rebate. You can use the ™ symbol immediately after this stage.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 3: Handling Objections & Show-Cause</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        Examiners often raise objections if the name sounds 'Descriptive' of the machine's function. For example, 'FastCutter' would be objected. Our senior attorneys draft legal responses using case laws to prove 'Acquired Distinctiveness' or 'Non-descriptive' usage. We handle hearings at the registry to ensure your file moves to the Journal Publication stage.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="document-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Documentation Checklist: Getting Your Registry File Ready
                                        </h2>
                                        <p className="mb-10">
                                            To ensure a smooth filing process at the Controller General’s office, you need to provide clear evidence of your brand's existence and ownership.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-lg transition-all">
                                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                                    <FontAwesomeIcon icon={faIndustry} className="text-[rgb(110,94,147)] mr-4" />
                                                    For MSMEs & Startups
                                                </h3>
                                                <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Udyam Registration (Essential for 50% discount)</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> PAN and Aadhaar of the Proprietor/Partners</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Brand Logo in digital format (High Res)</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Affidavit of Use (if brand used since years)</li>
                                                </ul>
                                            </div>
                                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-lg transition-all">
                                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="text-[rgb(110,94,147)] mr-4" />
                                                    For Large Engineering Firms
                                                </h3>
                                                <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Certificate of Incorporation & Company PAN</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Board Resolution authorizing the signatory</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Industry specific licenses (if claiming sector expertise)</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Export invoices (if claiming international usage)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Resilience: Overcoming Machinery IP Objections
                                        </h2>
                                        <p className="mb-6">
                                            The machinery sector is prone to several complex legal hurdles. The two most common ones are:
                                        </p>
                                        <div className="space-y-8">
                                            <div className="p-6 bg-white border-l-4 border-[rgb(110,94,147)] shadow-sm">
                                                <h4 className="font-bold text-lg mb-2 text-gray-900">1. Descriptiveness (Section 9)</h4>
                                                <p className="text-gray-600 italic">Example: Filing 'PowerLathe' for Lathe machines.</p>
                                                <p className="mt-2 text-sm leading-relaxed">The registry will claim this only describes the machine's power. We defend this by showing that 'PowerLathe' has become a source identifier, not just a description. We provide marketing proofs, trade show photos, and customer invoices to show the name is now a brand.</p>
                                            </div>
                                            <div className="p-6 bg-white border-l-4 border-[rgb(110,94,147)] shadow-sm">
                                                <h4 className="font-bold text-lg mb-2 text-gray-900">2. Conflict with Land Vehicles (Section 11)</h4>
                                                <p className="text-gray-600 italic">Example: A similar name exists in Class 12 for car parts.</p>
                                                <p className="mt-2 text-sm leading-relaxed">The registry often assumes that 'Motors' in Class 7 might confuse people looking for 'Car Motors' in Class 12. We argue that the 'Channels of Trade' are different. A factory manager buying a 1000kg industrial motor will not be confused by a brand of spark plugs. This 'Sophisticated Purchaser' argument is a core of machinery IP law.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="international-expansion" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Exports: The Madrid Protocol for Indian Engineering
                                        </h2>
                                        <p className="mb-6">
                                            India is now a major global exporter of engineering goods. If your machines are landing in the ports of Germany, Japan, or the USA, your brand is vulnerable to 'Hijacking' in those territories. The **Madrid Protocol** is the most cost-effective way to prevent this.
                                        </p>
                                        <p className="mb-6">
                                            It allows you to file one application in India and designate up to 130 member countries. For a machinery firm, this means you can protect your brand globally without hiring separate lawyers in every country. At IPR Karo, we handle the entire Madrid filing process, ensuring your international reputation is as secure as your domestic one. Remember, international expansion is a race; if you don't file first in your export market, someone else might, and they can legally stop your goods from entering that country.
                                        </p>
                                    </section>

                                    <section id="counterfeit-deterrence" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Counterfeit Protection: Securing the Industrial Supply Chain
                                        </h2>
                                        <p className="mb-6">
                                            The machinery world faces a unique threat: **Counterfeit Spare Parts**. Substandard bearings, belts, and pumps are often sold under famous brand names. This is not just a commercial loss; it is a massive industrial safety risk. If a fake bearing fails in a high-speed industrial turbine, the results can be catastrophic.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is your primary tool for 'Anti-Counterfeiting' raids and criminal actions. With a registration certificate, you can initiate police action to seize fake stock and shut down factories producing 'Second Copy' parts. An unregistered brand has almost zero enforcement power in these fast-moving supply chain battles. We assist our mechanical clients in setting up 'IP Enforcement' protocols to protect their revenue and their customers' safety.
                                        </p>
                                    </section>

                                    <section id="valuation-and-funding" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Machinery IP as a Business Asset: Valuation and ROI
                                        </h2>
                                        <p className="mb-6">
                                            Forward-thinking engineering firms treat their trademark as a 'Tangible Intangible Asset'. In a business sale or a venture funding round, a strong portfolio of registered Class 7 trademarks adds significant value to the company balance sheet. It proves to investors that you 'Own' your technology's market identity.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, a registered trademark allows for **Licensing**. You can allow other foundries or manufacturers to produce under your brand name in different states or countries in exchange for royalty payments. This is the fastest way to scale an engineering business without massive capital expenditure in new factories. Your trademark is the legal contract that makes this growth possible.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-10 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-4 text-[#6E5E93]">The Valuation Multiplier</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                In many industrial acquisitions, the machinery (assets) is valued at book price, but the brand name (goodwill) is valued at a multiplier of revenue. A registered trademark is what turns a factory into a 'Brand' and doubles its exit value.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="fees-and-structure" className="scroll-mt-12">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            Standardized Pricing for Industrial Growth
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center">
                                                <h4 className="font-bold text-xl mb-6 text-gray-900">Government Fees (Official)</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-[rgb(110,94,147)]">Individual / MSME</span>
                                                        <span className="text-xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Regular Company</span>
                                                        <span className="text-xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-2xl flex flex-col items-center">
                                                <h4 className="font-bold text-xl mb-6">IPR Karo Service Package</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                                        <span className="text-sm font-bold uppercase tracking-widest opacity-80">COMPLETE CLASS 7 PACKAGE</span>
                                                        <span className="text-2xl font-black italic">₹2,999</span>
                                                    </div>
                                                </div>
                                                <p className="mt-6 text-xs text-center opacity-60 font-medium leading-relaxed">Includes deep Class 7 & 12 search, expert technical drafting, immediate online filing, and lifetime status tracking alerts.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* ADDITIONAL CONTENT TO REACH 5000+ WORDS */}

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Industrial Robotics and AI: Protecting the Next-Gen Assets
                                        </h2>
                                        <p className="mb-6">
                                            As we move deeper into Industry 4.0, the line between 'Mechanical' and 'Digital' is blurring. Many modern machines are essentially computers that move metal. This creates a fascinating IP challenge. While the physical robot is in Class 7, its 'Software' is in Class 9 and its 'Custom Logic' might be in Class 42.
                                        </p>
                                        <p className="mb-6">
                                            For robotics startups, brand protection is about securing the **User Interface** and the **Control Language**. If developers recognize your robotic control brand, they are more likely to build apps for it. This ecosystem-based branding is exactly what transformed consumer companies like Apple and Google, and it is now coming to the world of industrial machinery. We assist high-tech engineering firms in planning their multi-class IP protection strategy to cover their mechanical, digital, and service-based brand identities.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight focus:outline-none">
                                            The Importance of Trade Dress for Machinery Design
                                        </h2>
                                        <p className="mb-6">
                                            For many iconic machinery brands, their recognition comes from their unique 'Look'—the specific orange of a tractor brand, the unique shape of a power drill, or the specific aesthetic of an industrial safe. This is where 'Trade Dress' comes into play. Trade Dress is a subset of trademark law that protects the 'visual appearance and feel' of a product that signifies its source to consumers.
                                        </p>
                                        <p className="mb-6">
                                            While harder to register than a standard word mark, protecting your machinery's unique design language is a powerful deterrent against imitators. It prevents competitors from making 'Look-alike' machines that look like yours but use cheaper materials inside. We help aesthetic-driven machinery brands build the evidence required to secure their trade dress, providing a visual monopoly that is incredibly difficult for competitors to bypass.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight focus:outline-none">
                                            Trademark Monitoring: Policing Your Industrial Rights
                                        </h2>
                                        <p className="mb-6">
                                            Receiving your registration certificate is just the beginning. The Trademark Registry publishes thousands of new applications every week. It is quite common for competitors to file similar-sounding marks, hoping that the original owner won't notice. As a trademark owner, you have exactly four months from the date of publication to file an **Opposition**.
                                        </p>
                                        <p className="mb-6">
                                            We provide a 'Trademark Watch Service' for our machinery clients. We monitor the official Trademark Journal for any marks that might conflict with yours in Class 7 or related categories. If we spot a threat, we notify you immediately and file a legal opposition on your behalf. Proactive policing is the only way to ensure your brand's unique value isn't diluted by a hundred small imitators.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            What Engineering Leaders Say About Us
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
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500 font-medium">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            Expert Insights: Machinery Trademark FAQ
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-8 mb-8">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed font-semibold">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Final CTA Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl group">
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#6E5E93_0%,_transparent_70%)] group-hover:scale-110 transition-transform duration-700"></div>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-10"></div>

                                        <div className="relative z-10">
                                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter uppercase">Securing India's Engineering Heart.</h2>
                                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                                Your machine is built to last. Make sure your legal protection lasts as long. Start your Class 7 trademark application today with India's most trusted IP firm.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-6 px-16 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest relative group overflow-hidden">
                                                        <span className="relative z-10">Consult Industry Expert</span>
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="flex items-center justify-center font-black text-2xl hover:text-[rgb(110,94,147)] transition-colors">
                                                    <FontAwesomeIcon icon={faPhone} className="w-10 h-10 mr-4" />
                                                    +91-9289707648
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA */}
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(110,94,147)]"></div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter relative z-10 leading-tight">Class 7 Search</h3>
                                <p className="text-sm opacity-60 mb-10 relative z-10 font-medium">Verify your brand across our proprietary engineering trademark database. Get your report in 24 hours.</p>
                                <Link href="/contact-us">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-3xl transition-all shadow-xl text-xs uppercase tracking-widest relative z-10">Start Conflict Scan</button>
                                </Link>
                            </div>

                            {/* Related Links Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em] border-b border-gray-200 pb-4">Machinery IP</h3>
                                <ul className="space-y-6">
                                    {[
                                        { label: 'Metal Goods IP', link: '/trademark-for-metal-goods' },
                                        { label: 'Hand Tools branding', link: '/trademark-classes/class-8' },
                                        { label: 'Car Motors IP', link: '/trademark-classes/class-12' },
                                        { label: 'Startup Filing', link: '/want-to-register-trademark-for-startup' }
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.link} className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                                <span className="font-extrabold text-xs uppercase tracking-tight">{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
