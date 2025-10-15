'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
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
  author: string; // New author field
}

const BlogsDashboard = () => {
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
    author: 'Anuj Anand Malik' // Default author changed from 'Team AMA'
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page
  const [rssDebugInfo, setRssDebugInfo] = useState<string>('');
  const [isLoadingRss, setIsLoadingRss] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Logout handler using Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Navigation handler: Redirect for Blogs and Articles
  const handleNavigation = (itemId: string) => {
    if (itemId === 'blogs') {
      router.push('/admin/blogs');
    } else if (itemId === 'articles') {
      router.push('/admin/articles');
    } else if (itemId === 'home') {
      router.push('/admin/dashboard');
    } else if (itemId === 'users') {
      router.push('/admin/users');
    } else if (itemId === 'amalive') {
      router.push('/admin/amalive');
    } else {
      setActiveTab(itemId);
    }
  };

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
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
      }
    };

    fetchBlogs();
  }, []);

  // Handle animation sequence
  // useEffect(() => {
  //   // Start with black screen
  //   const welcomeTimer = setTimeout(() => {
  //     setAnimationState('welcome'); // Show Hello Anuj Bhiya

  //     // After showing welcome, transition to dashboard
  //     const dashboardTimer = setTimeout(() => {
  //       setAnimationState('dashboard');
  //     }, 1500); // 1.5 seconds as requested

  //     return () => clearTimeout(dashboardTimer);
  //   }, 500);

  //   return () => clearTimeout(welcomeTimer);
  // }, []);

  // Add a helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Trim spaces from start and end
  };

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
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

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  // Handle FAQ input changes
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

  // Handle file upload to Firebase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 2MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      
      // Create a local preview of the image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Compress the image before uploading if it's an image
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }
      
      // Upload with retry logic
      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;
      
      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          // Upload the file
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          
          // Get the download URL and update the blog state
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
            throw new Error(`Failed after ${maxRetries} attempts: ${err instanceof Error ? err.message : String(err)}`);
          }
          
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error instanceof Error ? error.message : "Please check your internet connection and try again."}`);
    } finally {
      setUploading(false);
    }
  };
  
  // Helper function to compress images
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
          
          // Calculate new dimensions while maintaining aspect ratio
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
          
          // Convert to blob with reduced quality
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }
              
              // Create a new file from the blob
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              
              resolve(compressedFile);
            },
            'image/jpeg',
            0.7 // Quality (0.7 = 70%)
          );
        };
        
        img.onerror = () => {
          reject(new Error('Error loading image for compression'));
        };
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file for compression'));
      };
    });
  };

  // Handle blog form submission (Create or Update)
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add timestamp and format the date
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0] // Ensure date is in YYYY-MM-DD format
      };
      
      // Remove faqs from the main document since we'll store them in a subcollection
      const { faqs, ...blogData } = blogWithMetadata;
      
      let blogId = newBlog.id;
      
      if (formMode === 'add') {
        // Add to Firestore
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else {
        // Update existing document
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      // Add FAQs to subcollection
      if (blogId && faqs && faqs.length > 0) {
        // First delete existing FAQs if updating
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        
        // Add all FAQs to subcollection
        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer
          });
        }
      }
      
      // Reset form and show table
      resetForm();
      
      // Fetch the updated blogs
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const updatedBlogs = querySnapshot.docs.map(doc => {
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
          slug: docData.slug || '', // Get the slug from database
          faqs: [], // Initialize empty faqs array
          author: docData.author || 'Anuj Anand Malik' // Default author changed from 'Team AMA'
        };
      });
      setBlogs(updatedBlogs);
      
    } catch (error) {
      console.error("Error processing blog:", error);
    }
  };

  // Handle blog edit - needs to also fetch FAQs from subcollection
  const handleEdit = async (blog: Blog) => {
    try {
      // Fetch FAQs for this blog
      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
      const faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));
      
      setNewBlog({...blog, faqs});
      setFormMode('edit');
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setNewBlog(blog);
      setFormMode('edit');
      setShowBlogForm(true); 
    }
  };
 
  // Handle blog delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        // Get the blog content first to extract image URLs
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();
        
        if (blogData) {
          // Extract all image URLs from the blog content
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set();
          let match;
          
          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }
          
          // Get all blog_images documents
          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter(doc => {
            const imageData = doc.data();
            return imageUrls.has(imageData.url);
          });
          
          // Delete unused images from Storage and Firestore
          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              // Delete from Storage
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              
              // Delete from Firestore
              await deleteDoc(imageDoc.ref);
            } catch (error) {
              console.error(`Error deleting image ${imageData.filename}:`, error);
            }
          }
        }
        
        // Delete document from Firestore
        await deleteDoc(doc(db, 'blogs', id));
        
        // Update local state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '', // Reset slug field
      faqs: [], // Reset FAQs array
      author: 'Anuj Anand Malik' // Default author changed from 'Team AMA'
    });
    setFormMode('add');
    setShowBlogForm(false);
  };

  // Cancel form handler
  const handleCancelForm = () => {
    resetForm();
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Add a function to test the RSS feed
  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);
      console.log('Testing RSS feed...');
      
      // Fetch the RSS feed
      const response = await fetch('/api/rss');
      console.log('RSS feed response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`RSS feed returned status: ${response.status}`);
      }
      
      // Get the XML content
      const xml = await response.text();
      console.log('RSS feed XML length:', xml.length);
      
      // Basic validation checks
      const isValidXml = xml.includes('<?xml version="1.0"') && 
                        xml.includes('<rss version="2.0"') &&
                        xml.includes('</rss>');
      
      console.log('Is valid XML structure:', isValidXml);
      
      // Count items in feed
      const itemCount = (xml.match(/<item>/g) || []).length;
      console.log('Number of items in feed:', itemCount);
      
      // Check for common issues
      const hasEmptyTitles = xml.includes('<title></title>');
      const hasEmptyLinks = xml.includes('<link></link>');
      const hasMalformedDates = xml.includes('<pubDate>Invalid Date</pubDate>');
      
      console.log('Feed has empty titles:', hasEmptyTitles);
      console.log('Feed has empty links:', hasEmptyLinks);
      console.log('Feed has malformed dates:', hasMalformedDates);
      
      // Set debug info
      setRssDebugInfo(
        `RSS Feed Status: ${response.status === 200 ? '✅ OK' : '❌ Error'}\n` +
        `Valid XML Structure: ${isValidXml ? '✅ Yes' : '❌ No'}\n` +
        `Items in Feed: ${itemCount}\n` +
        `Empty Titles: ${hasEmptyTitles ? '❌ Yes' : '✅ No'}\n` +
        `Empty Links: ${hasEmptyLinks ? '❌ Yes' : '✅ No'}\n` +
        `Malformed Dates: ${hasMalformedDates ? '❌ Yes' : '✅ No'}\n\n` +
        `Sample XML (first 500 chars):\n${xml.substring(0, 500)}...`
      );
    } catch (error) {
      console.error('Error testing RSS feed:', error);
      setRssDebugInfo(`Error testing RSS feed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoadingRss(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-black">

      {/* Main Dashboard */}
      <motion.div 
        className="min-h-screen bg-black flex flex-col pt-28 pb-12"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#16a34a] to-[#FFB400] opacity-10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FFB400] to-[#16a34a] opacity-10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Dashboard Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-br from-[#1f1310]/80 via-[#3b2412]/60 to-black/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#FFB400]/20 mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Blogs Dashboard</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#16a34a] to-[#FFB400] rounded-full"></div>
            </div>
            {/* Logout Button */}
            <motion.button 
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-red-500/90 hover:bg-red-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-red-500/50"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Logout
            </motion.button>
          </div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#16a34a]/30"
          >
            {/* Header with Add Blog Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-white">
                {showBlogForm ? (formMode === 'add' ? 'Create New Blog' : 'Edit Blog') : 'Blog Management'}
              </h2>
              <motion.button
                onClick={() => {
                  if (showBlogForm) {
                    resetForm();
                  } else {
                    setFormMode('add');
                    setShowBlogForm(true);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#16a34a] to-[#FFB400] text-black rounded-lg font-semibold shadow-lg hover:shadow-[#FFB400]/50 transition-all"
              >
                <FontAwesomeIcon icon={showBlogForm ? faChartLine : faPlus} className="mr-2" />
                {showBlogForm ? 'View Blogs' : 'Add Blog'}
              </motion.button>
            </div>

            {/* Conditional Rendering: Show either Data Table or Blog Form */}
            {showBlogForm ? (
              // Blog Creation/Edit Form with Updated Fields and Tiptap Editor
              <AnimatePresence mode="wait">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmitBlog}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-[#FFB400] mb-2">Blog Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                        placeholder="Enter blog title"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-[#FFB400] mb-2">URL Slug</label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={newBlog.slug}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                        placeholder="url-friendly-blog-name"
                      />
                      <p className="mt-2 text-xs text-gray-400">Will be used in the URL: /blog/{newBlog.slug}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-[#FFB400] mb-2">Subtitle/SEO Keywords</label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={newBlog.subtitle}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                        placeholder="Enter subtitle or SEO keywords"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-[#FFB400] mb-2">Meta Title</label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={newBlog.metaTitle || ''}
                        onChange={handleInputChange}
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                        placeholder="Enter meta title for SEO"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#FFB400] mb-2">Publication Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={newBlog.date}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-[#FFB400] mb-2">Blog Image</label>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-3">
                          <input
                            type="file"
                            id="image-upload"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <motion.button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-gradient-to-r from-[#16a34a]/20 to-[#FFB400]/20 text-white border border-[#16a34a]/50 rounded-lg text-sm font-medium flex items-center hover:border-[#FFB400]/80 transition-all"
                          >
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            {uploading ? 'Uploading...' : 'Choose Image'}
                          </motion.button>
                          {newBlog.image && (
                            <span className="text-xs text-[#16a34a]">✓ Image uploaded successfully</span>
                          )}
                        </div>
                        
                        {uploading && (
                          <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-[#16a34a] to-[#FFB400] h-2.5 rounded-full transition-all duration-300" 
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        )}
                        
                        {/* Image preview */}
                        {(imagePreview || newBlog.image) && (
                          <div className="mt-2">
                            <img 
                              src={imagePreview || newBlog.image} 
                              alt="Blog image preview" 
                              className="w-32 h-32 object-cover rounded-lg border-2 border-[#16a34a]/50 shadow-lg"
                            />
                          </div>
                        )}
                        
                        <input
                          type="hidden"
                          id="image"
                          name="image"
                          value={newBlog.image}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="metaDescription" className="block text-sm font-medium text-[#FFB400] mb-2">Meta Description</label>
                      <input
                        type="text"
                        id="metaDescription"
                        name="metaDescription"
                        value={newBlog.metaDescription || ''}
                        onChange={handleInputChange}
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                        placeholder="Enter meta description for SEO"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-[#FFB400] mb-2">Author</label>
                      <select
                        id="author"
                        name="author"
                        value={newBlog.author}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                      >
                        <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                        <option value="Shrey Arora">Shrey Arora</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#FFB400] mb-2">FAQs</label>
                    <div className="border border-[#16a34a]/30 rounded-lg p-4 bg-black/30 backdrop-blur-sm">
                      {/* Display existing FAQs */}
                      {(newBlog.faqs || []).map((faq, index) => (
                        <div key={index} className="mb-4 p-4 glass-card rounded-lg shadow-lg border border-[#FFB400]/20">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-semibold text-[#FFB400]">FAQ #{index + 1}</h3>
                            <motion.button
                              type="button"
                              onClick={() => removeFaq(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1 bg-red-500/80 hover:bg-red-600 text-white text-xs rounded-md transition-all"
                            >
                              Remove
                            </motion.button>
                          </div>
                          <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-300 mb-1">Question</label>
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                              className="glass-input w-full px-3 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                              placeholder="Enter FAQ question"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-300 mb-1">Answer</label>
                            <textarea
                              value={faq.answer}
                              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                              rows={3}
                              className="glass-input w-full px-3 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#16a34a] transition-all"
                              placeholder="Enter FAQ answer"
                            />
                          </div>
                        </div>
                      ))}
                      
                      {/* Add FAQ button */}
                      <motion.button
                        type="button"
                        onClick={addFaq}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-5 py-2.5 bg-gradient-to-r from-[#16a34a] to-[#FFB400] text-black rounded-lg text-sm font-semibold flex items-center shadow-lg hover:shadow-[#FFB400]/50 transition-all"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add FAQ
                      </motion.button>
                      <p className="mt-2 text-xs text-gray-400">Add frequently asked questions related to this blog post.</p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#FFB400] mb-2">Blog Content</label>
                    {/* Tiptap Editor Integration */}
                    <div className="border border-[#16a34a]/30 rounded-lg overflow-hidden shadow-lg">
                      {typeof window !== 'undefined' && (
                        <TiptapEditor
                          content={newBlog.description}
                          onChange={handleEditorChange}
                          className="bg-white text-black h-[500px]"
                        />
                      )}
                    </div>
                    <p className="mt-2 text-xs text-gray-400">Use the toolbar above to format your content.</p>
                  </div>
                  
                  <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">RSS Feed Information</h3>
                    <p className="text-xs text-blue-300/90">
                      Your blog will be automatically added to the RSS feed at <strong className="text-blue-200">{process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.amalegalsolutions.com'}/api/rss</strong> 
                      which syncs with LinkedIn's RSS automation feature.
                    </p>
                  </div>
                  
                  <div className="flex justify-end space-x-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={handleCancelForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg font-medium border border-gray-600/50 transition-all"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-[#16a34a] to-[#FFB400] text-black rounded-lg font-semibold shadow-lg hover:shadow-[#FFB400]/50 transition-all"
                    >
                      {formMode === 'add' ? 'Publish Blog' : 'Update Blog'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            ) : (
              // Blogs Table
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-x-auto rounded-lg"
                >
                  <table className="min-w-full divide-y divide-[#16a34a]/20">
                    <thead className="bg-gradient-to-r from-[#1f1310]/60 to-[#3b2412]/40 backdrop-blur-sm">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#FFB400] uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#FFB400] uppercase tracking-wider">Title</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#FFB400] uppercase tracking-wider">Subtitle</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#FFB400] uppercase tracking-wider">Image</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#FFB400] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/20 divide-y divide-[#16a34a]/10 backdrop-blur-sm">
                      {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-[#16a34a]/10 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(blog.date).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-sm font-medium text-white max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">{blog.subtitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <img src={blog.image} alt="" className="w-16 h-16 rounded-lg object-cover border-2 border-[#16a34a]/30 shadow-md" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-2">
                                <motion.button
                                  onClick={() => handleEdit(blog)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-2 bg-blue-500/80 hover:bg-blue-600 text-white rounded-lg text-xs flex items-center shadow-md hover:shadow-blue-500/50 transition-all"
                                >
                                  <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                  Edit
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDelete(blog.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg text-xs flex items-center shadow-md hover:shadow-red-500/50 transition-all"
                                >
                                  <FontAwesomeIcon icon={faTrash} className="mr-1" />
                                  Delete
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                            No blogs found. Click Add Blog to create a new blog.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-300">
                      Showing <span className="font-semibold text-[#FFB400]">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-[#FFB400]">{Math.min(currentPage * itemsPerPage, blogs.length)}</span> of <span className="font-semibold text-[#FFB400]">{blogs.length}</span> results
                    </div>
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={handlePreviousPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-[#1f1310]/60 to-[#3b2412]/40 text-white rounded-lg text-sm font-medium border border-[#16a34a]/30 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#FFB400]/50 transition-all"
                        disabled={currentPage === 1}
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        onClick={handleNextPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-[#1f1310]/60 to-[#3b2412]/40 text-white rounded-lg text-sm font-medium border border-[#16a34a]/30 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#FFB400]/50 transition-all"
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* RSS Feed Debug Panel - Add this at the end of the content section */}
            {!showBlogForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 p-6 border border-blue-400/30 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <h3 className="text-lg font-bold text-blue-400">RSS Feed Diagnostics</h3>
                  <motion.button
                    onClick={testRssFeed}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoadingRss}
                    className="px-4 py-2 bg-blue-600/80 hover:bg-blue-700 text-white text-sm rounded-lg flex items-center font-medium shadow-md hover:shadow-blue-500/50 transition-all disabled:opacity-50"
                  >
                    {isLoadingRss ? 'Testing...' : 'Test RSS Feed'}
                  </motion.button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <a 
                    href="/api/rss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 hover:underline text-sm font-medium transition-colors"
                  >
                    View RSS Feed →
                  </a>
                  <a 
                    href="https://validator.w3.org/feed/check.cgi?url=https://www.amalegalsolutions.com/api/rss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 hover:underline text-sm font-medium transition-colors"
                  >
                    Validate with W3C Feed Validator →
                  </a>
                </div>
                
                {rssDebugInfo && (
                  <div className="mt-4">
                    <pre className="bg-black/40 p-4 rounded-lg text-xs text-blue-200 overflow-x-auto whitespace-pre-wrap border border-blue-500/20 shadow-inner">
                      {rssDebugInfo}
                    </pre>
                  </div>
                )}
                
                <p className="mt-4 text-xs text-blue-300/90 bg-blue-500/10 p-3 rounded-md border border-blue-400/20">
                  <strong className="text-blue-200">Tip:</strong> RSS feeds should be valid XML with proper entity escaping for special characters. 
                  Make sure all required fields (title, link, description, pubDate) are present for each item.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogsDashboard;

