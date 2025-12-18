'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function HimachalPradeshTrademarkClient() {
  const [activeSection, setActiveSection] = useState('overview');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Himachal' },
      { id: 'why-register', title: 'Why Register in Himachal?' },
      { id: 'industries', title: 'Key Sectors: Pharma & Horticulture' },
      { id: 'gi-tags', title: 'Geographical Indications (GI)' },
      { id: 'process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'faq', title: 'FAQs' }
    ];
    setTocSections(sections);
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of tocSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <BlogTableOfContents 
        activeSection={activeSection} 
        blogTitle="Trademark Registration in Himachal Pradesh"
        sections={tocSections}
      />
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Breadcrumb */}
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors"><i className="fas fa-home"></i></Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <Link href="/services" className="hover:text-[#FFB703] transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <Link href="/services/trademark-registration" className="hover:text-[#FFB703] transition-colors">Trademark</Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <span className="text-[#FFB703] font-medium">Himachal Pradesh</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Himachal Pradesh: Secure Your Brand
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-4">
                Himachal Pradesh, often referred to as the Land of Gods, is not just a destination for spiritual seekers and nature lovers. It is a rapidly growing economic powerhouse in Northern India. From the industrial corridors of Baddi and Nalagarh to the fertile apple orchards of Shimla and Kullu, the state offers a diverse business landscape. In this competitive environment, protecting your brand identity through trademark registration is not just a legal formality; it is a strategic business move.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Over the last few decades, Himachal Pradesh has undergone a significant economic transformation. While agriculture and horticulture remain the backbone of the rural economy, the state has successfully attracted large scale industrial investments. This transition has led to the emergence of numerous local brands that are now competing on a national stage.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Comprehensive Overview</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                A trademark is a unique identifier that distinguishes your goods or services from those of others. It can be a word, a logo, a symbol, a slogan, or even a combination of colors. In Himachal Pradesh, where industries like pharmaceuticals, tourism, and horticulture are thriving, a trademark serves as a beacon of trust and quality for consumers.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Himachal Pradesh falls under the jurisdiction of the **Delhi Trademark Registry**. Businesses in Shimla, Manali, Dharamshala, and Baddi can file applications online without visiting Delhi. When you register a trademark, you gain exclusive rights to use that mark in connection with your products or services. This prevents others from using a similar mark that could cause confusion among customers.
              </p>
            </div>
          </section>

          {/* Why Register */}
          <section id="why-register" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Why Register in Himachal Pradesh?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3">Legal Protection</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  The primary benefit is the legal protection it provides. It gives the owner the right to sue for infringement in case of unauthorized use. In a state like Himachal Pradesh, where local brands are gaining national recognition, having legal recourse is essential.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3">Brand Value & Trust</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  A registered trademark is an intangible asset that adds value to your business. It signals to customers that your brand is legitimate and committed to quality. People are more likely to trust a brand that has the ® symbol.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3">Counterfeit Protection</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Himachal Pradesh is famous for unique products like Kullu shawls and Kangra tea. These are often targets for counterfeiters. Trademark registration helps in fighting against fake products that can tarnish the image of genuine local industries.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3">Digital Brand Safety</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Registering your trademark gives you the power to take down infringing content on platforms like Amazon, Flipkart, and Instagram. For a boutique hotel in Manali or a handicraft store in Shimla, online reputation is everything.
                </p>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section id="industries" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Key Sectors & Trademark Relevance</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3 flex items-center gap-2">
                  <i className="fas fa-pills"></i> Pharmaceutical Hub: Baddi & Nalagarh
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  Baddi is known as Asia's largest pharmaceutical hub. For these companies, trademark registration is a matter of life and death. In the pharmaceutical industry, trademarks are used to protect brand names of medicines. Since many drugs have similar generic names, a distinct brand name helps doctors and patients identify the correct medication.
                </p>
                <p className="text-white/90 text-base leading-relaxed">
                  Registering these names under Class 5 is essential. Pharmaceutical trademarks have stricter rules; you cannot register names that are too similar to existing drugs or those that use common chemical suffixes. Companies in Baddi must conduct extremely thorough searches before launching any new product name.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3 flex items-center gap-2">
                  <i className="fas fa-apple-alt"></i> Apple & Horticulture Industry
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  Himachal Pradesh is the "Apple State of India." For apple growers and fruit processing units, a trademark helps in creating a premium brand image. Whether it is a specific variety of apple or a brand of organic fruit juice, registration ensures that the "Himachal" quality is protected.
                </p>
                <p className="text-white/90 text-base leading-relaxed">
                  With the rise of direct to consumer (D2C) brands, many orchard owners are now selling their produce under their own labels. A registered trademark allows them to command a higher price by building a brand that stands for purity and mountain freshness.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-3 flex items-center gap-2">
                  <i className="fas fa-hotel"></i> Tourism & Hospitality
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Tourism is a major contributor to the state's GDP. Trademarks in this sector are often service marks, registered under Class 43. A unique hotel name or a travel agency logo is what stays in the minds of tourists. Protecting these marks ensures that your online presence and reputation are secure from copycats who might try to divert your customers.
                </p>
              </div>
            </div>
          </section>

          {/* GI Tags */}
          <section id="gi-tags" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Geographical Indications (GI)</h2>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/90 text-base leading-relaxed mb-6">
                While a trademark protects an individual business's brand, a Geographical Indication (GI) tag protects products that have a specific geographical origin. Himachal Pradesh has been a leader in securing GI tags for its traditional products.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Kullu Shawl', desc: 'Intricate patterns and warm wool from the Kullu valley.' },
                  { name: 'Kangra Tea', desc: 'Unique aroma and health benefits, with European GI status.' },
                  { name: 'Chamba Rumal', desc: 'Exquisite embroidery that looks identical on both sides.' },
                  { name: 'Himachali Kala Zeera', desc: 'Rare spice with distinct flavor from high altitudes.' },
                  { name: 'Himachali Chulli Oil', desc: 'Medicinal oil extracted from wild apricots.' },
                  { name: 'Kinnauri Shawl', desc: 'Traditional weaves representing the heritage of Kinnaur.' }
                ].map((gi, index) => (
                  <div key={index} className="p-4 rounded-md bg-white/5 border border-white/10 hover:border-[#FFB703]/50 transition-colors">
                    <h4 className="text-[#FFB703] font-bold mb-1">{gi.name}</h4>
                    <p className="text-white/80 text-sm">{gi.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">The Registration Process</h2>
            </div>
            <div className="relative space-y-4">
              {[
                { step: '1', title: 'Trademark Search', desc: 'Comprehensive search in the IP India database to ensure uniqueness and avoid potential conflicts.' },
                { step: '2', title: 'Filing Application', desc: 'Submission of Form TM-A online through the IP India portal with all necessary business details.' },
                { step: '3', title: 'Examination', desc: 'The Registrar checks for distinctiveness and compliance with the Trade Marks Act, 1999.' },
                { step: '4', title: 'Response to Objections', desc: 'Filing a legal response within 30 days if any objections are raised in the examination report.' },
                { step: '5', title: 'Journal Publication', desc: 'The trademark is published in the Trademark Journal for a 4-month public notice period.' },
                { step: '6', title: 'Registration', desc: 'Issuance of the Registration Certificate if no opposition is filed during the publication period.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB703] text-[#0C002B] flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Required Documents</h2>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Identity Proof (PAN, Aadhaar, or Passport)',
                  'Address Proof (Voter ID, DL, or Utility Bills)',
                  'Business Proof (GST, MSME, or Incorporation Certificate)',
                  'Clear copy of the Logo or Brand Name',
                  'Signed Power of Attorney (Form TM-P)',
                  'User Affidavit (If claiming prior use of the mark)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <i className="fas fa-check-circle text-[#FFB703]"></i>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Can I register a trademark for my apple orchard name?', a: 'Yes, you can register a trademark for your orchard\'s name or the brand name under which you sell your produce. This helps in building a distinct identity and prevents others from using your reputation to sell their fruits.' },
                { q: 'How long does it take to get a trademark registered?', a: 'The entire process usually takes between 6 to 12 months, provided there are no major objections or oppositions. However, you can start using the ™ symbol as soon as you receive the filing receipt.' },
                { q: 'Is a trademark registered in India valid internationally?', a: 'No, a trademark registered in India is only valid within the country. To protect your brand in other countries, you must file separate applications or use the Madrid Protocol for international filing.' },
                { q: 'What is the difference between a trademark and a GI tag?', a: 'A trademark is owned by an individual business and protects its specific brand. A GI tag is a collective right owned by a group of producers in a specific region and protects the identity of a product linked to that region\'s geography.' },
                { q: 'What happens if someone uses my registered trademark without permission?', a: 'This is called trademark infringement. You can send a legal cease and desist notice. If they do not stop, you can file a suit in court to seek an injunction and damages.' },
                { q: 'Can I register a slogan as a trademark?', a: 'Yes, slogans like "Purity from the Peaks" can be registered as trademarks as long as they are distinctive and not just descriptive of the product.' },
                { q: 'What is the cost of trademark registration in Himachal Pradesh?', a: 'The government fee for individuals, startups, and MSMEs is currently 4,500 rupees for online filing. For other entities, the fee is 9,000 rupees. Professional fees are separate.' },
                { q: 'My business is small. Do I really need a trademark?', a: 'Yes. Small businesses are more vulnerable to brand theft. A trademark ensures that as your business grows, your brand remains yours. Changing a brand name later due to a dispute is much more expensive.' }
              ].map((faq, index) => (
                <div key={index} className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-[#FFB703] font-bold mb-2">Q: {faq.q}</h4>
                  <p className="text-white/80 text-base">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-center">
              <h3 className="text-white font-nunito text-3xl font-bold mb-4">Secure Your Brand Legacy in the Hills</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Don't let your hard work be exploited. Join hundreds of successful businesses in Himachal Pradesh who have protected their identity with IPR Karo.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#FFB703] to-[#FFA000] text-[#0C002B]">
                <i className="fas fa-phone"></i> Get Expert Assistance Now
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}


