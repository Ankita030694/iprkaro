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

  // 5. Tools
  const tools: RouteConfig[] = [
    { path: '/partners/tm-search', priority: '0.8', changefreq: 'weekly' },
  ];

  // 6. Features and Services
  const staticUrls = [
    '/services',
    '/services/trademark-registration',
    '/services/patent-filing',
    '/services/copyright-protection',
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',
  ].map(path => ({ path, priority: '0.8', changefreq: 'weekly' } as RouteConfig));


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
    ...standardPages,
    ...tools,
    ...staticUrls,
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
