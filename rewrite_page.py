import os

with open("src/app/authority/blogs/page.tsx", "r") as f:
    original = f.read()

# Instead of complex parsing, I will just output the entire new code.
# The new code is a combination of the old logic and the new UI.
new_code = """'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faUsers, faChartLine, faCog, faPlus, faEdit, faTrash, faUpload, faMagic, faImage,
  faSearch, faStar, faChevronLeft, faChevronRight, faTimes, faArrowLeft, faCheckCircle, 
  faInfoCircle, faFileAlt, faClipboardList 
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-xl min-h-[350px]">
      <div className="flex flex-col items-center gap-2">
        <span className="animate-spin text-[#B8860B]">💫</span>
        <p className="text-slate-500 text-sm font-semibold">Loading Custom Editor...</p>
      </div>
    </div>
  ),
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number; // 1-5
  review: string;
  date?: string;
}

// Define Blog interface with updated structure
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string; // New slug field for URLs
  faqs?: FAQ[]; // New field for FAQs
  reviews?: Review[]; // New field for Reviews
  author: string; // New author field
}

export default function BlogsDashboard() {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '', // Initialize the slug field
    faqs: [], // Initialize empty FAQs array
    reviews: [], // Initialize empty Reviews array
    author: 'Anuj Anand Malik' // Default author
  });
  
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const [rssDebugInfo, setRssDebugInfo] = useState<string>('');
  const [isLoadingRss, setIsLoadingRss] = useState(false);

  // AI Generation state
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeyword, setSecondaryKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [expansionSubtopics, setExpansionSubtopics] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/nullify');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Logout handler using Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/nullify');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Fetch blogs data
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: docData.faqs || [],
          reviews: docData.reviews || [],
          author: docData.author || 'Anuj Anand Malik'
        };
      });
      // Sort blogs by date in descending order (newest first)
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
      setBlogs(sortedData);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter based on search term
  const filteredBlogs = blogs.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // --- Draft Persistence Logic ---
  const DRAFT_STORAGE_KEY = 'blog_draft';

  // Auto-save draft when form changes
  useEffect(() => {
    if (showBlogForm && formMode === 'add') {
      const hasContent = newBlog.title || newBlog.description || primaryKeyword || imagePrompt;
      if (hasContent) {
        const draft = {
          blog: newBlog,
          primary: primaryKeyword,
          secondary: secondaryKeyword,
          image: imagePrompt,
          expansion: expansionSubtopics
        };
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
      }
    }
  }, [newBlog, primaryKeyword, secondaryKeyword, imagePrompt, expansionSubtopics, showBlogForm, formMode]);

  const loadDraft = () => {
    const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (savedDraft) {
      try {
        const { blog, primary, secondary, image, expansion } = JSON.parse(savedDraft);
        setNewBlog(blog);
        setPrimaryKeyword(primary || '');
        setSecondaryKeyword(secondary || '');
        setImagePrompt(image || '');
        setExpansionSubtopics(expansion || '');
        if (blog.image) {
          setImagePreview(blog.image);
        }
        return true;
      } catch (e) {
        console.error('Error loading draft:', e);
      }
    }
    return false;
  };

  const clearDraft = () => {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  };
  // --- End Draft Persistence Logic ---

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\\w\\s-]/g, '')
      .replace(/\\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  const addReview = () => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '', date: new Date().toISOString().split('T')[0] }]
    }));
  };

  const removeReview = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewBlog(prevState => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { 
        ...updatedReviews[index], 
        [field]: value 
      };
      return {
        ...prevState,
        reviews: updatedReviews
      };
    });
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            },
            'image/jpeg',
            0.7
          );
        };
        img.onerror = () => reject(new Error('Error loading image for compression'));
      };
      reader.onerror = () => reject(new Error('Error reading file for compression'));
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }
      
      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;
      
      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          const downloadURL = await getDownloadURL(snapshot.ref);
          setNewBlog(prevState => ({
            ...prevState,
            image: downloadURL
          }));
          uploadSuccessful = true;
          setUploadProgress(100);
        } catch (err) {
          console.error(`Upload attempt ${retryCount + 1} failed:`, err);
          retryCount++;
          if (retryCount >= maxRetries) {
            throw new Error(`Failed after ${maxRetries} attempts`);
          }
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        }
      }
    } catch (error: any) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleGenerate = async () => {
    if (!primaryKeyword.trim()) {
      alert('Please enter a primary keyword.');
      return;
    }
    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primaryKeyword, secondaryKeyword }),
      });

      if (!response.ok) throw new Error('Failed to generate blog');
      const generatedData = await response.json();

      setNewBlog(prevState => ({
        ...prevState,
        title: generatedData.title || prevState.title,
        subtitle: generatedData.subtitle || prevState.subtitle,
        description: generatedData.description || prevState.description,
        metaTitle: generatedData.metaTitle || prevState.metaTitle,
        metaDescription: generatedData.metaDescription || prevState.metaDescription,
        slug: generatedData.slug || (generatedData.title ? generateSlug(generatedData.title) : prevState.slug),
        faqs: generatedData.faqs || prevState.faqs,
        reviews: generatedData.reviews || prevState.reviews,
      }));
      alert('Blog generated successfully! Please review and add an image.');
    } catch (error) {
      console.error('Error generating blog:', error);
      alert('Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      alert('Please enter an image prompt.');
      return;
    }
    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');
      const { imageUrl } = await response.json();
      
      setNewBlog(prevState => ({ ...prevState, image: imageUrl }));
      setImagePreview(imageUrl);
      alert('AI image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleExpandDescription = async () => {
    if (!expansionSubtopics.trim()) {
      alert('Please enter subtopics or instructions for expansion.');
      return;
    }
    if (!newBlog.description.trim()) {
      alert('Cannot expand an empty description.');
      return;
    }
    try {
      setIsExpanding(true);
      const response = await fetch('/api/expand-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          currentDescription: newBlog.description, 
          expansionSubtopics, 
          primaryKeyword 
        }),
      });

      if (!response.ok) throw new Error('Failed to expand description');
      const { expandedDescription } = await response.json();
      
      setNewBlog(prevState => ({ ...prevState, description: expandedDescription }));
      alert('Description expanded successfully!');
    } catch (error) {
      console.error('Error expanding description:', error);
      alert('Failed to expand description. Please try again.');
    } finally {
      setIsExpanding(false);
    }
  };

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0]
      };
      
      const { faqs, reviews, ...blogData } = blogWithMetadata;
      let blogId = newBlog.id;
      
      if (formMode === 'add') {
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else {
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      if (blogId && faqs && faqs.length > 0) {
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) await deleteDoc(doc.ref);
        }
        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), { question: faq.question, answer: faq.answer });
        }
      }

      if (blogId && reviews && reviews.length > 0) {
        if (formMode === 'edit') {
          const reviewsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
          for (const doc of reviewsSnapshot.docs) await deleteDoc(doc.ref);
        }
        for (const review of reviews) {
          await addDoc(collection(db, 'blogs', blogId, 'reviews'), {
            name: review.name,
            rating: Number(review.rating),
            review: review.review,
            date: review.date || new Date().toISOString().split('T')[0]
          });
        }
      }
      
      resetForm();
      fetchBlogs();
      
      if (formMode === 'add') clearDraft();
    } catch (error) {
      console.error("Error processing blog:", error);
    }
  };

  const handleEdit = async (blog: Blog) => {
    try {
      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
      const faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));

      const reviewsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'reviews'));
      const reviews = reviewsSnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name || '',
        rating: doc.data().rating || 5,
        review: doc.data().review || '',
        date: doc.data().date || ''
      }));
      
      setNewBlog({...blog, faqs, reviews});
      setImagePreview(blog.image);
      setFormMode('edit');
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching subcollections:", error);
      setNewBlog(blog);
      setImagePreview(blog.image);
      setFormMode('edit');
      setShowBlogForm(true); 
    }
  };
 
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();
        
        if (blogData) {
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set();
          let match;
          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }
          
          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter(doc => {
            const imageData = doc.data();
            return imageUrls.has(imageData.url);
          });
          
          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              await deleteDoc(imageDoc.ref);
            } catch (error) {
              console.error(`Error deleting image \${imageData.filename}:`, error);
            }
          }
        }
        await deleteDoc(doc(db, 'blogs', id));
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const resetForm = () => {
    setNewBlog({
      title: '', subtitle: '', description: '', date: new Date().toISOString().split('T')[0],
      image: '', created: Date.now(), metaTitle: '', metaDescription: '', slug: '',
      faqs: [], reviews: [], author: 'Anuj Anand Malik'
    });
    setPrimaryKeyword(''); setSecondaryKeyword(''); setImagePrompt(''); setExpansionSubtopics('');
    setImagePreview(null);
    setFormMode('add');
    setShowBlogForm(false);
    clearDraft();
  };

  const handleRecoverDraft = () => {
    if (loadDraft()) {
      alert("Draft recovered successfully!");
    } else {
      alert("No draft found in storage.");
    }
  };

  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);
      const response = await fetch('/api/rss');
      if (!response.ok) throw new Error(`RSS feed returned status: \${response.status}`);
      const xml = await response.text();
      const isValidXml = xml.includes('<?xml version="1.0"') && xml.includes('<rss version="2.0"') && xml.includes('</rss>');
      const itemCount = (xml.match(/<item>/g) || []).length;
      const hasEmptyTitles = xml.includes('<title></title>');
      const hasEmptyLinks = xml.includes('<link></link>');
      const hasMalformedDates = xml.includes('<pubDate>Invalid Date</pubDate>');
      setRssDebugInfo(
        `RSS Feed Status: \${response.status === 200 ? '✅ OK' : '❌ Error'}\\n` +
        `Valid XML Structure: \${isValidXml ? '✅ Yes' : '❌ No'}\\n` +
        `Items in Feed: \${itemCount}\\n` +
        `Empty Titles: \${hasEmptyTitles ? '❌ Yes' : '✅ No'}\\n` +
        `Empty Links: \${hasEmptyLinks ? '❌ Yes' : '✅ No'}\\n` +
        `Malformed Dates: \${hasMalformedDates ? '❌ Yes' : '✅ No'}\\n\\n` +
        `Sample XML (first 500 chars):\\n\${xml.substring(0, 500)}...`
      );
    } catch (error: any) {
      console.error('Error testing RSS feed:', error);
      setRssDebugInfo(`Error testing RSS feed: \${error.message}`);
    } finally {
      setIsLoadingRss(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans mt-20">
      <AnimatePresence mode="wait">
        {!showBlogForm ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-sm">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#B8860B]">📝</span>
                  <span>Curated Blog Dashboard</span>
                </h1>
                <p className="text-slate-500 text-xs mt-1 font-semibold">
                  Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push('/authority/leads')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => {
                    setFormMode('add');
                    resetForm();
                    setShowBlogForm(true);
                  }}
                  className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Write Blog Post</span>
                </button>
              </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Published Blogs</span>
                <p className="text-3xl font-black text-[#B8860B] mt-1">{blogs.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">TOC & SEO Enriched</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {blogs.filter(b => b.description?.includes('<h2') || b.description?.includes('<h3')).length}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">FAQs Embedded</span>
                <p className="text-3xl font-black text-blue-700 mt-1">
                  {blogs.filter(b => b.faqs && b.faqs.length > 0).length}
                </p>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-sm items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search blogs by title, subtitle, or slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {/* Blogs Table / List */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex flex-col items-center gap-2">
                  <span className="animate-spin text-2xl text-[#B8860B]">💫</span>
                  <p className="text-slate-500 text-sm font-semibold">Loading published blogs...</p>
                </div>
              </div>
            ) : currentBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No blog posts found matching search query.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Banner</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Slug / Link</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentBlogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            <img
                              src={blog.image || "/logo_qa.png"}
                              alt={blog.title}
                              className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-sm"
                            />
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#B8860B] transition-colors">
                              {blog.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{blog.date}</span>
                              <span>•</span>
                              <span>By: {blog.author}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">
                              {blog.slug}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 items-center">
                              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
                                {blog.faqs?.length || 0} FAQs
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-[10px] font-extrabold text-[#B8860B]">
                                {blog.reviews?.length || 0} Reviews
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete post"
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs text-slate-400 font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                      </button>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* RSS Feed Diagnostic Panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 p-6 border border-blue-200 rounded-2xl bg-blue-50/50 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  RSS Feed Diagnostics
                </h3>
                <motion.button
                  onClick={testRssFeed}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoadingRss}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-xl flex items-center font-bold shadow-sm transition-all disabled:opacity-50"
                >
                  {isLoadingRss ? 'Testing...' : 'Test RSS Feed'}
                </motion.button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <a 
                  href="/api/rss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-xs font-semibold transition-colors"
                >
                  View RSS Feed →
                </a>
              </div>
              
              {rssDebugInfo && (
                <div className="mt-4">
                  <pre className="bg-white p-4 rounded-xl text-xs text-slate-700 overflow-x-auto whitespace-pre-wrap border border-slate-200 shadow-sm font-mono">
                    {rssDebugInfo}
                  </pre>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmitBlog}
            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowBlogForm(false)}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={handleRecoverDraft}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  title="Check autosaved version"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-xs" />
                  <span>Restore Draft</span>
                </button>
              </div>
            </div>

            {/* AI Generator Tools Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI Magic Generator Section */}
              <div className="p-6 border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 to-blue-50/10 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 text-xs font-bold animate-pulse">✨</span>
                    <div>
                      <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                        AI Magic Generator
                      </h3>
                      <p className="text-slate-500 text-[10px] mt-0.5 leading-relaxed normal-case">
                        Crafts a high-converting title, content, meta tags, FAQs, and realistic reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                    placeholder="Primary Keyword (e.g., 'Trademark Registration in India')"
                    className="w-full p-3 bg-white border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 rounded-xl text-xs text-slate-800 focus:outline-none transition-all"
                    disabled={isGenerating}
                  />
                  <input
                    type="text"
                    value={secondaryKeyword}
                    onChange={(e) => setSecondaryKeyword(e.target.value)}
                    placeholder="Secondary Keyword (Optional)"
                    className="w-full p-3 bg-white border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 rounded-xl text-xs text-slate-800 focus:outline-none transition-all"
                    disabled={isGenerating}
                  />

                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full mt-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <><span className="animate-spin text-xs">💫</span> Generating...</>
                    ) : (
                      <><FontAwesomeIcon icon={faMagic} /> Generate SEO-Optimized Blog</>
                    )}
                  </button>
                </div>
              </div>

              {/* AI Image & Expansion Sections Container */}
              <div className="flex flex-col gap-6">
                {/* AI Image Generator Section */}
                <div className="p-5 border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 to-teal-50/10 rounded-2xl shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 text-xs font-bold">📸</span>
                    <h3 className="text-slate-800 text-xs font-bold uppercase tracking-wider">AI Cover Image</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      placeholder="Image Prompt (e.g. A modern professional law office...)"
                      rows={2}
                      className="w-full p-2.5 bg-white border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 rounded-xl text-xs text-slate-800 focus:outline-none transition-all resize-none"
                      disabled={isGeneratingImage}
                    />
                    <button
                      type="button"
                      onClick={handleGenerateImage}
                      disabled={isGeneratingImage}
                      className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isGeneratingImage ? '💫 Visualizing...' : 'Generate Image'}
                    </button>
                  </div>
                </div>

                {/* AI Description Expander Section */}
                <div className="p-5 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-100 text-amber-600 text-xs font-bold">🚀</span>
                    <h3 className="text-slate-800 text-xs font-bold uppercase tracking-wider">Expand Content</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      value={expansionSubtopics}
                      onChange={(e) => setExpansionSubtopics(e.target.value)}
                      placeholder="e.g. Add a detailed table on copyright fees..."
                      rows={2}
                      className="w-full p-2.5 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none transition-all resize-none"
                      disabled={isExpanding}
                    />
                    <button
                      type="button"
                      onClick={handleExpandDescription}
                      disabled={isExpanding || !newBlog.description}
                      className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isExpanding ? '💫 Expanding...' : 'Expand Blog Description'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* URL Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span>URL Slug *</span>
                  <span className="text-[10px] text-slate-400 italic lowercase font-normal">(only letters, numbers, hyphens)</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  required
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                >
                  <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                  <option value="Shrey Arora">Shrey Arora</option>
                  <option value="Adv. Ashish Bhay">Adv. Ashish Bhay</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Image Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="image"
                    required
                    value={newBlog.image}
                    onChange={handleInputChange}
                    placeholder="URL or upload local file"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload'}</span>
                  </button>
                </div>
                {uploading && (
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div className="bg-[#B8860B] h-1.5 rounded-full transition-all" style={{ width: `\${uploadProgress}%` }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Preview Block */}
            {imagePreview && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cover Image Preview</span>
                <img
                  src={imagePreview}
                  alt="cover preview"
                  className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-sm"
                />
              </div>
            )}

            {/* Tiptap Rich Description Editor */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <TiptapEditor
                  content={newBlog.description}
                  onChange={handleEditorChange}
                  className="min-h-[400px] bg-white text-slate-800"
                />
              </div>
            </div>

            {/* SEO Meta Tags Accordion */}
            <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#B8860B]" />
                <span>Google Search SEO Configuration</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={newBlog.metaTitle}
                    onChange={handleInputChange}
                    placeholder="Defaults to post title if left blank"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Description</label>
                  <input
                    type="text"
                    name="metaDescription"
                    value={newBlog.metaDescription}
                    onChange={handleInputChange}
                    placeholder="Short description for Google snippet"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Subcollection Section */}
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-700" />
                  <span>Crawlable Q&A (FAQ Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addFaq}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {(newBlog.faqs || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No FAQ cards configured. Add items to support Google Q&A Rich snippets.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col gap-3 relative shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Question (e.g. Can I settle a bank loan without court?)"
                          required
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-blue-400 focus:outline-none"
                        />
                        <textarea
                          placeholder="Detailed Answer..."
                          required
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          rows={2}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:border-blue-400 focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Review Snippets Section */}
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-[#B8860B]" />
                  <span>Review Snippets</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-[#B8860B] hover:text-[#9E7307] flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Review</span>
                </button>
              </div>

              {(newBlog.reviews || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No reviews configured.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.reviews || []).map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col gap-3 relative shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeReview(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                        <input
                          type="text"
                          placeholder="Reviewer Name"
                          required
                          value={review.name}
                          onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#B8860B] focus:outline-none"
                        />
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-slate-500">Rating:</label>
                          <input
                            type="number"
                            min="1" max="5"
                            required
                            value={review.rating}
                            onChange={(e) => handleReviewChange(idx, 'rating', parseInt(e.target.value))}
                            className="w-16 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#B8860B] focus:outline-none"
                          />
                        </div>
                        <input
                          type="date"
                          required
                          value={review.date || ''}
                          onChange={(e) => handleReviewChange(idx, 'date', e.target.value)}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#B8860B] focus:outline-none"
                        />
                        <textarea
                          placeholder="Review Text..."
                          required
                          value={review.review}
                          onChange={(e) => handleReviewChange(idx, 'review', e.target.value)}
                          rows={2}
                          className="w-full md:col-span-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:border-[#B8860B] focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit & Cancel Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{formMode === 'add' ? 'Publish Blog' : 'Save Changes'}</span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
"""

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(new_code)
