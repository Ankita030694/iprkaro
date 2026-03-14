import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faScaleBalanced,
    faHandHoldingHand,
    faShieldHalved,
    faBuildingShield,
    faGlobe,
    faHandshake,
    faSackDollar,
    faCircleCheck,
    faStar,
    faPhone,
    faArrowRight,
    faFileContract
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Legal Rights of Trademark Owner in India | Trade Marks Act 1999',
    description: 'Understand the comprehensive statutory and common law rights of trademark owners in India. Learn about exclusive use, assignment, licensing, and legal protection against infringement.',
    keywords: [
        'legal rights of trademark owner india',
        'rights of registered trademark owner trade marks act 1999',
        'statutory rights of trademark owner india',
        'right to exclusive use trademark',
        'trademark assignment and licensing rights india',
        'remedies for trademark owner india',
        'unregistered trademark rights india',
        'iprkaro trademark owner guide'
    ],
    openGraph: {
        title: 'Complete Guide: What are Your Legal Rights as a Trademark Owner in India?',
        description: 'From exclusive usage to the right to sue for infringement, explore every legal power granted to you by Indian IP laws.',
        url: 'https://www.iprkaro.com/legal-rights-of-trademark-owner-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/legal-rights-of-trademark-owner-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Power of Ownership' },
    { id: 'exclusive-use', title: 'Right to Exclusive Use' },
    { id: 'well-known-rights', title: 'Well-Known Trademark Rights' },
    { id: 'dilution-protection', title: 'Rights Against Brand Dilution' },
    { id: 'statutory-rights', title: 'Statutory Rights' },
    { id: 'advertising-rights', title: 'Comparative Advertising Rights' },
    { id: 'portfolio-management', title: 'Mergers and Acquisitions' },
    { id: 'licensing-assignment', title: 'Right to Assign and License' },
    { id: 'legal-remedies', title: 'Right to Legal Remedies' },
    { id: 'correction-rectification', title: 'Right to Correction' },
    { id: 'unregistered-rights', title: 'Rights of Unregistered Owners' },
    { id: 'global-protection', title: 'Right to Global Protection' },
    { id: 'owner-obligations', title: 'Obligations of the Owner' },
    { id: 'expert-consultation', title: 'Consult an IP Specialist' },
    { id: 'reviews', title: 'User Success Stories' },
    { id: 'faqs', title: 'Trademark Rights FAQs' },
];

const faqs = [
    {
        question: "What is the primary right of a trademark owner in India?",
        answer: "The primary right is the 'Right to Exclusive Use'. Under Section 28 of the Trade Marks Act 1999, registration gives the owner the exclusive right to use the mark in relation to the goods or services for which it is registered."
    },
    {
        question: "Can I sell my trademark to someone else?",
        answer: "Yes, as the owner, you have the absolute 'Right to Assign' the trademark. You can transfer ownership either with or without the goodwill of the business, subject to the conditions laid down in the Act."
    },
    {
        question: "Does a trademark owner have rights even if the mark isn't used?",
        answer: "While registration gives you rights, continuous non-use for a period of 5 years and 3 months can lead to the removal of your mark from the register. Rights come with the responsibility of commercial use."
    },
    {
        question: "What are the 'Statutory Remedies' available to me?",
        answer: "As a registered owner, you have the right to file a suit for 'Infringement'. You can seek injunctions (stay orders), damages for loss of business, an account of the infringer's profits, and the destruction of counterfeit materials."
    },
    {
        question: "Can I authorize other people to use my brand?",
        answer: "Yes, you have the 'Right to License' your trademark. This allows you to generate royalty income while maintaining control over the quality of goods or services offered under your brand name."
    },
    {
        question: "What rights do I have if I forget to renew my trademark?",
        answer: "If a trademark is not renewed, it is removed from the register. However, you have a 1-year window to 'Restore' the mark by paying the late fee. If you miss this, you lose your statutory rights and must rely on 'Passing Off' common law rights."
    },
    {
        question: "Do I have the right to stop others from using similar names?",
        answer: "Yes. You can stop anyone from using a mark that is 'deceptively similar' to yours if it is likely to cause confusion in the marketplace, even if the marks are not exactly identical."
    },
    {
        question: "Can I change my registered trademark logo later?",
        answer: "You have the 'Right to Rectify' minor details, but substantial changes require a fresh application. The Act allows for the correction of errors or minor amendments through Form TM-M."
    },
    {
        question: "What if someone uses my trademark for a different business?",
        answer: "If your mark is a 'Well-Known Trademark', your rights extend across all classes of goods and services, even those you don't operate in. For ordinary marks, rights are generally limited to the classes you registered for."
    },
    {
        question: "Does IPR Karo help in exercising these rights?",
        answer: "Yes. We help owners with the full lifecycle from securing these rights through registration to enforcing them through litigation, assignment, licensing agreements, and portfolio management."
    },
    {
        question: "What is the 'Right of Publicity' for trademark owners?",
        answer: "For famous personalities or brands, trademark rights overlap with publicity rights. It means no one can use your name, image, or brand voice to suggest a commercial association that does not exist. This is a powerful right for celebrities and heritage brands."
    },
    {
        question: "Can I stop a competitor from using my trademark in a comparative ad?",
        answer: "Yes, if the advertisement is 'unfair'. While honest comparison is allowed, if the ad disparages your brand or uses your trademark in a way that takes unfair advantage of its reputation, you have the right to seek an injunction under Section 29(8) of the Act."
    },
    {
        question: "What happens to my trademark if my company goes bankrupt?",
        answer: "A trademark is an asset. In insolvency proceedings, the trademark can be sold by the liquidator to pay off debts. However, the owner has the right to ensure the value is correctly appraised. Often, the trademark is the most valuable asset in a liquidation sale."
    },
    {
        question: "Can I have 'Co-Ownership' of a trademark?",
        answer: "Yes. The Act allows for 'Joint Proprietorship'. This is common in joint ventures where both parties have an interest in the brand. Both owners have equal rights to use and protect the mark unless a contract specifies otherwise."
    },
    {
        question: "What is the 'Right to Information' regarding my mark?",
        answer: "As an owner, you have the right to request a 'Certified Copy' of any entry in the register. This official document is required for international filings and as evidence in court proceedings."
    },
    {
        question: "Can I stop the government from using my trademark?",
        answer: "While trademarks protect against commercial use, the government has certain 'Crown Rights' for non-commercial purposes or in national interests. However, even the government cannot use your trademark to sell competing goods or services."
    },
    {
        question: "What are 'Defensive Trademarks'?",
        answer: "For very famous brands, owners have the right to register their mark in classes where they don't even plan to do business. This prevents anyone else from using the famous name in any industry, protecting against dilution."
    },
    {
        question: "How do I protect my rights in a franchise model?",
        answer: "You must use a 'Registered User Agreement' under Section 48. This ensures that the use of the mark by the franchisee counts as use by YOU, preventing the mark from being cancelled due to non-use."
    },
    {
        question: "What is 'Trafficking in Trademarks'?",
        answer: "This is the illegal practice of registering many trademarks with no intent to use them, but only to sell or license them. The Act prohibits this, and as a legitimate owner, you have the right to challenge such registrations if they block your business."
    },
    {
        question: "Does the owner have the right to stop parallel imports?",
        answer: "India follows the 'International Exhaustion' principle. This means if you sell a genuine product in one country, you generally cannot stop it from being imported into India by a third party. However, as the owner, you can still stop such imports if the goods have been modified or impaired after being put on the global market."
    }
];

const reviews = [
    {
        name: "Ananya Sharma",
        role: "Luxury Retailer",
        text: "I didn't realize how powerful my trademark registration certificate was until IPR Karo helped me license my brand to a franchisee. The contract they drafted protected all my rights perfectly.",
        rating: 5
    },
    {
        name: "Deepak Verma",
        role: "Industrialist",
        text: "When a former partner tried to claim ownership of our brand, IPR Karo's deep understanding of the 'Right to Exclusive Use' saved our company's identity in court.",
        rating: 5
    },
    {
        name: "Megha Gupta",
        role: "Startup Founder",
        text: "Their guide on trademark rights is the most comprehensive one I've seen. It helped me understand that I could sell my brand separately from my company. Brilliant insights.",
        rating: 5
    },
    {
        name: "Suresh Menon",
        role: "Hotelier",
        text: "IPR Karo's advice on 'Well-Known' status changed our branding strategy. We are now protected across multiple industries, even those we haven't entered yet. Truly professional!",
        rating: 5
    }
];

export default function TrademarkRightsPage() {
    const breadcrumbItems = [
        
        { label: "Trademark Owner Rights", href: "/legal-rights-of-trademark-owner-in-india" },
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
        "headline": "A Comprehensive Guide to Legal Rights of Trademark Owners in India",
        "description": "Deep dive into the statutory and common law rights granted to trademark owners under the Indian legal system. Covers exclusive use, licensing, assignment, and enforcement.",
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
                "name": "IP Education",
                "item": "https://www.iprkaro.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Trademark Owner Rights",
                "item": "https://www.iprkaro.com/legal-rights-of-trademark-owner-in-india"
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
                    "name": "Trademark Legal Advisory",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
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
                            Master Your Brand:<br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Rights of a Trademark Owner
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2 font-normal">
                            Ownership of a trademark is not just a status symbol, it is a business asset with massive legal power. From the right to exclusive use to the authority to sell your brand globally, understand how the Trade Marks Act 1999 empowers you.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Rights Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Owner's Charter</h4>
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
                                            The Power of Ownership: Beyond the ® Symbol
                                        </h2>
                                        <p className="mb-6">
                                            A trademark is often described as the 'soul' of a business. It represents goodwill, quality, and the emotional connection customers have with your products. However, in the eye of the law, it is a 'Chose in Action' a form of intangible property that grants its owner a specific set of rights. In India, these rights are governed by the Trade Marks Act 1999 and the common law of Passing Off.
                                        </p>
                                        <p className="mb-6">
                                            Understanding your rights as a trademark owner is crucial for two reasons: offense and defense. Defensively, you need to know how to protect your brand from imitators. Offensively, you can use your trademark as a financial instrument to generate revenue through royalties or sales.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic font-normal">
                                                "Registration is not just a certificate, it is a shield that prevents others from stealing your identity and a sword that allows you to expand your business empire with confidence."
                                            </p>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            In this exhaustive guide, we cover the spectrum of rights granted to trademark owners in India. From the statutory provisions of Section 28 to the common law benefits that protect your reputation even before registration, this is the definitive owner's charter for IP in India.
                                        </p>
                                    </section>

                                    <section id="exclusive-use" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Right to Exclusive Use: The Gold Standard of Protection
                                        </h2>
                                        <p className="mb-8 font-normal">
                                            Section 28(1) of the Trade Marks Act 1999 is the heart of trademark ownership. It explicitly states that the registration of a trademark gives the registered proprietor the 'exclusive right to the use of the trademark' in relation to the goods or services for which it is registered.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Absolute Monopoly</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">Within your registered class, you have a legal monopoly. No one else can use an identical or deceptively similar mark without your permission.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2 uppercase tracking-tighter">Prima Facie Validity</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed font-bold">Your registration certificate is considered evidence of the validity of your mark in all legal proceedings. You don't have to prove you own it; the law assumes you do.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            This right is not absolute, however. It is subject to any conditions or limitations entered on the register (such as disclaimers on certain common words within your logo). It also doesn't stop someone who has been using a similar mark since BEFORE you registered or started using yours (Prior User rights).
                                        </p>
                                    </section>

                                    <section id="well-known-rights" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Well-Known Trademarks: The Highest Form of Legal Power
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            For elite brands that have achieved massive recognition across India, Section 11(6) of the Act offers the 'Well-Known Trademark' status. Unlike ordinary trademarks that are protected only in specific classes, a well-known trademark is protected globally across ALL classes of goods and services.
                                        </p>
                                        <p className="mb-6 font-normal">
                                            If your brand (like TATA, Reliance, or Bisleri) is recognized by the Trademark Registry as well-known, you have the right to stop anyone from using that name even in industries where you do not operate. For example, a restaurant cannot use a well-known automobile brand's name without permission. This right protects the brand from 'Dilution' and prevents others from taking a free ride on your hard-earned reputation.
                                        </p>
                                        <div className="bg-white border border-gray-200 p-8 my-8 rounded-3xl shadow-sm font-normal">
                                            <h4 className="font-bold text-gray-900 mb-4 font-normal">Factors for Well-Known Status:</h4>
                                            <ul className="text-sm text-gray-700 leading-relaxed space-y-2 list-disc pl-5 font-normal">
                                                <li>Knowledge of the brand in the relevant section of the public.</li>
                                                <li>Duration and geographical area of the use of the mark.</li>
                                                <li>Volume of sales and investment in brand promotion.</li>
                                                <li>Record of successful enforcement of rights.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="dilution-protection" className="scroll-mt-32 pt-16 font-normal">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                                            Right Against Brand Dilution: Protecting the Premium Appeal
                                        </h2>
                                        <p className="mb-6">
                                            Section 29(4) of the Act introduces the concept of 'Dilution'. This occurs when a copycat uses your mark on unrelated goods (e.g., using a famous laptop brand name on shoes). As an owner, you have the right to prevent this even if there is no immediate confusion between the products.
                                        </p>
                                        <p className="mb-6">
                                            The logic is that such use 'dilutes' the distinctive character of your mark. If anyone can use your brand name for anything, the brand loses its unique value. You have the right to ensure that your trademark only represents YOUR quality and YOUR reputation, regardless of the industry.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-12">
                                            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">Forms of Dilution:</h4>
                                            <ul className="text-sm text-gray-600 leading-relaxed space-y-4 list-disc pl-5">
                                                <li><strong>Blurring:</strong> When the power of the mark to identify a single source is weakened.</li>
                                                <li><strong>Tarnishment:</strong> When the mark is used in an offensive or low-quality context that hurts its reputation.</li>
                                            </ul>
                                        </div>
                                    </section>
                                    
                                    <section id="statutory-rights" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Core Statutory Rights Under the Act 1999
                                        </h2>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Right to Sue for Infringement", text: "Under Section 29, the owner can initiate civil or criminal proceedings against any third party using a deceptively similar mark. This is the ultimate defensive right." },
                                                { title: "Right to Use the ® Symbol", text: "Only a registered owner has the right to use the circled R symbol. Using it without registration is a punishable offense under Indian law." },
                                                { title: "Right to Restrain Registration", text: "You have the right to file an 'Opposition' (Form TM-O) against any pending application that clashes with your rights, preventing them from ever getting a certificate." },
                                                { title: "Right to Border Enforcement", text: "You can record your trademark with the Customs authorities to stop the import of counterfeit goods into India, effectively policing the country's borders for your brand." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-6 items-start p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)]/10 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] shrink-0 font-black">
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                                        <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="advertising-rights" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Rights Against Comparative Advertising: Protecting Brand Integrity
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            A major right granted to trademark owners, particularly those with well-known brands, is the protection against disparaging comparative advertising. Section 29(8) of the Act states that a trademark is infringed by any advertisement of that trademark if such advertising takes unfair advantage of and is contrary to honest practices in industrial or commercial matters, or is detrimental to its distinctive character, or is against the reputation of the trademark.
                                        </p>
                                        <p className="mb-6 font-normal">
                                            While 'puffery' (stating your product is the best) is allowed, 'disparagement' (stating a competitor's product is bad or inferior) is a violation of the owner's rights. As an owner, you have the right to stop competitors from using your mark in their ads to make your brand look small or inefficient.
                                        </p>
                                        <div className="bg-white border-l-4 border-red-500 p-8 my-8 shadow-sm font-normal">
                                            <h4 className="font-bold text-gray-900 mb-4 font-normal">Unfair Advertising Checklist:</h4>
                                            <ul className="text-sm text-gray-700 leading-relaxed space-y-2 list-disc pl-5 font-normal">
                                                <li>Is the competitor using your EXACT logo without permission?</li>
                                                <li>Is the comparison based on false or outdated data?</li>
                                                <li>Does the ad cause 'dilution' of your brand's premium image?</li>
                                                <li>Is the competitor's use likely to cause confusion about an endorsement?</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="portfolio-management" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight font-normal">
                                            Rights in Mergers, Acquisitions, and Business Restructuring
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            When a company is sold, the most critical asset being transferred is often the IP portfolio. As the registered proprietor, you have the right to 'Package' your trademark rights for sale or transfer during a merger or acquisition (M&A). This involves detailed 'IP Due Diligence'.
                                        </p>
                                        <p className="mb-6 font-normal">
                                            Your rights during business restructuring include the right to determine the valuation of the brand, the right to carve out certain subclasses for retention, and the right to provide 'Exclusive' or 'Non-Exclusive' licenses back to the parent company. In the event of corporate insolvency, your trademark is protected as a separate asset that can be auctioned to maximize value for stakeholders.
                                        </p>
                                        <div className="bg-gray-50 p-10 rounded-[3rem] my-10 border border-gray-100 font-normal">
                                            <h4 className="font-bold text-gray-900 mb-4 font-normal">The 'Associated Trademarks' Right</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                                If you own multiple similar marks (e.g., 'IPR Karo' and 'IPR Karo Legal'), the Act treats them as 'Associated Trademarks'. This gives you the right to handle them as a single unit, ensuring that one mark cannot be assigned to a third party while you keep a deceptively similar one, which would cause public confusion.
                                            </p>
                                        </div>
                                    </section>
                                    
                                    <section id="licensing-assignment" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="mr-4 text-[rgb(110,94,147)]" /> 
                                            Monetization: Right to Assign and License
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            One of the most valuable aspects of trademark ownership is the ability to treat it as a liquid asset. Sections 37 to 45 of the Act deal with the power of the registered proprietor to assign and grant licenses.
                                        </p>
                                        <div className="bg-white border-2 border-dashed border-gray-300 p-10 rounded-[2.5rem] my-10 relative group">
                                            <div className="absolute -top-6 left-10 bg-[rgb(110,94,147)] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Financial Power</div>
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">Assignment (Sale)</h4>
                                                    <p className="text-sm text-gray-600 font-normal">You can sell your trademark completely. This can be 'With Goodwill' (the buyer takes over the whole business unit) or 'Without Goodwill' (only the name is sold).</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-tighter">Licensing (Rent)</h4>
                                                    <p className="text-sm text-gray-600 font-normal">You can authorize others to use your mark while you remain the owner. This is common in franchising (like McDonald's or Subway), allowing for massive expansion without huge capital investment.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6 font-normal">
                                            The Act requires that all assignments be recorded with the Registrar of Trademarks through Form TM-P. Failing to record the transfer means the new owner cannot legally sue for infringement until the register is updated.
                                        </p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Spear: Right to Aggressive Legal Remedies
                                        </h2>
                                        <p className="mb-6 font-normal text-gray-700">
                                            Ownership gives you the power to seek specific legal reliefs in a court of law. These are not just requests; they are enforceable orders that can shut down entire business operations.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-12 relative overflow-hidden">
                                            <div className="grid md:grid-cols-3 gap-8 relative z-10 text-center">
                                                <div className="space-y-4">
                                                    <div className="text-[rgb(110,94,147)] text-3xl mb-4 font-normal"><FontAwesomeIcon icon={faShieldHalved} /></div>
                                                    <h4 className="font-black text-xs uppercase tracking-widest font-normal">Injunctions</h4>
                                                    <p className="text-[10px] opacity-60 font-light font-normal">Court orders to immediately stop the defendant from using the mark. Both temporary and permanent.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-[rgb(110,94,147)] text-3xl mb-4 font-normal"><FontAwesomeIcon icon={faSackDollar} /></div>
                                                    <h4 className="font-black text-xs uppercase tracking-widest font-normal">Damages</h4>
                                                    <p className="text-[10px] opacity-60 font-light font-normal">Monetary compensation for the business loss and reputation damage caused by the copycat.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-[rgb(110,94,147)] text-3xl mb-4 font-normal"><FontAwesomeIcon icon={faBuildingShield} /></div>
                                                    <h4 className="font-black text-xs uppercase tracking-widest font-normal">Delivery Up</h4>
                                                    <p className="text-[10px] opacity-60 font-light font-normal">The right to force the infringer to hand over all infringing goods, dyes, and labels for destruction.</p>
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        </div>
                                    </section>

                                    <section id="correction-rectification" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                                            Right to Correction and Rectification
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            The Trademark Register is a dynamic document. As an owner, you have the right to ensure it accurately reflects your current business status. Under Sections 57 and 58, you have the right to apply for the rectification of the register.
                                        </p>
                                        <div className="bg-[#f0f9ff] border-l-8 border-blue-500 p-8 rounded-2xl mb-12 font-normal">
                                            <h4 className="font-black text-blue-900 mb-2 flex items-center font-normal">
                                                <FontAwesomeIcon icon={faFileContract} className="mr-3 text-blue-500" /> Administrative Rights:
                                            </h4>
                                            <ul className="text-blue-800 text-sm font-medium space-y-2 list-disc pl-5 font-normal">
                                                <li>Right to change address or name of the proprietor.</li>
                                                <li>Right to cancel the entry of a trademark from the register.</li>
                                                <li>Right to strike out certain goods or services from the registered class.</li>
                                                <li>Right to correct clerical errors made during the application process.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="unregistered-rights" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center font-normal">
                                            Rights of Unregistered Owners: The Safety Net
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            While registration is strongly recommended, the Indian legal system does not abandon unregistered owners. If you have been using a mark consistently and have built a reputation, you have common law rights.
                                        </p>
                                        <div className="bg-yellow-50 border border-yellow-100 p-10 rounded-[3rem] shadow-sm mb-12 font-normal">
                                            <h4 className="font-bold text-yellow-900 mb-4 uppercase tracking-widest text-sm font-normal">The Passing Off Remedy:</h4>
                                            <p className="text-sm text-yellow-800 leading-relaxed font-normal">
                                                An unregistered owner cannot sue for 'Infringement', but they can sue for **'Passing Off'**. This is a common law remedy that prevents someone from pretending that their goods are YOURS. To exercise this right, you must prove through invoices and advertisements that you were the first to use the mark and that people associate that mark with your business.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 font-normal">
                                            Right to Global Protection: The Madrid Protocol
                                        </h2>
                                        <p className="mb-6 font-normal">
                                            As an owner of a basic trademark application or registration in India, you have the unique right to use that as a foundation for global expansion. Under the 'Madrid Protocol' (India joined in 2013), you can file a single application in a single language (English) and pay fees in a single currency (Swiss Francs) to protect your brand in over 120 countries.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100 font-normal">
                                            <p className="text-gray-600 mb-4 italic font-bold font-normal">Your international rights include:</p>
                                            <ul className="space-y-3">
                                                <li className="flex items-center text-sm font-bold text-gray-700">
                                                    <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] mr-3" /> Right to expand into the USA, EU, China, and more with one form.
                                                </li>
                                                <li className="flex items-center text-sm font-bold text-gray-700">
                                                    <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] mr-3" /> Right to manage your entire global portfolio through the WIPO portal.
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="owner-obligations" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Obligations: The Cost of Rights
                                        </h2>
                                        <p className="mb-8 font-normal">
                                            Rights are not free; they come with maintenance duties. To keep your rights active, you must fulfill three major obligations:
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-12 font-normal">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 text-red-600 font-normal">The Duty to Renew</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">Trademarks must be renewed every 10 years. Failure to renew results in the total loss of all statutory rights.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-normal">
                                                <h5 className="font-black text-xs uppercase mb-4 text-red-600 font-normal">The Duty to Use</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">A trademark that stays 'abandoned' for 5 years can be cancelled by any competitor for non-use.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-normal">
                                                <h5 className="font-black text-xs uppercase mb-4 text-red-600 font-normal">The Duty to Police</h5>
                                                <p className="text-[10px] text-gray-500 leading-relaxed font-bold font-normal">If you let others copy you without acting, the court may rule that your mark has become 'common to the trade' and lose protection.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center font-normal">
                                            Strategic Impact: User Experiences
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 font-normal">"{review.text}"</p>
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
                                            Everything Owners Need to Know: FAQ
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
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
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10 font-normal">Ready to Exercise Your Rights?</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed relative z-10 font-light italic font-normal">
                                            Whether you need to license your brand, assign a trademark, or sue an infringer, don't go it alone. Our team of expert IP attorneys will ensure you exercise every ounce of legal power granted by the Trade Marks Act.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider font-normal">
                                                    Get Legal Advisory
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl font-normal">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                                                    Consult Expert
                                                </button>
                                            </a>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32 font-normal">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group font-normal">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight font-normal">Secure Your Legacy</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium font-bold italic font-normal">
                                    Ownership is the first step toward building a global brand. Let us help you manage your rights professionally.
                                </p>
                                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8 font-normal">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-widest font-normal">
                                        Audit My Portfolio
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center font-normal">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center font-normal">
                                        <FontAwesomeIcon icon={faPhone} className="mr-3" /> Dial Expert
                                    </a>
                                </div>
                            </div>

                            {/* Related Resources Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 font-normal">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest font-normal">Rights Library</h3>
                                <ul className="space-y-4 font-normal">
                                    <li>
                                        <Link href="/can-two-trademarks-exist-in-different-classes" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Cross-Class Rights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-to-do-if-someone-copies-your-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Enforce Your Rights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Madrid-Protocol-In-India" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Global Rights Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter font-normal">Verify Name Power</span>
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
