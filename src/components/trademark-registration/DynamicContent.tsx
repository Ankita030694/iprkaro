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
      'Jharkhand': `Jharkhand is a prosperous mineral state with more than 40% of India's mineral wealth. It is a reservoir of minerals like steel and coal. Due to the proximity of these minerals, Jharkhand has become the destination for many industries. So starting a business will be a prime place for any manufacturing industry or its related service sector. However, to run a successful business in Jharkhand, one should register their trademark to get a unique identity for their brand.`,
      'Delhi': `Delhi, being the capital of India, is a major business hub with diverse industries ranging from technology to traditional crafts. The city's strategic location and excellent connectivity make it an ideal place for businesses to establish their presence. Trademark registration in Delhi provides crucial protection for brands in this competitive market.`,
      'Maharashtra': `Maharashtra is India's leading industrial state with Mumbai as its financial capital. Home to numerous multinational corporations, startups, and traditional businesses, the state offers immense opportunities for brand establishment. Trademark registration in Maharashtra is essential for protecting intellectual property in this economically vibrant region.`,
      'Karnataka': `Karnataka, with Bangalore as its technology hub, is the Silicon Valley of India. The state's thriving IT industry, biotechnology sector, and traditional businesses make trademark protection crucial. Registering a trademark in Karnataka safeguards brand identity in this innovation-driven economy.`,
      'Tamil Nadu': `Tamil Nadu is a major industrial and commercial hub in South India, known for its automotive, textile, and IT industries. With Chennai as its capital, the state offers excellent infrastructure and business-friendly policies. Trademark registration in Tamil Nadu protects brands in this rapidly growing economic powerhouse.`,
      'Gujarat': `Gujarat is India's most industrialized state with a strong presence in petrochemicals, textiles, and pharmaceuticals. The state's business-friendly policies and excellent port facilities make it a prime destination for manufacturing and export-oriented businesses. Trademark protection in Gujarat ensures brand security in this industrial powerhouse.`,
      'West Bengal': `West Bengal, with Kolkata as its cultural and commercial capital, has a rich industrial heritage in jute, tea, and steel industries. The state's strategic location and skilled workforce make it attractive for diverse businesses. Trademark registration in West Bengal safeguards brand identity in this historically significant business region.`,
      'Rajasthan': `Rajasthan, known for its rich heritage and mineral resources, is emerging as a major industrial destination with special focus on renewable energy, mining, and textiles. The state's business-friendly policies and excellent connectivity make it ideal for new ventures. Trademark registration in Rajasthan provides essential brand protection in this growing economy.`,
      'Uttar Pradesh': `Uttar Pradesh is India's most populous state with immense business potential across agriculture, manufacturing, and services sectors. With growing industrial corridors and business-friendly policies, the state offers tremendous opportunities for brand establishment. Trademark registration in Uttar Pradesh ensures comprehensive brand protection.`,
      'Punjab': `Punjab, known as India's granary, has a strong agricultural base and is rapidly industrializing in manufacturing, IT, and services sectors. The state's enterprising culture and skilled workforce make it attractive for business growth. Trademark registration in Punjab protects brands in this progressive northern state.`
    };

    return stateContent[stateName] || `Complete guide to trademark registration in ${stateName}. Protect your brand identity with our expert legal guidance and AI-powered search technology. Our comprehensive trademark services ensure your brand receives the protection it deserves across all business sectors in ${stateName}.`;
  };

  return (
    <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-6">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              An Overview of trademark registration in {stateName}
            </h2>
          </div>

          <div className="p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-md lg:rounded-lg xl:rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
              {getStateSpecificContent(stateName)}
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section id="criteria" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-6">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Criteria for Trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6">
            <div className="p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-md lg:rounded-lg xl:rounded-xl" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4 mb-1.5 lg:mb-2 xl:mb-3">
                <i className="fas fa-user text-[#FFB703] text-sm lg:text-base xl:text-lg 2xl:text-xl" aria-hidden="true"></i>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                  Individual
                </span>
              </div>
              <p className="text-white font-nunito text-xs lg:text-sm xl:text-base 2xl:text-lg opacity-90">
                Indian/Foreign nationals can apply for a trademark
              </p>
            </div>

            <div className="p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-md lg:rounded-lg xl:rounded-xl" style={{ background: 'rgba(19, 69, 195, 0.1)' }}>
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4 mb-1.5 lg:mb-2 xl:mb-3">
                <i className="fas fa-search text-[#1345C3] text-sm lg:text-base xl:text-lg 2xl:text-xl" aria-hidden="true"></i>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                  Choose Trademark
                </span>
              </div>
              <p className="text-white font-nunito text-xs lg:text-sm xl:text-base 2xl:text-lg opacity-90">
                Choosing relevant trademark
              </p>
            </div>

            <div className="p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-md lg:rounded-lg xl:rounded-xl" style={{ background: 'rgba(6, 154, 129, 0.1)' }}>
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4 mb-1.5 lg:mb-2 xl:mb-3">
                <i className="fas fa-building text-[#069A81] text-sm lg:text-base xl:text-lg 2xl:text-xl" aria-hidden="true"></i>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                  Company/LLP
                </span>
              </div>
              <p className="text-white font-nunito text-xs lg:text-sm xl:text-base 2xl:text-lg opacity-90">
                Company/LLP can apply
              </p>
            </div>

            <div className="p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-md lg:rounded-lg xl:rounded-xl" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4 mb-1.5 lg:mb-2 xl:mb-3">
                <i className="fas fa-address-card text-[#FFB703] text-sm lg:text-base xl:text-lg 2xl:text-xl" aria-hidden="true"></i>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                  Address Proof
                </span>
              </div>
              <p className="text-white font-nunito text-xs lg:text-sm xl:text-base 2xl:text-lg opacity-90">
                Proper address proof
              </p>
            </div>
          </div>

          {/* Fast Registration CTA */}
          <div className="p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-lg lg:rounded-xl xl:rounded-2xl" style={{ background: 'linear-gradient(135deg, #1345C3, #069A81)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                <i className="fas fa-rocket text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" aria-hidden="true"></i>
                <div>
                  <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                    Complete Trademark Registration Fast
                  </h3>
                  <p className="text-white font-nunito text-xs lg:text-sm xl:text-base 2xl:text-lg opacity-90">
                    Register Trademark with IPRKaro - Just ₹3,999/-
                  </p>
                </div>
              </div>
              <button className="px-4 lg:px-6 xl:px-8 2xl:px-10 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-md lg:rounded-lg xl:rounded-xl font-nunito font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl transition-all duration-300 hover:scale-105" style={{ background: '#FFB703', color: '#0C002B' }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="scroll-mt-20">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-semibold">
              Documents required for trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {documentsRequired.map((document, index) => (
              <div key={index} className="flex items-start gap-2 p-2 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFB703] mt-1.5 flex-shrink-0"></div>
                <span className="text-white font-nunito text-xs md:text-sm">
                  {document}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="scroll-mt-20">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-semibold">
              Process for trademark registration in {stateName}
            </h2>
          </div>

          <div className="space-y-3">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-nunito font-bold text-xs" style={{ background: '#FFB703', color: '#0C002B' }}>
                  {index + 1}
                </div>
                <div className="flex-1 p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                  <h4 className="text-white font-nunito text-sm md:text-base font-medium mb-1">
                    {step.step}
                  </h4>
                  <p className="text-white font-nunito text-xs opacity-90">
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
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-semibold">
              Validity of Trademark Registration
            </h2>
          </div>

          <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-sm md:text-base leading-relaxed mb-3">
              The validity of the trademark is only ten years from the date of registration; after every 10 years, the required trademark needs to be renewed.
            </p>
            <p className="text-white font-nunito text-sm md:text-base leading-relaxed">
              A company should renew the trademark before the expiry of its time. If renewed within 6 months before expiration, the legal safeguard for the product will be maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="scroll-mt-20">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-semibold">
              IPRKaro Support
            </h2>
          </div>

          <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-sm md:text-base leading-relaxed mb-3">
              At IPRKaro, we will provide you with end-to-end support to achieve your trademark registration in {stateName} with minimum resources. Complete support from our legal team will be given till the end of the trademark registration process in {stateName}.
            </p>
            <p className="text-white font-nunito text-sm md:text-base leading-relaxed">
              Our trademark counsel will support you from start to end until you get your trademark registration. If you are eager to get trademark registration in {stateName}, then our IPRKaro team will help you get your trademark registration done quickly. We also extend our help in another legal proceeding of your company registration if needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
