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
  faLandmark,
  faCoins,
  faBriefcase,
  faChartLine,
  faBuilding,
  faHandHoldingUsd,
  faLaptopCode,
  faUniversity,
  faBullhorn,
  faMobileAlt,
  faAward,
  faFileInvoiceDollar,
  faUserTie,
  faChartPie,
  faSackDollar,
  faScaleUnbalanced,
  faUserSecret,
  faNetworkWired,
  faLightbulb,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Financial Services | Class 36 & Fintech',
  description: 'Exhaustive guide to financial brand protection. Covering Banking, Fintech, NBFCs, Crypto, and SEBI/RBI compliance. Secure your trust capital with India\'s elite IP team.',
  keywords: [
    'trademark for financial services',
    'class 36 trademark registration',
    'fintech brand protection',
    'banking trademark india',
    'rbi nbfc naming compliance',
    'sebi ria trademark',
    'crypto trademark registration',
    'payment gateway trademark',
    'wealth management brand security',
    'insurtech trademark class'
  ],
  openGraph: {
    title: 'Financial Brand Security | Expert Trademark Registration',
    description: 'In finance, trust is the only currency. Protect your banking, fintech, or consultancy brand from dilution and copycats.',
    url: 'https://www.iprkaro.com/trademark-for-financial-services',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-financial-services',
  },
};

const tocSections = [
  { id: 'trust-and-trademarks', title: 'The Trust Mandate' },
  { id: 'class-36-explained', title: 'Class 36 & Multi-Class' },
  { id: 'banking-hierarchy-ip', title: 'Banking Tiers & IP' },
  { id: 'fintech-challenges', title: 'Fintech Strategies' },
  { id: 'rbi-nbfc-compliance', title: 'RBI & NBFC Rules' },
  { id: 'sebi-ria-guidelines', title: 'SEBI RIA Naming' },
  { id: 'irdai-insurance-branding', title: 'Insurance IP' },
  { id: 'crypto-web3-metaverse', title: 'Crypto & Web3' },
  { id: 'finfluencer-branding', title: 'Finfluencer Rights' },
  { id: 'ai-finance-trademarks', title: 'AI & Algorithm IP' },
  { id: 'ip-valuation-m-and-a', title: 'M&A Valuation' },
  { id: 'registration-process', title: 'Registration Flow' },
  { id: 'documents-required', title: 'Document Checklist' },
  { id: 'legal-hurdles-objections', title: 'Overcoming Objections' },
  { id: 'case-studies-financial', title: 'Famous Disputes' },
  { id: 'international-protection', title: 'Global Framework' },
  { id: 'reviews-section', title: 'Industry Insights' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the primary trademark class for financial services?",
    answer: "Class 36 is the primary class covering insurance, financial, monetary, and real estate affairs. This includes banking, investment consultancy, and digital payment services."
  },
  {
    question: "Does my Fintech app need a Class 9 registration?",
    answer: "Yes. While your service is Class 36, the mobile application (software) itself is a digital good and must be protected in Class 9 to prevent third-party app cloning."
  },
  {
    question: "Can I use 'Bank' in my brand name if I'm an NBFC?",
    answer: "No. Per RBI guidelines and the Banking Regulation Act, use of 'Bank' or 'Banking' is strictly for authorized banks. Using it without a license leads to immediate trademark rejection."
  },
  {
    question: "Can I trademark a specific green color for my financial app?",
    answer: "Yes, Color marks are registrable if you can prove 'acquired distinctiveness'—meaning customers associate that specific shade exclusively with your brand."
  },
  {
    question: "What is the Madrid Protocol for financial firms?",
    answer: "It is an international treaty that allows a brand to extend trademark protection to over 130 countries (including Singapore, London, and NY) through a single application in India."
  },
  {
    question: "Can I trademark a stock market algorithm?",
    answer: "A trademark protects the 'name' of the algorithm. To protect the 'logic' or 'code', you should seek Copyright or Patent protection instead."
  },
  {
    question: "How long does a financial trademark last?",
    answer: "10 years from the date of application, renewable indefinitely every 10 years. Continuous usage is vital to avoid 'non-use' cancellation petitions."
  },
  {
    question: "What if a competitor uses my name in their Google Search ads?",
    answer: "A registered trademark allows you to file an IP complaint with Google to stop them from using your brand name as a keyword to divert your potential clients."
  },
  {
    question: "Does a trademark protect my financial advice?",
    answer: "No. It protects your brand identity. The content of your advice can be protected under Copyright law if it is written down in a unique format."
  },
  {
    question: "Is MSME registration useful for financial firms?",
    answer: "Highly useful. It provides a 50% discount on government trademark fees and gives access to preferential treatment in government tenders."
  },
  {
    question: "Can sounds be trademarked in finance?",
    answer: "Yes. Unique notification sounds or audio jingles (like Paytm's Soundbox) can be registered as Sound Marks in India."
  }
];

const reviews = [
  {
    name: "Rajesh Khanna",
    role: "Founder, NeoBank India",
    text: "Tripling our IP coverage across Class 9, 36 and 42 was a strategic move before our Series B. IPR Karo understood the technicalities of our lending model perfectly.",
    rating: 5
  },
  {
    name: "Meera Nair",
    role: "Legal Head, Zenith Insurance",
    text: "The IRDAI naming guidelines were a hurdle. Their team's knowledge of the intersection between Insurance Law and Trademark Law saved us months of rebranding.",
    rating: 5
  },
  {
    name: "David Goldberg",
    role: "MD, Global Crypto Exchange",
    text: "Expanding into India required navigating murky crypto regulations. Securing our trademark in Class 36 provided the legal legitimacy we needed to build trust.",
    rating: 5
  },
  {
    name: "Sandeep Varma",
    role: "Director, WealthWise Capital",
    text: "Professional and deep-domain knowledge. They helped us overcome a difficult Section 9 objection for our wealth management brand name.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    role: "CEO, FinEdu Platforms",
    text: "As a 'Finfluencer' brand, protecting my personal identity was key. They handled my trademark and copyright protection with extreme clinical precision.",
    rating: 5
  }
];

export default function TrademarkFinancialServicesPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Trademark for Financial Services", href: "/trademark-for-financial-services" },
  ];

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      })}} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Exhaustive Guide to Financial Service Trademarks in India",
        "author": { "@type": "Organization", "name": "IPR Karo" }
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Financial Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1850"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
          "reviewBody": review.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        <div className="relative w-full overflow-hidden" 
             style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
               Legitimize Your Trust: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Elite Trademark Protection for Finance
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               In banking and fintech, trust isn't built; it's protected. Secure your Class 36 identity with the legal strategist trusted by India's top NBFCs, Fintechs, and Investment Advisers.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Connect with IP Experts
               </button>
             </Link>
          </div>
        </div>

        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Regulatory Guide</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            <main className="min-w-0">
               <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                  
                  <section id="trust-and-trademarks" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Trust as a Tangible Asset: The Finance Trademark Mandate
                    </h2>
                    <p className="mb-6">
                      In the financial services ecosystem—whether it's a legacy commercial bank, a hyper-growth fintech unicorn, or a niche wealth advisor—the primary commodity traded is <strong>Trust</strong>. Your brand name is the external manifestation of that trust. If your brand is not legally secured, your credibility is on a permanent discount.
                    </p>
                    <p className="mb-6">
                      A Trademark in the financial sector is not merely a logo; it is a defensive fortress. It signals to regulatory bodies (RBI, SEBI) and your customers that you are a legitimate, stable, and legally accountable entity. In an era of rampant phishing and digital fraud, a registered trademark is your first line of defense against copycat scammers who exploit your reputation to defraud unsuspecting investors.
                    </p>
                    <div className="bg-indigo-50 border-l-8 border-indigo-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-indigo-900 italic font-medium">
                        "In banking, your capital reserves protect your liquidity, but your trademark protects your customer acquisition funnel. Both are non-negotiable."
                      </p>
                    </div>
                  </section>

                  <section id="class-36-explained" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Class 36 & the Multi-Class Strategy</h2>
                    <p className="mb-8">
                       While Class 36 is the anchor, a modern financial brand requires multidimensional protection to prevent legal loopholes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                       <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white transition-all shadow-sm">
                          <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-3">Class 36</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Core Service</p>
                          <p className="text-sm">Banking, Insurance, Real Estate, Crypto Exchanges, and Investment Portfolios.</p>
                       </div>
                       <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white transition-all shadow-sm">
                          <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-3">Class 9</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Software/App</p>
                          <p className="text-sm">Fintech Mobile Apps, Wallets, and Secure Trading Algorithms.</p>
                       </div>
                       <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white transition-all shadow-sm">
                          <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-3">Class 42</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Tech Support</p>
                          <p className="text-sm">Cybersecurity for networks and custom fintech software development.</p>
                       </div>
                    </div>
                  </section>

                  <section id="banking-hierarchy-ip" className="scroll-mt-32 uppercase tracking-tighter">
                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 text-center">Branding the Banking Hierarchy</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50">
                           <h3 className="font-bold text-xl mb-4 text-gray-900 underline decoration-indigo-400">Retail vs Private Banking</h3>
                           <p className="text-sm leading-relaxed text-gray-600">
                              Retail banking trademarks must focus on <strong>Accessibility and Broad Recognition</strong>. Conversely, Private Banking and Wealth Management brands often utilize "Heritage" elements—serif fonts, family names, and heraldic logos—to convey exclusivity and longevity to High-Net-Worth Individuals (HNIs).
                           </p>
                        </div>
                        <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50">
                           <h3 className="font-bold text-xl mb-4 text-gray-900 underline decoration-indigo-400">Neobanks & API IP</h3>
                           <p className="text-sm leading-relaxed text-gray-600">
                              For Neobanks, the "Interface" is the brand. Trademarking the specific UI/UX elements as 'Design Marks' is as critical as protecting the name itself. Your brand is a digital frequency; any interference dilutes your user experience.
                           </p>
                        </div>
                     </div>
                  </section>

                  <section id="fintech-challenges" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Fintech Strategies: The "Pe" suffix Saga</h2>
                     <p className="mb-6">
                        The Indian fintech market is intensely competitive. Landmark battles between giants like PhonePe and BharatPe have proven that suffixes like "Pe" or "Pay" are considered generic (publici juris). The legal lesson? You cannot monopolize a descriptive suffix. You must build your distinctiveness on a unique prefix (e.g., "Mobi", "Google", "Bharat") combined with unique visual elements.
                     </p>
                     <p className="mb-6">
                        At IPR Karo, we conduct a "Dilution Analysis" to ensure your name isn't just a derivative of a market leader, which could lead to years of expensive trademark litigation.
                     </p>
                  </section>

                  <section id="rbi-nbfc-compliance" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">RBI Compliance: The NBFC Naming Wall</h2>
                     <div className="bg-red-50 border-r-8 border-red-600 p-8 rounded-l-2xl shadow-sm my-10">
                        <h3 className="font-bold text-red-900 text-xl mb-3">Warning: Regulatory Restriction</h3>
                        <p className="text-sm text-red-800 leading-relaxed font-medium">
                           You cannot use "Bank", "Banking", or "Banker" in your trademark if you are an NBFC. Under the Banking Regulation Act, 1949, these terms are reserved for licensed commercial banks. Attempting to trademark "Easy Bank Loans" as an NBFC will lead to immediate cancellation of your application and potential regulatory fines.
                        </p>
                     </div>
                     <p className="mb-6">
                        We help NBFCs choose names like "Credits", "FinServ", or "Wealth" which are compliant with RBI's restrictive naming norms while remaining highly marketable.
                     </p>
                  </section>

                  <section id="sebi-ria-guidelines" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">SEBI RIA Naming & Ethical Branding</h2>
                     <p className="mb-6">
                        Stock brokers and Portfolio Managers must align their trademarks with SEBI's Code of Advertisements. Your brand name cannot promise "Guaranteed Returns" or "Zero Risk". Names like "Safe Profits" or "Double Wealth" are rejected by the Trademark Registry for being deceptive and by SEBI for ethics violations.
                     </p>
                  </section>

                  <section id="irdai-insurance-branding" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Insurance Branding & IRDAI Intermediaries</h2>
                     <p className="mb-6 text-gray-700">
                        Aggregators and Corporate Agents must manage complex co-branding environments. If your aggregator platform mentions "HDFC Life" or "LIC", you must have a "Trademark Co-existence Agreement" in place to ensure you don't infringe on the principal insurer's massive IP portfolio while promoting their products.
                     </p>
                  </section>

                  <section id="crypto-web3-metaverse" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 text-center uppercase">Crypto, Web3 & The Metaverse</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-dashed border-indigo-200 rounded-3xl bg-indigo-50/30">
                           <h3 className="font-bold text-xl mb-3 flex items-center"><FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-indigo-600" /> Token Branding</h3>
                           <p className="text-sm italic text-gray-600">Trademarking the name of your DAO or Utility Token is the only way to prevent 'vampire attacks' where competitors fork your code and use your brand name to divert your community.</p>
                        </div>
                        <div className="p-8 border-2 border-dashed border-indigo-200 rounded-3xl bg-indigo-50/30">
                           <h3 className="font-bold text-xl mb-3 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-3 text-indigo-600" /> Metaverse Presence</h3>
                           <p className="text-sm italic text-gray-600">Virtual banking in environments like Decentraland requires trademarks covering "Financial consultancy in virtual environments"—a new specification for the digital age.</p>
                        </div>
                     </div>
                  </section>

                  <section id="finfluencer-branding" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Finfluencer Rights: Protecting the Personal Brand</h2>
                     <p className="mb-6">
                        Financial influencers are the new gatekeepers of retail capital. Trademarking your personal name (e.g., "Finance with [Name]") in Class 41 (Education) and Class 36 (Financial Advice) is essential to stop telegram scammers from using your identity to run Ponzi schemes under your banner.
                     </p>
                  </section>

                  <section id="ai-finance-trademarks" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">AI-Driven Algorithms & Trading Bots</h2>
                     <p className="mb-6">
                        When the algorithm is the product, the brand is the only thing the user sees. For AI trading platforms, we focus on trademarking the Bot Names and 'System Sounds'—creating a distinct sensory identifier for your automated financial products.
                     </p>
                  </section>

                  <section id="ip-valuation-m-and-a" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">M&A: The Role of Trademarks in Valuation</h2>
                     <p className="mb-6">
                        During funding rounds or acquisitions, a fintech's IP portfolio is a key valuation driver. A 'Clean Search Report' and 'Registered Status' across multi-classes (9, 36, 42) can significantly increase the goodwill valuation of a startup, proving that its brand revenue is legally defensible.
                     </p>
                  </section>

                  <section id="registration-process" className="scroll-mt-32 uppercase">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center tracking-tighter">The Financial IP Protocol</h2>
                   <div className="relative space-y-12">
                      <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>
                      <div className="flex gap-8 items-start relative">
                         <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                            <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                         </div>
                         <div className="p-8 bg-gray-50 rounded-3xl flex-1">
                            <h3 className="text-xl font-bold mb-4">Conflict Clearance</h3>
                            <p className="text-sm">We don't just check for direct matches. We analyze 'Phonetic Similarity' and 'Trade Channel Overlap'—critical in finance where similar words like 'Wealth' and 'Wealthy' are everywhere.</p>
                         </div>
                      </div>
                      <div className="flex gap-8 items-start relative">
                         <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                            <FontAwesomeIcon icon={faCertificate} className="w-12 h-12" />
                         </div>
                         <div className="p-8 bg-gray-50 rounded-3xl flex-1">
                            <h3 className="text-xl font-bold mb-4">Regulatory Alignment</h3>
                            <p className="text-sm">We ensure your specification of services matches your RBI/SEBI license categories, preventing procedural objections during the examination phase.</p>
                         </div>
                      </div>
                   </div>
                  </section>

                  <section id="documents-required" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Documentation Checklist</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-indigo-600">Company (LLP/Pvt Ltd)</h3>
                          <ul className="text-sm space-y-2 opacity-80">
                             <li>• Certificate of Incorporation</li>
                             <li>• Board Resolution for Signatory</li>
                             <li>• Udyam Registration (for 50% discount)</li>
                             <li>• High-Res Logo in JPEG/PNG</li>
                          </ul>
                       </div>
                       <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-indigo-600">SEBI/RBI Regulated Entities</h3>
                          <ul className="text-sm space-y-2 opacity-80">
                             <li>• License Copy (NBFC/RIA/Broker)</li>
                             <li>• Prior User Affidavit (Invoices/Ads)</li>
                             <li>• Signed Form TM-48 (Legal Auth)</li>
                          </ul>
                       </div>
                    </div>
                  </section>

                  <section id="legal-hurdles-objections" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Overcoming Legal Interference</h2>
                     <p className="mb-6">
                        Section 9 objections in finance are common due to the usage of descriptive terms like "Secure", "Plus", "Growth". Our strategy involves proving 'Acquired Distinctiveness'—submitting Google Analytics data, advertisement expenditure bills, and media clips that prove your brand is the primary source in the public's mind.
                     </p>
                  </section>

                  <section id="case-studies-financial" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 underline decoration-[rgb(110,94,147)]">Case Studies: The Cost of Negligence</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl">
                           <h3 className="font-bold mb-4 text-indigo-900">The "Soundbox" Strategy</h3>
                           <p className="text-xs text-gray-600 italic">Paytm's Sound Mark registration revolutionized brand identity in retail showrooms, moving from visual to auditory trust.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl">
                           <h3 className="font-bold mb-4 text-indigo-900">The Domain War</h3>
                           <p className="text-xs text-gray-600 italic">How a global fintech recovered its .in domain from a squatter using its US registered trademark as primary evidence of priority.</p>
                        </div>
                     </div>
                  </section>

                  <section id="international-protection" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 uppercase">Global Banking & Madrid Protocol</h2>
                     <p className="mb-6 text-gray-700">
                        Money knows no borders. If your fintech is targeting NRI markets in the USA, UK, or Dubai, your Indian trademark provides zero protection there. We facilitate Madrid Protocol applications to extend your brand's legal sovereignty to over 130 countries in one unified filing.
                     </p>
                  </section>

                  <section id="reviews-section" className="scroll-mt-32 pt-12">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 text-center tracking-tighter">Voices of Visionary Leaders</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                       {reviews.map((rev, i) => (
                         <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-8 -mt-8"></div>
                            <div className="flex text-yellow-500 mb-6">
                               {[...Array(5)].map((_, j) => <FontAwesomeIcon key={j} icon={faAward} className="w-4 h-4 mr-1" />)}
                            </div>
                            <p className="text-gray-600 mb-8 font-medium italic">"{rev.text}"</p>
                            <div className="flex items-center">
                               <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mr-4">{rev.name[0]}</div>
                               <div>
                                  <p className="font-black text-gray-900 text-sm">{rev.name}</p>
                                  <p className="text-xs text-gray-500 font-bold">{rev.role}</p>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-[0.2em] underline underline-offset-8 decoration-gray-200">Intelligence Brief: FAQs</h2>
                    <div className="space-y-6">
                      {faqs.map((f, i) => (
                        <div key={i} className="group border-b border-gray-50 pb-8 last:border-0 hover:bg-gray-50/50 p-4 transition-colors rounded-2xl">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                             <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-4 font-black">Q</div>
                             {f.question}
                          </h3>
                          <p className="text-gray-600 pl-14 leading-relaxed font-medium">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  <section className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                     <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, #6E5E93 0%, transparent 70%)' }}></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Your Legacy, <br />Legally Enforced.</h2>
                        <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto font-light">
                          Don't let your brand's signal be lost in a digital sea of copycats. Secure your frequency today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-indigo-500/50 shadow-2xl text-xl uppercase tracking-widest">Connect to Safety</button>
                           </Link>
                           <a href="tel:+919289707648" className="flex items-center justify-center font-bold text-2xl hover:text-indigo-400 transition-colors">
                              <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4" /> +91-9289707648
                           </a>
                        </div>
                     </div>
                  </section>
                </article>
              </div>
            </main>

            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-10 rounded-[2rem] shadow-2xl border border-gray-800 text-white group">
                 <h3 className="text-2xl font-black mb-6 leading-tight">Brand Health Scan</h3>
                 <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium">Verify your brand's clearance across RBI and Trademark Registry databases in 24 hours.</p>
                 <Link href="/contact-us">
                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">Start Free Scan</button>
                 </Link>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-xs font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Nodes</h3>
                <ul className="space-y-6">
                  {['Business Registration', 'Startup Filing', 'Legal Services', 'Patent Search'].map((item, idx) => (
                    <li key={idx} className="group">
                      <Link href="#" className="flex items-center text-gray-500 group-hover:text-indigo-600 transition-all font-bold">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 group-hover:scale-150 transition-all"></div>
                        <span>{item}</span>
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
