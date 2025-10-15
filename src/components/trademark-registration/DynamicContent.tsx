'use client';

import React from 'react';

interface DynamicContentProps {
  stateName: string;
}

export default function DynamicContent({ stateName }: DynamicContentProps) {
  const documentsRequired = [
    "Proprietor's name and permanent address of the proprietor",
    "Form - 48",
    "Copies of Aadhar and PAN card of the proprietor",
    "MSME certificate",
    "Logo/trademark",
    "Class selection/trademark class",
    "Old trademark proof for renewal",
    "Incorporation certificate",
    "GST proof, if requested",
    "A brief explanation of goods and services"
  ];

  const processSteps = [
    {
      step: "Trademark examination and selection",
      description: "Choosing the appropriate trademark to avoid repetition"
    },
    {
      step: "Choosing the appropriate trademark to avoid repetition",
      description: "Regular follow-up with the trademark office"
    },
    {
      step: "Regular follow-up with the trademark office",
      description: "Tracking the trademark and obtaining status"
    },
    {
      step: "Tracking the trademark and obtaining status",
      description: "Response to the trademark office on time"
    },
    {
      step: "Response to the trademark office on time",
      description: "Getting the trademark done"
    }
  ];

  const getStateSpecificContent = (stateName: string) => {
    const stateContent: { [key: string]: string } = {
      'Andhra Pradesh': `Andhra Pradesh, located along the southeastern coast of India, is renowned for its agricultural output, information technology, and port-led industries. With cities like Visakhapatnam and Vijayawada acting as commercial hubs, the state provides a welcoming environment for businesses. Trademark registration in Andhra Pradesh helps safeguard brands, ensuring recognition in the marketplace and legal protection against unauthorised use.`,
      'Arunachal Pradesh': `Arunachal Pradesh, the “Land of the Rising Sun,” is celebrated for its pristine environment, rich biodiversity, and local handicrafts. While major industries are in their nascent stage, unique products and services are emerging. Registering a trademark here helps both local entrepreneurs and growing businesses create a protected brand identity as the state progresses economically.`,
      'Assam': `Assam is known globally for its tea, oil, and tourism industries and for its vast cultural heritage. Many GI-tagged products and crafts originate here. Trademark registration in Assam enables businesses of all sizes—from traditional tea growers to modern startups—secure brand exclusivity and increase market trust.`,
      'Bihar': `Bihar, with its significant population and fertile lands, is home to thriving sectors like agriculture, food processing, textiles, and handlooms. Trademark registration is important in Bihar to protect unique brand assets and help businesses build a distinct identity within this competitive and growing market.`,
      'Chhattisgarh': `Rich in natural resources and minerals, Chhattisgarh is a prominent destination for mining, energy, and industrial operations. Agriculture and handicrafts sectors also play a key role. Registering a trademark in Chhattisgarh is crucial for both industrial organisations and artisans who wish to safeguard and promote their products nationally and internationally.`,
      'Goa': `Goa, famous for its tourism, hospitality, and seafood industries, also has a thriving market for breweries, fashion, and eco-products. Trademark registration in Goa is particularly useful for local entrepreneurs, resorts, and lifestyle brands to stand out amongst strong domestic and global competition.`,
      'Gujarat': `Gujarat is India's most industrialised state with major strengths in petrochemicals, textiles, diamond cutting, and pharmaceuticals. With business-friendly policies and excellent port infrastructure, registering a trademark in Gujarat is necessary to secure brand recognition in a highly entrepreneurial ecosystem.`,
      'Haryana': `Known for its automotive, IT, and agricultural businesses, Haryana is an economic powerhouse in northern India. Cities like Gurugram and Faridabad are major commercial centers. Protecting a brand through trademark registration in Haryana ensures legal security and consumer trust in a dynamic marketplace.`,
      'Himachal Pradesh': `Himachal Pradesh boasts a thriving tourism sector, horticulture, hydropower, and handicrafts industry. The pristine brand image associated with “Himachal” products makes trademark protection valuable for both local producers and service providers wishing to enhance recognition and fend off imitators.`,
      'Jharkhand': `Jharkhand is a prosperous mineral state with more than 40% of India's mineral wealth. It is a reservoir of minerals like steel and coal. Due to the proximity of these minerals, Jharkhand has become the destination for many industries. So starting a business will be a prime place for any manufacturing industry or its related service sector. However, to run a successful business in Jharkhand, one should register their trademark to get a unique identity for their brand.`,
      'Karnataka': `Karnataka, with Bangalore as its technology hub, is the Silicon Valley of India. The state's thriving IT industry, biotechnology sector, and traditional businesses make trademark protection crucial. Registering a trademark in Karnataka safeguards brand identity in this innovation-driven economy.`,
      'Kerala': `Kerala is world-famous for its spices, eco-tourism, Ayurvedic products, and IT parks. The “Kerala” brand enjoys global recognition, making trademark registration essential for exporters, local producers, and startups seeking legal exclusivity and international exposure.`,
      'Madhya Pradesh': `The “Heart of India,” Madhya Pradesh is rich in agriculture, minerals, textiles, and forestry products. With increasing urbanisation and industrialisation, trademark registration helps businesses in Madhya Pradesh distinguish themselves in growing domestic and export markets.`,
      'Maharashtra': `Maharashtra is India's leading industrial state with Mumbai as its financial capital. Home to numerous multinational corporations, startups, and traditional businesses, the state offers immense opportunities for brand establishment. Trademark registration in Maharashtra is essential for protecting intellectual property in this economically vibrant region.`,
      'Manipur': `Manipur, with its renowned handicrafts, handlooms, and unique organic agricultural products, is becoming a destination for entrepreneurs and those promoting indigenous brands. Trademark registration in Manipur is vital for local businesses looking to safeguard their creative work and capitalise on the state’s unique image.`,
      'Meghalaya': `Meghalaya offers unique agricultural produce, traditional crafts, and eco-tourism potential. As local branding becomes increasingly important, registration of trademarks in Meghalaya helps businesses protect homegrown brand identities and connect to both regional and global markets.`,
      'Mizoram': `Mizoram is famous for bamboo and handloom products, horticulture, and eco-centric businesses. Registering trademarks in Mizoram supports entrepreneurs and cooperatives to defend their local brands and encourage authentic product recognition.`,
      'Nagaland': `Nagaland boasts vibrant ethnic crafts, organic produce, and cultural enterprises. Trademark registration in Nagaland enables businesses and individuals to protect their unique identity and promote products from this dynamic northeastern state.`,
      'Odisha': `Odisha has a strong tradition in textiles, handlooms, mining, and steel manufacturing. With an evolving IT sector and a rich cultural heritage, businesses in Odisha benefit from trademark registration to secure their reputation and compete in the national market.`,
      'Punjab': `Punjab, known as India's granary, has a strong agricultural base and is rapidly industrializing in manufacturing, IT, and services sectors. The state's enterprising culture and skilled workforce make it attractive for business growth. Trademark registration in Punjab protects brands in this progressive northern state.`,
      'Rajasthan': `Rajasthan, known for its rich heritage and mineral resources, is emerging as a major industrial destination with special focus on renewable energy, mining, and textiles. The state's business-friendly policies and excellent connectivity make it ideal for new ventures. Trademark registration in Rajasthan provides essential brand protection in this growing economy.`,
      'Sikkim': `Sikkim, acclaimed for its organic agriculture, pharmaceuticals, and tourism, has carved a niche for quality produce and wellness industries. Trademark registration is crucial for securing the state’s “100% organic” USP and for local businesses to stand out in competitive markets.`,
      'Tamil Nadu': `Tamil Nadu is a major industrial and commercial hub in South India, known for its automotive, textile, and IT industries. With Chennai as its capital, the state offers excellent infrastructure and business-friendly policies. Trademark registration in Tamil Nadu protects brands in this rapidly growing economic powerhouse.`,
      'Telangana': `Telangana, with Hyderabad as its capital, is a center for information technology, pharmaceuticals, and startups. A vibrant film and food industry further boosts its commercial appeal. Registering a trademark in Telangana is fundamental for protecting high-tech brands and creative enterprises.`,
      'Tripura': `Tripura is recognised for its bamboo work, rubber, tea, and organic produce. As industries grow, especially in agro-processing and handicrafts, trademark registration in Tripura helps local brands secure legal protection and reach new markets.`,
      'Uttar Pradesh': `Uttar Pradesh is India's most populous state with immense business potential across agriculture, manufacturing, and services sectors. With growing industrial corridors and business-friendly policies, the state offers tremendous opportunities for brand establishment. Trademark registration in Uttar Pradesh ensures comprehensive brand protection.`,
      'Uttarakhand': `Uttarakhand stands out for tourism, organic farming, herbal wellness products, and hydropower. With a reputation for purity and quality, brands here benefit significantly from trademark registration to compete on a national and global platform.`,
      'West Bengal': `West Bengal, with Kolkata as its cultural and commercial capital, has a rich industrial heritage in jute, tea, and steel industries. The state's strategic location and skilled workforce make it attractive for diverse businesses. Trademark registration in West Bengal safeguards brand identity in this historically significant business region.`,

      // Union Territories
      'Delhi': `Delhi, being the capital of India, is a major business hub with diverse industries ranging from technology to traditional crafts. The city's strategic location and excellent connectivity make it an ideal place for businesses to establish their presence. Trademark registration in Delhi provides crucial protection for brands in this competitive market.`,
      'Puducherry': `Puducherry, with its unique blend of French heritage and Indian culture, is famous for tourism, handicrafts, handmade products, and specialty foods. Trademark registration in Puducherry assists businesses in protecting their distinct identity in both local and global markets.`,
      'Chandigarh': `Chandigarh is renowned for its urban planning, real estate, education, and service industries. As a thriving administrative and business center, trademark registration in Chandigarh offers robust protection for brands competing in this modern city.`,
      'Andaman and Nicobar Islands': `Known for their pristine beaches and eco-tourism, the Andaman and Nicobar Islands also have emerging markets in seafood and locally crafted goods. Trademark registration aids entrepreneurs in building a recognisable brand in tourism and associated sectors.`,
      'Lakshadweep': `Lakshadweep, a group of islands celebrated for marine products and tourism, provides opportunities for niche brands and businesses. Trademark registration is an excellent tool here for safeguarding unique brands and products with local flavour.`,
      'Dadra and Nagar Haveli and Daman and Diu': `This Union Territory, known for its tourism, silvassa industries, and distilleries, is attracting business investments. Registering a trademark helps enterprises in Dadra and Nagar Haveli and Daman and Diu establish a secure brand presence.`,
      'Jammu and Kashmir': `Jammu and Kashmir, the “Paradise on Earth,” is celebrated for handicrafts, handlooms, dry fruits, and tourism. Trademark registration empowers producers of Kashmiri shawls, carpets, and saffron, among others, to prevent imitation and preserve brand exclusivity.`,
      'Ladakh': `Ladakh's unique climate is ideal for cultivating specialty products like pashmina, apricots, and handicrafts. With tourism as a major industry, trademark registration helps businesses and cooperatives in Ladakh protect their brands and enhance reputation.`,
    };

    return stateContent[stateName] || `Complete guide to trademark registration in ${stateName}. Protect your brand identity with our expert legal guidance and AI-powered search technology. Our comprehensive trademark services ensure your brand receives the protection it deserves across all business sectors in ${stateName}.`;
  };

  return (
    <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-5">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              An Overview of trademark registration in {stateName}
            </h2>
          </div>

          <div 
            className="group relative p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-lg lg:rounded-xl xl:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.01]"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Decorative gradient overlay on hover */}
            <div 
              className="absolute inset-0 rounded-lg lg:rounded-xl xl:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.05) 0%, rgba(19, 69, 195, 0.05) 100%)'
              }}
            />
            <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed">
              {getStateSpecificContent(stateName)}
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section id="criteria" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-5">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Criteria for Trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5">
            {/* Individual Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)',
                border: '1px solid rgba(255, 183, 3, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-user text-[#0C002B] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Individual
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Indian/Foreign nationals can apply for a trademark
              </p>
            </div>

            {/* Choose Trademark Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-search text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Choose Trademark
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Choosing relevant trademark
              </p>
            </div>

            {/* Company/LLP Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-building text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Company/LLP
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Company/LLP can apply
              </p>
            </div>

            {/* Address Proof Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)',
                border: '1px solid rgba(255, 183, 3, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-address-card text-[#0C002B] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Address Proof
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Proper address proof
              </p>
            </div>
          </div>

          {/* Fast Registration CTA */}
          <div 
            className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-xl lg:rounded-2xl group hover:scale-[1.02] transition-all duration-500"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 183, 3, 0.2)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#FFB703] blur-3xl animate-float" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4">
              <div className="flex items-start gap-3 lg:gap-4">
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-rocket text-[#FFB703] text-lg lg:text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1.5">
                    Complete Trademark Registration Fast
                  </h3>
                  <p className="text-white/95 font-nunito text-xs lg:text-sm xl:text-base">
                    Register Trademark with IPRKaro - Just <span className="font-bold text-[#FFB703]">₹1,999/-</span>
                  </p>
                </div>
              </div>
              <button 
                className="group/btn relative px-5 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-lg font-nunito font-bold text-xs lg:text-sm xl:text-base transition-all duration-300 hover:scale-105 overflow-hidden whitespace-nowrap"
                style={{ 
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  color: '#0C002B',
                  boxShadow: '0 8px 25px rgba(255, 183, 3, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Apply Now
                  <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform text-[10px]" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Documents required for trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
            {documentsRequired.map((document, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-2 p-3 lg:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{
                    background: '#FFB703',
                    boxShadow: '0 0 10px rgba(255, 183, 3, 0.5)'
                  }}
                />
                <span className="text-white/95 font-nunito text-xs md:text-sm lg:text-base">
                  {document}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Process for trademark registration in {stateName}
            </h2>
          </div>

          <div className="relative space-y-3 lg:space-y-4">
            {/* Connecting line */}
            <div 
              className="absolute left-4 lg:left-5 top-0 bottom-0 w-0.5"
              style={{
                background: 'rgba(255, 183, 3, 0.3)',
                opacity: 0.5
              }}
            />
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex gap-3 lg:gap-4">
                {/* Step Number Badge */}
                <div 
                  className="relative z-10 flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-nunito font-bold text-sm lg:text-base"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div 
                  className="flex-1 p-3 lg:p-4 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h4 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold mb-1.5">
                    {step.step}
                  </h4>
                  <p className="text-white/90 font-nunito text-xs lg:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validity Section */}
      <section id="validity" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Validity of Trademark Registration
            </h2>
          </div>

          <div 
            className="relative p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Icon Badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3"
              style={{
                background: 'rgba(255, 183, 3, 0.15)',
                border: '1px solid rgba(255, 183, 3, 0.3)'
              }}
            >
              <i className="fas fa-clock text-[#FFB703] text-xs" aria-hidden="true"></i>
              <span className="text-white font-nunito text-xs font-semibold">10 Years Validity</span>
            </div>
            
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
              The validity of the trademark is only ten years from the date of registration; after every 10 years, the required trademark needs to be renewed.
            </p>
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
              A company should renew the trademark before the expiry of its time. If renewed within 6 months before expiration, the legal safeguard for the product will be maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              IPRKaro Support
            </h2>
          </div>

          <div 
            className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 183, 3, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
            
            <div className="relative">
              {/* Support Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">End-to-End Support</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Complete guidance throughout</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Expert Team</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Experienced legal counsel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fas fa-bolt text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Quick Process</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Fast registration service</p>
                  </div>
                </div>
              </div>
              
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                At IPRKaro, we will provide you with end-to-end support to achieve your trademark registration in {stateName} with minimum resources. Complete support from our legal team will be given till the end of the trademark registration process in {stateName}.
              </p>
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                Our trademark counsel will support you from start to end until you get your trademark registration. If you are eager to get trademark registration in {stateName}, then our IPRKaro team will help you get your trademark registration done quickly. We also extend our help in another legal proceeding of your company registration if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
