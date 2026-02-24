
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
    '/gst-required-for-trademark',
    '/how-to-register-trademark-yourself',
    '/types-of-trademark-classes',
    '/how-to-check-trademark-availability',
    '/trademark-class-finder',
    '/trademark-registration-in-delhi',
    '/trademark-registration-in-gurgaon',
    '/trademark-application-status',
    '/e-filing-trademark',
    '/trademark-for-clothing-brand',
    '/trademark-for-jewellery-brand',
    '/trademark-for-restaurant',
    '/trademark-for-business',
    '/trademark-for-stationary',
    '/trademark-for-furniture-shop',
    '/trademark-for-legal-services',
    '/trademark-for-toys-sports-services',
    '/trademark-for-musical-instruments',
    '/trademark-for-financial-services',
    '/trademark-for-telecommunication-services',
    '/trademark-for-medical-services',
    '/trademark-registration-for-pharmaceuticals',
    '/trademark-for-ecommerce',
    '/fast-track-trademark-registration',
    '/trademark-registration-in-noida',
    '/trademark-registration-in-delhi',
    '/which-trademark-search-service-offers-the-fastest-turnaround-time',
    '/where-can-i-get-a-comprehensive-trademark-search-report',
    '/who-provides-trademark-search-services-with-legal-support-included',
    '/which-companies-offer-trademark-clearance-search-packages-for-startups',
    '/where-can-i-find-affordable-trademark-registration-services-near-me',
    '/what-is-trademark-registration',
    '/steps-to-file-trademark-application-online-india',
    '/what-are-the-steps-to-file-a-trademark-application-online-in-india',
    '/online-trademark-registration',
    '/registration-of-trademark',
    '/trade-mark-registration',
    '/trademark-india',
    '/trademark-registration-check',
    '/trademark-registration-india',
    '/trademark-registration-search',
    '/trademark-search',
    '/what-is-trademark',
    '/in-india-the-trademark-registration-should-be-renewed-every',
    '/ipindia-trademark-status',
    '/mca-company-name-check',
    '/leave-and-license-agreement',
    '/udyam-registration-agreement',
    '/trademark-search-public',
    '/format-for-no-objection-certificate',
    '/trademark-and-copyright-difference',
    '/indian-patent-office-search',
    '/return-filling-online',
    '/non-disclosure-agreement-format',
    '/small-company-definition',
    '/registration-of-pharmacist-in-up',
    '/trademark-status',
    '/trademark-registration-in-bengaluru',
    '/trademark-registration-in-hyderabad',
    '/trademark-registration-in-chennai',
    '/trademark-registration-in-ghaziabad',
    '/trademark-registration-in-faridabad',
    '/trademark-registration-in-indore',
    '/trademark-registration-in-mumbai',
    '/trademark-registration-in-ahmedabad',
    '/trademark-registration-in-uttar-pradesh',
    '/trademark-registration-in-maharashtra',
    '/trademark-registration-in-haryana',
    '/trademark-registration-in-punjab',
    '/trademark-registration-in-madhya-pradesh',
    '/trademark-registration-in-karnataka',
    '/trademark-registration-in-bihar',
    '/trademark-registration-in-kerela',
    '/trademark-registration-in-rajasthan',
    '/trademark-registration-in-gujrat',
    '/trademark-registration-in-chandigarh',
    '/trademark-registration-in-jammu-and-kashmir',
    '/trademark-registration-in-andhra-pradesh',
    '/trademark-registration-in-himachal-pradesh',
    '/trademark-registration-in-west-bengal',
    '/trademark-registration-in-jharkhand',
    '/trademark-registration-in-odisha',
    '/trademark-registration-in-assam',
    '/trademark-registration-in-goa',
    '/trademark-registration-in-tamil-nadu',
    '/trademark-registration-in-telangana',
    '/trademark-registration-in-sikkim',
    '/trademark-registration-in-uttarakhand',
    '/trademark-registration-in-manipur',
    '/trademark-registration-in-meghalaya',
    '/trademark-registration-in-nagaland',
    '/trademark-registration-in-mizoram',
    '/trademark-registration-in-arunachal-pradesh',
    '/trademark-registration-in-tripura',
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
