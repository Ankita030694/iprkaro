import React from 'react';
import Link from 'next/link';

const TrademarkClasses: React.FC = () => {
    const classes = [
        { name: 'Chemicals', slug: 'chemicals' },
        { name: 'Restaurant', slug: 'restaurant' },
        { name: 'Clothing', slug: 'clothing-brand' },
        { name: 'Jewellery', slug: 'jewellery-brand' },
        { name: 'Stationary', slug: 'stationary' },
        { name: 'Furniture', slug: 'furniture-shop' },
        { name: 'Ecommerce', slug: 'ecommerce' },
        { name: 'Financial', slug: 'financial-services' },
        { name: 'Medical', slug: 'medical-services' },
        { name: 'Telecommunication', slug: 'telecommunication-services' },
        { name: 'Toys & Sports', slug: 'toys-sports-services' },
        { name: 'Legal Services', slug: 'legal-services' },
        { name: 'Business', slug: 'business' },
        { name: 'Paints & Coatings', slug: 'paints-coatings' },
        { name: 'Cosmetics & Cleaning', slug: 'cosmetics-cleaning' }

    ];

    return (
        <section className="bg-[#0C002B] py-16 sm:py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-white font-nunito font-bold text-2xl sm:text-3xl md:text-4xl mb-12 text-center uppercase tracking-tight">
                    Trademark <span className="text-[#FFB703]">Classes</span> By Industry
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
                    {classes.map((cls, index) => {
                        const href = `/trademark-for-${cls.slug}`;

                        return (
                            <Link
                                key={index}
                                href={href}
                                className="group block"
                            >
                                <div className="h-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 flex items-center justify-center text-center transition-all duration-300 group-hover:bg-[#FFB703] group-hover:border-[#FFB703] group-hover:scale-105 shadow-lg">
                                    <span className="text-white font-nunito text-xs sm:text-sm font-bold transition-colors group-hover:text-[#0C002B]">
                                        {cls.name}
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

export default TrademarkClasses;
