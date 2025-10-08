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
    <div className="space-y-8 lg:space-y-12">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              An Overview of trademark registration in {stateName}
            </h2>
          </div>

          <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-base md:text-lg leading-relaxed">
              {getStateSpecificContent(stateName)}
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section id="criteria" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              Criteria for Trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user text-[#FFB703] text-lg" aria-hidden="true"></i>
                <span className="text-white font-nunito text-base md:text-lg font-medium">
                  Individual
                </span>
              </div>
              <p className="text-white font-nunito text-sm opacity-90">
                Indian/Foreign nationals can apply for a trademark
              </p>
            </div>

            <div className="p-4 rounded-lg" style={{ background: 'rgba(19, 69, 195, 0.1)' }}>
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-search text-[#1345C3] text-lg" aria-hidden="true"></i>
                <span className="text-white font-nunito text-base md:text-lg font-medium">
                  Choose Trademark
                </span>
              </div>
              <p className="text-white font-nunito text-sm opacity-90">
                Choosing relevant trademark
              </p>
            </div>

            <div className="p-4 rounded-lg" style={{ background: 'rgba(6, 154, 129, 0.1)' }}>
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-building text-[#069A81] text-lg" aria-hidden="true"></i>
                <span className="text-white font-nunito text-base md:text-lg font-medium">
                  Company/LLP
                </span>
              </div>
              <p className="text-white font-nunito text-sm opacity-90">
                Company/LLP can apply
              </p>
            </div>

            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-address-card text-[#FFB703] text-lg" aria-hidden="true"></i>
                <span className="text-white font-nunito text-base md:text-lg font-medium">
                  Address Proof
                </span>
              </div>
              <p className="text-white font-nunito text-sm opacity-90">
                Proper address proof
              </p>
            </div>
          </div>

          {/* Fast Registration CTA */}
          <div className="p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, #1345C3, #069A81)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-rocket text-white text-2xl" aria-hidden="true"></i>
                <div>
                  <h3 className="text-white font-nunito text-lg md:text-xl font-semibold">
                    Complete Trademark Registration Fast
                  </h3>
                  <p className="text-white font-nunito text-sm opacity-90">
                    Register Trademark with IPRKaro - Just ₹3,999/-
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 rounded-lg font-nunito font-semibold text-base transition-all duration-300 hover:scale-105" style={{ background: '#FFB703', color: '#0C002B' }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              Documents required for trademark registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documentsRequired.map((document, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                <span className="text-white font-nunito text-sm md:text-base">
                  {document}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              Process for trademark registration in {stateName}
            </h2>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: '#FFB703', color: '#0C002B' }}>
                  {index + 1}
                </div>
                <div className="flex-1 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                  <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">
                    {step.step}
                  </h4>
                  <p className="text-white font-nunito text-sm opacity-90">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validity Section */}
      <section id="validity" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              Validity of Trademark Registration
            </h2>
          </div>

          <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-base md:text-lg leading-relaxed mb-4">
              The validity of the trademark is only ten years from the date of registration; after every 10 years, the required trademark needs to be renewed.
            </p>
            <p className="text-white font-nunito text-base md:text-lg leading-relaxed">
              A company should renew the trademark before the expiry of its time. If renewed within 6 months before expiration, the legal safeguard for the product will be maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="scroll-mt-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
            <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-semibold">
              IPRKaro Support
            </h2>
          </div>

          <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-white font-nunito text-base md:text-lg leading-relaxed mb-4">
              At IPRKaro, we will provide you with end-to-end support to achieve your trademark registration in {stateName} with minimum resources. Complete support from our legal team will be given till the end of the trademark registration process in {stateName}.
            </p>
            <p className="text-white font-nunito text-base md:text-lg leading-relaxed">
              Our trademark counsel will support you from start to end until you get your trademark registration. If you are eager to get trademark registration in {stateName}, then our IPRKaro team will help you get your trademark registration done quickly. We also extend our help in another legal proceeding of your company registration if needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
