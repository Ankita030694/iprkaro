import { Metadata } from 'next';
import Link from 'next/link';
import { locations, toSlug } from './locations';

export const metadata: Metadata = {
  title: "Trademark Registration by City | IPR Karo",
  description: "Find the best trademark advocates and lawyers for trademark registration in major cities across India. Local expertise for your brand protection with IPR Karo.",
  alternates: {
    canonical: "/trademark-by-city",
  },
};

export default function TrademarkByCityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Trademark Registration by City
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find expert trademark advocates and legal representation in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locations.map((loc, index) => (
            <Link 
              key={index} 
              href={`/trademark-by-city/${toSlug(loc)}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <div className="text-sm text-gray-800 font-medium">
                Best Advocate | Best Lawyers in {loc} for Trademark Registration
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
