import { Metadata } from 'next';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import ArticleDetail from './ArticleDetail';
import { notFound } from 'next/navigation';

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

    // Render the client component with the slug
    return <ArticleDetail slug={slug} />;
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }
}



