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
    faGraduationCap,
    faBookOpen,
    faChalkboardTeacher,
    faLaptopCode,
    faLightbulb,
    faStar
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Education & Training | Protect Your Brand',
    description: 'Exhaustive guide to trademark registration for schools, coaching centers, and EdTech platforms in India. Secure your educational brand under Class 41 today.',
    keywords: [
        'trademark for education and training',
        'trademark class 41',
        'school name trademark',
        'edtech brand registration india',
        'coaching center trademark',
        'logo registration for education',
        'institute trademark search',
        'protect training brand name',
        'class 41 trademark india',
        'educational services brand protection'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Your Educational Brand',
        description: 'Secure your academic identity with India\'s leading IP legal team. 100% online process for schools, coaching centers, and EdTech platforms.',
        url: 'https://www.iprkaro.com/trademark-for-education-and-training',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-education-and-training',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why It Matters' },
    { id: 'brand-identity-protection', title: 'Brand Identity' },
    { id: 'understanding-class-41', title: 'Trademark Class 41' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'handling-objections', title: 'Handling Objections' },
    { id: 'franchising-and-scaling', title: 'Franchising Schools' },
    { id: 'edtech-startups', title: 'EdTech Sector Protection' },
    { id: 'global-expansion', title: 'Global Expanison' },
    { id: 'cost-of-registration', title: 'Costs and Fees' },
    { id: 'reviews', title: 'Testimonials' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class applies to educational services in India?",
        answer: "The primary class for educational, training, and sports services is Class 41. It covers schools, universities, coaching centers, online platforms, and vocational training institutes. If you sell tangible learning materials like printed books or software, you may also need Class 16 or Class 9."
    },
    {
        question: "Can I trademark the specific name of a coaching program or course?",
        answer: "Yes, you can trademark a unique name for an educational program. Registering the name of a flagship course prevents other coaching centers from offering programs using the same recognizable title."
    },
    {
        question: "Are schools required to register their logo as well as their name?",
        answer: "It is highly recommended for schools to register both the word mark (the name) and the device mark (the logo or crest) for comprehensive protection. A unique crest often carries immense historical and reputational value."
    },
    {
        question: "How long is the trademark registration valid for my institute?",
        answer: "A registered trademark in India is valid for 10 years from the date of the application. It can be renewed indefinitely every ten years to ensure continuous protection over multiple decades."
    },
    {
        question: "If another coaching center uses my name in a different state, what can I do?",
        answer: "If you have a registered trademark, you have pan-India rights and can send a strict legal notice to demand they stop using the name. First use and formal registration drastically bolster your legal standing against infringers."
    },
    {
        question: "What is the difference between copyrighting educational material and trademarking my brand?",
        answer: "Copyright protects original creative and educational content like textbooks, video lectures, and syllabus structures. Trademark protects the branding identifiers like the name of your institute, your logo, and your distinctive slogans."
    },
    {
        question: "Why do online EdTech platforms need trademark protection?",
        answer: "EdTech platforms operate entirely in the digital realm where brand confusion happens instantly. A trademark protects your app name, your web domain identity, and your platform branding from being cloned by fast moving internet competitors."
    },
    {
        question: "Does a trademark help if I want to franchise my coaching center?",
        answer: "Yes, it is practically impossible to build a legal, enforceable franchise network without a registered trademark. The franchise agreement explicitly licenses your registered brand to other operators while allowing you to control academic quality standards."
    },
    {
        question: "Can an individual tutor register a trademark for their personal brand?",
        answer: "Absolutely. Many successful independent educators and trainers register their own names or distinctive stage names under Class 41 to protect their personal brand equity and secure exclusive rights to their online course offerings."
    },
    {
        question: "What happens if the Trademark Registry raises an objection against my school's name?",
        answer: "Objections are common if a name is deemed too generic or similar to an existing one. We address this by drafting a rigorous legal response (Form TM-O) accompanied by evidence of 'acquired distinctiveness' showing your long standing reputation in the education sector."
    }
];

const reviews = [
    {
        name: "Dr. Ananya P.",
        role: "Director, Apex Academy",
        text: "The comprehensive search process helped us avoid a major conflict with a coaching center in another state. We secured our brand completely hassle-free.",
        rating: 5
    },
    {
        name: "Sameer V.",
        role: "Founder, EduTech Next",
        text: "Filing was incredibly fast. We got our TM acknowledgment on the same day, which was crucial before we presented our online platform to investors.",
        rating: 5
    },
    {
        name: "Rishi K.",
        role: "Chairman, K-12 International",
        text: "Managing the IP for a growing chain of schools is complex. IPR Karo provided phenomenal guidance on Class 41 requirements and franchise structuring.",
        rating: 5
    }
];

export default function TrademarkForEducationPage() {
    const breadcrumbItems = [
        { label: "Trademark for Education and Training", href: "/trademark-for-education-and-training" },
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
        "headline": "The Comprehensive Guide to Trademark Registration for Educational Brands in India",
        "description": "Exhaustive legal and strategic guide on protecting your educational brand. Covers Class 41, registration steps, costs, franchising, and EdTech startup protection.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
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
                "name": "Trademark for Education and Training",
                "item": "https://www.iprkaro.com/trademark-for-education-and-training"
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
                    "name": "Trademark Registration for Educational Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1940"
                    },
                    "review": reviews.map(review => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": review.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
                        "reviewBody": review.text
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
                            Protect Your Academic Identity: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Registration for Education
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the rapidly evolving education and training sector, your institute name and legacy are your greatest assets. Secure your schools, coaching centers, online platforms, and vocational brands with India's leading IP legal team. 100% online, same-day filing for Class 41.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Brand Identity Today
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
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

                                    <section id="importance-of-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Necessity of Trademark Registration in the Education Sector
                                        </h2>
                                        <p className="mb-6">
                                            In the rapidly expanding landscape of Indian education, establishing a reputable and recognizable institution requires an immense investment of intellectual capital, time, and financial resources. From traditional brick and mortar schools and specialized competitive exam coaching centers to innovative online EdTech platforms, the educational sector is driven primarily by trust. Parents, students, and corporate clients choose an educational provider based on the perceived quality and historical reliability associated with its specific name. This intrinsic value embedded in your institute's name transforms it into your most critical and vulnerable asset. A registered trademark is the absolute foundation of your educational brand's legal security architecture.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Schools and Training Institutes</strong> is not merely a bureaucratic formality; it is a fundamental business necessity for long term survival and competitive dominance. When you launch a new educational venture, you might initially focus entirely on curriculum development, faculty recruitment, and student acquisition. However, if you neglect to secure legal ownership of your brand name through the Trademark Registry, you leave your entire enterprise exposed to devastating legal and financial risks. Anyone could legally open a competing coaching center across the street using an identical or maliciously similar name, thereby siphoning off your prospective students and severely diluting your hard earned reputation.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium leading-relaxed">
                                                "Your educational brand is a solemn promise of academic excellence to every student. If that brand identity is left legally unprotected, you are practically inviting unscrupulous competitors to capitalize on your academic legacy and confuse your applicant pool."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The consequences of ignoring intellectual property protection in this sector can be catastrophic. Imagine dedicating a decade to building a highly respected preparation academy for medical entrance exams, only to receive a 'Cease and Desist' legal notice from an aggressive competitor in another city who silently registered a similar name years after you commenced operations. Without your own prior trademark registration to swiftly counter their claims, you might be legally forced into an incredibly expensive operational nightmare. This could entail changing your institute's name, discarding all your printed study materials, abandoning your established website domain, and suffering a massive loss of brand equity that could irreparably damage your enrollment numbers.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, in the modern digital era characterized by the explosive growth of EdTech companies, geographical boundaries in education have effectively vanished. A student in Kerala can easily enroll in a live online course broadcasted by an institute based in Delhi. In this borderless educational marketplace, brand confusion occurs instantly in search engine results and social media feeds. A formally registered trademark serves as your definitive legal weapon to authorize takedown requests against fraudulent websites, strike down fake mobile applications mimicking your platform, and prevent digital competitors from exploiting your institute's name as a keyword to divert your valuable online traffic.
                                        </p>
                                    </section>

                                    <section id="brand-identity-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Anatomy of Educational Brand Protection: What Should You Secure?
                                        </h2>
                                        <p className="mb-8">
                                            The Indian Trade Marks Act of 1999 provides an exceptionally broad and robust legal framework defining what specific elements can be registered as a trademark. For an educational institution, this means you have the capability to create a comprehensive, multi-layered shield protecting every aspect of your public facing identity.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">The Institution Name (Word Mark)</h3>
                                                <p className="text-sm leading-relaxed">This constitutes the most fundamental and critical layer of legal protection. A word mark secures exclusive rights to the textual name of your school or academy itself, regardless of how it is visually styled or colored in different marketing campaigns. Whether printed on a simple black and white admission form or displayed on a massive billboard, your institution's name belongs exclusively to you.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">The School Crest or Logo (Device Mark)</h3>
                                                <p className="text-sm leading-relaxed">Visual identity is paramount in the education sector, often conveying a sense of tradition and academic rigor. A unique logo, emblem, or school crest becomes an instant visual recognizer of your educational quality. Legally protecting this device mark ensures that no competing entity can utilize deceptively similar academic graphics or coat of arms designs to confuse parents and students.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Unique Academic Taglines</h3>
                                                <p className="text-sm leading-relaxed">Catchy and inspiring slogans like 'Nurturing Future Leaders' or 'Excellence in Engineering Preparation' can be legally registered if they possess sufficient inherent distinctiveness. A registered tagline creates a powerful emotional and psychological hook in your marketing material that competitors are legally prohibited from replicating in their own promotional campaigns.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Proprietary Course and Program Names</h3>
                                                <p className="text-sm leading-relaxed">If your coaching center has developed a highly successful, flagship crash course or a specialized interview preparation program with a unique title, you can absolutely trademark that specific program name. While you cannot trademark the general academic syllabus, the distinct commercial name under which you offer that advanced curriculum is yours to own exclusively.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            An advanced and often overlooked form of intellectual property protection in the educational sector is protecting your <strong>Platform Interface and Trade Dress</strong>. For modern EdTech companies, the unique visual layout, color palette, and user interface arrangement of your learning management system (LMS) can sometimes be protected. While inherently harder to validate in court than a standard text word mark, trade dress protection is vital for large scale digital platforms aiming to prevent smaller copycat websites from mimicking the exact 'look and feel' of their successful educational software to deceive users.
                                        </p>
                                    </section>

                                    <section id="understanding-class-41" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding Trademark Class 41: The Core Education Designation
                                        </h2>
                                        <p className="mb-6">
                                            The international Nice Classification system categorizes all commercial goods and services into 45 distinct classes for the purpose of trademark registration. For any entity providing educational or training services, ensuring accurate classification is extraordinarily critical for effective legal enforcement. If you mistakenly register your brand under the wrong class, your trademark certificate might offer zero defense against a competitor operating in your actual specialized academic niche.
                                        </p>
                                        <div className="space-y-8 mt-10">
                                            <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-2xl md:text-3xl font-black text-[rgb(110,94,147)] mb-6 flex items-center">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-14 h-14 rounded-full flex items-center justify-center mr-5 text-xl font-black shadow-lg flex-shrink-0">41</span>
                                                    Class 41: Education, Training & Entertainment
                                                </h3>
                                                <p className="mb-8 text-lg text-gray-700 leading-relaxed font-medium">
                                                    Class 41 is the undisputed primary classification for all services related to the imparting of knowledge, the development of mental or physical faculties, and the instruction of any subject matter. The comprehensive scope of this specific class covers:
                                                </p>
                                                <ul className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Formal Schools, Colleges, and Universities</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Online E-Learning and EdTech Platforms</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Entrance Exam Coaching Centers</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Corporate Leadership and Soft Skills Training</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Vocational Training and Skill Development Institutes</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Publication of Educational Texts and E-Books</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Organization of Academic Conferences and Seminars</li>
                                                    <li className="flex items-start text-base font-bold text-gray-800"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" /> Sports Academies and Physical Fitness Instruction</li>
                                                </ul>
                                            </div>

                                            <div className="bg-red-50 border-x-4 border-red-300 p-8 rounded-2xl my-8">
                                                <h4 className="text-red-900 font-bold mb-3 uppercase tracking-wider text-sm">Strategic Warning Regarding Complex Educational Models</h4>
                                                <p className="text-red-800 text-sm leading-relaxed">
                                                    A highly common error made by emerging EdTech startups is assuming that a Class 41 registration protects their proprietary software code or their published study materials. This is legally incorrect. Software products and applications themselves fall under Class 9. Printed physical textbooks and stationary fall under Class 16. Protecting your educational empire often requires an intelligent multi-class application strategy to seal all potential legal loopholes.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-6">
                                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[rgb(110,94,147)] transition-colors group">
                                                    <h4 className="font-black text-xl text-[rgb(110,94,147)] mb-3 group-hover:scale-105 transition-transform origin-left">Class 9</h4>
                                                    <p className="text-sm text-gray-700 leading-relaxed">Critically necessary for EdTech companies that distribute downloadable educational software, mobile learning applications, and recorded digital media course libraries.</p>
                                                </div>
                                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[rgb(110,94,147)] transition-colors group">
                                                    <h4 className="font-black text-xl text-[rgb(110,94,147)] mb-3 group-hover:scale-105 transition-transform origin-left">Class 16</h4>
                                                    <p className="text-sm text-gray-700 leading-relaxed">Essential for coaching institutes and distance learning universities that physically print and distribute proprietary textbooks, study modules, test papers, and academic stationary.</p>
                                                </div>
                                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[rgb(110,94,147)] transition-colors group">
                                                    <h4 className="font-black text-xl text-[rgb(110,94,147)] mb-3 group-hover:scale-105 transition-transform origin-left">Class 35</h4>
                                                    <p className="text-sm text-gray-700 leading-relaxed">Required if your educational platform incorporates elements of commercial business management, student recruitment consultancy, or the retail sale of branded university merchandise.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-10 mb-6">
                                            At IPR Karo, our specialized IP attorneys conduct a holistic and exhaustive 'Class Vulnerability Analysis' specifically tailored for your unique educational business model. Many modern learning enterprises are incredibly complex hybrid models. They operate remote classrooms (Class 41), develop sophisticated proprietary learning management system software (Class 9), and publish extensive physical preparatory books (Class 16). We meticulously ensure that all these diverse commercial aspects are protected properly under the correct legal umbrellas.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Definitive Path to Exclusive Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            {/* Line connecting steps (Desktop) */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight font-nunito">Step 1: The Exhaustive Clearance Search</h3>
                                                    <p className="text-base text-gray-600 mb-4 leading-relaxed">
                                                        A massive percentage of trademark disputes are unequivocally won or completely lost before the official application is even filed with the government. We utilize advanced proprietary search algorithms and deep legal databases to perform a multi-layered clearance search that goes far beyond simple literal textual matches. We meticulously look for phonetic acoustic similarities, visual design look-alikes in logos, and pre-existing registered marks hidden in related commercial classes. A comprehensive, legally sound search reduces the statistical probability of encountering a devastating future legal roadblock by an incredible margin.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight font-nunito">Step 2: Drafting and Electronic Filing of Form TM-A</h3>
                                                    <p className="text-base text-gray-600 mb-4 leading-relaxed">
                                                        Once our legal team unconditionally clears the search report, we proceed to draft the official trademark application. This is a highly specialized legal document where absolute precision is paramount. We articulate and define the 'specification of services' with extreme care to ensure your institute receives the widest possible interpretative protection boundary within Class 41. As soon as we electronically authenticate and submit the application to the central registry, you acquire the immediate legal right to start utilizing the superscript ™ symbol on your school menus, marketing brochures, and academy signage.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight font-nunito">Step 3: Navigating the Mandatory Examination Phase</h3>
                                                    <p className="text-base text-gray-600 mb-4 leading-relaxed">
                                                        The government appointed Registrar of Trademarks will critically examine your filed application stringently against the parameters of the Trade Marks Act. In a significant number of cases across the education sector, a formal Examination Report is issued detailing specific preliminary legal objections. Our elite senior attorneys will consequently draft a legally watertight response (Form TM-O), citing relevant high court precedents to unequivocally prove why your mark qualifies for approval. We assume complete responsibility for managing this entire complex legal dialogue on your behalf.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 4 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight font-nunito">Step 4: Journal Publication and Public Opposition</h3>
                                                    <p className="text-base text-gray-600 mb-4 leading-relaxed">
                                                        Upon successful navigation and clearance of the examination phase, your educational trademark is proudly published in the official Trademark Journal of India. This initiates a statutory four month 'Public Opposition' processing window. During this designated period, any existing third party holding prior rights can theoretically file an opposition claiming your new mark infringes upon their established brand. We continuously monitor this critical phase, remaining fully prepared to aggressively defend your application in intellectual property tribunals if any spurious oppositions are filed.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 5 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border-2 border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-[rgb(110,94,147)] uppercase tracking-tight font-nunito">Step 5: Final Registration and Certification issuance</h3>
                                                    <p className="text-base text-gray-600 mb-4 leading-relaxed font-medium">
                                                        Once the four month opposition period safely expires without any valid third party challenges, the Trademark Registry formally issues your official Trademark Registration Certificate. You are now legally empowered to replace the ™ symbol with the globally recognized ® symbol, broadcasting to the entire market that your educational brand is fully protected under central federal law for a complete decade.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vital Documentation: Establishing a Legally Sound Foundation
                                        </h2>
                                        <p className="mb-8 font-medium text-lg leading-relaxed text-gray-600">
                                            The strict documentary requirements mandated for trademark filing vary significantly depending directly on your exact legal operational business structure. Furnishing the impeccably accurate documents ensures the Trademark Registry can efficiently verify your ownership credentials without experiencing agonizing bureaucratic delays or issuing frustrating technical rejections.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-10 rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-[rgb(110,94,147)]/10 transition-colors"></div>
                                                <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center tracking-tight border-b-2 border-gray-100 pb-4">
                                                    <span className="w-3 h-8 bg-[rgb(110,94,147)] mr-4 rounded-full shadow-md"></span>
                                                    Individual Tutors and Proprietorships
                                                </h3>
                                                <ul className="space-y-5 text-gray-700 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Government issued ID (Aadhaar Card or PAN Card) of the sole applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>MSME or Udyam Registration Certificate (Absolutely critical for securing the 50 percent government fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>High resolution Digital Brand Logo (if filing for a specific device mark or crest).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Form 48 (Signed legal Power of Attorney document authorizing IPR Karo to officially represent your educational interests).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-10 rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-[rgb(110,94,147)]/10 transition-colors"></div>
                                                <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center tracking-tight border-b-2 border-gray-100 pb-4">
                                                    <span className="w-3 h-8 bg-gray-400 mr-4 rounded-full shadow-md"></span>
                                                    Registered EdTech Companies & LLPs
                                                </h3>
                                                <ul className="space-y-5 text-gray-700 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Official Certificate of Incorporation document or a formally notarized Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Company PAN card details alongside the official GST registration certificate.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Legally binding Board Resolution distinctly authorizing the authorized signatory to file the trademark application.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 drop-shadow-sm" /> <span>Tangible proof of continuous prior brand usage (such as student fee receipts or established website domain inception records).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="handling-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Legal Hurdles: Handling Section 9 and 11 Objections
                                        </h2>
                                        <p className="mb-6">
                                            Receiving an Examination Report with formal objections from the Trademark Registry is incredibly common in the education sector, primarily because educational institute names frequently rely on descriptive geographical terms or highly generic academic words. Do not mistake an objection for an outright rejection; it is merely a procedural request for further legislative clarification and evidentiary support. The two most frequently cited objections fall under Section 9 (Absolute Grounds for Refusal) and Section 11 (Relative Grounds for Refusal) of the Trade Marks Act.
                                        </p>
                                        <div className="space-y-6 mt-8">
                                            <div className="bg-gray-50 border-l-4 border-yellow-500 p-8 rounded-r-2xl shadow-sm">
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 font-nunito flex items-center">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-6 h-6 text-yellow-500 mr-3" />
                                                    Section 9 Objections: The Distinctiveness Challenge
                                                </h4>
                                                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                                    A Section 9 objection is typically raised when the Trademark Examiner believes your proposed brand name is entirely descriptive of the educational services provided, or if it is devoid of any distinctive character. For instance, attempting to register 'Best Delhi Medical Coaching' will almost certainly attract a Section 9 objection because it merely describes the location and the nature of the service without offering any unique identifier. Our expert legal strategy to overcome this involves submitting voluminous evidence proving 'Acquired Distinctiveness'. We meticulously collate years of your marketing expenditure, extensive student enrollment records, media coverage, and sworn affidavits to demonstrate that the general public now exclusively associates this descriptive phrase specifically with your unique institute.
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 border-l-4 border-red-500 p-8 rounded-r-2xl shadow-sm">
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 font-nunito flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-6 h-6 text-red-500 mr-3" />
                                                    Section 11 Objections: The Similarity Challenge
                                                </h4>
                                                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                                    A Section 11 objection is issued when the Examiner discovers a pre-existing trademark on the registry that is either identical or deceptively similar to your proposed name, and operates in the same or heavily related commercial sectors. If your coaching center is named 'Apex Scholar' and another entity already registered 'Apex Scholars Academy' in Class 41, this objection will be raised citing a likelihood of profound public confusion. Overcoming a Section 11 hurdle requires exceptional legal drafting. We argue differences in the phonetic composition, visual logo discrepancies, disparate target audience demographics, or completely different geographic operational territories to legally segregate your brand from the cited conflicting mark.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="franchising-and-scaling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Engine of Growth: Trademark Registration for Educational Franchising
                                        </h2>
                                        <p className="mb-6">
                                            For a highly successful independent school or a lucrative regional coaching center, the most logical pathway to exponential revenue growth is through the implementation of a franchise model. Franchising allows eager educational entrepreneurs in different cities to replicate your proven academic pedagogy and utilize your established brand equity to instantly attract local student admissions. However, from a strict legal perspective, franchising is entirely impossible without a registered trademark acting as the undisputed core asset of the transaction.
                                        </p>
                                        <p className="mb-6">
                                            When you execute a Franchise Master Agreement, the primary intellectual property asset you are licensing out is your registered Class 41 trademark. Without formal registration, you possess no codified legal rights to license the brand name, immediately rendering your franchise contracts incredibly weak and legally unenforceable in an Indian court of law.
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-6 mt-8 mb-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:-translate-y-1 transition-all">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                                                <h4 className="font-bold text-lg mb-2">Quality Control Enforcement</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">A registered trademark explicitly empowers you to legally dictate and maintain strict pedagogical quality standards, teacher recruitment guidelines, and infrastructural requirements across your entire sprawling franchise network.</p>
                                            </li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:-translate-y-1 transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                                                <h4 className="font-bold text-lg mb-2">Royalty Protection</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Securely lock in your recurring royalty payment streams. Franchisees are legally bound to pay licensing fees specifically for the continued permitted usage of your protected brand mark.</p>
                                            </li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:-translate-y-1 transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                                                <h4 className="font-bold text-lg mb-2">Rogue Operator Termination</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">If a franchisee starts delivering subpar education that actively damages your brand reputation, a registered trademark gives you the immediate legal authority to brutally terminate their contract and legally force them to strip all your branding from their building.</p>
                                            </li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:-translate-y-1 transition-all">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                                                <h4 className="font-bold text-lg mb-2">Investor Valuation</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Venture capitalists and private equity firms evaluating your education chain for investment heavily scrutinize your IP portfolio. A securely protected, scalable trademark significantly multiplies your overall corporate valuation.</p>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="edtech-startups" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Special Legal Considerations for EdTech Startups
                                        </h2>
                                        <p className="mb-6">
                                            The explosive proliferation of digital EdTech platforms has fundamentally rewritten the rules of intellectual property enforcement in the education sector. Unlike traditional localized brick and mortar schools, an EdTech startup operates in a highly volatile, massively scaled digital arena where algorithmic discovery is everything. If a disruptive EdTech platform fails to aggressively secure its brand identity upon launch, digital brand pirates and opportunistic domain squatters will almost immediately hijack its digital presence.
                                        </p>
                                        <div className="bg-[rgb(110,94,147)] text-white p-8 md:p-12 rounded-3xl shadow-xl mt-10 relative overflow-hidden group">
                                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                            <h3 className="text-2xl md:text-3xl font-black mb-6 relative z-10 flex items-center">
                                                <FontAwesomeIcon icon={faRocket} className="w-10 h-10 mr-4" />
                                                The Digital Threat Matrix for EdTech
                                            </h3>
                                            <p className="text-lg mb-8 opacity-90 relative z-10">
                                                EdTech founders must recognize that a registered trademark is their only defensive shield against insidious digital hijacking tactics such as:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                                <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
                                                    <h4 className="font-bold text-lg mb-2">App Store Clones</h4>
                                                    <p className="text-sm opacity-80">Fraudulent developers routinely publish identical looking applications on Google Play and Apple App Stores using slightly modified spellings of your platform name to steal your app downloads. A trademark empowers rapid automated takedowns.</p>
                                                </div>
                                                <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
                                                    <h4 className="font-bold text-lg mb-2">Search Engine Hijacking</h4>
                                                    <p className="text-sm opacity-80">Competitors can unethically purchase your exact brand name as a Google AdWords keyword, directly diverting your organic search traffic to their competing courses. A registered TM allows you to file formal complaints with Google to halt this practice.</p>
                                                </div>
                                                <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
                                                    <h4 className="font-bold text-lg mb-2">Domain Name Squatting</h4>
                                                    <p className="text-sm opacity-80">Cyber squatters register confusingly similar URL domains (like changing a .com to a .org) hoping to extort you later or siphon away confused students. A registered mark allows you to utilize WIPO arbitration to forcefully seize those domains.</p>
                                                </div>
                                                <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
                                                    <h4 className="font-bold text-lg mb-2">Social Media Impersonation</h4>
                                                    <p className="text-sm opacity-80">Fake Instagram or Facebook pages using your coaching center's logo can sell pirated versions of your video lectures or scam students with fake admission links. A registered device mark ensures Instagram quickly honors your brand impersonation reports.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="global-expansion" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Scaling Internationally: The Madrid Protocol and Global EdTech
                                        </h2>
                                        <p className="mb-6">
                                            For fiercely ambitious EdTech start-ups and highly prestigious Indian universities aiming to aggressively capture international student demographics, relying solely on domestic Indian trademark protection is dangerously insufficient. Because trademark rights are strictly jurisdictional and largely territorial, an Indian trademark registration offers precisely zero legal protection if a malicious competitor in the United Kingdom or Australia decides to blatantly launch an identical educational platform using your exact branding.
                                        </p>
                                        <p className="mb-6">
                                            To successfully secure global operational dominance, educational institutions must strategically utilize the <strong>Madrid Protocol</strong>. The Madrid System is a highly centralized international trademark registration framework administered by the World Intellectual Property Organization. It profoundly simplifies the historically complex process of securing multinational brand protection. By filing a singular, unified international application based directly securely on your foundational Indian trademark, you can concurrently request expansive legal protection across over one hundred and thirty distinct member countries.
                                        </p>
                                        <p className="mb-6">
                                            This centralized pathway is immensely cost effective and significantly drastically reduces bureaucratic administrative burdens compared to the antiquated method of hiring separate disparate local attorneys in every single target nation. Whether you are actively preparing to legally franchise your highly successful coding bootcamp into Southeast Asian markets or you are actively launching a revolutionary global language learning application targeted at European users, navigating the intricate nuances of the Madrid Protocol is an absolute non-negotiable strategic imperative for sustaining long term international growth.
                                        </p>
                                    </section>

                                    <section id="cost-of-registration" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Transparent Cost Breakdown: Investing in Brand Security
                                        </h2>
                                        <p className="mb-6">
                                            Securing robust intellectual property rights is fundamentally the most critical financial investment an educational entrepreneur can make during the formative stages of building their institute. The Indian government has deliberately structured the official trademark filing fees to heavily subsidize and actively encourage formal registration by smaller educational entities, independent tutors, and officially recognized EdTech startups.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-green-500 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Common</div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Individuals, MSMEs & Startups</h4>
                                                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">For independent teachers, proprietorship coaching centers, and DPIIT recognized EdTech companies.</p>
                                                <div className="mb-6 flex items-baseline">
                                                    <span className="text-4xl font-black text-gray-900">₹4,500</span>
                                                    <span className="text-sm text-gray-500 ml-2">/class govt. fee</span>
                                                </div>
                                                <ul className="space-y-4 mb-8">
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3" /> Massive 50% government subsidy</li>
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3" /> Requires valid MSME/Udyam certificate</li>
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3" /> Requires DPIIT startup recognition certificate</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Companies, Trusts & Societies</h4>
                                                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">For established large scale educational trusts, university societies, and standard private limited companies.</p>
                                                <div className="mb-6 flex items-baseline">
                                                    <span className="text-4xl font-black text-gray-900">₹9,000</span>
                                                    <span className="text-sm text-gray-500 ml-2">/class govt. fee</span>
                                                </div>
                                                <ul className="space-y-4 mb-8">
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-gray-400 mr-3" /> Standard corporate filing tariff</li>
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-gray-400 mr-3" /> Applicable to all Non-MSME entities</li>
                                                    <li className="flex items-center text-sm text-gray-700 font-medium"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-gray-400 mr-3" /> Applicable to large public universities</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-[rgb(110,94,147)]/10 border border-[rgb(110,94,147)]/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-bold text-[rgb(110,94,147)] mb-2">Comprehensive IPR Karo Professional Service Fee</h4>
                                                <p className="text-gray-700 text-sm">Our flat, highly transparent professional fee covers exhaustive search, impeccable drafting, electronic filing, and dedicated continuous application tracking.</p>
                                            </div>
                                            <div className="mt-6 md:mt-0 flex-shrink-0 text-center md:text-right">
                                                <div className="text-sm text-gray-500 font-medium mb-1">Starting strictly from</div>
                                                <div className="text-3xl font-black text-[rgb(110,94,147)]">₹1,999<span className="text-lg font-bold">/class</span></div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                                            Success Stories: Educators Who Secured Their Legacy
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {reviews.map((review, index) => (
                                                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight border-b-2 border-gray-100 pb-4">
                                            Frequently Asked Questions by Educators
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg font-bold text-[rgb(110,94,147)] mb-3 flex items-start">
                                                        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed text-sm pl-7">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="mt-16 bg-[#0C002B] text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Protect Your Educational Empire?</h2>
                                            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                                Do not permit aggressive competitors to unjustly capitalize on your hard earned academic reputation. Consult confidentially with our elite intellectual property specialists today.
                                            </p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_10px_30px_rgba(110,94,147,0.4)] transition-all transform hover:-translate-y-1">
                                                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 inline mr-3" />
                                                    Schedule Free Legal Consultation
                                                </button>
                                            </Link>
                                        </div>
                                    </div>


                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase tracking-tighter font-nunito">Verify Your Institute Name</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Before launching your courses or accepting admissions, confirm that your chosen name is exclusively yours. Request a completely free comprehensive **IP Search Report** within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(110,94,147,0.3)] transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
                                        Start Search Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Speak directly with an expert</p>
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-8 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-center font-nunito">Related Categories</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-sm uppercase tracking-tight">Software (EdTech)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-paper-goods-and-printing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-sm uppercase tracking-tight">Printed Materials</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-sm uppercase tracking-tight">Startup Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-sm uppercase tracking-tight">All Trademark Services</span>
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
