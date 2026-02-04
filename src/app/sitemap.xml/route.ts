
import { type Firestore } from 'firebase/firestore';

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
    { path: '/resources', priority: '0.9', changefreq: 'daily' },
    { path: '/about-us', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
  ];


  // 6. Features and Services
  const staticUrls = [
    '/our-services',
    '/our-services/trademark-registration',
    '/our-services/patent-registration',
    '/our-services/copyright-registration',
    '/features',
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',
    '/how-to-register-trademark',
    '/want-to-register-trademark-for-startup',
    '/trademark-register-kese-karte-hai',
  ].map(path => ({ path, priority: '0.8', changefreq: 'weekly' } as RouteConfig));

  // Fetch Dynamic Blog Posts
  let blogRoutes: RouteConfig[] = [];
  try {
    // Dynamic imports to avoid server crashes if Firebase is misconfigured or unreachable
    const { db } = await import('@/lib/firebase');
    const { collection, getDocs } = await import('firebase/firestore');

    // Check if db is initialized (it might be undefined if window check failed in lib/firebase.js, 
    // although lib/firebase.js usually returns strict exports. 
    // But checking ensures safety.)
    if (db) {
      // We know standard firebase SDK returns Firestore instance, but it might be untyped in JS.
      // We cast/assume it works.
      const blogsCollection = collection(db as Firestore, 'blogs');
      // Add timeout explicitly? getDocs doesn't support signal easily in v9 without implementing it.
      // We hope it doesn't hang.
      const blogSnapshot = await getDocs(blogsCollection);

      blogRoutes = blogSnapshot.docs.map(doc => ({
        path: `/resources/${doc.data().slug}`,
        priority: '0.8',
        changefreq: 'monthly'
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // Continue without blogs, do not crash
  }

  // Combine all routes
  const allRoutes = [
    ...rootPages,
    ...standardPages,
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
