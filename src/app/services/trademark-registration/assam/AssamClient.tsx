'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';
import FaqSection from './FaqSection';

interface TOCSection {
  id: string;
  title: string;
}

export default function AssamClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Ecosystem in Assam' },
      { id: 'kolkata-registry', title: 'Role of Kolkata Registry' },
      { id: 'process', title: 'Step-by-Step Registration' },
      { id: 'documents', title: 'Documentation Required' },
      { id: 'startups', title: 'Assam Startup Policy & IP' },
      { id: 'tea-industry', title: 'Protecting Assam Tea' },
      { id: 'handloom', title: 'Muga & Eri Silk Trademarks' },
      { id: 'gi-tags', title: 'Geographical Indications' },
      { id: 'classes', title: 'Relevant Trademark Classes' },
      { id: 'reviews', title: 'Client Reviews' },
      { id: 'faq', title: 'Frequently Asked Questions' }
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
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Assam"
          sections={tocSections}
        />
      )}
      
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
              <span className="text-[#FFB703] font-medium">Assam</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Assam
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Assam stands as the sentinel of Northeast India, acting as the primary economic gateway to the region. With its sprawling tea gardens that produce the world famous Assam tea, the golden threads of Muga silk that are unique to this land, and a burgeoning startup ecosystem in Guwahati, the state is witnessing a commercial renaissance. In this evolving marketplace, the protection of intellectual property has become more critical than ever before. Trademark registration in Assam is not merely a legal formality but a strategic necessity for businesses looking to secure their brand identity, prevent counterfeiting, and build long term value.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are a tea planter in Dibrugarh, a tech entrepreneur in Guwahati, or a handloom weaver in Sualkuchi, securing your brand name and logo is the first step towards building a reputable business. At IPRKaro, we understand the unique industrial landscape of Assam and provide specialized trademark services tailored to the needs of local businesses, ensuring that your hard work and innovation remain exclusively yours.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">The Trademark Ecosystem in Assam</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The business landscape in Assam is diverse, ranging from traditional agro based industries to modern service sectors. As the state government pushes for industrial growth through the "Advantage Assam" initiative, there has been a significant surge in new business registrations. However, with increased competition comes the risk of brand imitation and infringement. A registered trademark serves as a powerful legal tool that grants the owner exclusive rights to use a specific name, logo, or slogan in commerce.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                For a business in Assam, a trademark is an intangible asset that appreciates over time. It instills trust among consumers, which is particularly vital for industries like food processing and pharmaceuticals where brand reputation is directly linked to quality assurance. Furthermore, a registered trademark is a prerequisite for listing on major e-commerce platforms, opening up national and global markets for local producers. It also adds valuation to the company, making it more attractive to investors and venture capitalists who are increasingly looking at the Northeast for opportunities.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The awareness regarding Intellectual Property Rights (IPR) is growing in the state, driven by various awareness camps and the establishment of IPR cells in universities. Despite this, many small businesses still operate with unregistered brands, leaving them vulnerable to legal disputes and brand theft. Registering your trademark is a proactive measure to safeguard your market position and ensure that your customers can always identify your genuine products amidst a sea of competitors.
              </p>
            </div>
          </section>

          {/* Kolkata Registry */}
          <section id="kolkata-registry" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Role of the Kolkata Trademark Registry</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                It is important for applicants in Assam to understand that there is no separate trademark registry office within the state. Assam, along with the other Northeastern states, West Bengal, Odisha, and Bihar, falls under the territorial jurisdiction of the **Trademark Registry in Kolkata**. The office is located at Boudhik Sampada Bhawan, Salt Lake City, Kolkata.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Historically, this meant that applicants or their attorneys had to physically visit Kolkata for filings and hearings. However, the modernization of the Indian IP office has revolutionized this process. Today, the entire trademark registration lifecycle, from filing the application (Form TM-A) to responding to examination reports, can be conducted online through the official IP India portal. This digital shift has significantly leveled the playing field for entrepreneurs in Assam, allowing someone in a remote town like Tinsukia to file for a trademark with the same ease as a business in Mumbai or Delhi.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                While the filing is online, the Kolkata registry remains the controlling authority. Any legal notices, examination reports, or hearing schedules will be issued by the Kolkata office. In cases where a show cause hearing is mandated, it can now often be attended via video conferencing, further reducing the need for physical travel. IPRKaro acts as your local bridge to the Kolkata registry, handling all digital communications and legal representations so you can focus on running your business in Assam.
              </p>
            </div>
          </section>

          {/* Process */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Step-by-Step Registration Process</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-2">1. Comprehensive Trademark Search</h3>
                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  The process begins with a thorough search of the existing trademark database. This is a critical step to ensure that your proposed brand name or logo is not identical or deceptively similar to an already registered mark. For a tea brand in Assam, for instance, we would search Class 30 to ensure no other tea company has a conflicting name. This step minimizes the risk of objection and rejection later in the process.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-2">2. Filing the Application (Form TM-A)</h3>
                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  Once the name is cleared, we file Form TM-A on your behalf. This application includes details of the applicant, a clear representation of the mark, the list of goods or services, and the user date (claiming prior use if applicable). Upon filing, you receive an official acknowledgement receipt with a Temporary Number, allowing you to immediately start using the "TM" symbol next to your brand name.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-2">3. Examination by the Registry</h3>
                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  The application is then scrutinized by a Trademark Officer in Kolkata. They check for formalities and substantive grounds for refusal. If they find any issues, such as the name being too descriptive (e.g., "Best Assam Tea") or similar to an existing mark, they issue an Examination Report. We must file a legal reply to this report within 30 days, arguing why your mark should be registered.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-2">4. Publication in Trademark Journal</h3>
                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  If the registrar accepts our reply, the trademark is published in the Indian Trademark Journal. This serves as a public notice, giving third parties a window of 4 months to oppose the registration if they believe it infringes on their rights. If no opposition is filed during this period, the mark proceeds to registration.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-xl mb-2">5. Registration and Certification</h3>
                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  Upon successful completion of the opposition period, the Registrar issues the Trademark Registration Certificate. You can now use the ® symbol. The trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years. This certificate is a potent legal document that can be used to enforce your rights in court.
                </p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Required Documentation</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                To ensure a smooth filing process, having the correct documents is essential. The requirements vary slightly based on the type of applicant entity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2">For Individuals & Proprietorships</h3>
                  <ul className="list-disc list-inside text-white/80 space-y-2 font-nunito text-sm">
                    <li>Copy of the Logo or Brand Name</li>
                    <li>Identity Proof (PAN Card, Aadhaar, Passport)</li>
                    <li>Address Proof (Voter ID, Driving License)</li>
                    <li>Signed Form-48 (Power of Attorney)</li>
                    <li>User Affidavit (if claiming prior usage)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2">For Companies & LLPs</h3>
                  <ul className="list-disc list-inside text-white/80 space-y-2 font-nunito text-sm">
                    <li>Certificate of Incorporation</li>
                    <li>MSME/Udyam Registration (for 50% fee concession)</li>
                    <li>Board Resolution authorizing the signatory</li>
                    <li>Identity & Address Proof of the Signatory</li>
                    <li>Signed Form-48 (Power of Attorney)</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-4">
                **Note on MSME:** For small businesses in Assam, registering under the Udyam scheme is highly recommended. It reduces the government filing fee from ₹9,000 to ₹4,500, making trademark protection much more affordable.
              </p>
            </div>
          </section>

          {/* Startups */}
          <section id="startups" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Assam Startup Policy & IP Support</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Government of Assam has been aggressively promoting entrepreneurship through the **Assam Startup Policy**. The policy aims to create a conducive ecosystem for innovation and job creation. A key component of this policy is the support for Intellectual Property Rights. The government understands that for a startup to survive and scale, protecting its innovative ideas and brand is paramount.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Under the policy, recognized startups can avail of significant financial incentives. This includes reimbursement of costs incurred for filing patents and trademarks. Specifically, startups can claim reimbursement for the statutory fees paid for trademark registration. This initiative significantly lowers the barrier to entry for young entrepreneurs in Guwahati and other hubs, encouraging them to formalize their IP early in their business journey.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Furthermore, the state has established "The Nest," an incubation center in Guwahati, which provides mentorship on legal and compliance matters, including IP strategy. Startups in Assam should leverage these benefits to build a robust IP portfolio that can increase their valuation and protect their market share from the outset.
              </p>
            </div>
          </section>

          {/* Tea Industry */}
          <section id="tea-industry" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Protecting the Legacy of Assam Tea</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Assam Tea is not just a product; it is a global identity. However, the fame of Assam tea has also led to widespread misuse. Many packers sell inferior blends labeled as "Assam Tea," diluting the brand's reputation. While "Assam Orthodox Tea" is protected as a Geographical Indication (GI), individual tea estates and packet tea brands need their own trademarks to distinguish themselves in the market.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                For tea businesses, trademark registration usually falls under **Class 30** (Tea, coffee, spices). A registered trademark allows a tea estate to build a premium brand around its specific produce. It enables consumers to identify and repeat purchase tea from a specific garden or blender that they trust. Moreover, with the rise of boutique tea brands and direct to consumer (D2C) models, having a unique, protected brand name is essential to command higher margins and export to international markets where IP laws are stringent.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                We assist tea companies in conducting clearance searches to ensure their brand names do not conflict with existing marks and help them navigate the complexities of labeling regulations and trademark law to secure robust protection for their heritage brands.
              </p>
            </div>
          </section>

          {/* Handloom */}
          <section id="handloom" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Muga & Eri Silk: Trademarks for Textiles</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Assam's golden Muga silk and the warm Eri silk are treasures of the state's handloom industry. Sualkuchi, the Manchester of the East, produces exquisite Mekhela Chadors and sarees that are in high demand. However, the market is flooded with synthetic imitations sold as genuine Assam silk. This is where trademark registration becomes a vital tool for authentic weavers and cooperative societies.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Textile businesses typically register under **Class 24** (Textiles and textile goods) and **Class 25** (Clothing and headgear). By registering a trademark, a weaver or a boutique can attach a badge of authenticity to their products. This helps in building a loyal customer base that is willing to pay a premium for genuine, hand-woven products. It also provides a legal basis to stop others from selling fake power-loom products under your established brand name.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                For cooperatives and clusters, we also recommend exploring Collective Marks or Certification Marks, which can be used by members to certify the origin and quality of the silk used, further reinforcing consumer confidence in the authenticity of Assam's handloom products.
              </p>
            </div>
          </section>

          {/* GI Tags */}
          <section id="gi-tags" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Geographical Indications (GI) of Assam</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Assam is rich in products that derive their unique qualities from their geographical origin. The Geographical Indication (GI) tag is a form of IP that protects these community rights. Assam currently has several GI tagged products, which are a testament to its rich cultural and agricultural heritage.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Assam Orthodox Tea</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Muga Silk of Assam</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Assam Karbi Anglong Ginger</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Tezpur Litchi</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Joha Rice of Assam</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Boka Chaul (Soft Rice)</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Kaji Nemu (Assam Lemon)</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm flex items-center"><i className="fas fa-check-circle text-[#FFB703] mr-2"></i>Chokuwa Rice</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                While GIs protect the community, individual businesses within that community should still register their own trademarks. For example, while "Muga Silk" is a GI, a specific boutique selling Muga Silk sarees needs its own trademark to distinguish its designs and service quality from other sellers. The combination of GI (for authenticity) and Trademark (for brand identity) offers the strongest protection for Assam's traditional businesses.
              </p>
            </div>
          </section>

          {/* Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Trademark Classes for Assam</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-6">
                Choosing the right class is crucial for effective protection. Based on Assam's industrial profile, here are the most relevant classes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 30</strong>
                  <span className="text-white/80 text-sm">Tea, Rice, Spices, and other agricultural produce. Essential for tea estates and food processors.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 24</strong>
                  <span className="text-white/80 text-sm">Textiles and textile goods. Covers unstitched fabrics like Muga and Eri silk cloth.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 25</strong>
                  <span className="text-white/80 text-sm">Clothing and headgear. Covers finished garments like Mekhela Chadors, Gamosas, and shirts.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 31</strong>
                  <span className="text-white/80 text-sm">Agricultural, horticultural and forestry products. Relevant for raw agricultural produce.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 35</strong>
                  <span className="text-white/80 text-sm">Advertising and Business Management. Crucial for retail stores, e-commerce sellers, and trading houses.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 39</strong>
                  <span className="text-white/80 text-sm">Transport and Travel Arrangement. Vital for Assam's growing tourism and river cruise industry.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 43</strong>
                  <span className="text-white/80 text-sm">Services for providing food and drink. Applicable for hotels, resorts, and restaurants.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 33</strong>
                  <span className="text-white/80 text-sm">Alcoholic beverages. Relevant for traditional brews like Judima (rice wine) if commercialized.</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <strong className="text-[#FFB703] block mb-1">Class 37</strong>
                  <span className="text-white/80 text-sm">Building construction and repair. Relevant for oil and gas ancillary service providers.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Client Reviews
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Pranab Sharma",
                  location: "Guwahati",
                  rating: 5,
                  text: "Excellent trademark registration service in Guwahati. They helped me register my tea brand successfully and provided complete guidance throughout. Highly professional team."
                },
                {
                  name: "Ritu Baruah",
                  location: "Dibrugarh",
                  rating: 5,
                  text: "Great experience with trademark registration in Dibrugarh. The team was very supportive and handled all the documentation efficiently. Recommended for Assam businesses."
                },
                {
                  name: "Kamal Das",
                  location: "Silchar",
                  rating: 5,
                  text: "Professional service for silk product branding in Silchar. They completed my trademark registration smoothly and answered all my queries. Very satisfied with the service."
                }
              ].map((review, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star text-sm ${i < review.rating ? 'text-[#FFB703]' : 'text-gray-600'}`}></i>
                    ))}
                  </div>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FFA000] flex items-center justify-center text-[#0C002B] font-bold font-nunito">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-nunito text-sm font-semibold">{review.name}</h4>
                      <p className="text-white/60 font-nunito text-xs">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FaqSection />

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="relative text-center">
                <h3 className="text-white font-nunito text-2xl font-bold mb-3">Secure Your Brand in Assam</h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-6">
                  From the tea gardens of Upper Assam to the tech hubs of Guwahati, we help businesses across the state secure their intellectual property. Don't let your hard work go unprotected.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#FFB703] to-[#FFA000] text-[#0C002B]">
                  <i className="fas fa-phone"></i> Get Expert Assistance
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
