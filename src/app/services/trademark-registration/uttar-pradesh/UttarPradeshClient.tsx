'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function UttarPradeshClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction to Trademark Registration' },
      { id: 'why-uttar-pradesh', title: 'Why Register in Uttar Pradesh' },
      { id: 'key-advantages', title: 'Key Advantages' },
      { id: 'who-can-apply', title: 'Who Can Apply' },
      { id: 'step-by-step-process', title: 'Step-by-Step Process' },
      { id: 'documentation', title: 'Required Documentation' },
      { id: 'trademark-search', title: 'Conducting Trademark Search' },
      { id: 'classification-system', title: 'Trademark Classification' },
      { id: 'processing-timeline', title: 'Processing Timeline' },
      { id: 'after-registration', title: 'After Registration' },
      { id: 'mistakes-to-avoid', title: 'Mistakes to Avoid' },
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

  const faqs = [
    {
      question: "What is the procedure to register a trademark in Uttar Pradesh?",
      answer: "The procedure to register a trademark in Uttar Pradesh involves several systematic steps. First, conduct a thorough trademark search through the IP India database to ensure your proposed mark is available and does not conflict with existing registrations. Next, determine the appropriate class under the Nice Classification system that corresponds to your business activities. Prepare all necessary documents including identity proofs, business registration certificates, and a clear representation of your trademark. File Form TM-A online via the IP India portal along with the required fees. After filing, your application undergoes examination by a Trademark Examiner who reviews it for compliance and potential conflicts. If objections are raised, you must respond within the specified timeframe with supporting arguments and evidence. Once accepted, the trademark is published in the Trademark Journal for a four-month opposition period. If no opposition is filed or if oppositions are successfully resolved, the Registrar issues a registration certificate. The entire process typically takes between 12 to 18 months depending on various factors including objections and oppositions."
    },
    {
      question: "Which trademark office has jurisdiction over Uttar Pradesh?",
      answer: "Applications from Uttar Pradesh are processed by the Trade Marks Registry in Delhi, which has territorial jurisdiction over the northern states including Uttar Pradesh, Delhi, Haryana, Punjab, Himachal Pradesh, Jammu and Kashmir, Chandigarh, and Uttarakhand. The Delhi office is located at Baudhik Sampada Bhawan, near Antriksh Bhawan on Kasturba Gandhi Marg in New Delhi. However, with the comprehensive online filing system implemented by IP India, businesses and individuals from Uttar Pradesh can complete the entire trademark registration process electronically without visiting the physical office. All applications, responses to objections, and communications can be managed through the online portal, making the process convenient for applicants across cities like Lucknow, Kanpur, Noida, Ghaziabad, Agra, Varanasi, and other parts of the state."
    },
    {
      question: "How long does trademark registration take in Uttar Pradesh?",
      answer: "Trademark registration in Uttar Pradesh typically requires 12 to 18 months from application filing to certificate issuance, though the exact duration varies based on several factors. The process timeline breaks down as follows: Application filing and acknowledgment takes approximately 1 to 2 weeks, during which you receive a unique application number for tracking. The examination stage, where a Trademark Examiner reviews your application, takes 8 to 12 months depending on the workload at the Delhi office. If objections are raised, responding and awaiting the Examiner's review adds another 1 to 3 months. Once accepted, the mark is published in the Trademark Journal, and there is a mandatory 4-month opposition period during which third parties can challenge the registration. If no opposition is filed or if you successfully defend against oppositions, the registration certificate is issued within 1 to 2 months. Startups registered under the Startup India initiative may benefit from expedited processing, potentially reducing the overall timeline. Complex cases involving multiple objections, oppositions, or hearings may take 18 to 24 months or longer."
    },
    {
      question: "What documents are required for trademark registration in Uttar Pradesh?",
      answer: "Document requirements for trademark registration in Uttar Pradesh depend on the applicant type. For individual proprietors, you need a valid identity proof such as Aadhaar card, PAN card, passport, or driving license, along with address proof like electricity bills, property documents, or rental agreements. For partnership firms, submit the partnership deed, PAN card of the firm, and identity proofs of all partners. Companies must provide the Certificate of Incorporation issued by the Ministry of Corporate Affairs, company PAN card, and a board resolution authorizing the trademark application. LLPs require the LLP agreement and certificate of incorporation. All applicants need a clear, high-resolution representation of the trademark in JPG or PNG format with specifications as per IP India guidelines. Include a detailed description of goods or services under the appropriate Nice Classification class. If filing through a trademark attorney or agent, provide a signed Power of Attorney on Form TM-48. For marks already in use, prepare a user affidavit or declaration stating the date and place of first use. Foreign applicants should include authenticated copies of identity documents and may need to provide a legal representative address in India."
    },
    {
      question: "Can I file a trademark application online from Uttar Pradesh?",
      answer: "Yes, you can file a trademark application entirely online from anywhere in Uttar Pradesh through the official IP India portal at ipindiaservices.gov.in. The online filing system offers numerous advantages over physical filing including lower government fees, faster processing, instant acknowledgment with application number, convenient document upload facility, secure online payment options through various methods, real-time application status tracking, and the ability to manage all communications electronically. To file online, first create an account on the IP India portal by registering with valid email and mobile number. Complete the online Form TM-A by entering accurate applicant details, trademark representation, class selection, and goods or services description. Upload all required documents in the prescribed formats and sizes. Review your application thoroughly for any errors or omissions. Make the online payment of government fees based on your applicant category. After successful submission, you will receive an acknowledgment and application number via email. The entire process can be completed from your home or office in cities like Lucknow, Noida, Kanpur, Agra, or any location in Uttar Pradesh without visiting the trademark office."
    },
    {
      question: "What are the benefits of registering a trademark in Uttar Pradesh?",
      answer: "Registering a trademark in Uttar Pradesh provides comprehensive benefits that extend across India, not just within the state. Legal benefits include exclusive nationwide rights to use the mark for specified goods or services, strong legal recourse against infringement through civil and criminal proceedings, presumption of ownership and validity in legal disputes, and the ability to claim statutory damages from infringers. Business advantages include enhanced brand recognition and market credibility, particularly important in competitive markets like Noida, Greater Noida, and Lucknow. A registered trademark becomes a valuable intangible asset that appreciates over time and contributes to business valuation for funding, mergers, or acquisitions. It enables licensing and franchising opportunities, creating additional revenue streams without operational involvement. Registration provides priority rights for international expansion through the Madrid Protocol, allowing trademark protection in multiple countries through a single application. The deterrent effect of registration discourages competitors from using similar marks, reducing instances of brand confusion and customer diversion. For startups and MSMEs in Uttar Pradesh, trademark registration attracts investors, facilitates collaborations, and establishes professional credibility essential for business growth."
    },
    {
      question: "What is the difference between TM and R symbols?",
      answer: "The TM and R symbols indicate different trademark status levels. The TM symbol stands for trademark and can be used immediately after filing your trademark application, even before registration is complete. Using TM indicates you are claiming rights to the mark and serves notice to others that you consider it your trademark. However, TM does not confer the same legal protection as registration and mainly serves as a claim of ownership. The R symbol, enclosed in a circle and representing registered trademark, can only be used after your trademark registration is officially completed and you have received the registration certificate from the Trademark Registry. Using the R symbol indicates your trademark is officially registered with the Government of India and enjoys full statutory protection under the Trademarks Act 1999. It provides notice that the trademark is protected by law and unauthorized use may result in legal action. Using the R symbol without actual registration is a legal offense that may attract penalties and prosecution. Once your trademark registration is complete, you should replace TM with R to indicate registered status and maximize legal protection."
    },
    {
      question: "Can startups in Uttar Pradesh get benefits for trademark registration?",
      answer: "Yes, startups in Uttar Pradesh recognized under the Department for Promotion of Industry and Internal Trade can avail significant benefits for trademark registration under the Startup India initiative. Eligible startups receive a 50 percent rebate on trademark filing fees, reducing costs substantially and making intellectual property protection more accessible. They can access fast-track examination services, potentially reducing the registration timeline from 12-18 months to 6-9 months. The government provides a panel of facilitators who offer free professional guidance for filing applications, responding to objections, and handling oppositions. Startups are exempt from providing proof of use for the first three years, allowing them to file applications on proposed-to-be-used basis without demonstrated commercial use. To qualify for these benefits, your startup must be registered with DPIIT, have a valid recognition certificate, and meet the eligibility criteria including being incorporated as a private limited company, partnership firm, or LLP. The startup should be less than 10 years old and have annual turnover not exceeding Rs 100 crores in any financial year. These benefits make trademark protection affordable and accessible for innovative startups in technology hubs like Noida, Lucknow, and Kanpur."
    },
    {
      question: "What happens if I receive an examination objection in Uttar Pradesh?",
      answer: "If your trademark application receives an examination objection from the Delhi Trademark Office, you must respond strategically within 30 days from the objection date, though you can request one extension. Common grounds for objection include similarity with existing registered or pending trademarks, lack of distinctiveness or descriptiveness, use of prohibited emblems or symbols, incorrect or unclear specifications of goods or services, or procedural deficiencies in the application. To respond effectively, carefully analyze the examination report to understand each objection ground and the legal provisions cited. Research relevant case laws and precedents that support your position, particularly decisions from Indian courts and trademark tribunals. Prepare a comprehensive written response addressing each objection systematically with legal arguments, evidence of use, distinctiveness proofs, or coexistence agreements as applicable. If the objection relates to similarity with an existing mark, provide evidence showing material differences in appearance, sound, meaning, or target markets. For distinctiveness objections, demonstrate acquired distinctiveness through evidence of extensive use, advertising, and market recognition. Consider requesting a personal hearing to present your case directly to the Examiner, which can be particularly effective for complex objections. Professional assistance from experienced trademark attorneys significantly improves success rates in overcoming objections."
    },
    {
      question: "Is it mandatory to hire a trademark attorney in Uttar Pradesh?",
      answer: "Hiring a trademark attorney or agent is not legally mandatory for trademark registration in Uttar Pradesh, and individuals and businesses can file applications independently through the IP India portal. However, professional legal assistance is strongly advisable for several compelling reasons. Trademark attorneys conduct comprehensive searches across multiple databases including official registries, business directories, domain names, and common law uses to identify potential conflicts that basic searches might miss. They ensure accurate class selection under the Nice Classification system, preventing inadequate protection or unnecessary expenses from incorrect classifications. Experienced attorneys draft applications strategically to minimize objection risks and maximize protection scope. They handle examination objections with legal expertise, citing relevant case laws and preparing persuasive arguments that significantly improve acceptance rates. If oppositions are filed against your application, professional representation becomes crucial for successful defense through evidence submission, legal arguments, and hearing representation. Attorneys provide strategic guidance on trademark portfolio management, enforcement actions, licensing agreements, and renewal management. For businesses serious about brand protection in competitive markets like Noida, Lucknow, and Kanpur, the investment in professional services often prevents costly mistakes, saves time, and substantially improves registration success rates."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Uttar Pradesh"
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
          
          {/* Breadcrumb Navigation */}
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors">
                <i className="fas fa-home" aria-hidden="true"></i>
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services" className="hover:text-[#FFB703] transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services/trademark-registration" className="hover:text-[#FFB703] transition-colors">Trademark Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Uttar Pradesh</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full relative"
                style={{
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: '#FFB703', opacity: 0.4 }}
                />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Uttar Pradesh: Your Complete Guide for 2025
              </h1>
            </div>
            
            <div 
              className="p-4 lg:p-5 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Uttar Pradesh, India's most populous state and a rapidly growing economic powerhouse, is home to millions of businesses ranging from traditional industries to modern startups. With major industrial hubs in Noida, Greater Noida, Lucknow, Kanpur, Agra, Varanasi, and Ghaziabad, the state represents a diverse and competitive business environment where brand protection is crucial for success and sustainability.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration for businesses operating in Uttar Pradesh. Whether you run a tech startup in Noida's bustling IT corridor, a manufacturing unit in Kanpur's industrial zones, a handicraft business in Agra, or a service enterprise in Lucknow, understanding the trademark registration process is essential for protecting your brand identity, preventing infringement, and building long-term business value across one of India's most dynamic markets.
              </p>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="introduction" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Understanding Trademark Registration in Uttar Pradesh
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique identifier that distinguishes your business, products, or services from others in the marketplace. It can be a word, phrase, logo, symbol, design, color combination, sound, or any distinctive sign that customers associate with your brand. Under the Trademarks Act of 1999, India provides a comprehensive legal framework for registering and protecting trademarks, administered by the Office of the Controller General of Patents, Designs and Trademarks under the Ministry of Commerce and Industry.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Uttar Pradesh, trademark registration is processed through the Trade Marks Registry in Delhi, which holds territorial jurisdiction over northern India including Uttar Pradesh, Delhi, Haryana, Punjab, Himachal Pradesh, Jammu and Kashmir, Chandigarh, and Uttarakhand. However, the protection granted by registration extends nationwide across all states and union territories of India, not just the jurisdictional area of the filing office.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration provides exclusive legal rights to use your mark in connection with specific goods or services, prevents unauthorized usage by competitors, enables legal enforcement through courts, and establishes your brand as a valuable business asset that appreciates over time. For businesses in Uttar Pradesh operating across diverse sectors including information technology, manufacturing, agriculture, handicrafts, textiles, leather goods, tourism, and services, trademark protection is fundamental for building sustainable competitive advantage and ensuring long-term growth.
              </p>
            </div>
          </section>

          {/* Why Uttar Pradesh Section */}
          <section id="why-uttar-pradesh" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration Matters for Uttar Pradesh Businesses
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Uttar Pradesh's business ecosystem presents unique characteristics that make trademark registration particularly important. As the most populous state with over 200 million people, it offers immense market potential but also intense competition across all business sectors. The state has witnessed remarkable economic transformation with initiatives like Uttar Pradesh Investors Summit attracting billions in investments, development of industrial corridors, establishment of IT parks, and growth of manufacturing clusters.
              </p>

              <div className="space-y-3 mb-4">
                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-city text-[#FFB703]" aria-hidden="true"></i>
                    Emerging IT and Technology Hub
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Noida and Greater Noida have emerged as major technology centers housing thousands of IT companies, startups, and multinational corporations. The Noida Special Economic Zone, Film City, and numerous tech parks create a vibrant ecosystem where brand differentiation is critical. For technology companies, software developers, mobile app creators, and digital service providers, trademark protection ensures brand recognition in competitive markets and prevents consumer confusion among similar-sounding tech brands.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-industry text-[#FFB703]" aria-hidden="true"></i>
                    Industrial Manufacturing Powerhouse
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Kanpur, historically known as the Manchester of India, along with other industrial cities hosts extensive manufacturing operations in leather goods, textiles, chemicals, engineering products, and consumer goods. The Kanpur Leather Cluster, defense manufacturing corridor, and various industrial estates require strong brand protection mechanisms. Trademark registration helps manufacturers establish product authenticity, build customer trust, prevent counterfeiting, and create premium brand positioning essential for domestic and export markets.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-store text-[#FFB703]" aria-hidden="true"></i>
                    Traditional Crafts and Heritage Products
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Uttar Pradesh is renowned for traditional crafts including Lucknowi Chikankari embroidery, Banarasi silk sarees from Varanasi, brassware from Moradabad, glassware from Firozabad, carpets from Bhadohi, and marble inlay work from Agra. These artisans and craft businesses face significant challenges from imitations and counterfeit products. Trademark registration helps preserve authenticity, protect traditional knowledge, command premium pricing, and facilitate geographical indication protection for regional specialties.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-seedling text-[#FFB703]" aria-hidden="true"></i>
                    Agribusiness and Food Processing
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    As a major agricultural state, Uttar Pradesh has growing agribusiness and food processing sectors with companies producing organic products, dairy items, processed foods, spices, and beverages. Cities like Lucknow, Meerut, and Aligarh host food processing units serving national markets. Trademark protection is crucial for food brands to establish quality reputation, meet regulatory requirements, differentiate in crowded markets, and build consumer loyalty essential for repeat purchases and brand expansion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Advantages Section */}
          <section id="key-advantages" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Advantages of Trademark Registration
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "fas fa-lock",
                    title: "Exclusive Legal Rights",
                    description: "Trademark registration grants you exclusive nationwide rights to use your mark for specified goods or services. No other business can legally register or use an identical or confusingly similar mark in the same class, providing complete control over your brand identity and preventing unauthorized exploitation."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Strong Legal Remedies",
                    description: "Registered trademark owners can file civil infringement suits seeking injunctions, damages, and account of profits. Criminal prosecution is available for deliberate counterfeiting. Courts presume validity of registered marks, placing the burden of proof on the defendant and simplifying enforcement proceedings significantly."
                  },
                  {
                    icon: "fas fa-trophy",
                    title: "Brand Credibility and Value",
                    description: "A registered trademark enhances your business reputation and customer confidence. It signals professionalism, quality commitment, and market permanence. The registered mark becomes an intangible asset that appreciates with business growth, contributing substantially to overall business valuation for investments, acquisitions, or sale."
                  },
                  {
                    icon: "fas fa-coins",
                    title: "Monetization Opportunities",
                    description: "Registered trademarks can be licensed to generate royalty income without operational involvement. Franchising becomes viable with protected intellectual property. You can sell or transfer trademark rights separately from business operations, creating flexible monetization opportunities and additional revenue streams beyond core business activities."
                  },
                  {
                    icon: "fas fa-globe-asia",
                    title: "International Expansion Foundation",
                    description: "Indian trademark registration serves as the basis for international protection through the Madrid Protocol, allowing you to extend trademark protection to over 120 countries through a single application. This facilitates seamless international business expansion and protects your brand in global markets."
                  },
                  {
                    icon: "fas fa-shield-virus",
                    title: "Counterfeit Prevention",
                    description: "Registration creates a strong deterrent against counterfeiters and copycats. You can record your trademark with customs authorities to prevent import of counterfeit goods. The visible R symbol warns potential infringers of legal consequences, reducing instances of unauthorized use and brand dilution."
                  },
                  {
                    icon: "fas fa-search-dollar",
                    title: "Competitive Market Advantage",
                    description: "In crowded markets like Noida tech sector or Kanpur manufacturing, registered trademarks differentiate your offerings from competitors. Customers can easily identify authentic products, reducing confusion and building loyalty. Exclusivity prevents competitors from using similar marks that could divert your customers."
                  },
                  {
                    icon: "fas fa-infinity",
                    title: "Perpetual Protection",
                    description: "Unlike patents that expire after 20 years, trademarks can be renewed indefinitely every 10 years, providing unlimited protection duration. As long as you use the mark and renew timely, your brand remains protected forever, building equity and recognition across generations."
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: index === 0 
                        ? '1px solid rgba(255, 183, 3, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className={`${benefit.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-base font-semibold mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section id="documentation" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Essential Documentation for Trademark Registration
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Proper documentation is crucial for smooth application processing and timely registration. Requirements vary based on applicant type and business structure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Identity Documents",
                    icon: "fas fa-id-card",
                    items: [
                      "Aadhaar card with photograph and current address",
                      "PAN card issued by Income Tax Department",
                      "Valid passport for Indian or foreign nationals",
                      "Driving license issued by regional transport office",
                      "Voter ID card with photograph"
                    ]
                  },
                  {
                    title: "Business Entity Documents",
                    icon: "fas fa-briefcase",
                    items: [
                      "Certificate of Incorporation for companies",
                      "Partnership Deed for partnership firms",
                      "LLP Agreement for Limited Liability Partnerships",
                      "Trust Deed for trusts and societies",
                      "GST Registration Certificate"
                    ]
                  },
                  {
                    title: "Address Verification Proofs",
                    icon: "fas fa-map-marker-alt",
                    items: [
                      "Electricity bill within three months",
                      "Property tax receipt or assessment",
                      "Registered lease agreement",
                      "Bank statement with address",
                      "Telephone bill"
                    ]
                  },
                  {
                    title: "Trademark Representation",
                    icon: "fas fa-image",
                    items: [
                      "High-resolution logo in JPG or PNG",
                      "Minimum 300 DPI resolution",
                      "Maximum file size of 2 MB",
                      "Color specifications with codes",
                      "Multiple angles for 3D marks"
                    ]
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className={`${doc.icon} text-[#FFB703] text-sm`} aria-hidden="true"></i>
                      {doc.title}
                    </h4>
                    <ul className="space-y-1">
                      {doc.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                          <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who Can Apply Section */}
          <section id="who-can-apply" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Who Can Apply for Trademark Registration in Uttar Pradesh
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Trademarks Act provides broad eligibility for trademark registration, accommodating diverse business structures and ownership types. Any person or legal entity with a bona fide intention to use the trademark can file an application.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-user-check text-[#FFB703]" aria-hidden="true"></i>
                    Eligible Applicant Categories
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Individual proprietors and sole entrepreneurs",
                      "Partnership firms including unregistered partnerships",
                      "Private Limited Companies and Public Limited Companies",
                      "Limited Liability Partnerships registered under LLP Act",
                      "Hindu Undivided Families conducting business",
                      "Trusts, Societies, and Non-Profit Organizations",
                      "Foreign companies and individuals",
                      "Joint applicants with shared business interests",
                      "Government departments and statutory authorities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                        <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-tags text-[#FFB703]" aria-hidden="true"></i>
                    Types of Registrable Marks
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Word marks including brand names and slogans",
                      "Device marks consisting of logos and graphics",
                      "Composite marks combining words and designs",
                      "Three-dimensional marks including product shapes",
                      "Sound marks with distinctive audio signatures",
                      "Color combinations in specific arrangements",
                      "Service marks for service-based businesses",
                      "Collective marks for associations and groups",
                      "Certification marks indicating quality standards"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                        <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-lightbulb text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important Requirement:</strong> All applicants must have a genuine intention to use the trademark in connection with specified goods or services. You can file applications on a proposed-to-be-used basis before actual commercialization, which is particularly beneficial for startups and businesses in planning stages across Uttar Pradesh's growing economy.
                </p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Process Section */}
          <section id="step-by-step-process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Complete Step-by-Step Trademark Registration Process
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="relative space-y-4">
                <div className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'rgba(255, 183, 3, 0.3)',
                    opacity: 0.5
                  }}
                />
                
                {[
                  {
                    step: "Conduct Comprehensive Trademark Search",
                    description: "Start with thorough trademark search using the IP India online database and commercial search tools. Look for identical marks, phonetically similar names, visually comparable logos, and conceptually related marks in your business class and related classes. Search business directories, domain registrations, social media platforms, and e-commerce sites for common law usage. This critical step identifies potential conflicts, assesses registration likelihood, and prevents future legal disputes. Professional search reports provide detailed analysis of similar marks, conflict assessment, and strategic recommendations for proceeding or modifying your mark."
                  },
                  {
                    step: "Select Appropriate Classes and Draft Specifications",
                    description: "Identify correct classes under the Nice Classification system that covers your goods or services. Classes 1 to 34 cover products while Classes 35 to 45 cover services. Technology startups in Noida typically need Class 9 for software and Class 42 for IT services. Manufacturing businesses in Kanpur might require Classes 22, 23, 24, or 25 depending on products. Draft precise specifications describing goods or services clearly and comprehensively without being overly broad. Include all current products and reasonably foreseeable future offerings. Proper class selection ensures adequate protection scope and prevents limitations that could hamper business growth."
                  },
                  {
                    step: "Prepare and Organize Required Documents",
                    description: "Compile all necessary documentation based on your applicant category. Organize identity proofs, business registration certificates, address proofs, and trademark representation in high quality format. Ensure your trademark logo meets specifications including JPG or PNG format, minimum 300 DPI resolution, maximum 2 MB file size, and clear visibility of all design elements. If claiming specific colors, provide exact Pantone or RGB codes. For composite marks, ensure proper integration of word and device elements. Prepare authorization documents including Power of Attorney on Form TM-48 if filing through an attorney or agent."
                  },
                  {
                    step: "File Online Application Through IP India Portal",
                    description: "Register on the IP India portal at ipindiaservices.gov.in if you do not have an account. Complete Form TM-A with accurate applicant details including legal name, address, and contact information. Upload your trademark representation ensuring it matches specifications exactly. Select appropriate class and provide detailed goods or services description. Indicate whether you are claiming use or filing on proposed-to-be-used basis. Review all entries carefully before submission as errors cause objections and delays. Make online payment of prescribed fees based on your applicant category and number of classes. Download acknowledgment receipt with unique application number for future tracking."
                  },
                  {
                    step: "Track Application and Wait for Examination",
                    description: "Your application undergoes formality check by the Trademark Registry to verify completeness and correctness. Once cleared, it receives a filing date and is assigned to a Trademark Examiner for substantive examination. The Examiner reviews compliance with legal requirements, distinctiveness, and conflicts with existing registered or pending marks. Use your application number to track status online through the IP India portal regularly. Examination typically takes 8 to 12 months depending on workload at the Delhi office. You will receive communication via email and portal updates regarding examination progress."
                  },
                  {
                    step: "Respond to Examination Objections if Any",
                    description: "If the Examiner identifies issues, an Examination Report lists objections with legal grounds and citations. Common objections include similarity with existing marks, lack of distinctiveness, descriptiveness, prohibited matter, or specification issues. You have 30 days to file a comprehensive response addressing each objection ground, though one extension may be requested. Prepare detailed arguments supported by case laws, evidence of use, distinctiveness proof, market surveys, or coexistence agreements. Request personal hearing to present your case directly if objections are complex. Professional legal representation significantly improves success rates for overcoming objections and securing acceptance."
                  },
                  {
                    step: "Publication in Trademark Journal and Opposition Period",
                    description: "Upon acceptance, your trademark is published in the weekly Trademark Journal available online, inviting public opposition. This publication allows third parties to review new trademark registrations and file opposition if they believe the mark conflicts with their rights. The opposition window lasts four months from the journal publication date. During this period, any person can file opposition on various grounds including prior use, similarity with their mark, or bad faith application. If opposition is filed, you receive notice and must file counter-statement within two months defending your application with evidence and arguments."
                  },
                  {
                    step: "Registration Certificate Issuance",
                    description: "If no opposition is filed during the four-month window, or after successfully defending filed oppositions, the Registry proceeds to issue registration certificate. The certificate confirms exclusive rights to use the trademark throughout India for registered goods or services. Registration is effective retroactively from the original application filing date, providing protection for the interim period. You receive the certificate via registered post and can download digital copy from the IP India portal. Once registered, you can use the R symbol with your mark indicating official registration status and full legal protection under the Trademarks Act."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-3">
                    <div 
                      className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm"
                      style={{ 
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        color: '#0C002B',
                        boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                      }}
                    >
                      {index + 1}
                    </div>
                    
                    <div 
                      className="flex-1 p-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h4 className="text-white font-nunito text-base font-semibold mb-2">
                        {item.step}
                      </h4>
                      <p className="text-white/90 font-nunito text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div 
              className="relative overflow-hidden p-5 lg:p-6 rounded-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                border: '2px solid rgba(255, 183, 3, 0.3)',
                boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{
                    background: 'rgba(255, 183, 3, 0.2)',
                    border: '1px solid rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-award text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Uttar Pradesh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Get Expert Trademark Registration Assistance
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Whether you are a startup in Noida, manufacturer in Kanpur, artisan in Agra, or entrepreneur in Lucknow, our experienced trademark attorneys provide end-to-end support for trademark registration, objection handling, opposition defense, and brand protection across Uttar Pradesh and India.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                    Start Your Registration
                    <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                  </Link>
                  <Link
                    href="/services/trademark-registration"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-semibold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <i className="fas fa-info-circle text-sm" aria-hidden="true"></i>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions About Trademark Registration in Uttar Pradesh
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-white font-nunito text-base font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
      