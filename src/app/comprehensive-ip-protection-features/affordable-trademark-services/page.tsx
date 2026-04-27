import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Affordable Trademark Services India | Save 60% on IP Protection',
  description: 'Secure your brand with affordable trademark services in India. We combine legal expertise with technology to cut costs, not quality. Transparent pricing, no hidden fees.',
  keywords: [
    'affordable trademark services',
    'low cost trademark registration',
    'trademark filing india',
    'trademark registration',
    'patent services',
    'copyright protection',
    'cheap trademark filing',
    'brand registration cost',
    'trademark attorney fees india',
    'ipr karo trademark'
  ],
  openGraph: {
    title: 'Affordable Trademark Services India | Save 60% on IP Protection',
    description: 'Professional trademark services that fit your budget. Expert attorneys, AI-driven efficiency, and complete transparency. Start protecting your brand today.',
    url: 'https://www.iprkaro.com/comprehensive-ip-protection-features/affordable-trademark-services',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/affordable-trademark-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Affordable Trademark Services India',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/comprehensive-ip-protection-features/affordable-trademark-services',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Smart Protection' },
  { id: 'affordable-vs-cheap', title: 'Affordable vs Cheap' },
  { id: 'price-breakdown', title: 'Cost Breakdown' },
  { id: 'hidden-costs', title: 'Hidden Costs Exposed' },
  { id: 'tech-advantage', title: 'The Tech Advantage' },
  { id: 'detailed-process', title: 'Detailed Process' },
  { id: 'documentation', title: 'Required Documents' },
  { id: 'legal-framework', title: 'Legal Framework' },
  { id: 'sector-guide', title: 'Sector Guide' },
  { id: 'risks-of-diy', title: 'Risks of DIY' },
  { id: 'comparison', title: 'IPRKaro vs Others' },
  { id: 'success-stories', title: 'Client Success' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "How can you offer trademark services at such low prices?",
    answer: "We have not cut corners on legal expertise. Instead, we have optimized the administrative side of the process. In traditional firms, junior lawyers spend hours on data entry, document formatting, and basic search tasks. We use proprietary software to automate these steps. This reduces our manual workload by nearly 70 percent, allowing us to pass those direct savings on to you. You pay for the attorney's brain, not their typing speed."
  },
  {
    question: "Does 'affordable' mean I get less legal protection?",
    answer: "Absolutely not. The legal validity of a trademark depends on the accuracy of the filing, the classification, and the response to objections. Our senior attorneys oversee every single application. The difference is that we handle the routine paperwork faster. Your trademark application goes to the exact same Registrar and carries the exact same legal weight as one filed by the most expensive firm in Mumbai or Delhi."
  },
  {
    question: "Are there really zero hidden fees?",
    answer: "Yes. Our initial quote covers professional fees and government challan fees for the standard process. Common hidden costs at other firms include 'cousin costs' like extra charges for forwarding a certificate or responding to a simple clerical query. We list everything upfront. If a complex legal objection arises (which happens in about 20 percent of cases) that requires a fresh legal argument, we inform you immediately with a flat fee quote, but for the vast majority of clean applications, you pay what you see."
  },
  {
    question: "Do you handle trademark objections if they arise?",
    answer: "Yes, we do. An objection is not a rejection; it is part of the process. If the Registry raises an objection under Section 9 or 11, our team is equipped to draft a legal reply. While basic administrative responses are often included, substantive legal arguments may carry a separate nominal fee, which is still significantly lower than industry standards due to our efficient drafting templates."
  },
  {
    question: "Can I just file it myself to save even more money?",
    answer: "You technically can, but it is risky. The government portal is complex. Selecting the wrong 'Class' of goods or incorrectly claiming a 'User Date' can render your trademark useless even if it gets registered. We have seen countless businesses spend money on government fees for a self-filed application, only to have it abandoned later due to technical errors. Our service bridges the gap between expensive lawyers and risky DIY."
  },
  {
    question: "What happens if my trademark gets opposed by a competitor?",
    answer: "Opposition proceedings are legal battles that occur after your mark is published. If a third party files an opposition, we represent you. We handle the counter-statements, evidence filing, and hearings. Since we know your case from day one, we can build a stronger defense strategy compared to hiring a litigator from scratch at that stage."
  },
  {
    question: "Do you offer services for international trademarks?",
    answer: "Yes. Once you have a base application in India, we can help you expand globally using the Madrid Protocol. This is a cost-effective way to register in up to 124 countries with a single application. We also have partnerships with foreign associates for direct filings in countries like the USA and China."
  },
  {
    question: "Is there a refund policy if the search shows my name is taken?",
    answer: "Yes. If you avail our comprehensive search package and we find that your desired name has a direct conflict that makes registration impossible, we do not force you to proceed. We can offer a consultation to help you tweak the name or refund the professional fee component for the filing stage that did not happen."
  }
];

export default function AffordableTrademarkServices() {
  const breadcrumbItems = [
    { label: "Features", href: "/comprehensive-ip-protection-features" },
    { label: "Affordable Trademark Services", href: "/comprehensive-ip-protection-features/affordable-trademark-services" },
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
    "headline": "Affordable Trademark Services in India: Quality Protection for Every Budget",
    "description": "Comprehensive guide to securing trademark registration in India at a fraction of the traditional cost, without compromising on legal quality.",
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
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Affordable Trademark Registration Service",
    "description": "Professional trademark filing and protection service optimized for startups and SMEs.",
    "image": "https://www.iprkaro.com/assets/affordable-trademark-og.jpg",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "offers": {
      "@type": "Offer",
      "price": "1999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "420"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Vikram S." },
        "reviewBody": "I was quoted huge amounts by local lawyers. IPRKaro did the same job for a third of the price and kept me updated constantly."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Meera K." },
        "reviewBody": "Transparent and quick. No running around for documents. The digital process is a lifesaver for busy founders."
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 text-center">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-10 text-white">
               Premium Protection. <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Affordable Pricing.</span>
             </h1>
             <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-3xl mx-auto">
               Expert trademark services engineered for India's growth engines. Save up to 60% on legal fees without compromising on safety.
             </h2>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-lg">
                 Get A Free Quote
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Smart Protection for the Modern Indian Business</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For decades, intellectual property protection in India was a luxury reserved for large corporations with deep pockets. Small business owners, creative artists, and startup founders were often forced into a difficult compromise: pay exorbitant legal fees to established firms or leave their valuable brand identity vulnerable to theft. The assumption has always been that "good lawyers are expensive" and "cheap services are unreliable."
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At IPRKaro, we have fundamentally challenged and dismantled this assumption. We asked a simple question: Why exactly is trademark registration so expensive? Is it the government fee? No, that is fixed by statute. Is it the complexity of the law? Partly, but standard filings follow a predictable pattern. The real cost driver in traditional law firms is inefficiency. They rely on heavy, manual processes, paper-based workflows, and billable hours that charge you for every minute of administrative work, from typing out a form to mailing a letter.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We built a new model. By integrating advanced legal-tech automation into the workflow, we have stripped away the inefficiency. We provide the same high-caliber attorney oversight and the exact same government certification, but at a fraction of the cost. This is not about being "cheap" in quality; it is about being efficient, transparent, and democratic. In a competitive Indian market where every rupee of capital counts, choosing an affordable trademark service is not just a saving; it is a strategic business decision that frees up your resources for growth.
                  </p>
                </section>

                <section id="affordable-vs-cheap" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Critical Difference: Affordable vs. Cheap</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When we say "affordable," we mean optimized value. It is vital to distinguish this from "cheap" services that flood the internet. A cheap service often cuts corners where it hurts you most: the quality of the trademark search and the precise drafting of the application. A trademark is a legal asset; a poorly filed application is worse than no application at all because it gives you a false sense of security.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                       <h3 className="text-xl font-bold text-red-800 mb-4">The "Cheap" Trap</h3>
                       <p className="text-gray-700 mb-4">
                         Aggregators who offer registration for rock-bottom prices often use automated bots to file applications without human review. They might file your brand under the wrong "Class" (e.g., filing a clothing brand under "Textiles" instead of "Ready-made Garments") or ignore potential conflicts with existing marks.
                       </p>
                       <ul className="list-disc pl-5 space-y-2 text-gray-700">
                         <li><strong>Result:</strong> Your application gets objected to or abandoned.</li>
                         <li><strong>Cost:</strong> You lose the government fee entirely, waste 6-12 months, and have to start over.</li>
                       </ul>
                    </div>
                    <div className="bg-[rgba(110,94,147,0.1)] p-6 rounded-xl border border-[rgba(110,94,147,0.2)]">
                       <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4">The IPRKaro Model</h3>
                       <p className="text-gray-700 mb-4">
                         We use technology to speed up data entry, but a qualified attorney reviews every single file. We ensure the classification is perfect and the description of goods is broad enough to protect your future expansions but specific enough to be accepted by the Examiner.
                       </p>
                       <ul className="list-disc pl-5 space-y-2 text-gray-700">
                         <li><strong>Result:</strong> A robust application with a high chance of approval and legal defensibility.</li>
                         <li><strong>Cost:</strong> One-time professional fee with long-term value.</li>
                       </ul>
                    </div>
                  </div>
                </section>

                <section id="price-breakdown" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Transparent Cost Breakdown</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is the cornerstone of our affordability. Many clients come to us confused by the vague quotes they receive elsewhere. "Does this cover the government fee?" "Is there a tax on top?" "What about the stamp paper?" Here is exactly what you pay for when you register a trademark in India, broken down to the last rupee.
                  </p>
                  
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Component</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Estimated Cost</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Government Fee</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹4,500 (MSME/Individual)</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Fixed by the Govt of India. This is ₹4,500 for Individuals, Startups (DPIIT Recognized), and MSMEs. For other large companies, it is ₹9,000.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Professional Fee</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Differs by Provider</td>
                          <td className="px-6 py-4 text-sm text-gray-500">This is where we save you money. Our fees are up to 60% lower than traditional firms because we don't have overheads like marble-floored offices.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stamp Duty</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~₹100 - ₹500</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For legal authorization (Power of Attorney). Varies by state (e.g., Maharashtra is higher than Delhi). We handle the procurement.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    * Government fees are subject to change by the Ministry. The figures above are standard for most applicants.
                  </p>
                </section>

                <section id="hidden-costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Exposing the Hidden Fees</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A low initial quote is often a hook to get you in the door. We have audited numerous invoices from across the industry and found a disturbing pattern of "hidden" charges that appear only after you have signed up and paid the advance.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                       <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mt-1">!</div>
                       <div className="ml-4">
                         <h4 className="text-lg font-bold text-gray-900">The "Clerical" Charge</h4>
                         <p className="text-gray-700">Some firms charge you extra just to forward a letter or email received from the Registry. They call it "Administrative Handling." We consider communication part of the service. If the Registry sends a mail, we forward it to you instantly, for free.</p>
                       </div>
                    </li>
                    <li className="flex items-start">
                       <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mt-1">!</div>
                       <div className="ml-4">
                         <h4 className="text-lg font-bold text-gray-900">Affidavit Fees</h4>
                         <p className="text-gray-700">If you need to define a "User Date" to claim prior usage, an affidavit (Rule 25) is required. Many providers charge exorbitant rates (₹2000-₹5000) for this standard template. We keep it strictly nominal or include it in higher-tier packages.</p>
                       </div>
                    </li>
                    <li className="flex items-start">
                       <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mt-1">!</div>
                       <div className="ml-4">
                         <h4 className="text-lg font-bold text-gray-900">Certificate Delivery</h4>
                         <p className="text-gray-700">Believe it or not, some services ask for payment to email you the final Registration Certificate. That is your document, issued by the government. We send it to you instantly, for free, as soon as it is generated.</p>
                       </div>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-[rgba(110,94,147,0.1)] border border-[rgba(110,94,147,0.2)] rounded-lg">
                    <p className="text-[rgb(110,94,147)] font-medium text-center">
                      At IPRKaro, our pricing policy is simple: What you see is what you pay. No surprises.
                    </p>
                  </div>
                </section>

                <section id="tech-advantage" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Tech Advantage: How We Do It</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We are often asked: "If your prices are so low, how do you sustain the business?" The answer lies in our proprietary legal-tech infrastructure. We have digitized the entire trademark lifecycle.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-gray-900 mb-2">AI-Assisted Search</h3>
                      <p className="text-sm text-gray-600">Our algorithms scan the trademark database faster than any human, flagging potential conflicts instantly. This allows our attorneys to focus on complex analysis rather than scrolling through lists.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-gray-900 mb-2">Automated Drafting</h3>
                      <p className="text-sm text-gray-600">We generate error-free forms using smart templates that pull data directly from your onboarding form. This eliminates typos and reduces the drafting time from hours to minutes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">🔔</div>
                      <h3 className="font-bold text-gray-900 mb-2">Real-Time Updates</h3>
                      <p className="text-sm text-gray-600">Our system automatically tracks the status of your application at the Registry API and notifies you via WhatsApp or Email the moment something changes.</p>
                    </div>
                  </div>
                </section>

                <section id="detailed-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Detailed Registration Process Step-by-Step</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the roadmap ahead helps you plan your business launch. Here is a granular look at how we handle your application, from the first click to the final certificate.
                  </p>
                  
                  <div className="space-y-8">
                     <div className="borderl-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: The Clearance Search (Day 1)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Before filing, we must ensure your name is available. A "Direct Hit" search checks for identical names. A "Similarity Search" checks for phonetically or visually similar marks (e.g., "Nike" vs "Nyke"). We use both proprietor-based and device-based search strategies. If we find a conflict, we advise you on modifications to increase your chances of success.
                        </p>
                     </div>
                     <div className="border-l-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Class Selection & Description (Day 1-2)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Trademarks are filed under 45 different classes. A restaurant is Class 43; a coffee brand is Class 30. Filing in the wrong class protects nothing. We help you identify all relevant classes. Crucially, we draft a "Description of Goods" that covers your current products and your likely future expansions, ensuring your IP grows with you.
                        </p>
                     </div>
                     <div className="border-l-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Filing Form TM-A (Day 2-3)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           We prepare the formal application (Form TM-A). We upload your logo in the specific pixel resolution required by the Registry. We attach your User Affidavit if you are claiming prior use. Once filed, we pay the government fee digitally and generate your official "TM Application Number" and payment receipt. You can now legally use the ™ symbol.
                        </p>
                     </div>
                     <div className="border-l-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Examination (Month 1-3)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           The Registrar examines the mark. If they have concerns, they issue an Examination Report. If not, it moves to "Accepted". If there is an objection, don't panic. It's standard. We have 30 days to file a reply.
                        </p>
                     </div>
                     <div className="border-l-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Journal Publication (Month 4-8)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           The mark is published in the Trade Marks Journal. This acts as a public notice. Third parties (competitors) have 4 months to oppose your mark. If no opposition is filed, the mark is deemed safe.
                        </p>
                     </div>
                     <div className="border-l-4 border-[rgb(110,94,147)] pl-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Step 6: Registration (Month 9-12)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Congratulations! The Registry issues the Registration Certificate. Your mark is now valid for 10 years, and you can upgrade the ™ symbol to the ® symbol.
                        </p>
                     </div>
                  </div>
                </section>

                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Required Documents Checklist</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the ways we keep costs low is by reducing back-and-forth emails. Having your documents ready speeds up the process significantly. The requirements vary slightly based on your entity type.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-[rgb(110,94,147)] mb-3">For Individuals / Sole Proprietorships</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                           <li><strong>Identity Proof:</strong> PAN Card or Aadhar Card or Passport of the proprietor.</li>
                           <li><strong>Address Proof:</strong> Recent Utility bill or Driving License.</li>
                           <li><strong>Logo/Brand Name:</strong> The exact image file (high resolution) or the word you want to trademark.</li>
                           <li><strong>User Date Evidence (Optional):</strong> If claiming prior use, invoices or bills showing the brand name from that date.</li>
                        </ul>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-[rgb(110,94,147)] mb-3">For Companies (Pvt Ltd, LLP, OPC) / Partnerships</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                           <li><strong>Certificate of Incorporation / Partnership Deed:</strong> Proving the legal existence of the entity.</li>
                           <li><strong>MSME/Udyam Registration (Crucial):</strong> To avail the 50% discount on government fees (paying ₹4,500 instead of ₹9,000).</li>
                           <li><strong>Signatory Authorization:</strong> Board Resolution or Letter of Authorization for the person signing the docs.</li>
                           <li><strong>Identity Proof of Signatory:</strong> PAN/Aadhar of the Director/Partner.</li>
                        </ul>
                     </div>
                  </div>
                </section>

                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Framework: Rights You Are Securing</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you invest in our affordable trademark services, you are not just buying a piece of paper; you are securing powerful rights under the <strong>Trade Marks Act, 1999</strong>. It is essential to understand the weight of protection you receive, which justifies the investment far beyond the nominal cost.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-[rgba(110,94,147,0.1)] p-6 rounded-xl border border-[rgba(110,94,147,0.2)]">
                      <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-3">Exclusive Right to Use (Section 28)</h3>
                      <p className="text-gray-700">
                         Registration gives you the exclusive right to use the mark in relation to the goods or services for which it is registered. This means no one else in India can use your brand name for similar products. If they do, you do not need to prove you are famous; you only need to show your registration certificate to get a court injunction.
                      </p>
                    </div>
                    <div className="bg-[rgba(110,94,147,0.1)] p-6 rounded-xl border border-[rgba(110,94,147,0.2)]">
                      <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-3">Remedy for Infringement (Section 29)</h3>
                      <p className="text-gray-700">
                         A registered trademark allows you to sue for "Infringement," which is legally stronger than "Passing Off" (for unregistered marks). In an infringement suit, the burden of proof is on the copier to show why they aren't copying you. You can claim damages, get a stay order, and even ask for destruction of their infringing goods.
                      </p>
                    </div>
                    <div className="bg-[rgba(110,94,147,0.1)] p-6 rounded-xl border border-[rgba(110,94,147,0.2)]">
                      <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-3">Asset Creation & Valuation</h3>
                      <p className="text-gray-700">
                         A registered trademark is an "Intangible Asset." It can be sold, franchised, or licensed. We have seen clients sell their registered brands for crores depending on market goodwill. By spending a small amount on registration now, you are creating an asset that sits on your company's balance sheet and increases your valuation during fundraising.
                      </p>
                    </div>
                    <div className="bg-[rgba(110,94,147,0.1)] p-6 rounded-xl border border-[rgba(110,94,147,0.2)]">
                      <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-3">Protection Against Cybersquatters</h3>
                      <p className="text-gray-700">
                         In the digital age, having a registered trademark is your strongest weapon against domain squatters. If someone registers <em>yourbrand.in</em> expecting a payout, your trademark registration allows you to file a complaint under the INDRP policy and recover the domain often without a full trial.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    By making this process affordable, we ensure that these high-level legal protections are not restricted to conglomerates but are available to every shop owner, software developer, and artist in India.
                  </p>
                </section>

                <section id="sector-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sector-Specific Trademark Needs</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Every industry has unique intellectual property challenges. Our affordable packages are tailored to address the specific nuances of different sectors.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">🛒</span> E-Commerce & D2C
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Copycats on Amazon/Flipkart.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> We register you in Class 35 (Retail) and your product class. This dual protection allows you to enlist in Amazon Brand Registry, giving you power to takedown fakes instantly.
                        </p>
                     </div>

                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">💻</span> SaaS & Software
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Generic names and global imitation.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> We focus on Class 9 (Software) and Class 42 (SaaS). We also advise on filing combined word-and-device marks to secure distinctiveness for app icons.
                        </p>
                     </div>

                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">💊</span> Pharma & Healthcare
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Strick naming regulations; Section 13 prohibitions.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> We conduct specialized phonetic searches to ensure your drug name does not conflict with existing medicines, avoiding critical health safety objections.
                        </p>
                     </div>

                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">👗</span> Fashion & Apparel
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Seasonal trends and logo theft.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> We offer volume packages for fashion houses that need to trademark multiple sub-brands or seasonal collection names without breaking the bank.
                        </p>
                     </div>

                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">🎓</span> Education & EdTech
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Protecting course names and materials.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> Registration in Class 41 (Education). We also bundle Copyright filing for your course material for complete IP coverage.
                        </p>
                     </div>

                     <div className="border border-gray-200 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-3">🏨</span> Hospitality & Food
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <strong>Challenge:</strong> Franchising and local copycats.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Our Solution:</strong> We secure Class 43 (Services) rights which is essential for franchising deals. A registered mark increases franchise fees significantly.
                        </p>
                     </div>
                  </div>
                </section>

                <section id="risks-of-diy" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The High Risks of DIY Filing</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     In an attempt to save professional fees, some founders try to file trademarks themselves through the IP India Public Search portal. While the spirit of DIY is commendable, in legal matters, it often leads to disaster. Trademark law is nuanced, and small clerical errors can have fatal consequences for your application.
                  </p>
                  <div className="space-y-4">
                     <p className="text-gray-700 text-lg">
                        <strong>Risk 1: Wrong Class Selection.</strong> If you sell "Coffee Bags" (Class 16) but file under "Coffee" (Class 30), your registration is technically valid but protects the wrong thing. A competitor can still sell coffee bags under your name.
                     </p>
                     <p className="text-gray-700 text-lg">
                        <strong>Risk 2: Failure to Prosecute.</strong> The Registry often sends notices with tight deadlines. If you miss an email or don't know how to draft a legal reply citing relevant case law, your application is treated as "Abandoned."
                     </p>
                     <p className="text-gray-700 text-lg">
                        <strong>Risk 3: Rectification Attacks.</strong> A poorly filed trademark is easy to attack. A competitor can file a "Rectification Petition" to cancel your mark by proving you filed it incorrectly.
                     </p>
                  </div>
                  <div className="mt-6">
                     <p className="text-lg leading-relaxed text-gray-700">
                        Our affordable service acts as an insurance policy against these risks. For a small fee, you transfer the liability and stress of legal compliance to experts who do this every single day.
                     </p>
                  </div>
                </section>

                <section id="comparison" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">IPRKaro vs. The Rest</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="p-4 border-b-2 border-gray-200">Feature</th>
                          <th className="p-4 border-b-2 border-gray-200 bg-gray-50">Traditional Law Firm</th>
                          <th className="p-4 border-b-2 border-gray-200 bg-gray-50">Online Aggregators</th>
                          <th className="p-4 border-b-2 border-[rgb(110,94,147)] bg-[rgba(110,94,147,0.1)] text-gray-900">IPRKaro</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm md:text-base">
                        <tr>
                          <td className="p-4 border-b border-gray-100 font-semibold">Cost</td>
                          <td className="p-4 border-b border-gray-100 text-red-600">Very High</td>
                          <td className="p-4 border-b border-gray-100 text-green-600">Low</td>
                          <td className="p-4 border-b border-gray-100 font-bold text-green-700">Affordable & Transparent</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-100 font-semibold">Expertise</td>
                          <td className="p-4 border-b border-gray-100 text-green-600">High</td>
                          <td className="p-4 border-b border-gray-100 text-red-600">Low/Automated</td>
                          <td className="p-4 border-b border-gray-100 font-bold text-green-700">Expert Attorneys</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-100 font-semibold">Speed</td>
                          <td className="p-4 border-b border-gray-100 text-red-600">Slow</td>
                          <td className="p-4 border-b border-gray-100 text-green-600">Fast</td>
                          <td className="p-4 border-b border-gray-100 font-bold text-green-700">Fastest</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-100 font-semibold">Hidden Fees</td>
                          <td className="p-4 border-b border-gray-100 text-red-600">Common</td>
                          <td className="p-4 border-b border-gray-100 text-red-600">Very Common</td>
                          <td className="p-4 border-b border-gray-100 font-bold text-green-700">Zero</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                 <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Trusted by Budget-Conscious Entrepreneurs</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-800 italic mb-6 leading-relaxed">
                        "I am a bootstrapped founder. Every expense matters. I got quotes of ₹15,000 for a simple trademark filing from local lawyers. IPRKaro did it seamlessly for a fraction of that cost, and the support was actually better."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Founder</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-800 italic mb-6 leading-relaxed">
                        "I was worried that paying less meant I would get automated bot responses. But the attorney I spoke to at IPRKaro was incredibly knowledgeable. They even advised me against filing in a specific class to save money."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Riya Kapoor</p>
                          <p className="text-sm text-gray-500">Creative Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden mt-12">
                   <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Stop Overpaying for Trademarks</h2>
                    <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      You do not need to choose between quality and affordability. With IPRKaro, you get both. Start your brand protection journey today with India's most trusted affordable legal partner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-lg w-full sm:w-auto">
                          Start Registration
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-white text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all text-lg w-full sm:w-auto backdrop-blur-sm">
                          Call Us Now
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
                  <h3 className="text-xl font-bold mb-3">Need Expert Advice?</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Speak with our trademark attorneys today. Get a free consultation and secure your brand.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Get Free Consultation
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="tel:+919289707648" className="text-sm font-semibold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                      <span className="mr-2">📞</span> +91-9289707648
                    </a>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Features</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/comprehensive-ip-protection-features/247-trademark-protection" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center">
                        <span className="mr-2">›</span> 24/7 Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/ai-powered-trademark-solutions" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center">
                        <span className="mr-2">›</span> AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/expert-trademark-guidance" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center">
                        <span className="mr-2">›</span> Expert Guidance
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/fast-trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center">
                        <span className="mr-2">›</span> Fast Registration
                      </Link>
                    </li>
                     <li>
                      <Link href="/comprehensive-ip-protection-features/trademark-risk-reduction" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center">
                        <span className="mr-2">›</span> Risk Reduction
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
