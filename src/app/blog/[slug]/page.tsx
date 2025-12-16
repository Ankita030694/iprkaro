import { Metadata } from 'next';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import ArticleDetail from './ArticleDetail';
import { notFound } from 'next/navigation';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  author?: string;
  faqs?: FAQ[];
  reviews?: Review[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(blogsCollection, where('slug', '==', slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const blogData = querySnapshot.docs[0].data() as Blog;
      
      return {
        title: blogData.metaTitle || `${blogData.title} - AMA Legal Solutions`,
        description: blogData.metaDescription || blogData.description?.substring(0, 160) || 'Read the latest legal insights and articles from AMA Legal Solutions',
        openGraph: {
          title: blogData.metaTitle || blogData.title,
          description: blogData.metaDescription || blogData.description?.substring(0, 160),
          images: blogData.image ? [blogData.image] : [],
          type: 'article',
          publishedTime: blogData.date,
          authors: blogData.author ? [blogData.author] : ['AMA Legal Solutions'],
        },
        twitter: {
          card: 'summary_large_image',
          title: blogData.metaTitle || blogData.title,
          description: blogData.metaDescription || blogData.description?.substring(0, 160),
          images: blogData.image ? [blogData.image] : [],
        },
        alternates: {
          canonical: `/blog/${slug}`,
        },
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }

  return {
    title: 'Blog Article - AMA Legal Solutions',
    description: 'Read the latest legal insights and articles from AMA Legal Solutions',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(blogsCollection, where('slug', '==', slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      notFound();
    }

    // Get blog data
    const blogDoc = querySnapshot.docs[0];
    const blogId = blogDoc.id;
    const blogData = blogDoc.data() as Blog;

    // Fetch FAQs from subcollection
    let faqs: FAQ[] = [];
    try {
      const faqsCollection = collection(db, 'blogs', blogId, 'faqs');
      const faqsSnapshot = await getDocs(faqsCollection);
      faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      // Fallback to faqs array if it exists on blog document
      faqs = blogData.faqs || [];
    }

    // Fetch Reviews from subcollection
    let reviews: Review[] = [];
    try {
      const reviewsCollection = collection(db, 'blogs', blogId, 'reviews');
      const reviewsSnapshot = await getDocs(reviewsCollection);
      reviews = reviewsSnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name || '',
        rating: doc.data().rating || 5,
        review: doc.data().review || '',
        date: doc.data().date || ''
      }));
    } catch (error) {
      console.error('Error fetching Reviews:', error);
      reviews = blogData.reviews || [];
    }

    // Helper function to format date to ISO 8601
    const formatDate = (dateValue: string | number | undefined): string => {
      if (!dateValue) return new Date().toISOString();
      if (typeof dateValue === 'number') {
        return new Date(dateValue).toISOString();
      }
      // Try to parse the date string
      const parsed = new Date(dateValue);
      return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
    };

    // Ensure image URL is absolute
    const getAbsoluteImageUrl = (imageUrl: string | undefined): string[] => {
      if (!imageUrl) return [];
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return [imageUrl];
      }
      // If relative URL, make it absolute
      return [`https://iprkaro.com${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`];
    };

    // Calculate aggregate rating
    const aggregateRating = reviews.length > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined;

    // Generate Article schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blogData.title,
      "description": blogData.metaDescription || blogData.subtitle || blogData.description?.substring(0, 160) || '',
      "image": getAbsoluteImageUrl(blogData.image),
      "author": {
        "@type": blogData.author ? "Person" : "Organization",
        "name": blogData.author || "IPRKaro"
      },
      "publisher": {
        "@type": "Organization",
        "name": "IPRKaro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://iprkaro.com/logo/iprlogo.svg"
        }
      },
      "datePublished": formatDate(blogData.date || blogData.created),
      "dateModified": formatDate(blogData.date || blogData.created),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://iprkaro.com/blog/${slug}`
      },
      ...(aggregateRating && { "aggregateRating": aggregateRating })
    };

    // Generate FAQ schema if FAQs exist
    const faqSchema = faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    // Generate BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://iprkaro.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://iprkaro.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blogData.title,
          "item": `https://iprkaro.com/blog/${slug}`
        }
      ]
    };

    // Render the client component with the slug
    return (
      <>
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
        {/* FAQ Schema */}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        )}
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <ArticleDetail slug={slug} initialReviews={reviews} />
      </>
    );
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }
}



