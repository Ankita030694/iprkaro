import React from 'react';
import Link from 'next/link';

const TrademarkClasses: React.FC = () => {
    const classes = [
        { name: 'Chemicals', slug: 'chemicals' },
        { name: 'Restaurant', slug: 'restaurant' },
        { name: 'Clothing', slug: 'clothing-brand' },
        { name: 'Jewellery', slug: 'jewellery-brand' },
        { name: 'Processed Food', slug: 'processed-food' },
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
        { name: 'Cosmetics & Cleaning', slug: 'cosmetics-cleaning' },
        { name: 'Oils & Lubricants', slug: 'oils-and-lubricants' },
        { name: 'Pharmaceuticals', slug: 'pharmaceuticals' },
        { name: 'Metal Goods', slug: 'metal-goods' },
        { name: 'Machinery', slug: 'machinery' },
        { name: 'Hand Tools', slug: 'hand-tools' },
        { name: 'Electronics & Software', slug: 'electronics-and-software' },
        { name: 'Medical Equipment', slug: 'medical-equipment' },
        { name: 'Appliances', slug: 'appliances' },
        { name: 'Vehicles', slug: 'vehicles' },
        { name: 'Firearms', slug: 'firearms' },
        { name: 'Musical Instruments', slug: 'musical-instruments' },
        { name: 'Paper & Printing', slug: 'paper-goods-and-printing' },
        { name: 'Rubber Products', slug: 'rubber-products' },
        { name: 'Leather Goods', slug: 'leather-goods' },
        { name: 'Building Materials', slug: 'non-metal-building-materials' },
        { name: 'Kitchen Utensils', slug: 'kitchen-utensils' },
        { name: 'Ropes & Tents', slug: 'ropes-and-tents' },
        { name: 'Yarns & Threads', slug: 'yarns-and-threads' },
        { name: 'Fabrics', slug: 'fabrics' },
        { name: 'Lace & Embroidery', slug: 'lace-and-embroidery' },
        { name: 'Carpets & Rugs', slug: 'carpets' },
        { name: 'Staple Foods', slug: 'staple-foods' },
        { name: 'Raw Agri Products', slug: 'raw-agricultural-products' },
        { name: 'Construction & Repair', slug: 'construction-and-repair' },
        { name: 'Transport & Logistics', slug: 'transport-and-logistics' },
        { name: 'Tobacco', slug: 'tobacco' },
        { name: 'Alcoholic Beverages', slug: 'alcoholic-drinks' },
        { name: 'Beverages', slug: 'beverages' },
        { name: 'Education & Training', slug: 'education-and-training' }
    ];

    return (
        <section className="bg-[#0C002B] py-16 sm:py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-white font-nunito font-bold text-2xl sm:text-3xl md:text-4xl mb-12 text-center uppercase tracking-tight">
                    Trademark <span className="text-[#FFB703]">Classes</span> By Industry
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
                    {classes.map((cls, index) => {
                        const href = (cls as any).isCustomPath ? (cls as any).slug : `/trademark-for-${cls.slug}`;

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
