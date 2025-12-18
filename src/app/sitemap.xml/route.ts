import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET() {
  // Configure your domain here (without www is recommended for modern websites)
  // Make sure to set up 301 redirects from www to non-www (or vice versa) in your hosting config
  const baseUrl = 'https://iprkaro.com'; // Use 'https://www.iprkaro.com' if you prefer www

  // Fetch all blog posts from Firestore
  let blogUrls: string[] = [];
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogSnapshot = await getDocs(blogsCollection);
    blogUrls = blogSnapshot.docs.map(doc => `/blog/${doc.data().slug}`);
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

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
    '/trademark-registration',
    '/online-trademark-registration',
    '/trademark-registration-services',
    '/register-trademark-online',
    '/best-trademark-attorneys',
    '/cheap-trademark-registration',

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
    '/services/trademark-registration/andaman-and-nicobar-islands',
    '/services/trademark-registration/andhra-pradesh',
    '/services/trademark-registration/arunachal-pradesh',
    '/services/trademark-registration/assam',
    '/services/trademark-registration/bihar',
    '/services/trademark-registration/chandigarh',
    '/services/trademark-registration/chhattisgarh',
    '/services/trademark-registration/dadra-and-nagar-haveli-and-daman-and-diu',
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
    '/services/trademark-registration/lakshadweep',
    '/services/trademark-registration/madhya-pradesh',
    '/services/trademark-registration/maharashtra',
    '/services/trademark-registration/manipur',
    '/services/trademark-registration/meghalaya',
    '/services/trademark-registration/mizoram',
    '/services/trademark-registration/nagaland',
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
    '/services/patent-services/andaman-and-nicobar-islands',
    '/services/patent-services/bihar',
    '/services/patent-services/chhattisgarh',
    '/services/patent-services/dadra-and-nagar-haveli',
    '/services/patent-services/delhi',
    '/services/patent-services/himachal-pradesh',
    '/services/patent-services/jammu-and-kashmir',
    '/services/patent-services/jharkhand',
    '/services/patent-services/karnataka',
    '/services/patent-services/kerala',
    '/services/patent-services/manipur',
    '/services/patent-services/mizoram',
    '/services/patent-services/nagaland',
    '/services/patent-services/puducherry',
    '/services/patent-services/punjab',
    '/services/patent-services/rajasthan',
    '/services/patent-services/sikkim',
    '/services/patent-services/tamil-nadu',
    '/services/patent-services/tripura',
    '/services/patent-services/uttar-pradesh',
    '/services/patent-services/uttarakhand',

    // Copyright Protection - State Pages
    '/services/copyright-protection/haryana',

    // Add blog URLs
    ...blogUrls,
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
              page === '/cheap-trademark-registration' ? 'weekly' : // Added specific rule for cheap-trademark-registration
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
