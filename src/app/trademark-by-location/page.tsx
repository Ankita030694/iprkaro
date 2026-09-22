import { validateAndNormalizeDescription } from '@/lib/seo-utils';

import { Metadata } from 'next';
import Link from 'next/link';
import { locations, toSlug } from './locations';

export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams?.page;
  const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const validPage = Math.max(1, currentPage || 1);
  
  const canonicalUrl = validPage > 1
    ? `https://www.iprkaro.com/trademark-by-location/page/${validPage}`
    : "https://www.iprkaro.com/trademark-by-location";

  const description = validateAndNormalizeDescription(validPage > 1
    ? `Find expert trademark registration services in your location. Protect your brand identity with IPR Karo's localized legal assistance - Page ${validPage}.`
    : "Find expert trademark registration services in your specific location. Protect your brand identity with IPR Karo's localized legal assistance.", "app/trademark-by-location/page.tsx ");

  return {
    title: validPage > 1 
      ? `Trademark Registration by Location - Page ${validPage} | IPR Karo`
      : "Trademark Registration by Location | IPR Karo",
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


const staticLocationMapping: Record<string, string> = {
  "gujarat": "gujrat",
  "kerala": "kerela",
  "bangalore": "bengaluru",
};

const staticLocationSlugs = [
  "ahmedabad", "andhra-pradesh", "arunachal-pradesh", "assam", "bengaluru",
  "bihar", "chandigarh", "chennai", "delhi", "faridabad", "ghaziabad", "goa",
  "gujrat", "gurgaon", "haryana", "himachal-pradesh", "hyderabad", "indore",
  "jammu-and-kashmir", "jharkhand", "karnataka", "kerela", "madhya-pradesh",
  "maharashtra", "manipur", "meghalaya", "mizoram", "mumbai", "nagaland",
  "noida", "odisha", "punjab", "rajasthan", "sikkim", "tamil-nadu",
  "telangana", "tripura", "uttar-pradesh", "uttarakhand", "west-bengal"
];

function getCanonicalUrl(slug: string) {
  const targetSlug = staticLocationMapping[slug] || slug;
  if (staticLocationSlugs.includes(targetSlug)) {
    return `/trademark-registration-in-${targetSlug}`;
  }
  return `/trademark-by-location/${slug}`;
}

export default async function TrademarkByLocationPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams?.page;
  const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const itemsPerPage = 60; // 60 is a good number for grid of 4 or 5
  
  // Optional: Remove exact duplicates from the array to prevent duplicate links
  const uniqueLocations = Array.from(new Set(locations)).sort();
  
  const totalItems = uniqueLocations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const validPage = Math.max(1, Math.min(currentPage || 1, totalPages));
  
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLocations = uniqueLocations.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
            {validPage > 1 ? `Trademark Registration by Location - Page ${validPage}` : 'Trademark Registration by Location'}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your brand identity with our expert legal assistance. Choose your city from the list below. We provide localized trademark services across India.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {validPage > 1 ? `Trademark Services by Location - Page ${validPage}` : 'Trademark Services by Location'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {paginatedLocations.map((loc, index) => {
            const slug = toSlug(loc);
            const href = getCanonicalUrl(slug);
            return (
              <Link 
                key={`${loc}-${index}`}
                href={href}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
              >
                <div className="text-sm text-[rgb(110,94,147)] font-bold mb-1">
                  {loc}
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Trademark services in this area.
                </p>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center space-x-4">
            {validPage > 1 ? (
              <Link 
                href={validPage - 1 === 1 ? '/trademark-by-location' : `/trademark-by-location/page/${validPage - 1}`}
                className="px-6 py-2 border rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm transition-colors"
              >
                Previous
              </Link>
            ) : (
              <div className="px-6 py-2 border rounded-md bg-gray-50 text-gray-400 font-medium cursor-not-allowed">
                Previous
              </div>
            )}
            
            <div className="flex items-center px-4 font-medium text-gray-600">
               Page {validPage} of {totalPages}
            </div>

            {validPage < totalPages ? (
              <Link 
                href={`/trademark-by-location/page/${validPage + 1}`}
                className="px-6 py-2 border rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm transition-colors"
              >
                Next
              </Link>
            ) : (
              <div className="px-6 py-2 border rounded-md bg-gray-50 text-gray-400 font-medium cursor-not-allowed">
                Next
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}