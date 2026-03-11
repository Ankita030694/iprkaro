
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
    '/trademark-for-processed-food',
    '/trademark-for-business',
    '/trademark-for-chemicals',
    '/trademark-for-stationary',
    '/trademark-for-furniture-shop',
    '/trademark-for-kitchen-utensils',
    '/trademark-for-legal-services',
    '/trademark-for-toys-sports-services',
    '/trademark-for-musical-instruments',
    '/trademark-for-financial-services',
    '/trademark-for-telecommunication-services',
    '/trademark-for-medical-services',
    '/trademark-registration-for-pharmaceuticals',
    '/trademark-for-ecommerce',
    '/trademark-for-paints-coatings',
    '/trademark-for-cosmetics-cleaning',
    '/trademark-for-oils-and-lubricants',
    '/trademark-for-pharmaceuticals',
    '/trademark-for-metal-goods',
    '/trademark-for-machinery',
    '/trademark-for-hand-tools',
    '/trademark-for-electronics-and-software',
    '/trademark-for-medical-equipment',
    '/trademark-for-appliances',
    '/trademark-for-vehicles',
    '/fast-track-trademark-registration',
    '/trademark-registration-in-noida',
    '/trademark-registration-in-delhi',
    '/which-trademark-search-service-offers-the-fastest-turnaround-time',
    '/where-can-i-get-a-comprehensive-trademark-search-report',
    '/who-provides-trademark-search-services-with-legal-support-included',
    '/which-companies-offer-trademark-clearance-search-packages-for-startups',
    '/how-much-does-it-cost-to-get-a-logo-protected-in-india',
    '/where-can-i-find-affordable-trademark-registration-services-near-me',
    '/what-is-trademark-registration',
    '/which-government-portal-is-used-for-trademark-registration-in-india',
    '/official-government-website-for-intellectual-property-in-india',
    '/steps-to-file-trademark-application-online-india',
    '/what-are-the-steps-to-file-a-trademark-application-online-in-india',
    '/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service',
    '/is-there-a-difference-between-trademark-registration-for-goods-and-services',
    '/how-long-does-the-trademark-registration-process-take-in-india',
    '/what-are-the-comman-reasons-for-trademark-application-rejection-in-india',
    '/difference-between-trademark-copyright-and-patent-protection-in-india',
    '/how-to-renew-a-registered-trademark-in-india',
    '/understanding-trademark-classes-for-services-and-goods-in-india',
    '/are-there-any-fast-track-options-for-trademark-registration-in-india',
    '/what-happens-when-someone-infringes-on-my-registered-trademark-in-india',
    '/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it',
    '/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india',
    '/can-i-register-a-sound-or-scent-as-a-trademark-in-india',
    '/what-legal-protections-does-a-registered-trademark-provide-to-a-company',
    '/how-to-cancel-or-dispute-someone-else-s-trademark-registration',
    '/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india',
    '/how-to-update-or-change-details-in-an-existing-trademark-registation',
    '/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india',
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
    '/best-legal-firms-specializing-in-intellectual-property-in-india',
    '/guide-to-choosing-a-reliable-online-plarforms-for-ip-services-in-india',
    '/where-can-find-certified-trademark-agents-or-attorneys-near-me',
    '/what-are-the-benifits-of-hiring-a-trademark-agent-in-india',
    '/compare-fees-for-various-online-trademark-registration-providers-in-india',
    '/trademark-for-firearms',
    '/trademark-for-musical-instruments',
    '/trademark-for-paper-goods-and-printing',
    '/trademark-for-rubber-products',
    '/trademark-for-leather-goods',
    '/trademark-for-non-metal-building-materials',
    '/trademark-for-ropes-and-tents',
    '/trademark-for-yarns-and-threads',
    '/trademark-for-fabrics',
    '/trademark-for-lace-and-embroidery',
    '/trademark-for-carpets',
    '/trademark-for-staple-foods',
    '/trademark-for-raw-agricultural-products',
    '/trademark-for-beverages',
    '/trademark-for-alcoholic-drinks',
    '/trademark-for-tobacco',
    '/trademark-for-construction-and-repair',
    '/trademark-for-transport-and-logistics',
    '/trademark-for-education-and-training',
    '/how-to-do-a-trademark-search-before-filing',
    '/what-are-absolute-and-relative-grounds-for-rejection-section-9-11',
    '/what-happens-if-someone-opposes-my-trademark',
    '/how-to-file-international-trademark-madrid-protocol-from-india',
    '/Can-two-trademarks-exist-in-different-classes-in-India',
    '/How-to-avoid-trademark-objection-before-filing',
    '/Common-reasons-why-trademark-applications-get-rejected',
    '/What-happens-after-trademark-opposition-is-filed',
    '/how-long-trademark-opposition-cases-take',
    '/documents-required-for-trademark-opposition',
    '/how-to-avoid-trademark-registration-scams',
    '/can-you-trademark-your-own-name-in-india',
    '/trademark-objection-reply-format-india',
    '/how-to-respond-to-trademark-examination-report',
    '/how-to-overcome-trademark-objection',
    '/how-to-win-trademark-objection-case',
    '/what-happens-if-trademark-expires',
    '/how-to-restore-expired-trademark',
    '/trademark-enforcement-strategies',
    '/how-to-stop-trademark-infringement',
    '/expedited-process-of-trademark-filing',
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
