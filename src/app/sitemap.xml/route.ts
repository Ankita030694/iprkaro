import { MetadataRoute } from 'next';

export async function GET() {
  // Configure your domain here (without www is recommended for modern websites)
  // Make sure to set up 301 redirects from www to non-www (or vice versa) in your hosting config
  const baseUrl = 'https://iprkaro.com'; // Use 'https://www.iprkaro.com' if you prefer www

  // List of all states
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal'
  ];

  // List of all union territories
  const unionTerritories = [
    'Chandigarh', 'Delhi',
    'Jammu and Kashmir', 'Ladakh', 'Puducherry'
  ];

  // Combine all locations
  const allLocations = [...states, ...unionTerritories];

  // Mapping of state/UT names to their folder names
  const stateFolderMap: { [key: string]: string } = {
    'Andhra Pradesh': 'andhra-pradesh',
    'Arunachal Pradesh': 'arunachal-pradesh',
    'Assam': 'assam',
    'Bihar': 'bihar',
    'Chandigarh': 'chandigarh',
    'Chhattisgarh': 'chhattisgarh',
    'Delhi': 'delhi',
    'Goa': 'goa',
    'Gujarat': 'gujarat',
    'Haryana': 'haryana',
    'Jammu and Kashmir': 'jammu-and-kashmir',
    'Jharkhand': 'jharkhand',
    'Karnataka': 'karnataka',
    'Kerala': 'kerala',
    'Ladakh': 'ladakh',
    'Madhya Pradesh': 'madhya-pradesh',
    'Maharashtra': 'maharashtra',
    'Manipur': 'manipur',
    'Odisha': 'odisha',
    'Puducherry': 'puducherry',
    'Punjab': 'punjab',
    'Rajasthan': 'rajasthan',
    'Sikkim': 'sikkim',
    'Tamil Nadu': 'tamil-nadu',
    'Telangana': 'telangana',
    'Tripura': 'tripura',
    'Uttar Pradesh': 'uttar-pradesh',
    'Uttarakhand': 'uttarakhand',
    'West Bengal': 'west-bengal'
  };

  // Function to generate state-specific slug URL
  const generateStateSlug = (stateName: string) => {
    // Check if there's a direct folder mapping
    if (stateFolderMap[stateName]) {
      return stateFolderMap[stateName];
    }
    
    // Otherwise, generate slug for states/UTs without dedicated folders
    const slug = stateName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/&/g, 'and') // Replace & with 'and'
      .trim();
    return slug;
  };

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/dashboard',
    '/form',
    '/services',
    '/services/trademark-registration',
    // State pages are now dynamically generated below
    '/services/trademark/rectification',
    '/services/trademark/assignment',
    '/services/trademark/watch',
    '/services/trademark/objection',
    '/services/trademark/opposition',
    '/services/trademark/renewal',
    '/services/patent-services',
    '/services/patent/filing',
    '/services/patent/licensing',
    '/services/patent/renewal',
    '/services/patent/opposition',
    '/services/copyright-protection',
    '/services/copyright/software',
    '/services/copyright/renewal',
    '/services/copyright/infringement',
    '/services/copyright/transfer',
    '/trademark-registration-guide',
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  // Generate dynamic service pages
  const dynamicPages: string[] = [];
  
  allLocations.forEach((location) => {
    const slug = generateStateSlug(location);
    // Check if state has a dedicated folder (uses folder name directly)
    if (stateFolderMap[location]) {
      dynamicPages.push(`/services/trademark-registration/${slug}`);
    } else {
      // States without dedicated folders use the long format
      dynamicPages.push(`/services/trademark-registration/trademark-registration-in-${slug}`);
    }
    dynamicPages.push(`/services/patent-services/patent-services-in-${slug}`);
    dynamicPages.push(`/services/copyright-protection/copyright-protection-in-${slug}`);
  });

  // Combine all pages
  const allPages = [...staticPages, ...dynamicPages];

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
