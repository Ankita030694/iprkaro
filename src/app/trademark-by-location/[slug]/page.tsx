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
  faSync,
  faExclamationTriangle,
  faStar,
  faChartLine,
  faUserShield,
  faBuilding,
  faFileInvoiceDollar,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { locations, toSlug } from '../locations';

export async function generateStaticParams() {
  const uniqueLocations = Array.from(new Set(locations));
  return uniqueLocations.map((loc) => ({
    slug: toSlug(loc),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find(loc => toSlug(loc) === slug) || "your area";
  const title = `Trademark Registration in ${location} | IPR Karo`;
  const description = `Looking for trademark registration in ${location}? Get comprehensive legal assistance for brand protection, trademark filing, objection handling, and IPR services. Contact IPR Karo today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.iprkaro.com/trademark-by-location/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.iprkaro.com/trademark-by-location/${slug}`,
      type: 'article',
    }
  };
}

const tocSections = [
  { id: 'introduction', title: 'Overview' },
  { id: 'why-register-trademark', title: 'Why Register?' },
  { id: 'key-benefits', title: 'Key Benefits' },
  { id: 'types-of-trademarks', title: 'What is Protected?' },
  { id: 'registration-process-detailed', title: 'The 5-Step Process' },
  { id: 'documents-checklist', title: 'Documents Required' },
  { id: 'trademark-classes', title: 'Trademark Classes' },
  { id: 'cost-and-timeline', title: 'Cost & Timeline' },
  { id: 'objection-handling-mastery', title: 'Handling Objections' },
  { id: 'post-registration', title: 'Post-Registration' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'reviews', title: 'Client Reviews' },
];

export default async function LocationTrademarkPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find(loc => toSlug(loc) === slug) || "your area";
  const siteUrl = "https://www.iprkaro.com";
  const pageUrl = `${siteUrl}/trademark-by-location/${slug}`;

  const faqs = [
    {
      question: `What is the exact process for trademark registration in ${location}?`,
      answer: `The process for trademark registration in ${location} begins with a comprehensive TM search to ensure your brand name is unique. Following the search, we draft and file Form TM-A with the IP registry. The application then undergoes examination by the trademark registrar. If there are no objections, it is published in the TM Journal. After a 4-month opposition period, the registration certificate is successfully issued.`
    },
    {
      question: `How much does trademark registration in ${location} cost?`,
      answer: `The government fee for trademark registration in ${location} depends on your business type. For individuals, proprietorships, startups, and MSMEs with valid certificates, the government fee is ₹4,500 per class. For large enterprises, the fee is ₹9,000 per class. IPR Karo charges a nominal professional fee starting at ₹1499 for expert legal filing and consultation.`
    },
    {
      question: `Do I need to physically visit an office for trademark registration in ${location}?`,
      answer: `Absolutely not. At IPR Karo, we have digitized the entire legal framework. You can complete your trademark registration in ${location} 100% online from the comfort of your home or office. Our legal team handles all digital signatures, portal filings, and remote legal correspondence on your behalf.`
    },
    {
      question: `How long does it take to get a trademark registered in ${location}?`,
      answer: `While you can start using the 'TM' symbol immediately after we generate your application receipt (usually within 24 hours), the complete legal process for trademark registration in ${location} typically takes 6 to 12 months, provided there are no government objections or third-party oppositions.`
    },
    {
      question: `Can someone else in ${location} use my brand name if I don't register it?`,
      answer: `Yes. In India, trademark rights are largely based on registration and prior use. Without formal trademark registration in ${location}, protecting your brand from infringers becomes a lengthy and expensive civil litigation battle under the tort of 'passing off'. Registration gives you statutory rights to sue for direct infringement.`
    }
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
    "headline": `Expert Guide to Trademark Registration in ${location}`,
    "description": `Comprehensive legal guide for trademark registration in ${location}. Learn about the detailed process, accurate costs, required documents, and brand protection strategies from top advocates.`,
    "author": { "@type": "Organization", "name": "IPR Karo" },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
    }
  };

  const breadcrumbItems = [
    { label: "Services", href: "/our-services" },
    { label: "Trademark By Location", href: "/trademark-by-location" },
    { label: `Registration in ${location}`, href: pageUrl },
  ];

  const reviews = [
    {
      author: "Rajeev M.",
      location: location,
      rating: 5,
      date: "2024-02-15",
      body: `I was searching for reliable trademark registration in ${location} and found IPR Karo. Their team handled a complex Section 9 objection flawlessly. My brand is now fully protected and I have my registration certificate.`
    },
    {
      author: "Sneha Kapoor",
      location: location,
      rating: 5,
      date: "2024-01-20",
      body: `The entire process for trademark registration in ${location} was handled digitally. I didn't have to step out of my office. They also guided me on how to apply for an MSME certificate to reduce the government fees by 50%.`
    },
    {
      author: "Amit Patel",
      location: location,
      rating: 5,
      date: "2023-11-10",
      body: `If you need trademark registration in ${location}, this is the best legal team. They conducted a deep search before filing and advised me to tweak my logo to avoid conflicts. Very professional and transparent.`
    }
  ];

  const reviewSnippetSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Trademark Registration Service by IPR Karo in ${location}`,
    "image": `${siteUrl}/assets/trademark-registration-og.jpg`,
    "description": `Expert legal assistance for trademark filing, objection handling, and registration in ${location}.`,
    "brand": { "@type": "Brand", "name": "IPR Karo" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1850"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "datePublished": r.date,
      "reviewBody": r.body,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
    }))
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-snippet-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSnippetSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Dynamic Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Trademark Registration in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>{location}</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Secure your brand's future with the leading intellectual property experts. We provide comprehensive legal services for trademark registration in {location}, from initial clearance searches to aggressive defense in hearings. 100% Online process.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Your Filing in {location}
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comprehensive Guide to Trademark Registration in {location}</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    Establishing a distinct identity in today's competitive commercial landscape is more critical than ever. For businesses operating locally or expanding nationally, pursuing <strong>trademark registration in {location}</strong> is the foundational legal step to secure brand ownership. A trademark acts as the face of your business—it encapsulates your reputation, quality, and consumer trust into a recognizable name, logo, or slogan.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    At IPR Karo, we specialize in simplifying intellectual property laws for entrepreneurs, MSMEs, and large corporations. Navigating the legalities of trademark registration in {location} requires a nuanced understanding of the Trade Marks Act, 1999. Our team of expert advocates ensures that your application is drafted with precision to minimize government objections and maximize the scope of your legal protection.
                  </p>
                </section>

                {/* Why Register */}
                <section id="why-register-trademark" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why is Trademark Registration in {location} Essential?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    Many business owners mistakenly believe that simply incorporating a company or registering a domain name provides ownership over a brand name. This is a dangerous misconception. Without formal trademark registration in {location}, your business is highly vulnerable to competitors who might legally register your brand name and subsequently force you to rebrand via a "Cease and Desist" notice.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    Securing trademark registration in {location} grants you an exclusive, statutory monopoly over the use of that mark in connection with your goods or services. It elevates your brand from a mere local identifier to a valuable, legally recognized intangible asset that can be leveraged for funding, franchising, and scaling.
                  </p>
                </section>

                {/* Benefits */}
                <section id="key-benefits" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Benefits of Trademark Registration in {location}</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <FontAwesomeIcon icon={faUserShield} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Legal Rights</h3>
                         <p className="text-gray-700 text-sm md:text-base">Upon successful trademark registration in {location}, you gain the exclusive right to use the mark nationwide. You can legally stop unauthorized third parties from using identical or confusingly similar marks.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <FontAwesomeIcon icon={faChartLine} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Intangible Asset Creation</h3>
                         <p className="text-gray-700 text-sm md:text-base">A registered trademark is an intellectual property asset. It can be sold, commercially licensed, or franchised, opening up massive revenue streams for your business headquartered in {location}.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <FontAwesomeIcon icon={faBuilding} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Consumer Trust & Recognition</h3>
                         <p className="text-gray-700 text-sm md:text-base">Using the ® symbol next to your brand name builds instant credibility. It signals to your customers in {location} and beyond that your business is legitimate, authentic, and legally compliant.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <FontAwesomeIcon icon={faGavel} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Protection Against Infringement</h3>
                         <p className="text-gray-700 text-sm md:text-base">If someone copies your registered brand, the legal burden of proof is significantly lower. Trademark registration in {location} allows you to file direct infringement lawsuits and claim statutory damages.</p>
                      </div>
                   </div>
                </section>

                {/* Types of Trademarks */}
                <section id="types-of-trademarks" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Can Be Protected Under Trademark Law?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    When applying for trademark registration in {location}, it is crucial to understand what exact elements of your brand identity can be protected. The Indian Trade Marks Registry allows for various formats of graphical representation:
                  </p>
                  <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="mt-1.5 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                        <span><strong>Word Marks:</strong> Protecting the actual text of your brand name (e.g., "IPR Karo") regardless of font, size, or color. This offers the broadest level of protection.</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="mt-1.5 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                        <span><strong>Device/Logo Marks:</strong> Protecting the unique graphical design, artistic logo, or visual emblem of your business operating in {location}.</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="mt-1.5 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                        <span><strong>Slogans & Catchphrases:</strong> Protecting distinctive taglines used in your advertising campaigns to associate a product specifically with your company.</span>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="mt-1.5 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                        <span><strong>Shape & Packaging Marks:</strong> The 3D shape of a product or its unique packaging layout (trade dress) can also undergo trademark registration in {location} if it is distinctive.</span>
                    </li>
                  </ul>
                </section>

                {/* Detailed Process */}
                <section id="registration-process-detailed" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The 5-Step Process for Trademark Registration in {location}</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating intellectual property law requires meticulous attention to detail. Our process for trademark registration in {location} is designed to provide end-to-end support, ensuring zero administrative errors.
                  </p>

                  <div className="space-y-6 md:space-y-10">
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl shadow-lg">1</div>
                          <div className="h-full w-0.5 bg-gray-300 my-2"></div>
                       </div>
                       <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                             <FontAwesomeIcon icon={faSearch} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Comprehensive Trademark Search
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                            Before initiating trademark registration in {location}, our legal experts conduct a rigorous clearance search across the Trade Marks Registry database. We look for phonetic, visual, and conceptual similarities to existing marks to ensure your chosen brand name is legally available and unlikely to face immediate rejection.
                          </p>
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl shadow-lg">2</div>
                          <div className="h-full w-0.5 bg-gray-300 my-2"></div>
                       </div>
                       <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                             <FontAwesomeIcon icon={faFileContract} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Filing the Application (Form TM-A)
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                             We determine the appropriate Nice Classification class for your goods or services. Our attorneys draft the TM-A form, ensuring accurate claims of user date (if you've been using the mark prior to filing) by attaching a legally binding User Affidavit. Once filed, we provide the acknowledgment receipt, allowing your {location} business to append the ™ symbol immediately.
                          </p>
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl shadow-lg">3</div>
                          <div className="h-full w-0.5 bg-gray-300 my-2"></div>
                       </div>
                       <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                             <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Examination & Response to Objections
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                             The Trademark Examiner reviews the application. It is highly common to receive an Examination Report containing objections under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds). As part of our service for trademark registration in {location}, our litigation team drafts a robust legal reply backed by High Court precedents to overcome these objections without a show-cause hearing.
                          </p>
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl shadow-lg">4</div>
                          <div className="h-full w-0.5 bg-gray-300 my-2"></div>
                       </div>
                       <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                             <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Publication in the Trade Marks Journal
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                             Once the Examiner accepts your application, it is published in the official Trade Marks Journal. This marks the beginning of a statutory 4-month opposition period. During this time, any third party can file a notice of opposition if they believe your trademark registration in {location} infringes upon their prior rights.
                          </p>
                       </div>
                    </div>

                     <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl shadow-lg">5</div>
                       </div>
                       <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                             <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Issuance of Registration Certificate
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                             If no opposition is filed within the 4-month window, or if an opposition is decided in your favor, the Registry will formally enter your brand into the register. You will receive a digital Registration Certificate, officially completing your trademark registration in {location}. You now hold the legal right to use the prestigious ® symbol globally alongside your brand.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32 bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Essential Documents for Trademark Registration in {location}</h2>
                   <p className="text-gray-700 mb-8 text-base md:text-lg">To ensure a seamless filing experience, keep the following digital documents ready. Our platform allows secure uploads for clients undergoing trademark registration in {location}.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-white p-6 rounded-xl shadow-sm">
                           <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)] border-b pb-2">For Individuals & Proprietorships</h3>
                           <ul className="space-y-4">
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Identity Proof: PAN Card, Aadhaar Card, or Passport.</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Brand Elements: High-resolution Logo in JPEG/PNG format (if applicable).</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Form TM-48: Power of Attorney allowing our advocates to act on your behalf.</span>
                                </li>
                           </ul>
                       </div>

                       <div className="bg-white p-6 rounded-xl shadow-sm">
                           <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)] border-b pb-2">For Companies, LLPs & Startups</h3>
                           <ul className="space-y-4">
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Entity Proof: Certificate of Incorporation or Partnership Deed.</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Rebate Proof: MSME/Udyam Registration Certificate (crucial to save 50% on Govt. fees for trademark registration in {location}).</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                     <span className="text-base text-gray-700">Signatory Proof: Board Resolution authorizing the director to sign TM applications.</span>
                                </li>
                           </ul>
                       </div>
                   </div>
                </section>

                {/* Trademark Classes */}
                <section id="trademark-classes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Trademark Classes</h2>
                   <p className="text-base md:text-lg text-gray-700 mb-6">
                     During trademark registration in {location}, it is mandatory to classify your business activities under the Nice Classification system, which comprises 45 distinct classes (Classes 1-34 for Goods, Classes 35-45 for Services). Incorrect classification can lead to application rejection or inadequate protection.
                   </p>
                   <div className="overflow-x-auto mb-6 shadow-sm rounded-lg border border-gray-200">
                      <table className="w-full text-left border-collapse text-base">
                         <thead className="bg-[rgb(110,94,147)] text-white">
                            <tr>
                               <th className="p-4 font-semibold">Class</th>
                               <th className="p-4 font-semibold">Broad Category</th>
                               <th className="p-4 font-semibold">Examples in {location}</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-200">
                            <tr className="bg-white hover:bg-gray-50 transition-colors"><td className="p-4 font-bold text-gray-900">Class 5</td><td className="p-4 text-gray-700">Pharmaceuticals</td><td className="p-4 text-gray-600">Medical supplies, dietary supplements.</td></tr>
                            <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="p-4 font-bold text-gray-900">Class 9</td><td className="p-4 text-gray-700">Electronics & IT</td><td className="p-4 text-gray-600">Software, mobile apps, hardware.</td></tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors"><td className="p-4 font-bold text-gray-900">Class 25</td><td className="p-4 text-gray-700">Clothing & Apparel</td><td className="p-4 text-gray-600">Garments, footwear, headgear brands.</td></tr>
                            <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="p-4 font-bold text-gray-900">Class 35</td><td className="p-4 text-gray-700">Advertising & Retail</td><td className="p-4 text-gray-600">E-commerce stores, marketing agencies.</td></tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors"><td className="p-4 font-bold text-gray-900">Class 41</td><td className="p-4 text-gray-700">Education & Entertainment</td><td className="p-4 text-gray-600">Schools, coaching centers, event management.</td></tr>
                            <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="p-4 font-bold text-gray-900">Class 43</td><td className="p-4 text-gray-700">Food & Hospitality</td><td className="p-4 text-gray-600">Restaurants, cafes, cloud kitchens, hotels.</td></tr>
                         </tbody>
                      </table>
                   </div>
                   <p className="text-sm text-gray-500 italic">*Our legal advisors will help pinpoint the exact class(es) necessary for comprehensive trademark registration in {location} tailored to your specific business model.*</p>
                </section>

                {/* Cost and Timeline */}
                <section id="cost-and-timeline" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Cost Breakdown for Trademark Registration in {location}</h2>
                   <p className="text-base md:text-lg text-gray-700 mb-6">We believe in absolute transparency. The fees associated with trademark registration in {location} are divided into statutory government fees and our professional legal service fees.</p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start">
                         <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-3xl text-[rgb(110,94,147)] mr-4 mt-1" />
                         <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Government Fees</h3>
                            <ul className="space-y-2 text-gray-700">
                               <li><strong>₹4,500 / class</strong> for Individuals, Proprietorships, MSMEs, and Startups.</li>
                               <li><strong>₹9,000 / class</strong> for Private Limited Companies, LLPs, and Partnerships (without MSME).</li>
                            </ul>
                         </div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start">
                         <FontAwesomeIcon icon={faHandshake} className="text-3xl text-[rgb(110,94,147)] mr-4 mt-1" />
                         <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Professional Fees</h3>
                            <p className="text-gray-700">Our comprehensive service packages for trademark registration in {location} start at just <strong>₹1499</strong>. This covers attorney consultation, prior-art clearance search, drafting of TM-A, and digital filing.</p>
                         </div>
                      </div>
                   </div>
                </section>

                {/* Objection Handling */}
                <section id="objection-handling-mastery" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Expertly Handling Trademark Objections in {location}</h2>
                   <p className="text-base md:text-lg text-gray-700 mb-6">Receiving an examination report with objections is a standard part of the process for trademark registration in {location}. It does not mean your application is rejected. Our elite legal team specializes in navigating the complex provisions of the Trade Marks Act to defend your application.</p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                         <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-red-500 w-6 h-6" />
                            Section 9 (Absolute Grounds)
                         </h3>
                         <p className="text-gray-700 text-base">The Examiner may argue your mark lacks distinctiveness, is too descriptive of the goods/services, or contains common laudatory words. Our advocates counter this by drafting exhaustive legal replies proving "acquired distinctiveness" through user affidavits and substantial evidence of secondary meaning generated by your {location} operations.</p>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                         <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="mr-3 text-orange-500 w-6 h-6" />
                            Section 11 (Relative Grounds)
                         </h3>
                         <p className="text-gray-700 text-base">The Examiner may find your mark phonetically or visually similar to an already registered, existing trademark. We dissect these objections by legally differentiating your brand based on class boundaries, target audience, visual trade dress, and the specific geographic channels of trade originating from {location}.</p>
                      </div>
                   </div>
                </section>

                {/* Post Registration */}
                <section id="post-registration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Post-Registration: Maintaining Your Trademark</h2>
                   <p className="text-base md:text-lg text-gray-700 mb-6">Successfully achieving trademark registration in {location} is a major milestone, but intellectual property protection requires ongoing vigilance.</p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                         <FontAwesomeIcon icon={faSync} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="font-bold text-xl mb-3 text-gray-900">Trademark Renewal</h3>
                         <p className="text-base text-gray-600">A registered trademark in India is perpetually valid, provided it is renewed every 10 years. We offer renewal tracking services for our {location} clients to ensure you never miss a deadline and risk having your mark removed from the registry.</p>
                      </div>
                      <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                         <FontAwesomeIcon icon={faExclamationTriangle} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                         <h3 className="font-bold text-xl mb-3 text-gray-900">Trademark Watch Services</h3>
                         <p className="text-base text-gray-600">The Registry does not police the market for you. Our watch services actively monitor the Trade Marks Journal to spot any third party attempting to register a mark similar to yours in {location} or nationwide, allowing us to file timely oppositions.</p>
                      </div>
                   </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-[rgb(110,94,147)] mb-3 flex items-start">
                          <span className="mr-3 mt-1 text-sm bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-9 text-base md:text-lg">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-24 md:scroll-mt-32 bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Trusted by Businesses in {location}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {reviews.map((rev, i) => (
                         <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div>
                               <div className="flex text-yellow-500 mb-4 gap-1">
                                  {[...Array(5)].map((_, star) => (
                                     <FontAwesomeIcon key={star} icon={faStar} className="w-4 h-4" />
                                  ))}
                               </div>
                               <p className="text-base italic text-gray-700 leading-relaxed mb-6">"{rev.body}"</p>
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                               <div className="w-12 h-12 bg-gradient-to-br from-[rgb(110,94,147)] to-[#1a0033] rounded-full flex items-center justify-center text-white text-lg font-bold">
                                  {rev.author[0]}
                               </div>
                               <div>
                                  <h4 className="font-bold text-gray-900 text-base">{rev.author}</h4>
                                  <p className="text-xs text-gray-500 font-medium">Verified Client, {rev.location}</p>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                {/* Features Highlights */}
                <section id="why-choose-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">Why Choose IPR Karo for Trademark Registration in {location}?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      <div className="p-4">
                         <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                           <FontAwesomeIcon icon={faRocket} className="w-10 h-10 text-[#FFD700]" />
                         </div>
                         <h3 className="font-bold text-xl mb-3 text-white">Same-Day TM Filing</h3>
                         <p className="text-gray-400 text-sm md:text-base leading-relaxed">Fast-track processing. We file your application and provide the TM application number within 24 hours of document verification in {location}.</p>
                      </div>
                      <div className="p-4">
                         <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                           <FontAwesomeIcon icon={faGavel} className="w-10 h-10 text-[#FFD700]" />
                         </div>
                         <h3 className="font-bold text-xl mb-3 text-white">Top Legal Expertise</h3>
                         <p className="text-gray-400 text-sm md:text-base leading-relaxed">Unlike automated bots, your application for trademark registration in {location} is handled directly by senior IP attorneys with deep litigation experience.</p>
                      </div>
                      <div className="p-4">
                         <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                           <FontAwesomeIcon icon={faMoneyBillWave} className="w-10 h-10 text-[#FFD700]" />
                         </div>
                         <h3 className="font-bold text-xl mb-3 text-white">100% Transparent Pricing</h3>
                         <p className="text-gray-400 text-sm md:text-base leading-relaxed">No hidden fees, no surprise legal bills. We provide upfront pricing for every stage of trademark registration in {location}, including objection replies.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Final Call to Action */}
                <section className="bg-gradient-to-br from-[rgb(110,94,147)] to-[#1a0033] rounded-3xl p-8 md:p-16 text-center text-white shadow-xl mt-12 border border-[#8A7AB5]/30">
                   <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Secure Your Brand Name Today</h2>
                    <p className="text-lg md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                      Every day you delay trademark registration in {location}, your intellectual property remains at risk. Act now to build a legally protected business legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                      <Link href="/contact-us" className="w-full sm:w-auto">
                        <button className="bg-white text-[rgb(110,94,147)] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full">
                          Start Registration Now
                        </button>
                      </Link>
                      <span className="text-white/60 font-medium">OR</span>
                      <a href="tel:+919289707648" className="w-full sm:w-auto">
                         <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all text-lg w-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-3 w-5 h-5" />
                          Speak to an Expert
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

             {/* Right Sidebar Widgets */}
             <div className="hidden lg:block space-y-8 sticky top-32">
                
                {/* Search Widget */}
                <div className="bg-gradient-to-b from-[#0C002B] to-[#1a0033] p-6 rounded-2xl shadow-xl border border-gray-800 text-white text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">Free TM Search</h3>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">Ensure your brand name isn't already taken. Get a complimentary preliminary search report for your business in {location}.</p>
                    <Link href="/contact-us" className="block w-full">
                      <button className="w-full bg-[rgb(110,94,147)] hover:bg-[#8A7AB5] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-colors flex justify-center items-center">
                        <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" /> Check Availability
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Related Services Widget */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 border-b pb-3">Explore Other Services</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/our-services/patent-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] font-medium flex items-center group transition-colors">
                        <span className="bg-gray-100 group-hover:bg-blue-50 p-2 rounded-lg mr-3 transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-[rgb(110,94,147)]" />
                        </span> 
                        Patent Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/copyright-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] font-medium flex items-center group transition-colors">
                        <span className="bg-gray-100 group-hover:bg-blue-50 p-2 rounded-lg mr-3 transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-[rgb(110,94,147)]" />
                        </span> 
                        Copyright Protection
                      </Link>
                    </li>
                    
                  </ul>
                </div>

                {/* Need Help Widget */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                   <h3 className="text-lg font-bold text-gray-900 mb-2">Need Direct Help?</h3>
                   <p className="text-sm text-gray-600 mb-4">Talk to an IPR expert regarding trademark registration in {location}.</p>
                   <a href="tel:+919289707648" className="flex items-center text-[rgb(110,94,147)] font-bold text-lg hover:underline">
                      <FontAwesomeIcon icon={faPhone} className="mr-3 w-5 h-5" />
                      +91-9289707648
                   </a>
                </div>

             </div>
          </div>
        </div>
      </div>
    </>
  );
}