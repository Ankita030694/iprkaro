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
  faScaleBalanced,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { locations, toSlug } from '../locations';

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: toSlug(loc),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find(loc => toSlug(loc) === slug) || "Location";
  const title = `Best Trademark Lawyers in ${location} | IPR Karo`;
  const description = `Looking for the best trademark advocate in ${location}? Get expert legal assistance for trademark registration, brand protection, and IPR services in ${location}. Contact IPR Karo today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.iprkaro.com/trademark-by-city/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.iprkaro.com/trademark-by-city/${slug}`,
      type: 'article',
    }
  };
}

const tocSections = [
  { id: 'why-register-trademark', title: 'Why Register?' },
  { id: 'types-of-trademarks', title: 'What Protected?' },
  { id: 'registration-process-detailed', title: '5-Step Process' },
  { id: 'documents-checklist', title: 'Documents' },
  { id: 'trademark-classes', title: 'Classification' },
  { id: 'objection-handling-mastery', title: 'Handling Objections' },
  { id: 'opposition-proceedings', title: 'Opposition Proceedings' },
  { id: 'renewal-restoration', title: 'Renewal & Restoration' },
  { id: 'assignment-licensing', title: 'Assignment & Licensing' },
  { id: 'international-registration', title: 'Global Protection' },
  { id: 'enforcement-infringement', title: 'Enforcement' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'reviews', title: 'Client Reviews' },
];

export default async function CityTrademarkPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find(loc => toSlug(loc) === slug) || "Location";
  const siteUrl = "https://www.iprkaro.com";
  const pageUrl = `${siteUrl}/trademark-by-city/${slug}`;

  const faqs = [
    {
      question: `How can I register a trademark in ${location}?`,
      answer: `You can register a trademark in ${location} by filing an application through IPR Karo. We handle the entire process from search to registration, ensuring legal compliance and brand protection in your local area. The process starts with a search, followed by application filing (Form TM-A), examination, publication, and finally registration.`
    },
    {
      question: `Who is the best advocate for trademark registration in ${location}?`,
      answer: `IPR Karo provides access to the best trademark lawyers and advocates in ${location} who specialize in intellectual property rights and brand protection. Our team includes senior attorneys with decades of experience handling complex trademark disputes and objections.`
    },
    {
      question: `What is the cost of trademark registration in ${location}?`,
      answer: `The government fee for trademark registration in ${location} for individuals, startups, and MSMEs is ₹4,500. For large entities, it is ₹9,000. Our professional fees for expert filing and search start from ₹1499, making it highly affordable for local businesses.`
    },
    {
      question: `Do I need to visit an office in ${location}?`,
      answer: `No, the entire process is 100% digital. Our experts in ${location} utilize the official IP India online portal to manage your application efficiently. All correspondence and hearings (if any) are handled remotely by our advocates.`
    },
    {
      question: `How long is a trademark valid in ${location}?`,
      answer: `A registered trademark in ${location} is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years to maintain your exclusive rights over the brand name or logo.`
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
    "headline": `Expert Trademark Registration Services in ${location} - Complete Guide 2024`,
    "description": `Comprehensive guide by top advocates and lawyers in ${location} for trademark registration. Learn about the process, costs, documents, and brand protection strategies in ${location}.`,
    "author": { "@type": "Organization", "name": "IPR Karo" },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
    }
  };

  const breadcrumbItems = [
    { label: "Services", href: "/our-services" },
    { label: "Trademark Registration", href: "/our-services/trademark-registration" },
    { label: `Registration in ${location}`, href: pageUrl },
  ];

  const reviews = [
    {
      author: "Rahul S.",
      location: location,
      rating: 5,
      date: "2024-02-15",
      body: `Excellent service for my business in ${location}. They handled a complex objection on my brand name and got it accepted without a hearing. Highly professional advocates.`
    },
    {
      author: "Pooja Gupta",
      location: location,
      rating: 5,
      date: "2024-01-20",
      body: `IPR Karo made the trademark filing process very smooth. I am from ${location} and everything was done online. They even helped me get an MSME certificate to save on government fees.`
    },
    {
      author: "Vikram Singh",
      location: location,
      rating: 5,
      date: "2023-11-10",
      body: `If you are looking for the best trademark lawyer in ${location}, look no further. Their expertise in IP law is top-notch. My trademark was registered in just 8 months.`
    },
    {
      author: "Ananya Mehta",
      location: location,
      rating: 5,
      date: "2024-03-05",
      body: `Very responsive team. They explained the trademark classes clearly for my startup in ${location}. Filing was done on the same day.`
    }
  ];

  const reviewSnippetSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Trademark Registration Service by IPR Karo in ${location}`,
    "image": `${siteUrl}/assets/trademark-registration-og.jpg`,
    "description": `Expert legal assistance for trademark filing, objection handling, and registration in ${location}.`,
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
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
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Best Advocate | Best Lawyers in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>{location} for Trademark Registration</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Secure your brand's future in {location} with high-end legal expertise. We provide premium IP protection services, from strategic searches to aggressive defense in opposition hearings. 100% Online process with same-day filing capability.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Register Brand in {location}
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
                
                <section id="why-register-trademark" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Trademark Registration in {location}?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Your brand name, logo, and slogan are the most visible assets of your business in <strong>{location}</strong>. They distinguish you from competitors and carry the trust of your customers. However, in India's competitive market, simply using a name does not guarantee ownership. Without a registered trademark, your {location} business is operating on borrowed time.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    <strong>Trademark Registration</strong> gives you the exclusive legal right to use your brand across {location} and the rest of India. It empowers you to sue infringers for damages and stop them from using similar names. It essentially turns your reputation into a tangible asset that can be licensed, franchised, or sold for profit.
                  </p>
                   <div className="bg-blue-50 border-l-4 border-[rgb(110,94,147)] p-4 md:p-8 my-6 md:my-8 rounded-r-lg">
                    <p className="text-base md:text-xl text-blue-900 italic leading-relaxed">
                      "A trademark is the single most valuable asset a company in {location} can own. It is the bridge between your local product and the customer's trust."
                    </p>
                  </div>
                </section>

                <section id="types-of-trademarks" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Can Be Protected Under Trademark Law?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The Trade Marks Act, 1999, allows for the registration of various types of marks for your business in <strong>{location}</strong>, provided they are capable of being represented graphically.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Word Marks</h3>
                        <p className="text-gray-700 text-sm">Protects the name itself (e.g., your store name in {location}) regardless of font or style.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Device Marks (Logos)</h3>
                        <p className="text-gray-700 text-sm">Protects the visual representation, logo, or symbol associated with your brand.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Slogans & Taglines</h3>
                        <p className="text-gray-700 text-sm">Protects distinctive catchphrases used in advertising across {location}.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Shape Marks</h3>
                        <p className="text-gray-700 text-sm">Protects the distinctive 3D shape of a product or its packaging.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Sound Marks</h3>
                        <p className="text-gray-700 text-sm">Protects a specific sound associated with a brand (e.g., signature tunes).</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Logo & Name Combo</h3>
                        <p className="text-gray-700 text-sm">A holistic protection covering your brand's full visual identity.</p>
                     </div>
                  </div>
                </section>

                <section id="registration-process-detailed" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Detailed 5-Step Registration Ecosystem in {location}</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Registering a trademark for your business in <strong>{location}</strong> is a legal procedure governed by the Trade Marks Act, 1999. It is not an instant process but a journey that we navigate for you with precision.
                  </p>

                  <div className="space-y-4 md:space-y-8 mt-6 md:mt-8">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">1</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">1</span>
                             <FontAwesomeIcon icon={faSearch} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Comprehensive Brand Search in {location}
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                            We use advanced algorithms to find phonetic and visual look-alikes across {location} and the rest of India. This "Clearance Search" prevents objection risks later. A thorough search reduces the probability of rejection by 80%.
                          </p>
                       </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">2</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">2</span>
                             <FontAwesomeIcon icon={faFileContract} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Application Filing (Form TM-A)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             We identify the correct "Class" and draft the application for your {location} brand. We carefully structure your "User Affidavit" to claim prior usage rights. Once filed, you can start using the ™ symbol.
                          </p>
                       </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">3</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">3</span>
                             <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Examination & Reply
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The Registrar examines the mark. If objections are raised, our <strong>advocates in {location}</strong> draft a robust legal reply. We cite relevant precedents to overcome Section 9 or 11 objections.
                          </p>
                       </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">4</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">4</span>
                             <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Journal Publication & Opposition
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             Once accepted, the mark is published in the Trade Marks Journal. This opens a 4-month window for third parties to oppose. Our litigation team defends your rights aggressively in {location}.
                          </p>
                       </div>
                    </div>

                    {/* Step 5 */}
                     <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">5</div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">5</span>
                             <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Registration Certificate
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The Registration Certificate is issued digitally. You can now use the ® symbol. This certificate acts as prima facie evidence of your ownership for your {location} business.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Required Documents For {location} Businesses</h2>
                   
                   <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                           <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Individuals & Proprietors in {location}</h3>
                           <ul className="space-y-3">
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">PAN Card and Aadhaar Card of the applicant.</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">Logo/Brand Image (JPEG format).</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">User Affidavit (if claiming prior use in {location}).</span>
                                </li>
                           </ul>
                       </div>

                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                           <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Companies & Startups in {location}</h3>
                           <ul className="space-y-3">
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">Certificate of Incorporation / Partnership Deed.</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">MSME / Udyam Registration (for 50% Fee Rebate).</span>
                                </li>
                                <li className="flex items-start">
                                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                     <span className="text-sm text-gray-700">Board Resolution for the local {location} branch.</span>
                                </li>
                           </ul>
                       </div>
                   </div>
                </section>

                <section id="trademark-classes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Decoding Trademark Classes (Nice Classification)</h2>
                   <div className="overflow-x-auto mb-6">
                      <table className="w-full text-left border-collapse rounded-lg overflow-hidden text-sm">
                         <thead className="bg-[rgb(110,94,147)] text-white">
                            <tr>
                               <th className="p-3">Class</th>
                               <th className="p-3">Category</th>
                               <th className="p-3">Common in {location}</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white"><td className="p-3 font-bold">Class 9</td><td className="p-3">Electronics & Software</td><td className="p-3 text-gray-600">Tech and mobile apps.</td></tr>
                             <tr className="bg-gray-50"><td className="p-3 font-bold">Class 25</td><td className="p-3">Clothing</td><td className="p-3 text-gray-600">Apparel and fashion.</td></tr>
                            <tr className="bg-white"><td className="p-3 font-bold">Class 35</td><td className="p-3">Business Services</td><td className="p-3 text-gray-600">Retail and marketing.</td></tr>
                            <tr className="bg-gray-50"><td className="p-3 font-bold">Class 43</td><td className="p-3">Hospitality</td><td className="p-3 text-gray-600">Restaurants and hotels.</td></tr>
                         </tbody>
                      </table>
                   </div>
                </section>

                <section id="objection-handling-mastery" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Mastery in Handling Objections</h2>
                   <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Section 9 (Absolute Grounds)
                         </h3>
                         <p className="text-gray-700 text-sm md:text-base">Objected because the mark is "descriptive" or "non-distinctive" for your {location} brand.</p>
                      </div>
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Section 11 (Relative Grounds)
                         </h3>
                         <p className="text-gray-700 text-sm md:text-base">Objected because the mark is similar to an already registered trademark in the region.</p>
                      </div>
                   </div>
                </section>

                <section id="opposition-proceedings" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Opposition Proceedings (Section 21)</h2>
                   <p className="text-base text-gray-700">Opposition is a 4-month window where third parties can challenge your mark. Our advocates for <strong>{location}</strong> have specialized experience in successfully defending trademarks during this phase.</p>
                </section>

                <section id="renewal-restoration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Renewal & Restoration</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <FontAwesomeIcon icon={faSync} className="text-2xl text-[rgb(110,94,147)] mb-3" />
                         <h3 className="font-bold text-lg mb-2">Trademark Renewal</h3>
                         <p className="text-sm text-gray-600">A trademark is valid for 10 years in {location}. You can file for renewal indefinitely every decade.</p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl text-[rgb(110,94,147)] mb-3" />
                         <h3 className="font-bold text-lg mb-2">Restoration</h3>
                         <p className="text-sm text-gray-600">If you miss the renewal deadline, we can help you restore your {location} brand within 1 year post-expiry.</p>
                      </div>
                   </div>
                </section>

                <section id="international-registration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Going Global from {location}: Madrid Protocol</h2>
                   <p className="text-base text-gray-700">Does your {location} business have global ambitions? We assist in filing international trademarks across 130+ countries through the Madrid Protocol.</p>
                </section>

                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions for {location}</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 md:pb-8 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-2 md:mr-3 mt-1 text-sm md:text-base">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-lg">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="reviews" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">What Businesses in {location} Say About Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {reviews.map((rev, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
                            <div>
                               <div className="flex text-yellow-500 mb-4 gap-1">
                                  {[...Array(5)].map((_, star) => (
                                     <FontAwesomeIcon key={star} icon={faStar} className="w-3 h-3" />
                                  ))}
                               </div>
                               <p className="text-sm italic text-gray-700 leading-relaxed mb-6">"{rev.body}"</p>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {rev.author[0]}
                               </div>
                               <div>
                                  <h4 className="font-bold text-gray-900 text-sm">{rev.author}</h4>
                                  <p className="text-[10px] text-gray-500">Business Owner in {rev.location}</p>
                                  <p className="text-[10px] text-gray-400">{rev.date}</p>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                <section id="why-choose-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Why Trust IPR Karo for your business in {location}?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-2 md:p-4">
                       <FontAwesomeIcon icon={faRocket} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                       <h3 className="font-bold text-lg mb-2 text-[#FFD700]">Same-Day Filing</h3>
                       <p className="text-gray-400 text-xs md:text-sm">We file your application within 24 hours of receiving documents in {location}.</p>
                    </div>
                    <div className="p-2 md:p-4">
                       <FontAwesomeIcon icon={faGavel} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                       <h3 className="font-bold text-lg mb-2 text-[#FFD700]">Legal Expertise</h3>
                       <p className="text-gray-400 text-xs md:text-sm">Senior attorneys for <strong>{location}</strong> craft your IP strategies, not just forms.</p>
                    </div>
                    <div className="p-2 md:p-4">
                       <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 text-[rgb(110,94,147)] mb-4" />
                       <h3 className="font-bold text-lg mb-2 text-[#FFD700]">Transparent Pricing</h3>
                       <p className="text-gray-400 text-xs md:text-sm">No hidden fees. Professional guidance for our {location} clients at upfront costs.</p>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Start Your Application in {location} Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't leave your {location} brand unprotected. The sooner you file, the sooner you own your mark.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          Register in {location}
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

             {/* Sidebar Tool */}
             <div className="hidden lg:block space-y-8 sticky top-32">
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-6 rounded-xl shadow-lg border border-gray-800 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Enquiry for {location}</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">Check if your brand name is available in {location}. Get a free report.</p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg shadow-md text-sm">Get Free Search</button>
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/our-services/patent-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group"><FontAwesomeIcon icon={faChevronRight} className="w-2 h-2 mr-2" /> Patent Services</Link></li>
                    <li><Link href="/our-services/copyright-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group"><FontAwesomeIcon icon={faChevronRight} className="w-2 h-2 mr-2" /> Copyright Protection</Link></li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
