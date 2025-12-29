import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface RouteConfig {
  path: string;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export async function GET() {
  const baseUrl = 'https://www.iprkaro.com';
  const currentDate = new Date().toISOString();

  // 1. Root & High Priority Pages
  const rootPages: RouteConfig[] = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/trademark-registration-guide', priority: '0.95', changefreq: 'weekly' },
  ];

  // 2. Main Service Pages
  const mainServices: RouteConfig[] = [
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/trademark-registration', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/patent-services', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/copyright-protection', priority: '0.9', changefreq: 'weekly' },
  ];

  // 3. Lead Capture & Info Pages
  const standardPages: RouteConfig[] = [
    { path: '/blog', priority: '0.9', changefreq: 'daily' }, // Blog index changes often
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/form', priority: '0.6', changefreq: 'monthly' },
    { path: '/thank-you', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
  ];

  // 4. Marketing / Landing Pages
  const landingPages: RouteConfig[] = [
    { path: '/trademark-registration', priority: '0.85', changefreq: 'weekly' },
    { path: '/online-trademark-registration', priority: '0.85', changefreq: 'weekly' },
    { path: '/trademark-registration-services', priority: '0.85', changefreq: 'weekly' },
    { path: '/register-trademark-online', priority: '0.85', changefreq: 'weekly' },
    { path: '/best-trademark-attorneys', priority: '0.5', changefreq: 'monthly' },
    { path: '/cheap-trademark-registration', priority: '0.5', changefreq: 'weekly' },
  ];

  // 5. Tools
  const tools: RouteConfig[] = [
    { path: '/partners/tm-search', priority: '0.8', changefreq: 'weekly' },
  ];

  // 6. Features
  const features = [
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',
  ].map(path => ({ path, priority: '0.8', changefreq: 'weekly' } as RouteConfig));

  // 7. Sub-Services (Trademark)
  const trademarkServices = [
    '/services/trademark/rectification',
    '/services/trademark/assignment',
    '/services/trademark/watch',
    '/services/trademark/search',
    '/services/trademark/objection',
    '/services/trademark/opposition',
    '/services/trademark/renewal',
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));

  // 8. Sub-Services (Patent)
  const patentServices = [
    '/services/patent/filing',
    '/services/patent/licensing',
    '/services/patent/renewal',
    '/services/patent/opposition',
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));

  // 9. Sub-Services (Copyright)
  const copyrightServices = [
    '/services/copyright/software',
    '/services/copyright/renewal',
    '/services/copyright/infringement',
    '/services/copyright/transfer',
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));

  // 10. State Pages - Trademark
  const trademarkStatePages = [
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
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));

  // 11. State Pages - Patent
  const patentStatePages = [
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
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));

  // 12. State Pages - Copyright
  const copyrightStatePages = [
    '/services/copyright-protection/haryana',
  ].map(path => ({ path, priority: '0.85', changefreq: 'weekly' } as RouteConfig));


  // Fetch Dynamic Blog Posts
  let blogRoutes: RouteConfig[] = [];
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogSnapshot = await getDocs(blogsCollection);
    blogRoutes = blogSnapshot.docs.map(doc => ({
      path: `/blog/${doc.data().slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  // Combine all routes
  const allRoutes = [
    ...rootPages,
    ...mainServices,
    ...standardPages,
    ...landingPages,
    ...tools,
    ...features,
    ...trademarkServices,
    ...patentServices,
    ...copyrightServices,
    ...trademarkStatePages,
    ...patentStatePages,
    ...copyrightStatePages,
    ...blogRoutes
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
