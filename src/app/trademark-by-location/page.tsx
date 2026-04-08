import { Metadata } from 'next';
import Link from 'next/link';
import { locations, toSlug } from './locations';

export const metadata: Metadata = {
  title: "Trademark Registration by Location | IPR Karo",
  description: "Find expert trademark registration services in your specific location. Protect your brand identity with IPR Karo's localized legal assistance.",
  alternates: {
    canonical: "https://www.iprkaro.com/trademark-by-location",
  },
};

export default function TrademarkByLocationPage() {
  // Optional: Remove exact duplicates from the array to prevent duplicate links
  const uniqueLocations = Array.from(new Set(locations)).sort();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Trademark Registration by Location
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Select your location below to find specialized trademark registration services and legal guidance near you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {uniqueLocations.map((loc, index) => (
            <Link 
              key={index} 
              href={`/trademark-by-location/${toSlug(loc)}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <div className="text-sm text-[rgb(110,94,147)] font-bold mb-1">
                {loc}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Trademark Registration in {loc}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}