import { MetadataRoute } from 'next';

export async function GET() {
  // Configure your domain here (without www is recommended for modern websites)
  // Make sure to set up 301 redirects from www to non-www (or vice versa) in your hosting config
  const baseUrl = 'https://iprkaro.com'; // Use 'https://www.iprkaro.com' if you prefer www

  // All static pages that exist in the project
  const allPages = [
    // Root pages
    '',
    '/about',
    '/blog',
    '/contact',
    '/form',
    '/privacy-policy',
    '/terms-and-conditions',
    '/trademark-registration-guide',

    // Features pages
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',

    // Services main pages
    '/services',
    '/services/trademark-registration',
    '/services/patent-services',
    '/services/copyright-protection',

    // Trademark sub-services
    '/services/trademark/rectification',
    '/services/trademark/assignment',
    '/services/trademark/watch',
    '/services/trademark/search',
    '/services/trademark/objection',
    '/services/trademark/opposition',
    '/services/trademark/renewal',

    // Patent sub-services
    '/services/patent/filing',
    '/services/patent/licensing',
    '/services/patent/renewal',
    '/services/patent/opposition',

    // Copyright sub-services
    '/services/copyright/software',
    '/services/copyright/renewal',
    '/services/copyright/infringement',
    '/services/copyright/transfer',

    // Trademark Registration - State Pages
    '/services/trademark-registration/andhra-pradesh',
    '/services/trademark-registration/arunachal-pradesh',
    '/services/trademark-registration/assam',
    '/services/trademark-registration/bihar',
    '/services/trademark-registration/chandigarh',
    '/services/trademark-registration/chhattisgarh',
    '/services/trademark-registration/delhi',
    '/services/trademark-registration/goa',
    '/services/trademark-registration/gujarat',
    '/services/trademark-registration/haryana',
    '/services/trademark-registration/himachal-pradesh',
    '/services/trademark-registration/jammu-and-kashmir',
    '/services/trademark-registration/jharkhand',
    '/services/trademark-registration/karnataka',
    '/services/trademark-registration/kerala',
    '/services/trademark-registration/ladakh',
    '/services/trademark-registration/madhya-pradesh',
    '/services/trademark-registration/maharashtra',
    '/services/trademark-registration/manipur',
    '/services/trademark-registration/meghalaya',
    '/services/trademark-registration/odisha',
    '/services/trademark-registration/puducherry',
    '/services/trademark-registration/punjab',
    '/services/trademark-registration/rajasthan',
    '/services/trademark-registration/sikkim',
    '/services/trademark-registration/tamil-nadu',
    '/services/trademark-registration/telangana',
    '/services/trademark-registration/tripura',
    '/services/trademark-registration/uttar-pradesh',
    '/services/trademark-registration/uttarakhand',
    '/services/trademark-registration/west-bengal',

    // Patent Services - State Pages
    '/services/patent-services/patent-services-in-andaman-and-nicobar-islands',
    '/services/patent-services/patent-services-in-bihar',
    '/services/patent-services/patent-services-in-chhattisgarh',
    '/services/patent-services/patent-services-in-dadra-and-nagar-haveli',
    '/services/patent-services/patent-services-in-delhi',
    '/services/patent-services/patent-services-in-himachal-pradesh',
    '/services/patent-services/patent-services-in-jammu-and-kashmir',
    '/services/patent-services/patent-services-in-jharkhand',
    '/services/patent-services/patent-services-in-karnataka',
    '/services/patent-services/patent-services-in-kerala',
    '/services/patent-services/patent-services-in-manipur',
    '/services/patent-services/patent-services-in-mizoram',
    '/services/patent-services/patent-services-in-nagaland',
    '/services/patent-services/patent-services-in-puducherry',
    '/services/patent-services/patent-services-in-punjab',
    '/services/patent-services/patent-services-in-rajasthan',
    '/services/patent-services/patent-services-in-sikkim',
    '/services/patent-services/patent-services-in-tamil-nadu',
    '/services/patent-services/patent-services-in-tripura',
    '/services/patent-services/patent-services-in-uttar-pradesh',
    '/services/patent-services/patent-services-in-uttarakhand',

    // Copyright Protection - State Pages
    '/services/copyright-protection/copyright-protection-in-haryana',
  ];

  // Create sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => {
    const url = `${baseUrl}${page}`;
    const priority = page === '' ? '1.0' :
      page === '/trademark-registration-guide' ? '0.95' :
        page === '/services' || page === '/services/trademark-registration' ||
          page === '/services/patent-services' || page === '/services/copyright-protection' ? '0.9' :
          page.startsWith('/services/') && !page.includes('-in-') ? '0.85' :
            page.startsWith('/features/') ? '0.8' :
              page === '/about' || page === '/contact' ? '0.7' :
                page === '/form' || page === '/thank-you' ? '0.6' :
                  page.includes('-in-') ? '0.6' : '0.5';

    const changefreq = page === '' ? 'daily' :
      page === '/trademark-registration-guide' ? 'weekly' :
        page === '/services' || page === '/services/trademark-registration' ||
          page === '/services/patent-services' || page === '/services/copyright-protection' ? 'weekly' :
          page.startsWith('/services/') && !page.includes('-in-') ? 'weekly' :
            page.startsWith('/features/') ? 'weekly' :
              page.includes('-in-') ? 'monthly' : 'monthly';

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
