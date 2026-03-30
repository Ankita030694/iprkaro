import React from 'react';
import Link from 'next/link';

const StatesAndUTs: React.FC = () => {
    const locations = [
        { name: 'Delhi', slug: 'delhi' },
        { name: 'Noida', slug: 'noida' },
        { name: 'Gurgaon', slug: 'gurgaon' },
        { name: 'Bengaluru', slug: 'bengaluru' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Chennai', slug: 'chennai' },
        { name: 'Ghaziabad', slug: 'ghaziabad' },
        { name: 'Faridabad', slug: 'faridabad' },
        { name: 'Indore', slug: 'indore' },
        { name: 'Mumbai', slug: 'mumbai' },
        { name: 'Ahmedabad', slug: 'ahmedabad' },
        { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
        { name: 'Maharashtra', slug: 'maharashtra' },
        { name: 'Haryana', slug: 'haryana' },
        { name: 'Punjab', slug: 'punjab' },
        { name: 'Madhya Pradesh', slug: 'madhya-pradesh' },
        { name: 'Karnataka', slug: 'karnataka' },
        { name: 'Bihar', slug: 'bihar' },
        { name: 'Kerala', slug: 'kerela' },
        { name: 'Rajasthan', slug: 'rajasthan' },
        { name: 'Gujarat', slug: 'gujrat' },
        { name: 'Chandigarh', slug: 'chandigarh' },
        { name: 'Jammu & Kashmir', slug: 'jammu-and-kashmir' },
        { name: 'Andhra Pradesh', slug: 'andhra-pradesh' },
        { name: 'Himachal Pradesh', slug: 'himachal-pradesh' },
        { name: 'West Bengal', slug: 'west-bengal' },
        { name: 'Jharkhand', slug: 'jharkhand' },
        { name: 'Odisha', slug: 'odisha' },
        { name: 'Assam', slug: 'assam' },
        { name: 'Goa', slug: 'goa' },
        { name: 'Tamil Nadu', slug: 'tamil-nadu' },
        { name: 'Telangana', slug: 'telangana' },
        { name: 'Sikkim', slug: 'sikkim' },
        { name: 'Uttarakhand', slug: 'uttarakhand' },
        { name: 'Manipur', slug: 'manipur' },
        { name: 'Meghalaya', slug: 'meghalaya' },
        { name: 'Nagaland', slug: 'nagaland' },
        { name: 'Mizoram', slug: 'mizoram' },
        { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh' },
        { name: 'Tripura', slug: 'tripura' },
    ];

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[#0C002B] font-nunito font-semibold text-[32px] md:text-[40px] mb-12 text-center tracking-tight">
                    We also serve in
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                    {locations.map((loc, index) => {
                        const href = `/trademark-registration-in-${loc.slug}`;

                        return (
                            <Link
                                key={index}
                                href={href}
                                className="group block"
                            >
                                <div className="h-full bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-[12px] px-4 py-4 md:py-4 flex items-center justify-center text-center transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:-translate-y-1 group-hover:border-gray-200">
                                    <span className="text-[#0C002B] font-nunito text-[14px] md:text-[15px] font-medium transition-colors">
                                        {loc.name}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatesAndUTs;
