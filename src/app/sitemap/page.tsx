import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const metadata = {
  title: 'Sitemap | IPRKARO',
  description: 'Sitemap for IPRKARO containing all available pages.',
};

const staticUrls: string[] = [
  '/',
  '/blog',
  '/about-us',
  '/contact-us',
  '/privacy-policy',
  '/terms-and-conditions',
  '/our-services',
  '/our-services/trademark-registration',
  '/our-services/patent-registration',
  '/our-services/copyright-registration',
  '/comprehensive-ip-protection-features',
  '/comprehensive-ip-protection-features/247-trademark-protection',
  '/comprehensive-ip-protection-features/affordable-trademark-services',
  '/comprehensive-ip-protection-features/ai-powered-trademark-solutions',
  '/comprehensive-ip-protection-features/expert-trademark-guidance',
  '/comprehensive-ip-protection-features/fast-trademark-registration',
  '/comprehensive-ip-protection-features/trademark-risk-reduction',
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
  '/trademark-for-fintech-startup',
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
  '/trademark-for-digital-marketing-agency',
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
  '/nda-format-india-legal-guide',
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
  '/what-are-the-benefits-of-hiring-a-trademark-agent-in-india',
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
  '/what-to-do-if-someone-copies-your-trademark',
  '/legal-rights-of-trademark-owner-in-india',
  '/how-to-stop-someone-using-your-brand-name',
  '/what-does-objected-mean-in-trademark-status',
  '/protect-company-name-with-trademark',
  '/trademark-objected-what-to-do-next',
  '/trademark-sent-for-examination-what-to-do',
  '/trademark-marked-for-exam-meaning',
  '/trademark-accepted-but-advertised-meaning',
  '/trademark-refused-what-are-options',
  '/trademark-abandoned-how-to-restore',
  '/trademark-opposed-what-happens-next-india',
  '/trademark-hearing-notice-what-to-do',
  '/trademark-discrepancy-meaning',
  '/trademark-formalities-check-fail-meaning',
  '/famous-trademark-infringement-cases-in-india',
  '/penalty-for-trademark-infringement-india',
  '/how-to-send-trademark-legal-notice-india',
  '/trademark-violation-examples-india',
  '/civil-vs-criminal-trademark-infringement-india',
  '/how-to-file-trademark-rectification-india',
  '/what-evidence-is-required-in-trademark-opposition',
  '/trademark-for-youtube-channel-name',
  '/trademark-for-instagram-brand',
  '/trademark-for-coaching-institute',
  '/trademark-for-saas-product',
  '/trademark-for-cloud-kitchen',
  '/trademark-for-export-business',
  '/trademark-for-d2c-brand-india',
  '/trademark-for-digital-marketing-agency',
  '/trademark-for-fintech-startup',
  '/trademark-for-real-estate-company',
  '/best-trademark-filing-services-for-startups-in-india'
];

function formatLabel(path: string) {
  if (path === '/') return 'Home';
  const parts = path.split('/').filter(Boolean);
  const lastPart = parts[parts.length - 1];
  if (!lastPart) return 'Home';
  
  return lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function SitemapPage() {
  const uniqueStaticPaths = Array.from(new Set(staticUrls));
  
  // Fetch dynamic blog paths
  let blogUrls: string[] = [];
  try {
    if (db) {
      const blogsCollection = collection(db as any, 'blogs');
      const blogSnapshot = await getDocs(blogsCollection);
      blogUrls = blogSnapshot.docs.map(doc => `/blog/${doc.data().slug}`);
    }
  } catch (error) {
    console.error('Error fetching blogs for visual sitemap:', error);
  }

  const allUrls = [...uniqueStaticPaths, ...blogUrls];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 text-center mb-12">
          HTML Sitemap
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allUrls.map((url, index) => {
            const label = formatLabel(url);
            return (
              <Link 
                key={index} 
                href={url}
                className="group flex items-center justify-center h-full min-h-[120px] p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-[15px] leading-snug font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
