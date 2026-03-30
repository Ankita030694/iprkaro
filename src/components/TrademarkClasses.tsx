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
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[#0C002B] font-nunito font-semibold text-[32px] md:text-[40px] mb-12 text-center tracking-tight">
                    Trademark Classes By Industry
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                    {classes.map((cls, index) => {
                        const href = (cls as any).isCustomPath ? (cls as any).slug : `/trademark-for-${cls.slug}`;

                        return (
                            <Link
                                key={index}
                                href={href}
                                className="group block"
                            >
                                <div className="h-full bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-[12px] px-4 py-4 md:py-4 flex items-center justify-center text-center transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:-translate-y-1 group-hover:border-gray-200">
                                    <span className="text-[#0C002B] font-nunito text-[14px] md:text-[15px] font-medium transition-colors">
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
