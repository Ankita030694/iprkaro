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
  faGavel as faGavelAlt
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Register Trademark in India (2026 Guide) | Step-by-Step Process',
  description: 'Learn how to register a trademark in India with our comprehensive 2026 guide. Step-by-step process, documents required, government fees, and expert tips for 100% success.',
  keywords: [
    'how to register trademark',
    'trademark registration process',
    'trademark registration india',
    'brand name registration',
    'logo registration',
    'trademark search',
    'trademark application status',
    'trademark classes',
    'trademark registration fees',
    'trademark objection'
  ],
  openGraph: {
    title: 'Comprehensive Guide: How to Register a Trademark in India',
    description: 'Master the trademark registration process in India. Secure your brand identity with our expert step-by-step guide covering everything from search to certification.',
    url: 'https://www.iprkaro.com/how-to-register-trademark',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-register-trademark',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-is-trademark', title: 'What is a Trademark?' },
  { id: 'why-register', title: 'Why Register Your Brand?' },
  { id: 'trademark-types', title: 'Types of Trademarks' },
  { id: 'pre-filing-search', title: 'The Pre-Filing Search' },
  { id: 'step-by-step-guide', title: 'Step-by-Step Registration' },
  { id: 'documents-required', title: 'Documents Checklist' },
  { id: 'trademark-classes', title: 'Understanding Classes' },
  { id: 'government-fees', title: 'Registration Fees' },
  { id: 'objection-handling', title: 'Dealing with Objections' },
  { id: 'opposition-process', title: 'The Opposition Stage' },
  { id: 'renewal-restoration', title: 'Renewal & Maintenance' },
  { id: 'msme-startup-benefits', title: 'MSME & Startup Perks' },
  { id: 'global-protection', title: 'International Registration' },
  { id: 'legal-enforcement', title: 'Enforcing Your Rights' },
  { id: 'common-mistakes', title: 'Common Pitfalls' },
  { id: 'conclusion', title: 'Final Thoughts' },
  { id: 'faqs', title: 'Detailed FAQs' },
];

const faqs = [
  {
    question: "How long does it take to register a trademark in India?",
    answer: "The entire trademark registration process in India typically takes between 6 to 12 months. This timeline includes the examination phase, publication in the journal, and the mandatory 4 month opposition period. However, you can start using the TM symbol as soon as the application is filed, usually within 24 hours of starting with IPR Karo."
  },
  {
    question: "What is the cost of registering a trademark in India?",
    answer: "For individuals, startups, and MSMEs with a valid Udyam certificate, the government fee for online filing is ₹4,500 per class. For non-MSME companies and other entities, the fee is ₹9,000 per class. Professional fees are separate and cover search, drafting, filing, and status tracking."
  },
  {
    question: "Can I register a brand name that is already in use?",
    answer: "If the brand name is already registered or applied for in the same class, your application will likely face a Section 11 objection. However, if you have been using the brand name for a long time before the other party, you might be able to claim prior usage rights. We conduct a thorough search to evaluate these risks beforehand."
  },
  {
    question: "What is a trademark class and how many are there?",
    answer: "Trademarks are categorized into 45 classes under the Nice Classification. Classes 1 to 34 are for different types of goods, while classes 35 to 45 are for various services. Choosing the correct class is crucial for ensuring your brand is legally protected in the right industry."
  },
  {
    question: "What is the difference between TM and R symbols?",
    answer: "The TM symbol stands for 'Trademark' and can be used as soon as the application is filed. It notifies the public that you are claiming rights to the brand. The R symbol (®) means 'Registered' and can only be used after you receive the registration certificate from the Trademark Registry. Using the R symbol before registration is illegal."
  },
  {
    question: "Does my Indian trademark protect me outside India?",
    answer: "No, trademark rights are territorial. An Indian trademark registration only protects your brand within the borders of India. For international protection, you need to file separate applications in each country or use the Madrid Protocol system to protect your brand in multiple countries simultaneously."
  },
  {
    question: "What happens if my trademark application is objected to?",
    answer: "If an examiner raises an objection (under Section 9 or 11), you must file a legal response within 30 days. This response must explain how your mark is distinctive or different from existing marks. If the response is accepted, the mark moves to journal publication. If not, you may be called for a personal hearing."
  },
  {
    question: "Can I register a logo without a brand name?",
    answer: "Yes, you can register a logo (device mark) independently of a brand name. Many companies register both the name and the logo separately to ensure maximum protection. A logo is protected for its visual design, while a name is protected phonetically and conceptually."
  },
  {
    question: "Do I need to renew my trademark?",
    answer: "Yes, a trademark registration is valid for 10 years from the date of filing. It can be renewed indefinitely for subsequent periods of 10 years each by paying the renewal fee. Failure to renew on time can lead to the mark being removed from the register."
  },
  {
    question: "Can a trademark be sold or transferred?",
    answer: "Yes, a trademark is an intangible asset that can be sold, assigned, or licensed to another party. This is done through a Trademark Assignment Deed. You can transfer ownership with or without the goodwill of the business."
  }
];

export default function HowToRegisterTrademarkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "How to Register Trademark", href: "/how-to-register-trademark" },
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
    "headline": "How to Register Trademark in India: The Ultimate 2026 Guide",
    "description": "Step-by-step guide on how to register a trademark in India. Detailed process, costs, documents, and expert legal advice for brand protection.",
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
    "datePublished": "2026-02-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/how-to-register-trademark"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Registration Service",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2450"
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen text-black md:text-inherit">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               How to Register a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark in India</span> (2026 Guide)
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Protect your brand identity from imitators. Our comprehensive guide covers the entire trademark filing process, costs, and legal requirements to secure your brand for 10 years.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Registration Now
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 items-start mt-8">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-[72px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-black md:text-[#0C002B] mb-4">Introduction to Brand Protection in India</h2>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    In the fast paced world of modern business, your brand is more than just a name or a logo. It represents your reputation, your hard work, and the trust your customers place in your services. Knowing how to register a trademark is the first and most critical step for any entrepreneur who wants to build a lasting legacy. Every day, thousands of new products hit the market, and without legal protection, your unique brand identity is vulnerable to theft and imitation. 
                  </p>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    The concept of trademarking in India has evolved significantly since the early colonial era. The current legal framework, established under the Trade Marks Act of 1999, which came into effect in 2003, aligns with international standards such as the TRIPS (Trade Related Aspects of Intellectual Property Rights) agreement. This evolution reflects India's transition into a global economic powerhouse where intellectual property is considered a primary driver of innovation and market competition. Before the 1999 Act, the laws were governed by the Trade and Merchandise Marks Act of 1958, and even earlier by the Trade Marks Act of 1940. Each iteration has brought more clarity and stronger protection for creators.
                  </p>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    Today, the Indian economy is witnessing an unprecedented surge in startup activity. With the government's 'Startup India' and 'Make in India' initiatives, more individuals are venturing into the business world than ever before. In this crowded marketplace, a trademark acts as a lighthouse, guiding customers to your specific products and ensuring they are not misled by sub-standard imitations. It provides a legal barrier that prevents others from riding on the coattails of your success. The rise of digital marketing and social media has made it easier for brands to scale rapidly, but it has also made them more vulnerable to digital infringement and cybersquatting.
                  </p>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    The trademark registration process in India is a journey that requires careful planning and legal expertise. By registering, you are not just getting a certificate; you are creating a valuable business asset that grows in value as your brand scales. This guide provides an exhaustive, step by step breakdown of everything you need to know about trademark filing, from the initial search to the final issuance of the registration certificate. Whether you are a solo freelancer or a large corporation, understanding these nuances is essential for your long term survival and growth.
                  </p>
                  <div className="bg-blue-50 border-l-8 border-[#0C002B] p-6 my-8 rounded-r-2xl shadow-inner">
                    <p className="text-lg text-[#160049] italic font-medium">
                      "A trademark is the single most valuable asset a company can own. It serves as the bridge between your quality and the customer's expectation. It protects the integrity of your brand against the chaos of an unregulated market."
                    </p>
                  </div>
                </section>

                <section id="what-is-trademark" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-black md:text-[#0C002B] mb-4">What Exactly is a Trademark?</h2>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    A trademark is a unique identifier that distinguishes your goods or services from those of others. It can be a word, a logo, a slogan, a combination of colors, or even a sound. The primary purpose of a trademark is to act as a source identifier. When a customer sees a famous logo like the Apple bitten fruit or the Nike swoosh, they immediately know the origin and quality of the product. This immediate recognition is what builds brand loyalty and repeat business.
                  </p>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    Legally, a trademark is defined as a mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others. In India, you can register various types of marks, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 my-8">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-2">Word Marks</h4>
                      <p className="text-black md:text-gray-600 text-sm">Protects the brand name itself, regardless of how it is written. This is the broadest form of protection as it covers the word phonetically and linguistically (e.g., Google, Amazon).</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-2">Device Marks</h4>
                      <p className="text-black md:text-gray-600 text-sm">Protects the specific visual design or logo. This is vital for brands where the visual identity is the primary point of recognition (e.g., the Starbucks mermaid or the Apple logo).</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-2">Service Marks</h4>
                      <p className="text-black md:text-gray-600 text-sm">Specifically used for businesses that provide services instead of tangible goods. This includes sectors like banking, education, and legal services (e.g., FedEx or American Express).</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-2">Shape Marks</h4>
                      <p className="text-black md:text-gray-600 text-sm">Protects the unique shape of a product or its packaging. This is common in the food and luxury sectors where the container design is iconic (e.g., the Toblerone bar shape or the Coca-Cola bottle).</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    In addition to these, Indian law also recognizes non-conventional trademarks. These include color marks where a specific shade is associated with a brand, sound marks like any unique chime used in advertisements, and even motion marks like animated logos used in digital media. As technology advances, the definitions of what can be protected are expanding, allowing businesses to secure every sensory touchpoint of their brand experience.
                  </p>
                </section>

                <section id="why-register" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-black md:text-[#0C002B] mb-4">Why Registering Your Brand is Non-Negotiable</h2>
                  <p className="mb-4 leading-relaxed text-base text-black md:text-inherit">
                    Many startups delay trademark registration thinking it is an unnecessary expense or something that can wait until they are successful. This is a dangerous mistake. In the digital age, a name can go viral overnight, and without registration, you have very limited legal grounds to stop someone else from using your name or claiming it as their own. Here is why registration is vital for every modern business:
                  </p>
                  <ul className="space-y-4 my-8 list-none p-0">
                    <li className="flex gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                      <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-lg">Legal Exclusivity and Monopoly</h4>
                        <p className="text-green-800 text-sm">Registration gives you the exclusive right to use the brand across the entire country. No one else can legally operate a business under a similar name in your industry. This monopoly allows you to build a market presence without the fear of dilution or brand theft by competitors who might try to confuse your audience.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                      <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-lg">Valuable Business Asset and Goodwill</h4>
                        <p className="text-green-800 text-sm">A registered trademark is an intangible asset that goes onto your balance sheet. As your business grows, so does the value of this asset. It can be sold, assigned, licensed through franchising, or even used as security for obtaining business loans from banks who view trademarks as collateral.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                      <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faGlobe} className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-lg">Global Foundation and Madrid Protocol</h4>
                        <p className="text-green-800 text-sm">If you plan to expand internationally, having an Indian registration makes it much easier to apply for protection in foreign countries under the Madrid Protocol. It acts as the base application for your global brand strategy, saving you significant legal fees and administrative hurdles across multiple jurisdictions.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                      <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faScaleBalanced} className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-lg">Deterrence and Litigation Power</h4>
                        <p className="text-green-800 text-sm">A registered mark acts as a notice to the public of your ownership. Most potential infringers will walk away if they see your mark is registered. If they do not, you have the statutory power to sue for infringement and claim damages, account of profits, and delivery up of infringing goods under the Trade Marks Act.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-base">
                    Furthermore, having a registered trademark is often a prerequisite for many online platforms. Amazon, for example, requires a trademark for its Brand Registry program, which allows you to protect your product listings from counterfeit sellers. Without this, your online presence can be hijacked within days, leading to loss of revenue and brand reputation. In the world of e-commerce, your trademark is your digital badge of authenticity.
                  </p>
                </section>

                <section id="trademark-types" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Exploring the Different Types of Trademarks</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    While we have touched on word and device marks, the modern legal landscape in India allows for even more creative forms of protection. Understanding these can help you secure every aspect of your brand identity and create a multi-layered defensive strategy for your business.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Collective Marks</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    These are used by groups or associations to indicate that a member belongs to a particular organization. For example, a mark used by a group of accountants, chartered engineers, or a cooperative society. It protects the integrity of the collective group and ensures that only those who meet the group's standards can use the identifying symbol. This builds trust within professional circles and among the general public.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Certification Marks</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    These marks show that the goods or services meet a certain standard of quality, material, mode of manufacture, or origin. Examples include the Woolmark for pure wool products, the ISI mark for industrial products, or the Agmark for agricultural goods. The owner of the mark does not use it for their own commercial gain but certifies that others meet the strict criteria established for the mark's use.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Pattern and Sound Marks</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    Unique patterns used on packaging or fabric can be trademarked to prevent theft of design language. Similarly, distinctive sounds associated with a brand, like the Intel chime or the MGM lion's roar, can be registered in India. This is part of a growing trend of non-traditional trademarks that engage all the senses of the consumer. In a visually saturated market, sound and pattern marks provide a unique way to stand out.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    The registration of sound marks in India began in earnest after the Yahoo! yodel was successfully registered. Since then, many corporate jingles have found their way onto the register, proving that your brand's voice is just as important as its face.
                  </p>
                </section>

                <section id="pre-filing-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">The Critical First Step: Pre-Filing Trademark Search</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Before you spend money on filing, you must conduct a thorough search. Why? Because thousands of applications are rejected every year simply because they are too similar to existing marks. A trademark search involves checking the official IP India database to see if your proposed name or logo is available. This is not as simple as a Google search; it requires a deep dive into the Registrar's archives.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    In India, the Public Search portal allows you to search in three main ways:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-base"><strong>Wordmark Search:</strong> Finding exact or partial matches for the text of your brand name.</li>
                    <li className="text-base"><strong>Phonetic Search:</strong> Finding marks that sound like yours. This is where most people fail. A name like 'Kool' would be blocked by 'Cool' because they sound identical.</li>
                    <li className="text-base"><strong>Vienna Code Search:</strong> For logos, the search is based on international classification of figurative elements. If your logo has a star, you search for Vienna Code 01.01.01 to see all other star logos.</li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-base">
                    At IPR Karo, we use advanced AI tools to perform these searches across all 45 classes. We don't just look for exact matches; we look for potential 'Relative Grounds' for refusal. We provide you with a 'Probability of Success' report before we even file the application. This proactive approach saves you thousands in government fees and months of wasted time waiting for an inevitable rejection.
                  </p>
                  <div className="bg-[#0C002B] text-white p-6 rounded-2xl my-8">
                    <h4 className="text-[#FFB703] font-bold text-xl mb-3">Pro Tip: Avoid Descriptive and Common Names</h4>
                    <p className="text-base leading-relaxed">
                      Do not name your business after what you do. For example, 'Best Mobile Shop' is very hard to trademark because it's descriptive. Choosing an arbitrary or coined word like 'Exxon' or 'Kodak' provides the strongest legal protection. Arbitrary words are common words used in an uncommon way, like 'Apple' for computers. Coined words are invented specifically for the brand. These 'fanciful' marks are the gold standard in IP law.
                    </p>
                  </div>
                </section>

                <section id="step-by-step-guide" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">The Official Step-by-Step Registration Process</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Navigating the bureaucracy of the trademark office requires precision and a clear understanding of the legal timeline. Here is the actual legal journey your application takes from filing to certification:
                  </p>
                  <div className="space-y-8 my-10">
                    <div className="flex gap-4">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-base md:text-xl flex-shrink-0 shadow-lg">1</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg md:text-xl mb-1.5">Filing the Application (Form TM-A)</h4>
                          <p className="leading-relaxed text-sm">Once we have confirmed the name is available, we file the TM-A form online via the e-filing portal. This form requires the applicant's details, the mark itself, the class, and a 'Description of Goods and Services.' If you have already been using the mark, we must file a 'User Affidavit' to prove the date of first use. This immediately gives you an application number and allows you to use the TM symbol.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-base md:text-xl flex-shrink-0 shadow-lg">2</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg md:text-xl mb-1.5">Formalities Check and Examination</h4>
                          <p className="leading-relaxed text-sm">The first internal stage is the 'Formalities Check.' The office ensures that everything has been filed correctly. Once this is passed, the status becomes 'Marked for Exam.' A government examiner then reviews your application for 'Absolute Grounds' (is it descriptive?) and 'Relative Grounds' (is it similar to others?). If any issues are found, they issue an 'Examination Report' detailing the objections.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-base md:text-xl flex-shrink-0 shadow-lg">3</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg md:text-xl mb-1.5">Replying to Objections and Hearing</h4>
                          <p className="leading-relaxed text-sm">If objections are raised, we have exactly 30 days to file a legal response. This response must be drafted with precision, citing case laws and evidence of distinctiveness. If the response is not persuasive, the Registrar may call for a 'Show Cause Hearing.' This is a personal meeting with the official to argue your case. Our legal experts handle this entire process, ensuring your voice is heard.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-base md:text-xl flex-shrink-0 shadow-lg">4</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg md:text-xl mb-1.5">Journal Publication and Public Notice</h4>
                          <p className="leading-relaxed text-sm">If the examiner is satisfied, the mark is 'Accepted and Advertised' in the Trademark Journal. This is a weekly publication available for public review. For a mandatory period of 4 months, any person can file a 'Notice of Opposition' if they believe the mark should not be registered. This acts as a final filter to ensure that only unique, non-infringing marks are registered.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-base md:text-xl flex-shrink-0 shadow-lg">5</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg md:text-xl mb-1.5">Registration and Digital Certification</h4>
                          <p className="leading-relaxed text-sm">If no opposition is filed (or if we win the opposition hearing), the Registrar issues the Registration Certificate digitally. You can now use the R symbol (®) with pride. This certificate is valid for 10 years and can be renewed indefinitely. It serves as conclusive evidence of your ownership in any court of law across India.</p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="documents-required" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Documents Checklist for Trademark Registration</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    To ensure a smooth and rapid filing experience, you need to have your documentation perfectly in order. The requirements vary based on the type of legal entity applying for the mark.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-lg mb-3 underline">For Individuals and Sole Proprietors</h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> Aadhaar Card or Voter ID</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> PAN Card (Personal)</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> Soft copy of the Logo or Character</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> User Affidavit for prior use (if applicable)</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> Power of Attorney signed on plain paper</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-lg mb-3 underline">For MSMEs, Startups, and Companies</h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> Certificate of Incorporation</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> MSME / Udyam Registration Certificate</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> DPIIT Letter (only for registered Startups)</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> Board Resolution authorizing a signatory</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4 h-4" /> PAN Card of the company</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    If you are a Partnership firm or a Trust, you will need the Partnership Deed or Trust Deed respectively. For foreign applicants, documents must be notarized or apostilled in their home country as per international treaties. IPR Karo facilitates all these administrative requirements to ensure your application doesn't get stuck due to minor technicalities.
                  </p>
                </section>

                <section id="trademark-classes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Decoding the Trademark Class System: All 45 Classes Explained</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    One of the most complex parts of the process is selecting the right class. India follows the Nice Classification system, which divides all goods and services into 45 categories. If you register in the wrong class, your brand is effectively unprotected in your actual line of business. Selecting the correct class requires a nuanced understanding of your current operations and your future expansion plans.
                  </p>
                  <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200">
                    <table className="w-full text-left bg-white border-collapse">
                      <thead className="bg-[#0C002B] text-white">
                        <tr>
                          <th className="p-4 font-bold border border-gray-700 text-sm">Class</th>
                          <th className="p-4 font-bold border border-gray-700 text-sm">Detailed Classification of Goods and Services</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr><td className="p-3 font-bold border text-xs">Class 1</td><td className="p-3 border text-xs">Chemicals used in industry, science, photography, agriculture, and forestry.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 2</td><td className="p-3 border text-xs">Paints, varnishes, lacquers, and anti-corrosion preparations.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 3</td><td className="p-3 border text-xs">Cosmetics, cleaning preparations, soaps, and perfumery.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 4</td><td className="p-3 border text-xs">Industrial oils and greases, fuels, and illuminants.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 5</td><td className="p-3 border text-xs">Pharmaceuticals, medical and veterinary preparations, and dietetic substances.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 6</td><td className="p-3 border text-xs">Common metals and their alloys, metal building materials.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 7</td><td className="p-3 border text-xs">Machines and machine tools, motors, and engines.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 8</td><td className="p-3 border text-xs">Hand tools and implements (hand-operated), cutlery.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 9</td><td className="p-3 border text-xs">Scientific, nautical, surveying, electric, photographic, and software products.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 10</td><td className="p-3 border text-xs">Surgical, medical, dental, and veterinary apparatus and instruments.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 11</td><td className="p-3 border text-xs">Apparatus for lighting, heating, steam generating, cooking, and refrigerating.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 12</td><td className="p-3 border text-xs">Vehicles, apparatus for locomotion by land, air, or water.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 13</td><td className="p-3 border text-xs">Firearms, ammunition, explosives, and fireworks.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 14</td><td className="p-3 border text-xs">Precious metals and their alloys, jewellery, and horological instruments.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 15</td><td className="p-3 border text-xs">Musical instruments.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 16</td><td className="p-3 border text-xs">Paper, cardboard, office requisites, and stationery.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 17</td><td className="p-3 border text-xs">Rubber, gutta-percha, asbestos, mica, and plastics in extruded form.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 18</td><td className="p-3 border text-xs">Leather and imitations of leather, animal skins, and luggage.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 19</td><td className="p-3 border text-xs">Non-metallic building materials, non-metallic rigid pipes for building.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 20</td><td className="p-3 border text-xs">Furniture, mirrors, picture frames, and goods of wood or plastic.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 21</td><td className="p-3 border text-xs">Household or kitchen utensils and containers, glassware.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 22</td><td className="p-3 border text-xs">Ropes, string, nets, tents, awnings, and sacks.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 23</td><td className="p-3 border text-xs">Yarns and threads for textile use.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 24</td><td className="p-3 border text-xs">Textiles and textile goods, bed and table covers.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 25</td><td className="p-3 border text-xs">Clothing, footwear, and headgear. (The most popular class).</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 26</td><td className="p-3 border text-xs">Lace and embroidery, ribbons and braid, buttons, hooks and eyes.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 27</td><td className="p-3 border text-xs">Carpets, rugs, mats and matting, linoleum and other materials for covering floors.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 28</td><td className="p-3 border text-xs">Games and playthings, gymnastic and sporting articles.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 29</td><td className="p-3 border text-xs">Meat, fish, poultry, processed fruits, and vegetables.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 30</td><td className="p-3 border text-xs">Coffee, tea, cocoa, sugar, rice, flour, and confectionery.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 31</td><td className="p-3 border text-xs">Agricultural, horticultural, and forestry products and grains.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 32</td><td className="p-3 border text-xs">Beers, mineral and aerated waters, and other non-alcoholic drinks.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 33</td><td className="p-3 border text-xs">Alcoholic beverages (except beers).</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 34</td><td className="p-3 border text-xs">Tobacco, smokers' articles, matches.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 35</td><td className="p-3 border text-xs">Advertising, business management, and retail services.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 36</td><td className="p-3 border text-xs">Insurance, financial affairs, monetary affairs, real estate affairs.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 37</td><td className="p-3 border text-xs">Building construction, repair, and installation services.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 38</td><td className="p-3 border text-xs">Telecommunications.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 39</td><td className="p-3 border text-xs">Transport, packaging and storage of goods, travel arrangement.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 40</td><td className="p-3 border text-xs">Treatment of materials.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 41</td><td className="p-3 border text-xs">Education, providing of training, entertainment, sporting and cultural activities.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 42</td><td className="p-3 border text-xs">Scientific and technological services, research and design, computer hardware and software.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 43</td><td className="p-3 border text-xs">Services for providing food and drink, temporary accommodation.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 44</td><td className="p-3 border text-xs">Medical services, veterinary services, hygienic and beauty care.</td></tr>
                        <tr><td className="p-3 font-bold border text-xs">Class 45</td><td className="p-3 border text-xs">Legal services, security services for the physical protection of tangible property and individuals.</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    Many modern businesses need to file in multiple classes to ensure comprehensive protection. For example, a software company might need Class 9 for the software product itself and Class 42 for the IT services and maintenance they provide. Similarly, a clothing brand with its own retail path would need Class 25 for the clothes and Class 35 for the retail store activities. We provide a dedicated class analysis report to ensure every angle of your operation is covered from Day 1.
                  </p>
                </section>

                <section id="government-fees" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Breakdown of Government Fees and Costs for 2026</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Cost is a major concern for small businesses and independent creators. Fortunately, the Indian government provides significant fee rebates for startups and small enterprises to encourage trademark filings and formalize the economy.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-yellow-50 rounded-2xl border-2 border-[#FFB703] text-center shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-3xl mb-1.5">₹4,500</h4>
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-3">Individuals / MSMEs / Startups</h4>
                      <p className="text-xs text-black md:text-gray-700 leading-relaxed">Per class, per application for online filing. This 50% discount is available only if you have a valid Udyam certificate (for MSMEs) or a DPIIT recognition letter (for Startups). If filing physically, the fee increases to ₹5,000.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-300 text-center shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-black md:text-[#0C002B] text-3xl mb-1.5">₹9,000</h4>
                      <h4 className="font-bold text-black md:text-[#0C002B] text-lg mb-3">Standard Companies / Others</h4>
                      <p className="text-xs text-black md:text-gray-700 leading-relaxed">Per class, per application for online filing. This applies to large corporations, partnership firms without MSME status, and other legal entities. Physical filing for these categories costs ₹10,000.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed italic text-black md:text-gray-600 text-xs text-center">
                    Important Note: These are the primary filing fees. Additional costs may be incurred later in the process. For instance, filing a notice of opposition costs ₹2,700, and renewing a mark costs ₹9,000 per class. At IPR Karo, we provide a transparent fee structure with no hidden charges, so you know exactly what you are paying for at every stage.
                  </p>
                </section>

                <section id="objection-handling" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0C002B] mb-6">Expert Strategies for Handling Trademark Objections</h2>
                  <p className="mb-6 leading-relaxed">
                    Do not panic if your application is marked as 'Objected.' This happens to nearly 60% of applications in the Indian Trademark Registry. It usually means the examiner has a question or needs more proof that your mark is capable of distinguishing your goods. There are two primary grounds for objection under the Trade Marks Act, and each requires a specific legal strategy:
                  </p>
                  <div className="space-y-6 my-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border-l-[8px] border-[#0C002B] shadow-sm">
                       <h4 className="font-bold text-[#0C002B] text-xl mb-3">Section 9 Objections: Absolute Grounds</h4>
                       <p className="mb-3 leading-relaxed text-sm">This is raised when the examiner thinks the mark is descriptive, lacks distinctiveness, or is a common surname or geographical location. For example, if you try to trademark 'Tasty Mango' for fruit juice or 'Delhi Law' for a law firm.</p>
                       <p className="font-bold text-[#0C002B] text-sm">Our Comprehensive Solution:</p>
                       <p className="leading-relaxed text-gray-700 text-xs">We provide evidence of 'Acquired Distinctiveness' through long term usage. We present sales invoices, marketing spend, and media coverage to prove to the Registrar that while the mark might have been descriptive once, the public now identifies this name solely with your specific business. This is known as a secondary meaning defense.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border-l-[8px] border-[#FFB703] shadow-sm">
                       <h4 className="font-bold text-[#0C002B] text-xl mb-3">Section 11 Objections: Relative Grounds</h4>
                       <p className="mb-3 leading-relaxed text-sm">This is raised when the examiner finds a similar mark already on the register or a pending application that might cause confusion. This is often a battle of phonetics, visual design, and market overlap.</p>
                       <p className="font-bold text-[#0C002B] text-sm">Our Comprehensive Solution:</p>
                       <p className="leading-relaxed text-gray-700 text-xs">We perform a detailed side by side comparison of the marks. We highlight differences in the 'Rule of Whole,' proving that the marks when viewed in their entirety are distinct. We also argue based on the 'Target Audience' indicating that the products are sold in different price brackets or channels, thus eliminating any risk of confusion in the mind of a consumer with average intelligence.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    If the written response is not accepted, the Registrar will schedule a 'Show Cause Hearing.' Our attorneys represent you at these hearings, presenting oral arguments and physical evidence to secure an approval. It is important to note that if you fail to respond to an objection within 30 days, your application will be marked as 'Abandoned' definitively.
                  </p>
                </section>

                <section id="opposition-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Surviving the Journal Publication and Third Party Opposition</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Once your mark is 'Accepted and Advertised,' it is published in the Trademark Journal. This is a crucial phase where your brand is exposed to the entire world. For a strict period of 4 months, any person or competitor who feels threatened by your brand can file a 'Notice of Opposition.'
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    Opposition is a quasi-judicial proceeding that takes place before the Registrar. It is essentially a mini-lawsuit that involves:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-base"><strong>Notice of Opposition:</strong> Filed by the opponent stating grounds like bad faith or prior usage.</li>
                    <li className="text-base"><strong>Counter Statement:</strong> Filed by us within 2 months, denying all allegations and asserting your rights.</li>
                    <li className="text-base"><strong>Evidence in Support:</strong> Both parties submit documentary evidence of their brand usage, reputation, and trademark filings.</li>
                    <li className="text-base"><strong>Final Hearing:</strong> A legal argument where the Registrar decides whether to allow or refuse the registration.</li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-base">
                    Previously, appeals from the Registrar's decisions went to the Intellectual Property Appellate Board (IPAB). However, with the Tribunals Reforms Act of 2021, the IPAB was abolished. Now, all appeals and rectification petitions go directly to the High Courts. This makes the opposition stage even more critical, as you are building a record that might eventually be reviewed by a High Court judge.
                  </p>
                </section>

                <section id="renewal-restoration" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Renewal and Long Term Maintenance of Your Rights</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    A trademark is not a one time purchase; it is a living legal right that must be maintained. Your registration is valid for exactly 10 years from the original date of application. To keep your protection alive, you must file Form TM-R for renewal every 10 years.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    The window for renewal opens 6 months before the expiry date. If you miss this deadline, the mark's status changes to 'Expired.' There is a 6 month grace period after the expiry date where you can restore the mark by paying a surcharge fee. If you miss even this grace period, the mark is 'Removed' from the register, and you lose all your accumulated rights and goodwill. This would mean anyone else could step in and register your name. At IPR Karo, we provide automatic renewal tracking for all our clients, ensuring you never miss a deadline.
                  </p>
                </section>

                <section id="msme-startup-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Unlocking Special Benefits for MSMEs and Startups</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     The Government of India recognizes that intellectual property is the backbone of the New India economy. If you are a recognized startup or have a valid MSME (Micro, Small, and Medium Enterprise) registration, the doors to several benefits open up:
                   </p>
                   <ul className="grid md:grid-cols-2 gap-4 my-8 list-none p-0">
                     <li className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">

                        <p className="font-bold text-purple-800 text-sm">Discount on Govt. Filing Fees</p>
                     </li>
                     <li className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">
                        
                        <p className="font-bold text-purple-800 text-sm">Fast Track Examination for Startups</p>
                     </li>
                     <li className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">
                      
                        <p className="font-bold text-purple-800 text-sm">Free Expert Facilitator Support</p>
                     </li>
                     <li className="p-4 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">
                        
                        <p className="font-bold text-purple-800 text-sm">Stronger Protection Against Counterfeits</p>
                     </li>
                   </ul>
                   <p className="mb-4 leading-relaxed text-base">
                     To avail these benefits, you must ensure your Udyam certificate is up to date and specifically mentions the activities related to your trademark application. For startups, the DPIIT recognition certificate is mandatory. IPR Karo assists businesses in obtaining these registrations before we file the trademark, potentially saving you thousands of rupees in the process.
                   </p>
                </section>

                <section id="global-protection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">How to Secure Your Brand Identity Globally</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    In today's interconnected global economy, your brand might reach customers in the USA, Europe, or Southeast Asia within weeks of launch. It is vital to remember that trademark rights are territorial, your Indian registration only protects you within the borders of India. To protect yourself globally, you have two main routes:
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">The Madrid Protocol System</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    The Madrid System allows you to file a single international application in the Indian Trademark Office and specify which of the 130 member countries you want protection in. The Indian office sends this to the World Intellectual Property Organization (WIPO) in Geneva. This system is significantly more cost effective and administratively simpler than hiring individual lawyers in every country.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Direct Convention Filing</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    In some cases, especially if the target country is not a member of the Madrid Protocol, you must file a direct application through a local attorney in that country. This is known as a Convention filing if done within 6 months of your Indian application, allowing you to claim 'Priority' from your Indian filing date. IPR Karo handles the entire global strategy for exporters and digital nomads to ensure their hard work is safe everywhere.
                  </p>
                </section>

                <section id="regional-offices" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Regional Trademark Offices: Where is Your Application Processed?</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    The Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) is the apex body for intellectual property in India. However, the actual processing of your application happens in one of the five regional offices based on your place of business. Understanding your jurisdiction is vital as all hearings and legal notices will originate from that specific office.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-black md:text-[#0C002B] mb-1.5 text-sm uppercase">Mumbai Office</h4>
                      <p className="text-[10px] text-black md:text-gray-700">Jurisdiction: Maharashtra, Madhya Pradesh, Chhattisgarh, Goa.</p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-black md:text-[#0C002B] mb-1.5 text-sm uppercase">Delhi Office</h4>
                      <p className="text-[10px] text-black md:text-gray-700">Jurisdiction: Delhi, Haryana, Punjab, Rajasthan, Himachal Pradesh, Jammu and Kashmir, Ladakh, Uttar Pradesh, Uttarakhand.</p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-black md:text-[#0C002B] mb-1.5 text-sm uppercase">Kolkata Office</h4>
                      <p className="text-[10px] text-black md:text-gray-700">Jurisdiction: West Bengal, Bihar, Odisha, Jharkhand, Assam, Arunachal Pradesh, Manipur, Mizoram, Meghalaya, Sikkim, Tripura, Nagaland, Andaman and Nicobar Islands.</p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-black md:text-[#0C002B] mb-1.5 text-sm uppercase">Ahmedabad Office</h4>
                      <p className="text-[10px] text-black md:text-gray-700">Jurisdiction: Gujarat, Rajasthan (shared), Dadra and Nagar Haveli and Daman and Diu.</p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-black md:text-[#0C002B] mb-1.5 text-sm uppercase">Chennai Office</h4>
                      <p className="text-[10px] text-black md:text-gray-700">Jurisdiction: Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Karnataka, Puducherry, Lakshadweep.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    While filing is done online, the physical files and examiners are distributed across these locations. For example, if your company is registered in Bangalore, your application will be under the Chennai Jurisdiction. If you receive a hearing notice, you may need to attend it in Chennai or via a virtual link provided by that specific office. IPR Karo has legal experts empanelled at all five locations to provide local support whenever necessary.
                  </p>
                </section>

                <section id="legal-enforcement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Enforcing Your Intellectual Property Rights: A Strategic Approach</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Obtaining a registration certificate is just the foundation. The real value of a trademark is realized when you actively monitor and enforce your rights against infringers. In India, the enforcement mechanism is robust, providing both civil and criminal remedies. Understanding the nuances between these can help you choose the most effective strategy for your specific brand challenges.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Statutory Remedy: Trademark Infringement</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    Under Section 29 of the Trade Marks Act, 1999, infringement occurs when an unauthorized person uses a mark that is identical or deceptively similar to a registered trademark. The key advantage for registered owners is that they do not need to prove actual confusion in the market or damage to their reputation. The mere existence of the registration is presumptive evidence of validity.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    When we file an infringement suit, we typically seek a Permanent Injunction to stop the defendant forever, and an Interlocutory Injunction to stop them immediately while the trial is ongoing. Courts also grant 'Damages' or an 'Account of Profits,' forcing the infringer to hand over the money they made by using your brand name.
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3">Common Law Remedy: The Action of Passing Off</h3>
                  <p className="mb-4 leading-relaxed text-base">
                    Passing off is a common law tort used to protect the goodwill of an unregistered mark. If you haven't received your registration yet but have been using the brand for years, you can still sue an imitator. However, you must prove the three pillars of passing off: Goodwill, Misrepresentation by the defendant, and Damage to your business. This is a much higher evidentiary burden, which is why we always recommend immediate registration.
                  </p>
                  <div className="bg-red-50 p-6 md:p-10 rounded-3xl border-l-[8px] border-red-600 my-8 shadow-lg">
                    <h4 className="text-red-900 font-bold text-xl mb-3">Extraordinary Judicial Relief: John Doe and Anton Piller Orders</h4>
                    <p className="text-red-800 leading-relaxed mb-4 text-sm">
                      In the modern era of anonymous online sellers and rapid physical counterfeiting, traditional lawsuits against named individuals are often insufficient. Indian courts have pioneered several extraordinary reliefs:
                    </p>
                    <ul className="space-y-3 text-red-900 font-medium text-xs">
                      <li className="flex gap-2.5 items-start">
                        <span className="mt-0.5">●</span>
                        <span><strong>John Doe Orders (Ashok Kumar Orders):</strong> These are granted against unknown defendants. This allows you to raid multiple sellers across a city or block thousands of infringing websites even if you don't know the exact identity of the owner.</span>
                      </li>
                      <li className="flex gap-2.5 items-start">
                        <span className="mt-0.5">●</span>
                        <span><strong>Anton Piller Orders:</strong> These allow your legal team to enter the defendant's premises without prior notice. This ensures that the infringer cannot destroy evidence or move fake stock before the trial begins. It serves as a powerful deterrent against organized counterfeiting rings.</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-4 leading-relaxed text-base">
                    At IPR Karo, we don't just file applications; we act as your brand guardians. We provide 'Trademark Watch' services to notify you the moment a similar mark is published in the journal, allowing us to file an opposition before they even get registered.
                  </p>
                </section>

                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Navigating the Minefield: 10 Common Trademark Mistakes</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    Over the years, we have seen thousands of brand owners lose their rights due to simple, avoidable errors. Here is a definitive list of mistakes to avoid if you want a 100% success rate in your filing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 my-8">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">1</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Selecting Descriptive Names:</strong> Trying to trademark 'Cold Milk' for dairy products.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">2</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Skipping the Phonetic Search:</strong> A name like 'Cora' might be blocked by 'Kora'.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">3</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Wrong Applicant Name:</strong> Filing in the name of an employee instead of the business.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">4</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Using the R Symbol Prematurely:</strong> Using ® before getting the certificate is an offence.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">5</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Ignoring the 30-Day Deadline:</strong> Failure to reply to an examination report leads to abandonment.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">6</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Incorrect Class Classification:</strong> Filing in Class 35 when you are actually Class 25.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">7</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Filing via Amateur Agents:</strong> Many cheap services don't represent you at hearings.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">8</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Vague Description of Goods:</strong> Being too general instead of specific can lead to objections.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">9</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Not Filing a User Affidavit:</strong> Losing priority rights by not documenting prior use.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                       <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[#0C002B] text-xs">10</div>
                       <p className="text-xs leading-relaxed text-black md:text-gray-700"><strong>Missing Renewal Deadlines:</strong> Assuming the trademark is for life. It's only for 10 years.</p>
                    </div>
                  </div>
                </section>

                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Conclusion: Building a Legacy with Legal Integrity</h2>
                  <p className="mb-4 leading-relaxed text-base">
                    The journey of a thousand miles begins with a single step, and for a business, that step is securing its identity. We have traveled through the history of trademarks, the technicalities of filing, the intricacies of classes, and the power of legal enforcement. One thing is clear: your brand is your most valuable asset, and protecting it is not just a legal choice, it is a moral obligation to the hard work you have put in.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    India is a land of immense opportunity, but it is also a land of intense competition. In such an environment, a registered trademark is the difference between a fleeting business and a generational brand. It provides you with the peace of mind to innovate, the power to scale, and the prestige to compete on a global stage.
                  </p>
                  <p className="mb-4 leading-relaxed text-base">
                    At IPR Karo, we are more than just legal service providers; we are your partners in growth. We understand the blood, sweat, and tears that go into building a brand. That is why we provide a service that is as dedicated as you are. From conducting the first search to handing over the final certificate, our team is committed to your success. Don't leave your brand's future to chance. Take the leap, secure your name, and build your legacy with the confidence of a registered trademark owner.
                  </p>
                </section>

                {/* FAQ Section Rendered */}
                <section id="faqs" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0 hover:bg-gray-50 p-5 rounded-2xl transition-all font-sans">
                        <h3 className="text-lg font-bold text-black md:text-[#0C002B] mb-3 flex gap-2.5">
                          <span className="text-[#FFB703]">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-black md:text-gray-700 leading-relaxed pl-7 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Container */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-16">
                   <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Protect Your Brand?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
                      Join 5000+ businesses who secured their brand with IPR Karo. Get expert assistance and same-day filing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[#FFB703] hover:bg-[#FFA000] text-[#0C002B] font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base">
                          Start Registration Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-[#0C002B] text-white font-bold py-3 px-10 rounded-full transition-all text-base flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-2.5" />
                          Call: +91-9289707648
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">
              
              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Brand Availability?</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Don't start printing labels until you know the name is yours. Get a **Free Comprehensive Search Report** in 1 hour.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Check Name Availability
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Related Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">General Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/patent-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Patent Filing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/copyright-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Copyright Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/trademark-risk-reduction" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Risk Reduction</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/expert-trademark-guidance" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Expert Guidance</span>
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
