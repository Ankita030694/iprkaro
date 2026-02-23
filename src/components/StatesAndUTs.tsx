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
    ];

    return (
        <section className="bg-[#0C002B] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-white font-nunito font-bold text-2xl sm:text-3xl md:text-4xl mb-12 text-center">
                    We also <span className="text-[#FFB703]">serve in</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-3">
                    {locations.map((loc, index) => {
                        const href = `/trademark-registration-in-${loc.slug}`;

                        return (
                            <Link
                                key={index}
                                href={href}
                                className="group block"
                            >
                                <div className="h-full bg-white/5 border border-white/10 rounded-lg px-2 py-3 flex items-center justify-center text-center transition-all duration-300 group-hover:bg-[#FFB703] group-hover:border-[#FFB703] group-hover:scale-105">
                                    <span className="text-white font-nunito text-xs sm:text-sm font-medium transition-colors group-hover:text-[#0C002B]">
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
