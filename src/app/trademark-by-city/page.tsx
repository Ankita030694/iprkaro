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
    ? `https://www.iprkaro.com/trademark-by-city?page=${validPage}`
    : "https://www.iprkaro.com/trademark-by-city";

  return {
    title: "Trademark Registration by City | IPR Karo",
    description: "Find the best trademark advocates and lawyers for trademark registration in major cities across India. Local expertise for your brand protection with IPR Karo.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function TrademarkByCityPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams?.page;
  const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const itemsPerPage = 60; // 60 is a good number for grid of 4 or 5
  
  const totalItems = locations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const validPage = Math.max(1, Math.min(currentPage || 1, totalPages));
  
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLocations = locations.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Trademark Registration by City
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find local trademark lawyers and legal help in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {paginatedLocations.map((loc, index) => (
            <Link 
              key={`${loc}-${index}`}
              href={`/trademark-by-city/${toSlug(loc)}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <div className="text-sm text-gray-800 font-medium">
                Top Trademark Lawyers in {loc}
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center space-x-4">
            {validPage > 1 ? (
              <Link 
                href={`/trademark-by-city?page=${validPage - 1}`}
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
                href={`/trademark-by-city?page=${validPage + 1}`}
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
