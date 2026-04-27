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
  faAward,
  faChartLine,
  faShieldVirus,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Best Trademark Filing Services for Startups in India | IPR Karo',
  description: 'Looking for the best trademark filing services for startups in India? Get expert assistance, 50% government fee rebate, and SIPP benefits. Secure your brand now.',
  keywords: [
    'best trademark filing services for startups in india',
    'startup trademark registration',
    'sipp scheme trademark',
    'dpiit recognized startup trademark fee',
    'trademark registration for startups india',
    'brand protection for startups',
    'online trademark filing for startups',
    'trademark attorney for startups india'
  ],
  openGraph: {
    title: 'Best Trademark Filing Services for Startups in India | IPR Karo',
    description: 'Expert-led trademark filing for Indian startups. Avail 50% fee concession and SIPP facilitation. Protect your innovation today.',
    url: 'https://www.iprkaro.com/best-trademark-filing-services-for-startups-in-india',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/trademark-registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Filing for Startups',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/best-trademark-filing-services-for-startups-in-india',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Strategic Importance' },
  { id: 'why-need-trademark', title: 'Why Now?' },
  { id: 'sipp-scheme', title: 'SIPP Scheme' },
  { id: 'saving-costs', title: 'Fee Concessions' },
  { id: 'types-of-trademarks', title: 'Types of Marks' },
  { id: 'registration-process', title: 'The Process' },
  { id: 'choosing-class', title: 'Class Analysis' },
  { id: 'documents-checklist', title: 'Documents' },
  { id: 'overcoming-objections', title: 'Objections' },
  { id: 'opposition-proceedings', title: 'Opposition' },
  { id: 'global-registration', title: 'Going Global' },
  { id: 'monitoring-enforcement', title: 'Enforcement' },
  { id: 'choosing-service', title: 'How to Choose' },
  { id: 'why-iprkaro', title: 'Why IPR Karo' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "How long does it take to register a trademark in India?",
    answer: "While you can start using the TM symbol within 24 hours of filing, the entire process to get the Registration Certificate (and the R symbol) usually takes 6 to 12 months, assuming there are no major oppositions or complex legal hurdles."
  },
  {
    question: "Can I register a trademark as an individual startup founder?",
    answer: "Yes, any individual, company, partnership firm, or trust can apply for a trademark. However, for startups, registering under the company name is usually better for valuation, fundraising purposes, and clarity of ownership in the cap table."
  },
  {
    question: "What if my startup changes its name later?",
    answer: "You would need to file a new trademark application for the new name. Trademarks cannot be edited to a completely different name once filed. This is why a thorough brand search at the beginning is so important to ensure long term viability."
  },
  {
    question: "Does a trademark cover my social media handles?",
    answer: "Legally, a trademark gives you a strong case to claim social media handles if someone else is using your registered name to impersonate you or confuse customers. Most platforms like Instagram and Twitter have an IP complaint process for this."
  },
  {
    question: "Can I register a trademark for a name I haven't used yet?",
    answer: "Yes. You can file on a 'Proposed to be Used' basis. You do not need to have started the business yet to protect the name, which is ideal for founders still in the stealth or pre-launch phase."
  },
  {
    question: "What is the difference between a Trademark and a Copyright?",
    answer: "A trademark protects brand identity such as names and logos. A copyright protects original creative works like software code, books, music, and website content. A startup often needs both to protect its full IP portfolio."
  },
  {
    question: "What happens if I forget to renewal my trademark?",
    answer: "A trademark is valid for 10 years. If you don't renew it, it will be removed from the register. There is a 1-year grace period for restoration, but after that, the name becomes available for anyone else to claim and use."
  },
  {
    question: "Can I register a common word as a trademark?",
    answer: "Only if it is used for something unrelated to the word's meaning. For example, 'Apple' is a common word, but it is a famous trademark for computers because computers are not fruits. You cannot register 'Apple' for a fruit shop."
  },
  {
    question: "What is a Multi-Class application?",
    answer: "It is a single application that covers multiple classes of goods or services. While it saves on paperwork, the government fees are still calculated per class, so there is no direct cost saving on statutory fees."
  },
  {
    question: "Why was my trademark application marked as 'Objected'?",
    answer: "This usually happens because the Registrar found a similar name already on record or thinks the name is too generic. Our team specializes in drafting expert legal replies to overcome these objections and move the application forward."
  }
];

const reviews = [
  {
    author: "Ishaan Verma",
    role: "Founder, TechScale AI",
    body: "IPR Karo made the trademark process so easy. As a DPIIT recognized startup, we saved 50% on fees and their team handled the SIPP facilitation perfectly. Highly recommended for any young founder.",
    rating: "5"
  },
  {
    author: "Ananya Iyer",
    role: "CEO, GreenHarvest",
    body: "We were worried about an objection on our brand name, but the attorneys at IPR Karo drafted a brilliant reply. The objection was cleared within weeks without a hearing. Exceptional service!",
    rating: "5"
  },
  {
    author: "Vikram Singh",
    role: "Director, EduSphere",
    body: "Finding the right class was confusing for our multi-service platform. The team performed a detailed class analysis and protected our brand across three different classes. Truly professional.",
    rating: "5"
  },
  {
    author: "Meghna Reddy",
    role: "Founder, UrbanStyles",
    body: "The same-day filing was a lifesaver. We were launching our collection the next day and needed the TM protection. IPR Karo filed our application within hours. Great speed and accuracy.",
    rating: "5"
  }
];

export default function StartupTrademarkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Best Trademark Services for Startups", href: "/best-trademark-filing-services-for-startups-in-india" },
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
    "headline": "Best Trademark Filing Services for Startups in India: A Comprehensive Guide",
    "description": "The ultimate guide to trademark registration for Indian startups. Learn about SIPP benefits, fee concessions, and the step-by-step process to protect your brand.",
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
    "datePublished": "2024-04-25",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/best-trademark-filing-services-for-startups-in-india"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Startup Trademark Filing Services",
    "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
    "description": "Professional trademark filing services specifically tailored for Indian startups.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": review.author },
      "reviewBody": review.body,
      "reviewRating": { "@type": "Rating", "ratingValue": review.rating }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.iprkaro.com${item.href}`
    }))
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               The Best <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Filing Services</span> for Startups in India
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
               Secure your brand identity with expert legal filing. Avail 50% government fee concessions, SIPP facilitation, and same-day filing. Built for founders who want to lead the market.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Protect Your Startup Now
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 items-start">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Strategic Importance of Trademarks for Indian Startups</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    In the high stakes world of Indian entrepreneurship, where innovation moves at lightning speed and competition is fierce, your brand identity is often your most valuable asset. For a startup, a brand name is not just a label; it is the culmination of your vision, your hard work, and the trust you build with your early adopters. However, many founders make the critical mistake of focusing solely on product development while leaving their brand vulnerable to copycats and intellectual property theft. In a market like India, where consumer loyalty is hard won but easily diverted by confusingly similar names, protecting your unique identifier is not just a legal formality but a core business strategy.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>Trademark registration</strong> is the legal shield that protects your business from these risks. It provides you with the exclusive right to use your brand name, logo, or slogan across the entire territory of India. Without this protection, you are building your house on rented land. If a competitor decides to use a similar name, you might find yourself forced to rebrand at a time when you should be scaling, leading to massive financial loss and consumer confusion. Rebranding involves not just changing a logo, but updating all marketing materials, websites, social media handles, and most importantly, rebuilding the mental association in the minds of your customers. For a young company, this can be a fatal blow to momentum.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, a registered trademark serves as a public notice of your ownership claim. It acts as a deterrent to others who might otherwise inadvertently or intentionally adopt a similar mark. In the digital ecosystem, having a registered trademark is often a prerequisite for joining brand protection programs on major e-commerce platforms like Amazon, Flipkart, and Instagram. These platforms provide tools to take down counterfeit listings and protect your sales, but they almost always require a valid trademark registration certificate as proof of rights. For any startup aiming for a multi-channel presence, the lack of a trademark is a significant barrier to entry and security.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    This guide explores the best trademark filing services for startups in India, the government schemes designed to support young companies, and the step-by-step process to ensure your brand is legally secure from day one. We will delve into how the Startup India initiative has simplified the process and how you can leverage professional expertise to navigate the complex legal landscape of intellectual property in 2026.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[rgb(110,94,147)] p-4 md:p-8 my-6 md:my-8 rounded-r-lg">
                    <p className="text-base md:text-xl text-blue-900 italic leading-relaxed">
                      "A trademark is the single most valuable asset a company can own. It is the bridge between your product and the customer's trust. For startups, it is the foundation of future valuation and the ultimate defense against market hijackers."
                    </p>
                  </div>
                </section>

                <section id="why-need-trademark" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Your Startup Needs a Trademark Immediately</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Many founders ask: "Can I wait until I have funding to register my trademark?" The answer is a resounding no. Here is why:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                       <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)] flex items-center">
                         <FontAwesomeIcon icon={faChartLine} className="mr-2 w-5 h-5" /> Competitive Edge
                       </h3>
                       <p className="text-gray-700 text-sm">A registered trademark gives you a legal monopoly over your brand elements. It prevents others from riding on your coattails and benefiting from the reputation you have built.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                       <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)] flex items-center">
                         <FontAwesomeIcon icon={faAward} className="mr-2 w-5 h-5" /> Brand Equity
                       </h3>
                       <p className="text-gray-700 text-sm">For startups looking for venture capital, IP is a key component of valuation. Investors look for companies that have moats around their business.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                       <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)] flex items-center">
                         <FontAwesomeIcon icon={faShieldVirus} className="mr-2 w-5 h-5" /> Infringement Protection
                       </h3>
                       <p className="text-gray-700 text-sm">A registered trademark allows you to take immediate legal action. You can file for an injunction to stop them and claim damages for loss of business.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                       <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)] flex items-center">
                         <FontAwesomeIcon icon={faGlobe} className="mr-2 w-5 h-5" /> Global Readiness
                       </h3>
                       <p className="text-gray-700 text-sm">Your Indian registration is the basis for global protection under the Madrid Protocol, covering over 130 countries.</p>
                    </div>
                  </div>
                </section>

                <section id="sipp-scheme" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Startup India IP Protection Scheme (SIPP) Explained</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                     The Government of India recognizes that startups often operate on shoe-string budgets. To encourage innovation, the Department for Promotion of Industry and Internal Trade (DPIIT) launched the <strong>Scheme for Facilitating Startups Intellectual Property Protection (SIPP)</strong>.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                         <div className="flex-shrink-0 w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                         <div>
                            <h4 className="font-bold text-gray-900">Free Legal Facilitation</h4>
                            <p className="text-sm text-gray-700">The government has empanelled facilitators who provide their services to startups for free. The government pays these facilitators directly.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                         <div className="flex-shrink-0 w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                         <div>
                            <h4 className="font-bold text-gray-900">End-to-End Support</h4>
                            <p className="text-sm text-gray-700">Facilitators assist with trademark searches, drafting applications, filing responses to objections, and representing you in hearings.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                         <div className="flex-shrink-0 w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                         <div>
                            <h4 className="font-bold text-gray-900">Fast-Track Processing</h4>
                            <p className="text-sm text-gray-700">Expert facilitators ensure error-free applications, reducing delays caused by procedural mistakes in the Registry.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="saving-costs" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Saving Costs: Government Fee Concessions</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                     One of the most direct benefits for startups is the massive reduction in statutory filing fees. This 50% rebate ensures that even bootstrapped startups can afford premium legal protection.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-6 border-2 border-gray-100 rounded-xl text-center">
                         <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">Standard Fee</p>
                         <p className="text-3xl font-bold text-gray-400 mb-2">₹9,000</p>
                         <p className="text-xs text-gray-400">per class (e-filing)</p>
                      </div>
                      <div className="p-6 border-2 border-[rgb(110,94,147)] bg-purple-50 rounded-xl text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white text-[10px] px-3 py-1 font-bold rounded-bl-lg uppercase">50% Rebate</div>
                         <p className="text-[rgb(110,94,147)] text-sm mb-2 uppercase tracking-wider font-bold">Startup Fee</p>
                         <p className="text-3xl font-bold text-[rgb(110,94,147)] mb-2">₹4,500</p>
                         <p className="text-xs text-[rgb(110,94,147)] font-semibold">per class (e-filing)</p>
                      </div>
                   </div>
                </section>

                <section id="types-of-trademarks" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Types of Trademarks Your Startup Should Consider</h2>
                  <div className="space-y-6">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-xl mb-1">Word Marks</h3>
                           <p className="text-gray-700 text-sm">The name of your startup. It protects the text itself, regardless of design, font, or style. This is usually the first and most important trademark to file.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-xl mb-1">Device Marks (Logos)</h3>
                           <p className="text-gray-700 text-sm">Protects the visual identity, stylized font, or specific logo associated with your brand. For distinctive icons, this is as valuable as the name.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faCertificate} className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-xl mb-1">Taglines & Slogans</h3>
                           <p className="text-gray-700 text-sm">Catchy phrases used in marketing. If your brand relies heavily on a specific slogan, registering it ensures no one else can ride on your messaging.</p>
                        </div>
                     </div>
                  </div>
                </section>

                <section id="registration-process" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Guide to the Registration Process</h2>
                  <div className="relative border-l-2 border-purple-100 ml-4 pl-8 space-y-12">
                     <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-[rgb(110,94,147)] rounded-full border-4 border-white shadow-sm"></div>
                        <h3 className="font-bold text-lg mb-2">Step 1: The Comprehensive Search</h3>
                        <p className="text-gray-700 text-sm">We check for phonetic and visual similarities. Skipping this step risks objections or oppositions, wasting both time and money at the early stage.</p>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-[rgb(110,94,147)] rounded-full border-4 border-white shadow-sm"></div>
                        <h3 className="font-bold text-lg mb-2">Step 2: Filing Form TM-A</h3>
                        <p className="text-gray-700 text-sm">We include applicant details, the mark, the correct Class, and the User Date. India follows a 'first to use' principle, making the user date critical.</p>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-[rgb(110,94,147)] rounded-full border-4 border-white shadow-sm"></div>
                        <h3 className="font-bold text-lg mb-2">Step 3: Examination & Reply</h3>
                        <p className="text-gray-700 text-sm">The Registry examines for Absolute (Section 9) and Relative (Section 11) grounds. We draft expert legal replies to overcome any hurdles raised.</p>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-[rgb(110,94,147)] rounded-full border-4 border-white shadow-sm"></div>
                        <h3 className="font-bold text-lg mb-2">Step 4: Journal Publication</h3>
                        <p className="text-gray-700 text-sm">The mark is advertised for a 4-month window. This allows third parties to oppose the mark before it is officially granted.</p>
                     </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-[rgb(110,94,147)] rounded-full border-4 border-white shadow-sm"></div>
                        <h3 className="font-bold text-lg mb-2">Step 5: Registration Certificate</h3>
                        <p className="text-gray-700 text-sm">If unopposed, the certificate is issued. You can finally replace the TM symbol with the R symbol, securing your brand legally.</p>
                     </div>
                  </div>
                </section>

                <section id="choosing-class" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Choosing the Right Trademark Class</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Trademarks are registered for specific categories called 'Classes'. There are 45 classes in total. Choosing the wrong class can leave your innovation unprotected.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                         <p className="font-bold text-[rgb(110,94,147)] mb-1">Class 9</p>
                         <p className="text-xs text-gray-600">Software, Mobile Apps, Electronics, AI solutions.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                         <p className="font-bold text-[rgb(110,94,147)] mb-1">Class 35</p>
                         <p className="text-xs text-gray-600">Retail, E-commerce platforms, Advertising, HR.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                         <p className="font-bold text-[rgb(110,94,147)] mb-1">Class 42</p>
                         <p className="text-xs text-gray-600">SaaS, Tech Research, Cloud Computing, IT design.</p>
                      </div>
                   </div>
                </section>

                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Essential Documents Checklist</h2>
                   <ul className="grid md:grid-cols-2 gap-4">
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">DPIIT Recognition Certificate</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">PAN & Aadhaar of the Signatory</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">Certificate of Incorporation</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">Logo Image (JPEG format)</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">User Affidavit (Proof of usage)</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                         <span className="text-sm">Power of Attorney (Form 48)</span>
                      </li>
                   </ul>
                </section>

                <section id="overcoming-objections" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Overcoming Trademark Objections</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 mb-2">Section 9 (Absolute)</h3>
                         <p className="text-sm text-gray-700 mb-4">Objected because the name is too generic or descriptive (e.g., 'Fresh Apples' for a fruit shop).</p>
                         <p className="text-xs font-bold text-red-900 uppercase tracking-wider mb-2">Our Strategy</p>
                         <p className="text-xs text-gray-600">We argue 'Acquired Distinctiveness' through long usage and prove the mark is suggestive rather than descriptive.</p>
                      </div>
                      <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 mb-2">Section 11 (Relative)</h3>
                         <p className="text-sm text-gray-700 mb-4">Objected because the mark is similar to one already on record or a pending application.</p>
                         <p className="text-xs font-bold text-red-900 uppercase tracking-wider mb-2">Our Strategy</p>
                         <p className="text-xs text-gray-600">We perform side-by-side comparisons and differentiate the trade channels and consumer base to prove no confusion.</p>
                      </div>
                   </div>
                </section>

                <section id="opposition-proceedings" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Defending Your Brand in Opposition</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Opposition is the litigation phase of trademark registration. If a competitor files Form TM-O, the process becomes a legal battle with multiple rounds of evidence and hearings.
                   </p>
                   <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                         <h4 className="font-bold text-gray-900 mb-2">Common Grounds</h4>
                         <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                            <li>Bad Faith registration</li>
                            <li>Passing Off concerns</li>
                            <li>Infringement on Well-Known marks</li>
                         </ul>
                      </div>
                      <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                         <h4 className="font-bold text-gray-900 mb-2">The Procedure</h4>
                         <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                            <li>Counter-Statement filing</li>
                            <li>Evidence submission (Rule 45-47)</li>
                            <li>Final Hearing before Registrar</li>
                         </ul>
                      </div>
                   </div>
                </section>

                <section id="global-registration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Going Global: The Madrid Protocol for Export-Oriented Startups</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Trademark rights are territorial. Your Indian registration does not protect you globally. In today's digital age, many Indian startups are global from day one, selling software or services to customers in the US, Europe, and the Middle East. If you do not protect your brand in these markets, you risk being blocked by local entities who might register your name first.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                     The Madrid Protocol is an international treaty managed by the World Intellectual Property Organization (WIPO). It allows you to file one application in India and designate any of the 130 member countries for protection. This system is a blessing for startups because it eliminates the need to hire separate legal teams in every country, saving thousands of dollars in professional fees and administrative overhead.
                   </p>
                   <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                         <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] text-3xl w-10 h-10" />
                         <h3 className="font-bold text-xl text-gray-900">One Application, 130 Countries</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        By using your Indian trademark as a base, you can expand your brand protection as your startup grows. If you launch in the US today and decide to enter the UK next year, you can simply add the UK to your existing Madrid application. It is the most scalable way to manage a global brand portfolio.
                      </p>
                   </div>
                </section>

                <section id="monitoring-enforcement" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Monitoring and Enforcement: Guarding Your Market Share</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                     Obtaining a trademark certificate is just the beginning of your journey. To truly protect your brand, you must be vigilant and proactive in enforcing your rights. If you do not stop small infringements today, they can grow into major legal battles that dilute your brand value over time.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div>
                         <h4 className="font-bold text-[rgb(110,94,147)] mb-3 flex items-center">
                            <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" /> Watch Services
                         </h4>
                         <p className="text-sm text-gray-700">We monitor the Trademark Journal every single week to see if someone is trying to register a name similar to yours. Our automated tools flag phonetic and visual similarities across all 45 classes, allowing us to file oppositions and stop competitors before they even get registered. This proactive approach is much cheaper than fighting a court case later.</p>
                      </div>
                      <div>
                         <h4 className="font-bold text-[rgb(110,94,147)] mb-3 flex items-center">
                            <FontAwesomeIcon icon={faGavel} className="mr-2 w-4 h-4" /> Enforcement Action
                         </h4>
                         <p className="text-sm text-gray-700">From sending formal Cease and Desist notices to filing Civil Suits for permanent injunctions and damages, we use all legal remedies to guard your market share. In cases of blatant counterfeiting or brand impersonation on social media, we also coordinate with law enforcement for criminal raids and seizures. Your brand's integrity is our top priority.</p>
                      </div>
                   </div>
                </section>

                <section id="choosing-service" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Identify the Best Filing Service for Your Startup</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                     Choosing a legal partner is a decision that will impact your business for years. Many platforms offer 'cheap' filings but fail when it comes to the complex legal challenges that follow. Here is what you should look for in a top-tier trademark service:
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <h5 className="font-bold mb-1">IP Law Specialization</h5>
                         <p className="text-xs text-gray-600">Avoid general business websites that treat trademarks like a simple form-filling exercise. Trademarks require deep legal knowledge of the Trade Marks Act, 1999, and strategic class analysis to ensure full protection.</p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <h5 className="font-bold mb-1">Track Record in Litigation</h5>
                         <p className="text-xs text-gray-600">Check their success rate in winning objections and oppositions. Filing an application is easy; winning a legal battle against a major competitor requires senior attorneys and proven strategies.</p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <h5 className="font-bold mb-1">Tech-Enabled Transparency</h5>
                         <p className="text-xs text-gray-600">The service should provide real-time updates, automated status tracking, and a transparent dashboard. You should not have to chase your lawyer to know if your mark has been accepted.</p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <h5 className="font-bold mb-1">Focus on Startup Benefits</h5>
                         <p className="text-xs text-gray-600">They must be well-versed with SIPP, DPIIT benefits, and MSME concessions. A good partner will help you maximize your cost savings while providing premium legal advice.</p>
                      </div>
                   </div>
                </section>

                <section id="why-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-6 md:p-12 rounded-xl md:rounded-3xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                   <h2 className="text-xl md:text-3xl font-bold mb-8 relative z-10">Why IPR Karo is the Strategic Partner for Indian Startups</h2>
                   <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">
                     At IPR Karo, we do not just file forms; we craft intellectual property strategies that help startups win. We understand the unique challenges of building a brand in a competitive digital landscape. Our mission is to democratize high-quality legal protection for every innovator in India.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8 relative z-10">
                      <div className="flex gap-4">
                         <FontAwesomeIcon icon={faAward} className="text-[#FFD700] text-2xl w-8 h-8 flex-shrink-0" />
                         <div>
                            <h4 className="font-bold text-lg mb-1">Expert Legal Team</h4>
                            <p className="text-gray-400 text-sm">Our team comprises senior IP attorneys and former examiners who know exactly how to navigate the Registry's requirements and overcome complex objections.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <FontAwesomeIcon icon={faRocket} className="text-[#FFD700] text-2xl w-8 h-8 flex-shrink-0" />
                         <div>
                            <h4 className="font-bold text-lg mb-1">SIPP Facilitation</h4>
                            <p className="text-gray-400 text-sm">We are proud supporters of the Startup India initiative. We help DPIIT-recognized startups access free legal facilitation and 50% fee rebates without any hassle.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <FontAwesomeIcon icon={faSync} className="text-[#FFD700] text-2xl w-8 h-8 flex-shrink-0" />
                         <div>
                            <h4 className="font-bold text-lg mb-1">Full Lifecycle Support</h4>
                            <p className="text-gray-400 text-sm">From the initial search to final registration, international expansion via the Madrid Protocol, and ongoing monitoring, we handle every aspect of your brand security.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <FontAwesomeIcon icon={faUsers} className="text-[#FFD700] text-2xl w-8 h-8 flex-shrink-0" />
                         <div>
                            <h4 className="font-bold text-lg mb-1">Founder-First Approach</h4>
                            <p className="text-gray-400 text-sm">We speak the language of founders. Our strategies are built to enhance your company valuation and protect your scale as you move from seed to Series A and beyond.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 md:pb-8 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-2 md:mr-3 mt-1 text-sm md:text-base">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="client-reviews" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">What Our Founders Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 opacity-20 serif">"</div>
                        <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base leading-relaxed pt-4 pl-2">
                          {review.body}
                        </p>
                        <div className="flex items-center pl-2">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                            {review.author[0]}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{review.author}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Secure Your Brand Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't leave your brand unprotected. The sooner you file, the sooner you own your mark. Get professional assistance from India's leading startup IP experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          Get Free Brand Search
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg w-full sm:w-auto backdrop-blur-sm flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-2 w-5 h-5" />
                          Call: +91-9289707648
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

             {/* Sidebar */}
             <div className="hidden lg:block space-y-8 sticky top-32">
                
                {/* Sidebar CTA */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-6 rounded-xl shadow-lg border border-gray-800 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Startup Enquiry</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Avail 50% government fee concession for your brand today.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Check Eligibility
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="tel:+919289707648" className="text-sm font-semibold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                      </span> +91-9289707648
                    </a>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/our-services/trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                        <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                          <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                        </span> General Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/patent-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Patent Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/copyright-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Copyright Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/fast-track-trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Fast-Track Filing
                      </Link>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
