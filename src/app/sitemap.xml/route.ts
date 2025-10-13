import { MetadataRoute } from 'next';

export async function GET() {
  // Configure your domain here (without www is recommended for modern websites)
  // Make sure to set up 301 redirects from www to non-www (or vice versa) in your hosting config
  const baseUrl = 'https://iprkaro.com'; // Use 'https://www.iprkaro.com' if you prefer www

  // List of all states
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand'
  ];

  // List of all union territories
  const unionTerritories = [
    'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
    'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  // Combine all locations
  const allLocations = [...states, ...unionTerritories];

  // Function to generate state-specific slug URL
  const generateStateSlug = (stateName: string) => {
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
    '/services',
    '/services/trademark-registration',
    '/services/patent-services',
    '/services/copyright-protection',
    '/features/247-trademark-protection',
    '/features/affordable-trademark-services',
    '/features/ai-powered-trademark-solutions',
    '/features/expert-trademark-guidance',
    '/features/fast-trademark-registration',
    '/features/trademark-risk-reduction',
  ];

  // Generate dynamic service pages
  const dynamicPages: string[] = [];
  
  allLocations.forEach((location) => {
    const slug = generateStateSlug(location);
    dynamicPages.push(`/services/trademark-registration/trademark-registration-in-${slug}`);
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
                    page.startsWith('/services/') && !page.includes('-in-') ? '0.9' :
                    page.startsWith('/features/') ? '0.8' :
                    page === '/about' || page === '/contact' ? '0.7' :
                    page.includes('-in-') ? '0.6' : '0.5';
    
    const changefreq = page === '' ? 'daily' :
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

