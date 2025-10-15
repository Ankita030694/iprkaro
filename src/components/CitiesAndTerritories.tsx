import React from 'react';
import Link from 'next/link';

const CitiesAndTerritories: React.FC = () => {
  // List of all major Indian cities and locations (35 total)
  const allLocations = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry'
  ];

  // Function to generate state-specific slug URL
  const generateLocationSlug = (locationName: string) => {
    const slug = locationName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/&/g, 'and') // Replace & with 'and'
      .trim();
    return `trademark-registration-in-${slug}`;
  };

  return (
    <section className="bg-[#0C002B] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-white font-nunito font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            Nationwide Trademark Registration Coverage
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] font-nunito text-base sm:text-lg max-w-3xl mx-auto">
            IPR Karo provides comprehensive trademark registration services across all major cities and union territories of India
          </p>
        </div>

        {/* All Locations Grid */}
        <div>
          <h3 className="text-[#FFB703] font-nunito font-semibold text-xl sm:text-2xl mb-6 sm:mb-8 text-center">
            <i className="fas fa-map-marker-alt mr-3" aria-hidden="true"></i>
            Nationwide Coverage ({allLocations.length} Locations)
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 gap-2 sm:gap-3">
            {allLocations.map((location, index) => (
              <Link
                key={`location-${index}`}
                href={`/services/trademark-registration/${generateLocationSlug(location)}`}
                className="group cursor-pointer"
              >
                {/* Minimal Card Design */}
                <div className="bg-[#0C002B] rounded-lg px-3 py-4 text-center border border-gray-800 hover:border-[#FFB703] hover:bg-[#1a0033] hover:scale-105 transition-all duration-300">

                  {/* Simple Text Only */}
                  <span className="text-white font-nunito text-sm font-medium leading-tight group-hover:text-[#FFB703] transition-colors duration-300">
                    {location}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[rgba(255,183,3,0.1)] to-[rgba(6,154,129,0.1)] rounded-xl p-6 sm:p-8 border border-[rgba(255,183,3,0.2)]">
            <h4 className="text-white font-nunito font-semibold text-lg sm:text-xl mb-4">
              Complete India Coverage for Trademark Registration
            </h4>
            <p className="text-[rgba(255,255,255,0.8)] font-nunito text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
              From bustling metropolitan cities like Mumbai, Delhi, Bangalore, and Chennai to union territories like Chandigarh, Jammu & Kashmir, and Lakshadweep,
              IPR Karo ensures seamless trademark registration services across every corner of India. Our AI-powered platform and expert legal team
              provide comprehensive coverage for startups, SMEs, and enterprises nationwide, covering all 35 major locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesAndTerritories;
