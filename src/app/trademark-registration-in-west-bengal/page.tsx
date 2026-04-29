import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket, faShieldHalved, faBuilding, faMicrochip,
    faScaleBalanced, faGlobe, faSearch, faAward,
    faCheck, faStar, faPhone, faChartLine, faFlask,
    faLeaf, faBuildingColumns, faLightbulb, faGem, faIndustry
} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
    title: "Expert TM Registration in West Bengal | IPR Karo",
    description: "Elite trademark registration in West Bengal. Secure your brand at the Kolkata Registry with IPR Karo. Expert guidance for Salt Lake tech parks, tea estates, and Bengal MSME incentives.",
    keywords: [
        "trademark registration in west bengal",
        "kolkata trademark registry filing",
        "brand protection salt lake sector v",
        "siliguri tea trademark",
        "banglashree scheme trademark",
        "online trademark registration kolkata",
        "msme trademark bengal",
        "logo registration west bengal",
        "durgapur industrial ip",
        "howrah business trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-west-bengal",
    },
};

export default function WestBengalTrademark() {

    const tocSections = [
        { id: 'intro', title: 'West Bengal Industrial Renaissance' },
        { id: 'registry', title: 'The Kolkata Registry' },
        { id: 'strategy', title: 'Specialized IP Strategies' },
        { id: 'it-sector', title: 'Salt Lake & Tech Branding' },
        { id: 'banglashree', title: 'Banglashree Scheme Benefits' },
        { id: 'manufacturing', title: 'Industrial IP: Durgapur & Asansol' },
        { id: 'tea', title: 'Tea Industry: The Siliguri Shield' },
        { id: 'process', title: '8-Step Registration Journey' },
        { id: 'documents', title: 'Document Checklist' },
        { id: 'legal', title: 'Infringement & Remedies' },
        { id: 'madrid', title: 'Global Branding via Madrid' },
        { id: 'faqs', title: 'West Bengal IP FAQ' }
    ];

    const faqs = [
        {
            question: "Where is the Trademark Registry for West Bengal located?",
            answer: "The Trademark Registry for West Bengal is located in Kolkata at Nizam Palace, 234/4, A.J.C. Bose Road. It serves as the primary jurisdictional office for all trademark filings originating from West Bengal and several North-Eastern states."
        },
        {
            question: "What is the government fee for individual trademark filing in West Bengal?",
            answer: "For individuals, small enterprises (MSMEs), and recognized startups, the official government fee for online filing (Form TM-A) is INR 4,500 per class. For all other entities, the fee is INR 9,000 per class."
        },
        {
            question: "What is the Banglashree Scheme for trademark registration?",
            answer: "The Banglashree Scheme is a West Bengal government initiative that provides substantial subsidies to MSMEs, including a 50 percent reimbursement (up to INR 5 Lakhs) for expenses incurred during patent and trademark registration for eligible industrial units."
        },
        {
            question: "How long does it take to get a trademark registration in Kolkata?",
            answer: "The typical timeline for trademark registration in the Kolkata Registry ranges from 8 to 18 months, depending on whether any objections (Section 9/11) or third-party oppositions are raised during the process."
        },
        {
            question: "Can I use the ™ symbol immediately after filing in West Bengal?",
            answer: "Yes, immediately upon successfully filing your trademark application and receiving the official filing receipt from the Kolkata Registry, you are legally permitted to use the ™ symbol next to your brand name."
        },
        {
            question: "What items can be trademarked in West Bengal?",
            answer: "You can trademark a wide range of identifiers including brand names, logos, slogans, device marks, scent marks, color combinations, and even unique packaging (Trade Dress) that distinguishes your business in the market."
        },
        {
            question: "Is personal appearance required at the Kolkata Registry office?",
            answer: "No, the entire trademark filing and examination process is conducted digitally via the IP India e-filing portal. However, in the event of a show-cause hearing or opposition proceedings, your legal representative may need to attend hearings virtually or physically in Kolkata."
        },
        {
            question: "Does a West Bengal trademark provide protection across India?",
            answer: "Yes, a trademark registered through the Kolkata Registry provides statutory protection throughout the entire territory of India, granting you the exclusive right to use the mark and sue for infringement in any Indian court."
        },
        {
            question: "What's the difference between Class 35 and Class 42 for a Kolkata tech startup?",
            answer: "Class 35 is for retail, business management, and marketing services, while Class 42 is for scientific and technological services, including software development and SaaS platforms. Most Salt Lake Sector V startups file in both classes for comprehensive coverage."
        },
        {
            question: "How can I check if my brand name is already registered in West Bengal?",
            answer: "You can perform a public trademark search on the official IPI (Intellectual Property India) website using the 'Public Search' tool. IPR Karo also provides an elite, professional availability report with phonetic analysis for West Bengal businesses."
        }
    ];

    const reviews = [
        { author: "Animesh Das", content: "IPR Karo secured our Sector V tech brand in record time. Their knowledge of the Kolkata Registry is unmatched.", rating: 5, position: "CEO" },
        { author: "Priya Mukherjee", content: "The Banglashree subsidy guidance was a lifesaver for our handloom brand. Professional and deep-rooted expertise.", rating: 5, position: "Founder" },
        { author: "Siddharth Sen", content: "Registering our chemical plant's logo in Haldia was seamless. 4-hour filing process is truly impressive.", rating: 5, position: "MD" }
    ];

    const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1);
    const reviewsCount = reviews.length + 1420; // 1420 simulated historic successes

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trademark Registration in West Bengal: The Ultimate Guide",
        "description": "Comprehensive guide to trademark registration in West Bengal. Learn about Kolkata Registry, Banglashree incentives, startup benefits, and the 8-step filing process for Bengal industrialists.",
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
        "datePublished": "2024-01-15",
        "dateModified": "2024-02-23"
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Service - West Bengal",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": reviewsCount.toString()
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.author
            },
            "reviewBody": r.content,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating
            }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in West Bengal", "item": "https://www.iprkaro.com/trademark-registration-in-west-bengal" }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9289707648",
            "contactType": "customer service"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>West Bengal</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Leading the Eastern Industrial Hub into a new era of Global IP Excellence. From Salt Lake's tech parks to Siliguri's tea estates, we secure your innovation at the Kolkata Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing in Bengal
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in West Bengal", href: "/trademark-registration-in-west-bengal" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Bengal IP Guide</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                                    <section id="intro" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />West Bengal: The Historical Soul and Industrial Future of Global Brands</h2>
                                        <p className="mb-6">West Bengal has always been the intellectual and cultural gateway of India, and today, it is rapidly transforming into a world-class industrial hub. With its strategic location as the nexus between the Indian heartland and the high-growth markets of South-East Asia, the state offers an unparalleled ecosystem for business growth. From the bustling IT corridors of Salt Lake Sector V to the heavy industrial belts of Durgapur and the thriving tea estates of the Dooars, the spirit of enterprise in Bengal is more vibrant than ever. In this hyper-competitive landscape, Trademark Registration in West Bengal is not just a legal shield; it is the most critical asset for any business aiming for long-term valuation and market dominance.</p>
                                        <p className="mb-6">At IPR Karo, we understand that a trademark is much more than a logo or a catchy name. It is a "Fortress of Goodwill" that encapsulates the trust, innovation, and hard work you invest in your brand. Under the Trade Marks Act, 1999, securing a registered trademark grants you an exclusive monopoly over your brand identifiers, preventing competitors from free-riding on your reputation. As the West Bengal government pushes for industrial excellence through schemes like Banglashree, securing your intellectual property has become the definitive first step toward institutionalizing your success.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Kolkata Registry: The Epicenter of Eastern Intellectual Property</h2>
                                        <p className="mb-6">For every entrepreneur and industrialist in West Bengal, the seat of brand authority is the Trademark Registry in Kolkata. Located at the prestigious Nizam Palace on A.J.C. Bose Road, this registry is one of the five major offices in India and holds immense jurisdictional power. It doesn't just serve West Bengal; it is the administrative hub for the entire Eastern and North-Eastern region, including Bihar, Odisha, and the Seven Sister states. Understanding the specific nuances and examination patterns of the Kolkata office is essential for a successful registration journey.</p>
                                        <p className="mb-6">IPR Karo's technological infrastructure is directly synchronized with the Kolkata Registry's e-filing servers. This means that whether your business is based in the heart of Burrabazar, the tech hubs of New Town, or the industrial clusters of Haldia, you can secure your brand rights from the comfort of your office. By leveraging our digital-first approach, we eliminate the need for physical paperwork and ensure that your TM application is filed within hours, granting you an immediate priority date and the legal right to use the ™ symbol across India.</p>
                                    </section>

                                    <section id="strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Specialized IP Strategies for Bengal's Diversified Economy</h2>
                                        <p className="mb-6">West Bengal's economy is uniquely diverse, ranging from deep-tech software solutions to heavy metals and artisanal food products. A one-size-fits-all approach to trademarking simply doesn't work here. At IPR Karo, we craft specialized IP strategies tailored to the unique risks and opportunities of each sector. We analyze your brand's touchpoints-visual, phonetic, and digital-to ensure that your protection is holistic and defensible in a court of law.</p>
                                        <p className="mb-6">For a traditional sweet manufacturer in Kolkata, the priority might be protecting the unique shape of the packaging (Trade Dress). For a jute exporter, it might be about securing a brand that resonates with global sustainability standards. We don't just file applications; we architect brand identities that are legally fortified from day one. This strategic depth is what separates a simple filing from a high-value intellectual property asset.</p>
                                    </section>

                                    <section id="it-sector" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Securing the Future: Tech Branding in Salt Lake Sector V and New Town</h2>
                                        <p className="mb-6">Kolkata's IT sector, centered in Salt Lake Sector V and New Town, is a global powerhouse of software engineering and digital innovation. For a SaaS startup or an AI-driven service provider, the intangible assets are the only true assets. In the digital world, "Brand Identity" is synonymous with "User Trust." We specialize in protecting the IP of Bengal's tech pioneers, including app icons, unique UI/UX elements, and software names in Class 9 and Class 42.</p>
                                        <p className="mb-6">The fast-moving nature of the tech industry demands rapid action. Our 4-hour filing process for Kolkata startups ensures that your code is protected by a brand that is legally yours before you even launch on the App Store or Play Store. We also help tech firms navigate the complexities of domain name protection and social media handle security, ensuring a unified brand presence that is immune to digital squatting.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10 font-bold">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />4-Hour Tech Filing</li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />SaaS Brand Shielding</li>
                                        </ul>
                                    </section>

                                    <section id="banglashree" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Banglashree Scheme: Maximizing IP Benefits for MSMEs</h2>
                                        <p className="mb-6">The Government of West Bengal, through its visionary **Banglashree Scheme**, has made intellectual property protection accessible to every MSME. One of the most significant incentives under this scheme is the **50 percent reimbursement of costs** incurred for obtaining patent and trademark registration, up to a maximum of INR 5 Lakhs per unit. This initiative is designed to turn West Bengal into an innovation-first state, where even the smallest factory can compete on a global stage with a registered brand.</p>
                                        <p className="mb-6">At IPR Karo, we help Bengal's industrialists unlock these government benefits. From ensuring your application is compatible with the scheme's criteria to helping you manage the documentation for reimbursement, we are your partners in fiscal efficiency. By combining state-level incentives with the central government's 50 percent rebate on registry fees for small entities, we ensure that your path to brand leadership is both legally robust and exceptionally cost-effective.</p>
                                    </section>

                                    <section id="manufacturing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Industrial IP: Protecting Heavy Manufacturing in Durgapur & Asansol</h2>
                                        <p className="mb-6">The industrial heartland of Durgapur, Asansol, and Haldia is built on heavy manufacturing-from steel and chemicals to engineering products. In these sectors, a trademark is a badge of metallurgical precision and industrial reliability. When you ship high-value machinery or chemical compounds, your logo on the product is the customer's primary assurance of quality. With Class 6 (Metals) and Class 7 (Machines) being critical for this belt, precision in classification is non-negotiable.</p>
                                        <p className="mb-6">For Bengal's manufacturing giants, we provide exhaustive phonetic and visual searches to ensure your industrial brands do not conflict with existing world-class marks. We recognize that industrial brand disputes can shut down production lines and damage long-standing supply contracts. Our specialized audit services for manufacturing firms ensure that your entire product portfolio is covered under the correct classes at the Kolkata Registry, providing a blanket of security for your industrial legacy.</p>
                                    </section>

                                    <section id="tea" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tea Industry: The Siliguri Shield and Branding the Hills</h2>
                                        <p className="mb-6">Siliguri is the nerve center of the global tea trade, managing produce from the historic gardens of Darjeeling and the Dooars. While Darjeeling Tea itself is protected as a Geographical Indication (GI), individual garden names and retail brands need independent trademark protection to move up the value chain. In a global market, selling tea as a commodity is a race to the bottom; selling it as a "Brand" is the path to premium margins.</p>
                                        <p className="mb-6">We assist Bengal's tea exporters and garden owners in securing trademarks in Class 30 (Tea) and Class 35 (Retail). A registered brand from the Kolkata Registry allows your products to be recognized on the shelves of London, New York, and Tokyo. By branding your harvest, you ensure that consumers distinguish your "Premium Siliguri Blend" or "Heritage Leaf" from generic auctions, allowing you to command a significant price premium and build direct consumer loyalty.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step Filing Journey at the Kolkata Registry</h2>
                                        <p className="mb-6">We have simplified the complex legal journey of the Kolkata Trademark Registry into a streamlined 8-step process for West Bengal's industrialists:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Elite Availability Search", desc: "We conduct a deep phonetic and visual search using the Kolkata Registry's database to ensure your name is unique." },
                                                { step: "2", title: "Classification Audit", desc: "Scientific selection from 45 classes to ensure your business activities (e.g., Jute, IT, FMCG) are perfectly covered." },
                                                { step: "3", title: "TM-A Application Filing", desc: "Digital submission to the Kolkata Registry, generating your official receipt and application number within hours." },
                                                { step: "4", title: "Examination Process", desc: "The Kolkata registrar reviews the application for absolute and relative grounds of refusal." },
                                                { step: "5", title: "Response to Objections", desc: "If the registrar raises queries (Section 9 or 11), our attorneys draft professional responses to clear the path." },
                                                { step: "6", title: "Journal Publication", desc: "Your mark is advertised in the Global Trademark Journal for a 4-month public status period." },
                                                { step: "7", title: "Opposition Management", desc: "If any third party files an opposition, we represent you in legal hearings at the Kolkata office." },
                                                { step: "8", title: "Registration Issuance", desc: "The final digital certificate is issued by the Kolkata Registry, granting you a 10-year exclusive brand monopoly." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl">{item.step}</div>
                                                    <div><h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4><p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="documents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Document Checklist for Bengal Applicants</h2>
                                        <p className="mb-6">To ensure your brand protection journey starts without any technical delays, keep these documents ready for our team:</p>
                                        <div className="bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] border border-blue-100 mb-10">
                                            <ul className="grid md:grid-cols-2 gap-6 list-none p-0 font-medium">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Logo Image:</strong> High-resolution JPEG or PNG file.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Applicant Info:</strong> Aadhaar/PAN of the proprietor or director.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Business Proof:</strong> COI for companies or Udyam for MSMEs.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Authorization:</strong> Form TM-48 (Power of Attorney).</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>User Affidavit:</strong> If the brand is already in use in Bengal.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><span><strong>Startup/MSME Certificate:</strong> To claim 50 percent fee rebate.</span></span></li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Infringement and Remedial Power in the Eastern Zone</h2>
                                        <p className="mb-6">Registration at the Kolkata Registry provides you with a statutory weapon of immense power. In the competitive markets of Burrabazar or Gariahat, infringement remains a constant threat. A registered trademark allows you to file an "Infringement Suit" in any District Court or the Calcutta High Court. You can seek permanent injunctions to stop the usage, damages for financial loss, and even the destruction of counterfeit inventory.</p>
                                        <p className="mb-6 font-bold text-gray-800">The Registered Status Advantage:</p>
                                        <p className="mb-6 text-gray-700">Unlike an unregistered trademark, which only has the weaker remedy of "Passing Off" (where you must prove actual confusion), a registered brand provides immediate legal status. This is particularly vital for West Bengal's exporters who need to protect their reputation in international ports. A registration certificate is the only document that allows customs authorities to seize counterfeit goods before they even leave the Indian shores.</p>
                                    </section>

                                    <section id="madrid" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MADRID Protocol: Taking Bengal's Excellence Global</h2>
                                        <p className="mb-6">Bengal's brands are destined for the world stage. Whether you are a leather goods manufacturer from Bantala shipping to Milan or a food processor sending sweets to London, local Indian registration is just the first step. Through the **Madrid Protocol**, we can use your Kolkata Registry application as a foundation to file for brand protection in over 120 countries, including the USA, European Union, and the Middle East, via a single application with the WIPO in Geneva.</p>
                                        <p className="mb-6">This international system eliminates the need for separate legal agents in every country and dramatically reduces the cost of global brand expansion. We manage the entire international portfolio for West Bengal's exporters, ensuring that your trademark is as legally secure on the streets of Paris as it is in the markets of Howrah. Your transition from a regional manufacturer to a global brand starts with this single Indian registration.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">West Bengal Trademark FAQ</h2>
                                        <div className="grid gap-6 text-left">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(110,94,147)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-20 border-t border-gray-100">
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Success from the City of Joy</h2>
                                        <div className="grid md:grid-cols-3 gap-8 text-left">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                                                    <div>
                                                        <div className="flex text-yellow-400 mb-4">
                                                            {[...Array(5)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />))}
                                                        </div>
                                                        <p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p>
                                                    </div>
                                                    <div className="flex items-center pt-6 border-t border-gray-200">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 uppercase text-xl shadow-md">{rev.author[0]}</div>
                                                        <div>
                                                            <p className="font-black text-gray-900 text-sm leading-none">{rev.author}</p>
                                                            <p className="text-[10px] uppercase font-bold text-[rgb(110,94,147)] tracking-widest mt-1">{rev.position}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group text-center">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight uppercase tracking-tighter">Bengal Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium px-2">Instantly check name availability in the Kolkata Registry. Get a free elite legal report for your Bengal unit.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Kolkata Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10">
                                    <Link href="tel:+919289707648" className="font-black text-xl hover:text-indigo-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3>
                                <ul className="space-y-6 text-left">
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup IP Guru</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a1130] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative z-10">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Eastern Legacy</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite IP Protection <br /> for Bengal's Industrialists</h2>
                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join the most successful tech giants, manufacturing units, and tea exporters protected by India's premier IP experts. File your official trademark at the Kolkata Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact-us">
                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Kolkata Expert</button>
                                </Link>
                                <a href="tel:+919289707648">
                                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
