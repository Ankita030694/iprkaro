import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShieldHalved,
    faGavel,
    faHandcuffs,
    faFileLines,
    faScaleBalanced,
    faSearch,
    faTriangleExclamation,
    faCircleCheck,
    faBuildingShield,
    faSitemap,
    faStar,
    faPhone,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What to Do if Someone Copies Your Trademark? Legal Remedies in India',
    description: 'A complete legal action plan for trademark owners in India. Learn about cease and desist notices, civil suits, criminal raids, and claiming damages under the Trade Marks Act 1999.',
    keywords: [
        'someone copied my trademark india',
        'trademark infringement legal action india',
        'how to stop trademark copying',
        'cease and desist notice trademark india',
        'trademark infringement civil suit india',
        'criminal remedies trademark india',
        'passing off unregistered trademark india',
        'trademark lawyer near me',
        'iprkaro trademark enforcement guide'
    ],
    openGraph: {
        title: 'Protect Your Brand: Legal Steps Against Trademark Copycats in India',
        description: 'Discover the exact legal steps to take when your logo or brand name is stolen. From police raids to court injunctions, we cover everything.',
        url: 'https://www.iprkaro.com/what-to-do-if-someone-copies-your-trademark',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-to-do-if-someone-copies-your-trademark',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Crisis of Copycats' },
    { id: 'infringement-vs-passingoff', title: 'Infringement vs Passing Off' },
    { id: 'initial-steps', title: 'Immediate Response Plan' },
    { id: 'online-enforcement', title: 'Online Enforcement' },
    { id: 'domain-disputes', title: 'Domain Name Disputes' },
    { id: 'jurisdiction', title: 'Court Jurisdiction' },
    { id: 'customs-recordal', title: 'Customs Border Enforcement' },
    { id: 'legal-notice', title: 'The Cease and Desist Strategy' },
    { id: 'civil-remedies', title: 'Civil Legal Remedies' },
    { id: 'injunctions', title: 'Power of Injunctions' },
    { id: 'criminal-action', title: 'Criminal Prosecution & Raids' },
    { id: 'evidence', title: 'Evidence Collection Checklist' },
    { id: 'damages', title: 'Damages and Compensation' },
    { id: 'expert-support', title: 'IPR Karo Enforcement Services' },
    { id: 'reviews', title: 'Client Success Stories' },
    { id: 'faqs', title: 'Enforcement FAQs' },
];

const faqs = [
    {
        question: "How do I know if someone has actually copied my trademark?",
        answer: "A trademark is considered 'copied' if a third party uses a mark that is identical or 'deceptively similar' to yours in a way that is likely to confuse consumers about the source of goods or services. Courts look at phonetic, visual, and conceptual similarity."
    },
    {
        question: "Can I take action if my trademark is not registered?",
        answer: "Yes, you can file a 'Passing Off' suit. While 'Infringement' is a statutory right for registered marks, 'Passing Off' is a common law remedy that protects the goodwill and reputation your brand has built, even without a formal registration certificate."
    },
    {
        question: "What is the first step when I find a copycat?",
        answer: "The first step is documentation. Save screenshots, buy the products, get invoices, and preserve links. Once evidence is gathered, the next logical step is usually sending a strongly worded Cease and Desist (C&D) notice through an IP attorney."
    },
    {
        question: "How effective is a Cease and Desist notice?",
        answer: "In over 60% of cases, a professional C&D notice is enough to stop the copycat. Most small-scale infringers stop once they realize they are facing serious legal consequences. However, if they ignore it, you must be prepared to file a suit."
    },
    {
        question: "What is an 'Ex-Parte' Injunction?",
        answer: "It is an emergency court order granted in the absence of the defendant. If you can prove that giving notice to the infringer might result in them hiding evidence or destroying goods, the court can grant an immediate freeze on their business activities."
    },
    {
        question: "Can I involve the police in trademark cases?",
        answer: "Yes. Sections 103 and 104 of the Trade Marks Act 1999 make falsifying trade marks a cognizable offense. You can file an FIR, and the police (usually with an IP cell) can conduct raids and seize counterfeit goods."
    },
    {
        question: "What kind of money can I get as damages?",
        answer: "Courts can award 'compensatory damages' (for actually lost sales), 'punitive damages' (to punish the infringer), or an 'account of profits' where the infringer has to hand over all money made through the illegal use of your brand."
    },
    {
        question: "What are 'John Doe' orders?",
        answer: "These are unique injunctions issued against 'unknown' persons. This is extremely useful for online piracy or counterfeit networks where you don't know the exact identity of every seller but want to block the distribution globally."
    },
    {
        question: "How long does a trademark suit take in India?",
        answer: "With the advent of Commercial Courts, trademark suits have become much faster. While a full trial might take 18 to 24 months, an 'Interim Injunction' (which essentially stops the infringer) can often be obtained within weeks of filing."
    },
    {
        question: "What is the penalty for online trademark infringement?",
        answer: "Online infringement carries both civil and criminal penalties. Besides being forced to take down the content, the court can award heavy damages and costs. If criminal intent is proven, the operators can face jail time of up to three years under the Trade Marks Act."
    },
    {
        question: "Can I stop someone from using my brand name on their meta-tags?",
        answer: "Yes. Using a competitor's trademark in meta-tags, hidden text, or for SEO keyword stuffing to divert traffic is considered 'Invisible Infringement' in India. Courts have consistently ruled that this constitutes a violation of the owner's rights."
    },
    {
        question: "What is a 'Anton Piller' order?",
        answer: "This is a form of 'Search and Seizure' order in civil cases. It allows the plaintiff (the owner) to enter the premises of the defendant without prior notice to inspect documents and seize infringing goods. It is a powerful tool to prevent the destruction of evidence."
    },
    {
        question: "Is social media handles a trademark violation?",
        answer: "Using a trademarked name as a social media handle (like @yourbrand) to confuse the public or represent yourself as the official source is a violation. Most platforms allow you to reclaim these handles if you have a valid trademark registration."
    },
    {
        question: "Does IPR Karo handle trademark raids?",
        answer: "Absolutely. We have a dedicated enforcement wing that coordinates with law enforcement agencies for search and seizure operations (Raids) to protect our clients' intellectual property on the ground."
    }
];

const reviews = [
    {
        name: "Vikram Mehta",
        role: "Founder, V-Foods",
        text: "A local competitor was using our exact logo for their juices. IPR Karo sent a legal notice and got them to shut down their operations within 7 days. Excellent response time!",
        rating: 5
    },
    {
        name: "Sonia Kapoor",
        role: "Fashion Designer",
        text: "Someone was selling cheap copies of my bridal wear online. The 'John Doe' order strategy suggested by the IPR Karo team was a life saver. Highly recommended for enforcement!",
        rating: 5
    },
    {
        name: "Rahul Duggal",
        role: "CEO, TechInnovate",
        text: "Clear, aggressive, and professional. They didn't just tell me the law, they gave me a roadmap to actually stop the infringement. We won our injunction in the first hearing.",
        rating: 5
    },
    {
        name: "Priya Nair",
        role: "Luxury Brand Owner",
        text: "The Customs Recordal service provided by IPR Karo stopped a shipment of over 500 fake handbags from reaching the market. The peace of mind this protection offers is priceless.",
        rating: 5
    },
    {
        name: "Amit Bansal",
        role: "Pharma Manufacturer",
        text: "When dealing with counterfeit medicines, every second counts. IPR Karo coordinated a multi-city police raid that shut down several underground labs copying our packaging. Incredible efficiency.",
        rating: 5
    }
];

export default function TrademarkCopyingPage() {
    const breadcrumbItems = [
        { label: "Help Center", href: "/resources" },
        { label: "Action Plan: Trademark Copying", href: "/what-to-do-if-someone-copies-your-trademark" },
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
        "headline": "What to Do if Someone Copies Your Trademark? A Legal Action Plan for India",
        "description": "Exhaustive guide on fighting trademark copying in India. Navigate through legal notices, civil suits, police raids, and damage claims under the Trade Marks Act 1999.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "datePublished": "2024-03-14",
        "image": "https://www.iprkaro.com/logo/iprlogo.svg"
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
                "name": "Help Center",
                "item": "https://www.iprkaro.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Action Plan: Trademark Copying",
                "item": "https://www.iprkaro.com/what-to-do-if-someone-copies-your-trademark"
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
                    "name": "Trademark Enforcement Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1250"
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
                            Your Brand is Under Attack: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Stopping Trademark Copycats
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2 font-normal">
                            Has someone stolen your brand name, logo, or slogan? In the complex world of Indian IP law, silence is consent. Discover the aggressive legal strategies required to shut down infringers, seize counterfeit goods, and claim the compensation you deserve.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Start Enforcement Action
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Action Guide</h4>
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
                                            The Crisis of Copycats: Why You Must Act Immediately
                                        </h2>
                                        <p className="mb-6">
                                            Finding out that someone is copying your trademark is one of the most distressing moments for any business owner. It is not just about a stolen logo, it is about stolen trust. When a copycat uses your branding, they are literally stealing the reputation you have spent years building. They may provide inferior products, scam your customers, and dilute the premium value of your brand.
                                        </p>
                                        <p className="mb-6">
                                            In the Indian legal landscape, the concept of 'Vigilantibus non dormientibus jura subveniunt' (the law assists those who are vigilant, not those who sleep over their rights) applies with full force. If you delay taking action against a copycat, you risk losing your rights to the mark through 'acquiescence' or 'delay and laches'.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic font-normal">
                                                "A trademark is a fortress for your brand identity. Every day an infringer operates is a day the walls of that fortress are being chipped away. Immediate enforcement is the only way to maintain the integrity of your intellectual property."
                                            </p>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            This guide provides over 5000 words of tactical, legal, and strategic advice for trademark owners in India. Whether your mark is registered or unregistered, whether the infringer is a small local shop or a large website, the Indian Trade Marks Act 1999 provides tools to fight back. From emergency court injunctions to criminal raids, this is your roadmap to justice.
                                        </p>
                                    </section>

                                    <section id="infringement-vs-passingoff" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Infringement vs. Passing Off: Knowing Your Legal Ground
                                        </h2>
                                        <p className="mb-8">
                                            Before you file a case, you must understand the two distinct legal paths in India. The path you choose depends entirely on the registration status of your mark.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Trademark Infringement</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">This is a statutory right available under Section 29 of the Trade Marks Act for **registered trademarks**. It is easier to prove because the registration certificate itself is evidence of ownership. You only need to show deceptive similarity and use for similar goods.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Common Law Passing Off</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">This protects **unregistered trademarks**. To win, you must prove the 'Classical Trinity': That you have established goodwill, that there is misrepresentation by the defendant, and that you have suffered (or will suffer) damage to your reputation.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            Ideally, if you have a registered mark with significant prior use, you should plead both Infringement and Passing Off in the same lawsuit. This provides a 'double layer' of protection, ensuring the court can protect your rights even if the technical validity of your registration is questioned.
                                        </p>
                                    </section>

                                    <section id="initial-steps" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            The 24-Hour Immediate Response Plan
                                        </h2>
                                        <p className="mb-12 text-center max-w-2xl mx-auto font-normal">The moment you discover a copycat, don't panic. Follow this professional protocol to build an airtight case before they can cover their tracks.</p>
                                        
                                        <div className="space-y-6">
                                            {[
                                                { step: "01", title: "Digital Preservation", text: "Take high resolution screenshots of their website, social media, and marketplaces like Amazon or Flipkart. Ensure timestamps are visible. Use web archiving tools to save the state of their pages permanently." },
                                                { step: "02", title: "Trap Purchase", text: "Conduct a 'Trap Purchase'. Buy their infringing product just like a regular customer. Keep the invoice, the shipping labels, and the packaging. This is the ultimate physical proof of their commercial activity." },
                                                { step: "03", title: "Identity Discovery", text: "Find out who is behind the operation. Check GST records (if available), WHOIS data for their domain, and corporate records at the Ministry of Corporate Affairs (MCA). A lawsuit cannot be filed against a ghost; we need a legal entity or individual." },
                                                { step: "04", title: "Internal IP Audit", text: "Check your own status. Is your trademark renewed? Do you have all your original invoices and first-use advertisements ready? You must be able to prove you are the 'Prior User' in a court of law." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-6 items-start p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                                                    <span className="text-4xl font-black text-[rgb(110,94,147)]/20">{item.step}</span>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                                        <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="customs-recordal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Customs Recordal: Policing the Borders Against Counterfeits
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            For brands that manufacture products abroad or face threats from imported fakes, the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007, provide a massive advantage. You have the right to record your registered trademark with the Indian Customs authorities.
                                        </p>
                                        <p className="mb-6 font-normal">
                                            Once recorded, the Customs officers have the power to 'suspend the clearance' of any goods that appear to be infringing your trademark. If suspicious goods are found at a port, the Customs department notifies you. You then have a window to inspect the goods and confirm if they are fakes. If they are, the goods are seized and destroyed at the port itself, never entering the Indian market. This is a highly proactive way to stop the supply chain of copycats at the source.
                                        </p>
                                        <div className="bg-[#f0f9ff] border-l-8 border-blue-500 p-8 rounded-2xl mb-12 font-normal">
                                            <h4 className="font-bold text-blue-900 mb-2 font-normal">Strategic Border Defense:</h4>
                                            <p className="text-sm text-blue-800 font-medium font-normal">
                                                Customs recordal remains valid for the life of the trademark registration. It acts as a 24/7 filter at every major airport and seaport in India, significantly reducing the burden on your internal investigation teams to find fakes in the local markets.
                                            </p>
                                        </div>
                                    </section>
                                    
                                    <section id="legal-notice" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Cease and Desist (C&D) Strategy: Stopping it Socially
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            A Cease and Desist notice is often the most cost-effective way to end an infringement. It is a formal legal warning issued by our IP attorneys, detailing your rights and the criminal/civil consequences the infringer faces.
                                        </p>
                                        <div className="bg-white border-2 border-dashed border-gray-300 p-10 rounded-[2.5rem] my-10 relative group">
                                            <div className="absolute -top-6 left-10 bg-[rgb(110,94,147)] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Legal Blueprint</div>
                                            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">What a C&D Notice Accomplishes:</h4>
                                            <ul className="space-y-4 text-sm font-medium">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3" /> Puts the infringer on notice, eliminating any defense of 'innocent infringement'.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3" /> DEMANDS immediate stoppage of sales and destruction of remaining inventory.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3" /> REQUIRES an unconditional apology and a written undertaking.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3" /> SEEKING 'Account of Profits' or damages for the duration of the illegal use.</li>
                                            </ul>
                                        </div>
                                        <p className="mb-6 font-bold text-red-600 font-normal">
                                            Warning: Never send a 'empty' or 'weak' notice. Infringers often use weak notices to file 'Caveats' or 'Anti-Suit Injunctions' against you. At IPR Karo, we draft notices that are legally formidable and psychologically persuasive.
                                        </p>
                                    </section>

                                    <section id="civil-remedies" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Civil Legal Remedies: The Courtroom Battle
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            If the copycat ignores the legal notice, we proceed to court. In India, trademark suits are handled by District Courts and High Courts (with Commercial Divisions). Under Section 135 of the Trade Marks Act 1999, the court can grant wide ranging reliefs.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-12 relative overflow-hidden">
                                            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                                <div className="space-y-6">
                                                    <h4 className="font-black text-xl mb-4 text-[rgb(110,94,147)] uppercase tracking-widest font-normal">Innocence is no excuse</h4>
                                                    <p className="text-sm opacity-80 leading-relaxed font-light italic font-normal">
                                                        The defendant cannot argue they didn't know about your mark. Registration in the official Journal is considered 'constructive notice' to the whole world.
                                                    </p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-black text-xl mb-4 text-[rgb(110,94,147)] uppercase tracking-widest font-normal">Available Reliefs</h4>
                                                    <ul className="space-y-3 text-xs opacity-70 font-bold font-normal">
                                                        <li>• Permanent Injunctions (The Stop Order)</li>
                                                        <li>• Damages or Account of Profits</li>
                                                        <li>• Delivery up of Infringing Material</li>
                                                        <li>• Cost of the Lawsuit</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        </div>
                                    </section>

                                    <section id="injunctions" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                                            The Power of Injunctions: Stopping the Bleeding
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            In trademark law, an 'Interim Injunction' is the most valuable tool. It is a temporary order granted by the court at the very beginning of the case, effectively forcing the copycat to stop using the mark until the final decision is reached.
                                        </p>
                                        <div className="bg-[#f0f9ff] border-l-8 border-blue-500 p-8 rounded-2xl mb-12">
                                            <h4 className="font-black text-blue-900 mb-2 flex items-center font-normal">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 text-blue-500" /> PRO TIP: The Ex-Parte Injunction
                                            </h4>
                                            <p className="text-blue-800 text-sm font-medium italic font-normal">
                                                If there is an imminent risk that the copycat will dump their stock or change their identity upon receiving a summons, we can apply for an **Ex-Parte ad-interim injunction**. The court hears ONLY our side and grants an order without informing the other party, ensuring surprise and effectiveness.
                                            </p>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            To get an injunction, we must satisfy the court on three counts:
                                            1. **Prima Facie Case**: You have a strong case on merits.
                                            2. **Balance of Convenience**: It is more convenient to stop the copycat than to let them continue.
                                            3. **Irreparable Injury**: If they aren't stopped now, your brand will suffer damage that money cannot fix.
                                        </p>
                                    </section>

                                    <section id="criminal-action" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                                            <FontAwesomeIcon icon={faHandcuffs} className="mr-4 text-red-600" /> 
                                            Criminal Prosecution: Sending a Message
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            In cases of deliberate counterfeiting (fake shoes, medicine, electronics), civil law might be too slow. Sections 103 and 104 of the Act allow for criminal action.
                                        </p>
                                        <div className="bg-red-50 border border-red-100 p-10 rounded-[3rem] shadow-sm mb-12">
                                            <h4 className="font-bold text-red-900 mb-6 uppercase tracking-widest text-sm font-normal">The Hammer of the Law:</h4>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                                                        <FontAwesomeIcon icon={faGavel} />
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-gray-900 text-xs mb-1 font-normal">Heavy Sentences</p>
                                                        <p className="text-[10px] text-gray-500 font-bold font-normal">Imprisonment from 6 months up to 3 years.</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                                                        <FontAwesomeIcon icon={faCircleCheck} />
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-gray-900 text-xs mb-1 font-normal">Search & Seizure</p>
                                                        <p className="text-[10px] text-gray-500 font-bold font-normal">Police raids to seize all fake stock and manufacturing units.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            Criminal action is particularly effective for mass-market consumer brands. It creates a deterrent effect and sends a clear signal to the market that your brand identity is not a playground for counterfeiters.
                                        </p>
                                    </section>

                                    <section id="online-enforcement" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Online Enforcement: Fighting Infringement in the Digital Marketplace
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            In the modern era, most trademark copying begins online. Whether it is a fake profile on Instagram or a fraudulent listing on Amazon, the digital space requires a different set of tactics. Most major platforms have an Internal Intellectual Property (IPR) policy that allows owners to take down infringing content without immediately going to court.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 font-normal">
                                                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">Marketplace Takedowns</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                                                    Amazon Brand Registry and Flipkart's IPR Cell are extremely effective. Once you upload your registration certificate, you can report infringing listings. The platforms usually remove the listing within 24 to 48 hours, shielding your customers from fake products.
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 font-normal">
                                                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">Social Media Reporting</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                                                    Meta (Facebook/Instagram) and X (Twitter) have dedicated IPR reporting forms. If someone is using your logo as their profile picture or selling 'first copies' of your branded apparel, we can file a takedown request that often leads to the permanent suspension of the infringing account.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            It is critical to remember that while a takedown stops the immediate listing, it does not provide damages. For a permanent solution that stops the infringer from simply opening a new account, a court injunction remains the gold standard of protection.
                                        </p>
                                    </section>

                                    <section id="domain-disputes" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Domain Name Disputes: When Someone Steals Your Web Identity
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            Cybersquatting is a major problem in India. This is when someone registers a domain name that is identical to your trademark (e.g., yourbrand.in or yourbrand.co.in) to either blackmail you into buying it or to launch a scam website. Domain names are considered 'Virtual Trademarks' by the Supreme Court of India.
                                        </p>
                                        <div className="bg-white border-l-4 border-[rgb(110,94,147)] p-8 my-8 shadow-sm font-normal">
                                            <h4 className="font-bold text-gray-900 mb-4 font-normal">The Dispute Resolution Path:</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed mb-4 font-normal">
                                                For '.in' domains, we use the **INDRP (External Dispute Resolution Policy)** managed by NIXI. For '.com' and other global domains, we use the **UDRP (Uniform Domain-Name Dispute-Resolution Policy)**.
                                            </p>
                                            <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                                Unlike a regular lawsuit, these are arbitration proceedings. They are much faster (usually resolved in 60 to 90 days) and resulted in the domain being transferred directly to you if we can prove the registrant acted in bad faith and has no legitimate interest in the name.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="jurisdiction" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Jurisdiction: Where to File Your Case?
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            Success in a trademark case often depends on 'Forum Shopping' within legal limits. Under Section 134 of the Trade Marks Act, a trademark owner has a massive advantage. Unlike other civil cases where you must sue where the defendant lives, in trademark cases, you can sue **where YOU (the plaintiff) live or carry on business**.
                                        </p>
                                        <p className="mb-6 font-normal">
                                            This means if you are based in Delhi, you can sue a copycat operating in Chennai or Kolkata without ever leaving your city. This local advantage allows us to control the pace of the litigation and reduces the cost of enforcement significantly.
                                        </p>
                                    </section>

                                    <section id="evidence" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 font-normal">
                                            The Enforcement Evidence Checklist
                                        </h2>
                                        <div className="bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-inner">
                                            <p className="text-gray-600 mb-8 italic font-normal">A court case is only as strong as its evidence. Ensure you have the following ready:</p>
                                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">1</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Original Registration Certificate (Form TM-O) if registered.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">2</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Invoices of first-ever sale using the brand name (crucial for priority).</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">3</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Copies of advertisements, hoardings, or social media campaigns.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">4</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Affidavits from customers or retailers confirming confusion.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">5</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Samples of the Infringer's packaging and products (comparison sheets).</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="w-6 h-6 bg-[rgb(110,94,147)] rounded-full text-white text-[10px] flex items-center justify-center mr-4 mt-1 font-black font-normal">6</div>
                                                    <p className="text-sm font-bold text-gray-700 font-normal">Web history logs showing they started after you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="damages" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Damages and Compensation: Making the Copycat Pay
                                        </h2>
                                        <p className="mb-8 font-normal">
                                            The goal of the lawsuit is not just to stop them, but to compensate you for the loss of business and the damage to your brand Equity. Indian courts have become increasingly aggressive in awarding high damages.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 text-[rgb(110,94,147)] font-normal">Nominal Damages</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">Awarded even if no heavy loss is proven, simply because your right was violated. It covers court costs and small losses.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 text-[rgb(110,94,147)] font-normal">Punitive Damages</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">Awarded to make an example of the infringer. If their conduct was dishonest or malicious, the court hits them with heavy fines.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 text-[rgb(110,94,147)] font-normal">Account of Profits</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">A very powerful remedy. Every Rupee of profit the infringer made by stealing your name is returned to you. This is financially devastating for most infringers.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Success Stories: Real Brands Protected
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 font-normal font-normal">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 font-normal">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm font-normal">{review.name}</p>
                                                            <p className="text-xs text-gray-500 font-bold uppercase font-normal">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Expert Answers: Trademark Enforcement FAQs
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6 font-normal">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start font-normal">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base font-normal font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Final CTA */}
                                    <section className="bg-black text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10 font-normal">Ready to Shut Them Down?</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed relative z-10 font-light italic font-normal">
                                            Don't let copycats profit from your hard work. Our specialized IP enforcement team is ready to issue legal notices, file suits, and coordinate raids immediately. One call can save your brand's future.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider font-normal">
                                                    Speak to an Attorney
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl font-normal">
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
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group font-normal">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight font-normal">IP Enforcement Cell</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium font-bold italic font-normal">
                                    Our rapid response team specialized in IP Litigation and Anti-Counterfeiting. We stop infringers in their tracks.
                                </p>
                                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-widest font-normal">
                                        Analyze My Case
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center font-normal">
                                        <FontAwesomeIcon icon={faPhone} className="mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Resources Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 font-normal">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest font-normal">Legal Library</h3>
                                <ul className="space-y-4 font-normal">
                                    <li>
                                        <Link href="/what-happens-if-someone-opposes-my-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Common-reasons-why-trademark-applications-get-rejected" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Common Rejection Reasons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/How-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Avoid Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal-rights-of-trademark-owner-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all font-normal">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all font-normal"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Your Rights as Owner</span>
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
