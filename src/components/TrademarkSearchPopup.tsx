'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface TrademarkSearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  trademarkClass?: string;
}

export default function TrademarkSearchPopup({ isOpen, onClose, searchTerm, trademarkClass = '' }: TrademarkSearchPopupProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    trademarkSearched: searchTerm,
    class: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [searchResults, setSearchResults] = useState<{class: {number: number, name: string, description: string}, confidenceScore: number} | null>(null);

  // Get class description
  const getClassDescription = (classNumber: number): string => {
    const descriptions: { [key: number]: string } = {
      1: 'Covers chemicals used in industry, science, and agriculture, including industrial chemicals and chemical preparations.',
      2: 'Includes paints, varnishes, lacquers, preservatives against rust, and raw natural resins for various applications.',
      3: 'Covers cosmetics, toiletries, cleaning products, including perfumes, soaps, shampoos, and household cleaning substances.',
      4: 'Includes industrial oils, greases, fuels, illuminants, candles, and wicks for lighting purposes.',
      5: 'Covers pharmaceutical and veterinary preparations, sanitary substances, dietetic substances, and medical supplies.',
      6: 'Includes common metals and their alloys, metal building materials, hardware, and small items of metal hardware.',
      7: 'Covers machines, machine tools, motors and engines, and mechanical apparatus for various industrial applications.',
      8: 'Includes hand tools and implements, cutlery, razors, and hand-operated agricultural, gardening, and forestry tools.',
      9: 'Covers scientific, optical, and electrical apparatus, including computers, software, and electronic devices.',
      10: 'Includes surgical, medical, dental, and veterinary apparatus and instruments, including prosthetic devices.',
      11: 'Covers apparatus for lighting, heating, steam generating, cooking, refrigerating, and sanitary installations.',
      12: 'Includes vehicles and apparatus for locomotion by land, air, or water, including automobiles and aircraft.',
      13: 'Covers firearms, ammunition, projectiles, explosives, and fireworks for various applications.',
      14: 'Includes precious metals, jewelry, precious stones, horological and chronometric instruments like watches.',
      15: 'Covers musical instruments, including string, wind, percussion instruments, and musical accessories.',
      16: 'Includes paper, cardboard, printed matter, stationery, adhesives, artists\' materials, and office supplies.',
      17: 'Covers rubber, plastics, packing materials, insulating materials, and flexible pipes not of metal.',
      18: 'Includes leather, imitations of leather, animal skins, trunks, traveling bags, and personal accessories.',
      19: 'Covers non-metallic building materials, rigid pipes, asphalt, pitch, and non-metallic construction products.',
      20: 'Includes furniture, mirrors, picture frames, and goods made from wood, cork, reed, or similar materials.',
      21: 'Covers household and kitchen utensils, glassware, porcelain, earthenware, and cleaning instruments.',
      22: 'Includes ropes, string, nets, tents, tarpaulins, sails, sacks, and bags for packaging and industrial use.',
      23: 'Covers yarns and threads for textile use, including natural and synthetic fibers for weaving.',
      24: 'Includes textiles and textile goods, bed covers, table covers, and various fabrics for household use.',
      25: 'Covers clothing, footwear, and headgear for men, women, and children, including fashion accessories.',
      26: 'Includes lace, embroidery, ribbons, buttons, hooks, pins, needles, and artificial flowers.',
      27: 'Covers carpets, rugs, mats, linoleum, and other floor coverings, including wall hangings.',
      28: 'Includes games, toys, sporting goods, gymnastic articles, and decorations for Christmas trees.',
      29: 'Covers meat, fish, poultry, preserved/dried/cooked fruits and vegetables, dairy products, and edible oils.',
      30: 'Includes coffee, tea, flour, cereals, bread, pastry, confectionery, spices, and processed grains.',
      31: 'Covers agricultural, horticultural, and forestry products, live animals, fresh fruits and vegetables, and seeds.',
      32: 'Includes beers, mineral waters, fruit beverages, soft drinks, and other non-alcoholic beverages.',
      33: 'Covers alcoholic beverages except beers, including wines, spirits, liqueurs, and cocktails.',
      34: 'Includes tobacco, smokers\' articles, matches, lighters, and related smoking accessories.',
      35: 'Covers advertising, business management, office functions, retail services, and commercial administration.',
      36: 'Includes insurance, financial affairs, monetary transactions, real estate affairs, and banking services.',
      37: 'Covers building construction, repair services, installation services, and maintenance of buildings and machinery.',
      38: 'Includes telecommunications services, broadcasting, electronic messaging, and internet communication services.',
      39: 'Covers transport, packaging and storage of goods, travel arrangement, logistics, and delivery services.',
      40: 'Includes treatment of materials, custom manufacturing, 3D printing, food and beverage processing services.',
      41: 'Covers education, training, entertainment, sporting and cultural activities, including online learning.',
      42: 'Includes scientific and technological services, research, design services, IT services, and software development.',
      43: 'Covers services for providing food and drink, temporary accommodation, hotels, restaurants, and catering.',
      44: 'Includes medical services, veterinary services, hygienic and beauty care, healthcare, and wellness services.',
      45: 'Covers legal services, security services, personal and social services, intellectual property licensing and management.'
    };
    
    return descriptions[classNumber] || 'No description available for this class.';
  };

  // Generate a deterministic hash from string
  const generateHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  // Get or generate confidence score using localStorage for persistence
  const getConfidenceScore = (trademark: string, classNum: string): number => {
    // Create unique key for this trademark-class combination
    const storageKey = `trademark_${trademark.toLowerCase().trim()}_class_${classNum}`;
    
    // Try to get from localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        return parseInt(stored);
      }
    }
    
    // Generate deterministic score based on trademark name and class
    const combinedString = `${trademark.toLowerCase().trim()}_${classNum}`;
    const hash = generateHash(combinedString);
    const confidenceScore = 45 + (hash % 41); // Range: 45-85%
    
    // Store in localStorage for consistency
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, confidenceScore.toString());
    }
    
    return confidenceScore;
  };

  // Generate dynamic search results based on the user-provided class
  const generateSearchResults = (userClass: string) => {
    const trademarkClasses = [
      { number: 1, name: 'Chemicals' },
      { number: 2, name: 'Paints' },
      { number: 3, name: 'Cosmetics & Cleaning Products' },
      { number: 4, name: 'Fuels & Industrial Oils' },
      { number: 5, name: 'Pharmaceuticals & Medical Supplies' },
      { number: 6, name: 'Metals & Metal Goods' },
      { number: 7, name: 'Machinery' },
      { number: 8, name: 'Hand Tools' },
      { number: 9, name: 'Electronics & Software' },
      { number: 10, name: 'Medical Instruments' },
      { number: 11, name: 'Appliances (Lighting, Heating, Plumbing)' },
      { number: 12, name: 'Vehicles' },
      { number: 13, name: 'Firearms & Explosives' },
      { number: 14, name: 'Jewelry & Precious Metals' },
      { number: 15, name: 'Musical Instruments' },
      { number: 16, name: 'Paper & Stationery' },
      { number: 17, name: 'Rubber & Plastics' },
      { number: 18, name: 'Leather Goods & Bags' },
      { number: 19, name: 'Building Materials (Non-Metallic)' },
      { number: 20, name: 'Furniture' },
      { number: 21, name: 'Household Utensils & Kitchenware' },
      { number: 22, name: 'Ropes, Nets & Sacks' },
      { number: 23, name: 'Yarns & Threads' },
      { number: 24, name: 'Fabrics & Textiles' },
      { number: 25, name: 'Clothing, Footwear & Headgear' },
      { number: 26, name: 'Lace, Embroidery & Accessories' },
      { number: 27, name: 'Carpets & Floor Coverings' },
      { number: 28, name: 'Toys, Games & Sporting Goods' },
      { number: 29, name: 'Foodstuffs (Meat, Fish, Dairy, Preserves)' },
      { number: 30, name: 'Foodstuffs (Staples: Coffee, Tea, Flour, Spices)' },
      { number: 31, name: 'Agricultural Products (Fresh Fruits, Vegetables, Grains)' },
      { number: 32, name: 'Beers & Non-Alcoholic Beverages' },
      { number: 33, name: 'Alcoholic Beverages (Except Beer)' },
      { number: 34, name: 'Tobacco, Smokers\' Articles & Matches' },
      { number: 35, name: 'Business & Management Services' },
      { number: 36, name: 'Financial & Insurance Services' },
      { number: 37, name: 'Construction & Repair Services' },
      { number: 38, name: 'Telecommunications Services' },
      { number: 39, name: 'Transport & Storage Services' },
      { number: 40, name: 'Treatment of Materials (Manufacturing, Processing)' },
      { number: 41, name: 'Education & Training Services' },
      { number: 42, name: 'Scientific & IT Services (Technology, Software, Research)' },
      { number: 43, name: 'Hospitality (Restaurants, Hotels, Catering)' },
      { number: 44, name: 'Medical & Veterinary Services' },
      { number: 45, name: 'Legal & Security Services' }
    ];

    // Use user-provided class if available
    if (userClass && userClass.trim()) {
      const classNumber = parseInt(userClass);
      const selectedClass = trademarkClasses.find(c => c.number === classNumber);
      
      if (selectedClass) {
        // Get deterministic confidence score
        const confidenceScore = getConfidenceScore(searchTerm, userClass);

    return {
          class: {
            ...selectedClass,
            description: getClassDescription(classNumber)
          },
      confidenceScore
    };
      }
    }
    
    // Return null if no class is provided
    return null;
  };

  // Initialize search results only once when trademarkClass changes
  useEffect(() => {
    if (trademarkClass && trademarkClass.trim()) {
      const results = generateSearchResults(trademarkClass);
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  }, [trademarkClass]);

  // Set form data when component loads
  useEffect(() => {
      setFormData(prev => ({
        ...prev,
        trademarkSearched: searchTerm,
      class: trademarkClass || ''
      }));
  }, [searchTerm, trademarkClass]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.class) {
      newErrors.class = 'Please select a trademark class';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get class name for better data storage
      const trademarkClasses: { [key: string]: string } = {
        '1': 'Chemicals',
        '2': 'Paints',
        '3': 'Cosmetics & Cleaning Products',
        '4': 'Fuels & Industrial Oils',
        '5': 'Pharmaceuticals & Medical Supplies',
        '6': 'Metals & Metal Goods',
        '7': 'Machinery',
        '8': 'Hand Tools',
        '9': 'Electronics & Software',
        '10': 'Medical Instruments',
        '11': 'Appliances (Lighting, Heating, Plumbing)',
        '12': 'Vehicles',
        '13': 'Firearms & Explosives',
        '14': 'Jewelry & Precious Metals',
        '15': 'Musical Instruments',
        '16': 'Paper & Stationery',
        '17': 'Rubber & Plastics',
        '18': 'Leather Goods & Bags',
        '19': 'Building Materials (Non-Metallic)',
        '20': 'Furniture',
        '21': 'Household Utensils & Kitchenware',
        '22': 'Ropes, Nets & Sacks',
        '23': 'Yarns & Threads',
        '24': 'Fabrics & Textiles',
        '25': 'Clothing, Footwear & Headgear',
        '26': 'Lace, Embroidery & Accessories',
        '27': 'Carpets & Floor Coverings',
        '28': 'Toys, Games & Sporting Goods',
        '29': 'Foodstuffs (Meat, Fish, Dairy, Preserves)',
        '30': 'Foodstuffs (Staples: Coffee, Tea, Flour, Spices)',
        '31': 'Agricultural Products (Fresh Fruits, Vegetables, Grains)',
        '32': 'Beers & Non-Alcoholic Beverages',
        '33': 'Alcoholic Beverages (Except Beer)',
        '34': 'Tobacco, Smokers\' Articles & Matches',
        '35': 'Business & Management Services',
        '36': 'Financial & Insurance Services',
        '37': 'Construction & Repair Services',
        '38': 'Telecommunications Services',
        '39': 'Transport & Storage Services',
        '40': 'Treatment of Materials (Manufacturing, Processing)',
        '41': 'Education & Training Services',
        '42': 'Scientific & IT Services (Technology, Software, Research)',
        '43': 'Hospitality (Restaurants, Hotels, Catering)',
        '44': 'Medical & Veterinary Services',
        '45': 'Legal & Security Services'
      };

      // Add the lead to Firestore
      await addDoc(collection(db, 'leads'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: `Trademark Registration - Class ${formData.class}`,
        message: `Trademark Search: ${formData.trademarkSearched}`,
        state: formData.state,
        trademarkName: formData.trademarkSearched,
        className: trademarkClasses[formData.class] || formData.class,
        classNumber: formData.class,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // Call the trademark analysis API
      const analysisResponse = await fetch('/api/analyze-trademark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trademarkName: formData.trademarkSearched,
          classNumber: formData.class,
        }),
      });

      if (!analysisResponse.ok) {
        const errorData = await analysisResponse.json().catch(() => ({}));
        console.error('API Error:', errorData);
        
        // Show detailed error message
        const errorMessage = errorData.details || errorData.error || 'Failed to analyze trademark';
        const errorStep = errorData.step || 'unknown';
        
        alert(`Error: ${errorMessage}\n\nStep: ${errorStep}\n\nPlease check the console for more details.`);
        throw new Error(errorMessage);
      }

      // Show loader for 4 seconds before redirecting
      setShowLoader(true);
      
      setTimeout(() => {
        // Redirect to dashboard with trademark data
        const params = new URLSearchParams({
          trademark: formData.trademarkSearched,
          class: formData.class,
        });
        router.push(`/dashboard?${params.toString()}`);
      }, 4000); // 4 seconds

    } catch (error: any) {
      console.error('Error submitting form:', error);
      if (!error.message?.includes('Error:')) {
        alert('Something went wrong. Please try again or check the server console for details.');
      }
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Global styles */}
      <style jsx global>{`
        body {
          overflow: hidden !important;
        }

        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 180px;
          font-family: "Inter", sans-serif;
          font-size: 1.2em;
          font-weight: 300;
          color: white;
          border-radius: 50%;
          background-color: transparent;
          user-select: none;
        }

        .loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: transparent;
          animation: loader-rotate 2s linear infinite;
          z-index: 0;
        }

        @keyframes loader-rotate {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 10px 0 #d60a47 inset,
              0 40px 60px 0 #311e80 inset;
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0.4;
          transform: translateY(0);
          animation: loader-letter-anim 2s infinite;
          z-index: 1;
          border-radius: 50ch;
          border: none;
        }

        .loader-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .loader-letter:nth-child(2) {
          animation-delay: 0.1s;
        }
        .loader-letter:nth-child(3) {
          animation-delay: 0.2s;
        }
        .loader-letter:nth-child(4) {
          animation-delay: 0.3s;
        }
        .loader-letter:nth-child(5) {
          animation-delay: 0.4s;
        }
        .loader-letter:nth-child(6) {
          animation-delay: 0.5s;
        }
        .loader-letter:nth-child(7) {
          animation-delay: 0.6s;
        }
        .loader-letter:nth-child(8) {
          animation-delay: 0.7s;
        }
        .loader-letter:nth-child(9) {
          animation-delay: 0.8s;
        }
        .loader-letter:nth-child(10) {
          animation-delay: 0.9s;
        }
        .loader-letter:nth-child(11) {
          animation-delay: 1s;
        }
        .loader-letter:nth-child(12) {
          animation-delay: 1.1s;
        }
        .loader-letter:nth-child(13) {
          animation-delay: 1.2s;
        }

        @keyframes loader-letter-anim {
          0%,
          100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="fixed inset-0 overflow-hidden bg-black">
        {/* Close Button */}
        <button
          onClick={onClose}
        className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white hover:text-gray-300 bg-black bg-opacity-30 rounded-full p-2 backdrop-blur-sm z-50"
        >
          <i className="fas fa-xmark text-lg lg:text-xl"></i>
        </button>

      <div className="w-full h-screen relative overflow-hidden">
        <div className="w-full h-full overflow-y-auto lg:overflow-hidden relative">

        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden lg:flex flex-row gap-0 h-full overflow-hidden">
          {/* Left Section - Search Results (70%) */}
          <div 
            className="w-[70%] h-full flex flex-col overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, #FFFFFF 0%, #6E5E93 20%, #160049 55%, #0C002B 100%)'
            }}
          >
            {/* Content Container */}
            <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center py-4 sm:py-6 lg:py-8">
              {/* Logo Section */}
              <Link href="/" className="flex justify-center mb-3 sm:mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-12 h-10 sm:w-16 sm:h-12">
                  <svg width="65" height="49" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.5449 6.37838C51.5449 6.37838 53.1893 8.32436 54.2579 10.2051C54.2579 10.2051 59.0267 3.22541 63.8798 1" stroke="url(#paint0_linear_134_395)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.0068 42.2387C43.5015 42.2387 43.9585 42.3251 44.377 42.4965C44.8018 42.6615 45.1697 42.896 45.4805 43.2006C45.791 43.5053 46.0319 43.8641 46.2031 44.2768C46.3806 44.6831 46.4697 45.1308 46.4697 45.6196C46.4697 46.1085 46.3806 46.5594 46.2031 46.9721C46.0319 47.3781 45.791 47.7339 45.4805 48.0385C45.1697 48.3431 44.8018 48.581 44.377 48.7524C43.9585 48.9175 43.5015 49.0004 43.0068 49.0004C42.5125 49.0004 42.0525 48.9175 41.6279 48.7524C41.2094 48.581 40.8416 48.3431 40.5244 48.0385C40.2139 47.7276 39.973 47.3686 39.8018 46.9623C39.6305 46.5496 39.5449 46.1019 39.5449 45.6196C39.5449 45.1373 39.6306 44.6926 39.8018 44.2866C39.9729 43.8739 40.2139 43.515 40.5244 43.2104C40.8415 42.8995 41.2094 42.6615 41.6279 42.4965C42.0525 42.3252 42.5125 42.2388 43.0068 42.2387ZM16.6826 46.5688L20.8389 42.2866H21.4287L18.502 45.3188L21.6289 48.9526H21.0391L18.1719 45.6713L16.6826 47.1987V48.9526H16.1973V42.2866H16.6826V46.5688ZM29.4639 48.9526H28.9414L28.0889 47.0766H24.2266L23.377 48.9526H22.8535L25.916 42.2866H26.4014L29.4639 48.9526ZM34.3926 42.2866C34.9503 42.2866 35.4288 42.3756 35.8281 42.5532C36.2276 42.7308 36.5352 42.9882 36.751 43.3246C36.9665 43.6545 37.0742 44.0575 37.0742 44.5336C37.0742 44.9968 36.9666 45.3973 36.751 45.7338C36.5352 46.0637 36.2276 46.3212 35.8281 46.5053C35.7275 46.5501 35.6214 46.588 35.5107 46.6215L37.1787 48.9526H36.627L35.0342 46.726C34.8334 46.7555 34.6197 46.7719 34.3926 46.7719H32.4893V48.9526H32.0049V42.2866H34.3926ZM43.0068 42.687C42.5823 42.687 42.1893 42.7596 41.8281 42.9057C41.4666 43.0517 41.1496 43.2581 40.877 43.5248C40.6106 43.7913 40.4013 44.1019 40.249 44.4575C40.103 44.8065 40.0303 45.1943 40.0303 45.6196C40.0303 46.0386 40.103 46.4262 40.249 46.7817C40.4013 47.1372 40.6107 47.4478 40.877 47.7143C41.1496 47.981 41.4666 48.1875 41.8281 48.3334C42.1893 48.4795 42.5824 48.5521 43.0068 48.5522C43.4316 48.5522 43.8252 48.4795 44.1865 48.3334C44.5479 48.1874 44.8625 47.9811 45.1289 47.7143C45.3951 47.4478 45.6013 47.1371 45.7471 46.7817C45.8993 46.4262 45.9746 46.0386 45.9746 45.6196C45.9746 45.1943 45.8993 44.8065 45.7471 44.4575C45.6013 44.102 45.3951 43.7913 45.1289 43.5248C44.8625 43.2581 44.5479 43.0517 44.1865 42.9057C43.8252 42.7596 43.4316 42.687 43.0068 42.687ZM24.4121 46.6674H27.9023L26.1543 42.8207L24.4121 46.6674ZM32.4893 46.3432H34.3926C35.1085 46.3431 35.6506 46.1847 36.0186 45.8676C36.3925 45.55 36.5801 45.1049 36.5801 44.5336C36.58 43.9561 36.3924 43.5115 36.0186 43.2006C35.6506 42.8834 35.1086 42.7251 34.3926 42.725H32.4893V46.3432ZM7.50195 38.6655H0V5.3266H7.50195V38.6655ZM22.0898 5.3266C30.4806 5.32673 34.6758 8.86971 34.6758 15.9526C34.6755 19.2997 33.4684 22.0127 31.0537 24.0893C28.6541 26.1501 25.4414 27.1799 21.417 27.1801H17.8408V38.6655H10.3389V5.3266H22.0898ZM46.6865 5.3266C47.6702 5.3266 48.5948 5.3708 49.459 5.46039V10.0971C49.459 11.1489 50.3107 12.0024 51.3613 12.0024H58.5615C58.7242 12.7388 58.8086 13.5357 58.8086 14.394C58.8086 15.5563 58.6314 16.6346 58.2754 17.6264C57.9193 18.6026 57.4158 19.4867 56.7656 20.2768C56.1156 21.067 55.3253 21.7494 54.3965 22.3227C53.4832 22.8961 52.4609 23.3451 51.3311 23.6703V23.7641C51.8261 23.9191 52.3072 24.1735 52.7715 24.5297C53.2359 24.8708 53.6848 25.2739 54.1182 25.7387C54.5517 26.2036 54.9624 26.7089 55.3496 27.2514C55.7516 27.7779 56.1155 28.2969 56.4404 28.808L62.7344 38.6655H54.1182L48.9404 30.0873C48.5535 29.4366 48.1812 28.8546 47.8252 28.3432C47.4693 27.8319 47.1048 27.3978 46.7334 27.0414C46.3775 26.6696 45.998 26.3897 45.5957 26.2036C45.2089 26.0023 44.7824 25.9028 44.3184 25.9028H42.2988V38.6655H34.7969V5.3266H46.6865ZM17.8408 21.4858H20.7891C24.7829 21.4857 26.7799 19.7331 26.7803 16.2309C26.7801 12.8059 24.7831 11.0923 20.7891 11.0922H17.8408V21.4858ZM42.2988 20.2299H45.5498C47.1591 20.2297 48.4516 19.7646 49.4268 18.8354C50.4176 17.89 50.9131 16.7186 50.9131 15.3237C50.9131 12.4102 49.1719 10.9529 45.6895 10.9526H42.2988V20.2299Z" fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_134_395" x1="49.9944" y1="0.697201" x2="64.3909" y2="3.00788" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1345C3"/>
                        <stop offset="1" stopColor="#069A81"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </Link>
            {/* Trademark Check Results Container */}
            <div 
              className="relative p-3 sm:p-4 lg:p-5 mb-3 sm:mb-4 max-w-2xl mx-auto w-full"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              {/* Header Badges - Top Left and Top Right */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-brain text-white text-xs"></i>
                <span className="text-white text-xs font-medium font-nunito">AI Trademark</span>
              </div>
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-shield-alt text-white text-xs"></i>
                <span className="text-white text-xs font-medium font-nunito">Security Checking</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-white text-sm sm:text-base lg:text-lg font-bold mb-1 font-nunito break-words">
                Trademark Check Results for "{searchTerm}"
              </h2>
              <p className="text-gray-400 text-xs font-nunito hidden sm:block">
                Preliminary automated scan completed. Review quick insights below.
              </p>
              </div>
            </div>

            {/* Quick Insights Container */}
            <div 
              className="p-3 sm:p-4 lg:p-5 mb-3 sm:mb-4 max-w-2xl mx-auto w-full"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              <div 
                className="flex items-center gap-2 mb-3 px-3 py-1.5 w-fit"
                style={{
                  borderRadius: '5px',
                  background: 'rgba(0, 0, 0, 0.30)'
                }}
              >
                <i className="fas fa-lightbulb text-white text-xs"></i>
                <span className="text-white font-semibold font-nunito text-sm">Quick insights</span>
              </div>
              
              <div className="space-y-2">
                {searchResults ? (
                  <>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-tag text-white text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="text-white text-xs font-nunito break-words">
                        <span className="font-semibold">Class {searchResults.class.number} - {searchResults.class.name}:</span> {searchResults.class.description}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-chart-line text-white text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="text-white text-xs font-nunito break-words">
                        AI Confidence Score: {searchResults.confidenceScore}% chance your brand may face an objection
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-start gap-2">
                    <i className="fas fa-info-circle text-white text-xs mt-0.5 flex-shrink-0"></i>
                    <span className="text-white text-xs font-nunito break-words">
                      Please enter a trademark class to see detailed insights
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Report SVG */}
            <div className="max-w-2xl mx-auto w-full">
              <Image 
                src="/report.svg" 
                alt="Trademark Report" 
                width={797}
                height={335}
                className="w-full h-auto max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] object-contain"
                priority
                quality={100}
              />
              </div>
              </div>
              </div>
              
          {/* Right Section - Signup Form (30%) */}
          <div className="w-[30%] bg-[#121212] p-6 flex flex-col justify-center h-full overflow-hidden">
            
            {/* AI Creative Section */}
            <div className="text-center mb-5">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#FFB703] opacity-20 blur-xl animate-pulse"></div>
                  
                  {/* AI Icon */}
                  <div 
                    className="relative w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: 'transparent',
                      borderColor: '#FFB703',
                      boxShadow: '0 0 20px rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-brain text-[#FFB703] text-2xl"></i>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-[#FFB703] text-sm font-bold font-nunito tracking-wide">
                  AI-POWERED INSIGHTS
                </h4>
                <p className="text-white text-xs font-nunito opacity-80">
                  Intelligent trademark analysis at your fingertips
                </p>
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-white text-xl font-bold mb-2 font-nunito">Create your account</h3>
              <p className="text-gray-300 text-sm font-nunito">
                Sign up for free to unlock your complete trademark report.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Name Field */}
                  <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                        errors.name ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                      Phone No. <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit phone number"
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                        errors.phone ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                  </div>

              {/* Email Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>

                  {/* State Field */}
                  <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                      State <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] bg-transparent ${
                        errors.state ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    >
                      <option value="" className="bg-[#121212] text-white">Select State</option>
                      
                      {/* States */}
                        <option value="Andhra Pradesh" className="bg-[#121212] text-white">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh" className="bg-[#121212] text-white">Arunachal Pradesh</option>
                        <option value="Assam" className="bg-[#121212] text-white">Assam</option>
                        <option value="Bihar" className="bg-[#121212] text-white">Bihar</option>
                        <option value="Chhattisgarh" className="bg-[#121212] text-white">Chhattisgarh</option>
                        <option value="Goa" className="bg-[#121212] text-white">Goa</option>
                        <option value="Gujarat" className="bg-[#121212] text-white">Gujarat</option>
                        <option value="Haryana" className="bg-[#121212] text-white">Haryana</option>
                        <option value="Himachal Pradesh" className="bg-[#121212] text-white">Himachal Pradesh</option>
                        <option value="Jharkhand" className="bg-[#121212] text-white">Jharkhand</option>
                        <option value="Karnataka" className="bg-[#121212] text-white">Karnataka</option>
                        <option value="Kerala" className="bg-[#121212] text-white">Kerala</option>
                        <option value="Madhya Pradesh" className="bg-[#121212] text-white">Madhya Pradesh</option>
                        <option value="Maharashtra" className="bg-[#121212] text-white">Maharashtra</option>
                        <option value="Manipur" className="bg-[#121212] text-white">Manipur</option>
                        <option value="Meghalaya" className="bg-[#121212] text-white">Meghalaya</option>
                        <option value="Mizoram" className="bg-[#121212] text-white">Mizoram</option>
                        <option value="Nagaland" className="bg-[#121212] text-white">Nagaland</option>
                        <option value="Odisha" className="bg-[#121212] text-white">Odisha</option>
                        <option value="Punjab" className="bg-[#121212] text-white">Punjab</option>
                        <option value="Rajasthan" className="bg-[#121212] text-white">Rajasthan</option>
                        <option value="Sikkim" className="bg-[#121212] text-white">Sikkim</option>
                        <option value="Tamil Nadu" className="bg-[#121212] text-white">Tamil Nadu</option>
                        <option value="Telangana" className="bg-[#121212] text-white">Telangana</option>
                        <option value="Tripura" className="bg-[#121212] text-white">Tripura</option>
                        <option value="Uttar Pradesh" className="bg-[#121212] text-white">Uttar Pradesh</option>
                        <option value="Uttarakhand" className="bg-[#121212] text-white">Uttarakhand</option>
                        <option value="West Bengal" className="bg-[#121212] text-white">West Bengal</option>
                      
                      {/* Union Territories */}
                        <option value="Andaman and Nicobar Islands" className="bg-[#121212] text-white">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh" className="bg-[#121212] text-white">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu" className="bg-[#121212] text-white">Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value="Delhi" className="bg-[#121212] text-white">Delhi</option>
                        <option value="Jammu and Kashmir" className="bg-[#121212] text-white">Jammu and Kashmir</option>
                        <option value="Ladakh" className="bg-[#121212] text-white">Ladakh</option>
                        <option value="Lakshadweep" className="bg-[#121212] text-white">Lakshadweep</option>
                        <option value="Puducherry" className="bg-[#121212] text-white">Puducherry</option>
                    </select>
                    {errors.state && <p className="text-red-400 text-xs mt-0.5">{errors.state}</p>}
                  </div>

                  {/* Trademark Searched Field */}
                  <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                      Trademark You Searched
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="trademarkSearched"
                        value={formData.trademarkSearched}
                        onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-8 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent"
                        placeholder="Enter trademark name"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, trademarkSearched: '' }))}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        <i className="fas fa-xmark text-sm"></i>
                      </button>
                    </div>
                  </div>

                  {/* Class Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                  <label className="text-white text-xs font-medium font-nunito text-left">
                        Class <span className="text-red-400">*</span>
                      </label>
                    
                        </div>
                        
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] bg-transparent ${
                        errors.class ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    >
                      <option value="" className="bg-[#121212] text-white">Select Class</option>
                      <option value="1" className="bg-[#121212] text-white">Class 1 - Chemicals</option>
                      <option value="2" className="bg-[#121212] text-white">Class 2 - Paints</option>
                      <option value="3" className="bg-[#121212] text-white">Class 3 - Cosmetics & Cleaning Products</option>
                      <option value="4" className="bg-[#121212] text-white">Class 4 - Fuels & Industrial Oils</option>
                      <option value="5" className="bg-[#121212] text-white">Class 5 - Pharmaceuticals & Medical Supplies</option>
                      <option value="6" className="bg-[#121212] text-white">Class 6 - Metals & Metal Goods</option>
                      <option value="7" className="bg-[#121212] text-white">Class 7 - Machinery</option>
                      <option value="8" className="bg-[#121212] text-white">Class 8 - Hand Tools</option>
                      <option value="9" className="bg-[#121212] text-white">Class 9 - Electronics & Software</option>
                      <option value="10" className="bg-[#121212] text-white">Class 10 - Medical Instruments</option>
                      <option value="11" className="bg-[#121212] text-white">Class 11 - Appliances (Lighting, Heating, Plumbing)</option>
                      <option value="12" className="bg-[#121212] text-white">Class 12 - Vehicles</option>
                      <option value="13" className="bg-[#121212] text-white">Class 13 - Firearms & Explosives</option>
                      <option value="14" className="bg-[#121212] text-white">Class 14 - Jewelry & Precious Metals</option>
                      <option value="15" className="bg-[#121212] text-white">Class 15 - Musical Instruments</option>
                      <option value="16" className="bg-[#121212] text-white">Class 16 - Paper & Stationery</option>
                      <option value="17" className="bg-[#121212] text-white">Class 17 - Rubber & Plastics</option>
                      <option value="18" className="bg-[#121212] text-white">Class 18 - Leather Goods & Bags</option>
                      <option value="19" className="bg-[#121212] text-white">Class 19 - Building Materials (Non-Metallic)</option>
                      <option value="20" className="bg-[#121212] text-white">Class 20 - Furniture</option>
                      <option value="21" className="bg-[#121212] text-white">Class 21 - Household Utensils & Kitchenware</option>
                      <option value="22" className="bg-[#121212] text-white">Class 22 - Ropes, Nets & Sacks</option>
                      <option value="23" className="bg-[#121212] text-white">Class 23 - Yarns & Threads</option>
                      <option value="24" className="bg-[#121212] text-white">Class 24 - Fabrics & Textiles</option>
                      <option value="25" className="bg-[#121212] text-white">Class 25 - Clothing, Footwear & Headgear</option>
                      <option value="26" className="bg-[#121212] text-white">Class 26 - Lace, Embroidery & Accessories</option>
                      <option value="27" className="bg-[#121212] text-white">Class 27 - Carpets & Floor Coverings</option>
                      <option value="28" className="bg-[#121212] text-white">Class 28 - Toys, Games & Sporting Goods</option>
                      <option value="29" className="bg-[#121212] text-white">Class 29 - Foodstuffs (Meat, Fish, Dairy, Preserves)</option>
                      <option value="30" className="bg-[#121212] text-white">Class 30 - Foodstuffs (Staples: Coffee, Tea, Flour, Spices)</option>
                      <option value="31" className="bg-[#121212] text-white">Class 31 - Agricultural Products (Fresh Fruits, Vegetables, Grains)</option>
                      <option value="32" className="bg-[#121212] text-white">Class 32 - Beers & Non-Alcoholic Beverages</option>
                      <option value="33" className="bg-[#121212] text-white">Class 33 - Alcoholic Beverages (Except Beer)</option>
                      <option value="34" className="bg-[#121212] text-white">Class 34 - Tobacco, Smokers' Articles & Matches</option>
                      <option value="35" className="bg-[#121212] text-white">Class 35 - Business & Management Services</option>
                      <option value="36" className="bg-[#121212] text-white">Class 36 - Financial & Insurance Services</option>
                      <option value="37" className="bg-[#121212] text-white">Class 37 - Construction & Repair Services</option>
                      <option value="38" className="bg-[#121212] text-white">Class 38 - Telecommunications Services</option>
                      <option value="39" className="bg-[#121212] text-white">Class 39 - Transport & Storage Services</option>
                      <option value="40" className="bg-[#121212] text-white">Class 40 - Treatment of Materials (Manufacturing, Processing)</option>
                      <option value="41" className="bg-[#121212] text-white">Class 41 - Education & Training Services</option>
                      <option value="42" className="bg-[#121212] text-white">Class 42 - Scientific & IT Services (Technology, Software, Research)</option>
                      <option value="43" className="bg-[#121212] text-white">Class 43 - Hospitality (Restaurants, Hotels, Catering)</option>
                      <option value="44" className="bg-[#121212] text-white">Class 44 - Medical & Veterinary Services</option>
                      <option value="45" className="bg-[#121212] text-white">Class 45 - Legal & Security Services</option>
                    </select>
                    {errors.class && <p className="text-red-400 text-xs mt-0.5">{errors.class}</p>}
                  </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-2.5 rounded-lg transition-colors duration-300 mt-3 text-sm ${
                  isSubmitting 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-[#fbbf24] hover:bg-[#e6a602] text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Creating Account...
                  </div>
                ) : (
                  'Unlock Full Report'
                )}
              </button>
            </form>
          </div>
          </div>

        {/* Mobile Layout (shown only on mobile) */}
        <div className="lg:hidden w-full min-h-full">
          {/* Top Section - Gradient with Logo and Form */}
          <div 
            className="w-full p-6"
            style={{
              background: 'linear-gradient(to bottom, #FFFFFF 0%, #6E5E93 20%, #160049 55%, #0C002B 100%)'
            }}
          >
            {/* Logo Section */}
            <Link href="/" className="flex justify-center mb-6 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-16 h-12">
                <Image src="/logo/iprlogo.svg" alt="IPR Karo Logo" width={65} height={49} />
              </div>
            </Link>

            {/* AI Creative Section */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#FFB703] opacity-20 blur-xl animate-pulse"></div>
                  
                  {/* AI Icon */}
                  <div 
                    className="relative w-14 h-14 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: 'transparent',
                      borderColor: '#FFB703',
                      boxShadow: '0 0 20px rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-brain text-[#FFB703] text-xl"></i>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-[#FFB703] text-xs font-bold font-nunito tracking-wide">
                  AI-POWERED INSIGHTS
                </h4>
                <p className="text-white text-xs font-nunito opacity-80">
                  Intelligent trademark analysis at your fingertips
                </p>
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-white text-lg font-bold mb-2 font-nunito">Create your account</h3>
              <p className="text-gray-300 text-sm font-nunito">
                Sign up for free to unlock your complete trademark report.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                    errors.name ? 'border-red-400' : 'border-gray-600'
                  }`}
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Phone No. <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit phone number"
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                    errors.phone ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                />
                {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>

              {/* State Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  State <span className="text-red-400">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] bg-transparent ${
                    errors.state ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                >
                  <option value="" className="bg-[#0C002B] text-white">Select State</option>
                  
                  {/* States */}
                  <option value="Andhra Pradesh" className="bg-[#0C002B] text-white">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh" className="bg-[#0C002B] text-white">Arunachal Pradesh</option>
                  <option value="Assam" className="bg-[#0C002B] text-white">Assam</option>
                  <option value="Bihar" className="bg-[#0C002B] text-white">Bihar</option>
                  <option value="Chhattisgarh" className="bg-[#0C002B] text-white">Chhattisgarh</option>
                  <option value="Goa" className="bg-[#0C002B] text-white">Goa</option>
                  <option value="Gujarat" className="bg-[#0C002B] text-white">Gujarat</option>
                  <option value="Haryana" className="bg-[#0C002B] text-white">Haryana</option>
                  <option value="Himachal Pradesh" className="bg-[#0C002B] text-white">Himachal Pradesh</option>
                  <option value="Jharkhand" className="bg-[#0C002B] text-white">Jharkhand</option>
                  <option value="Karnataka" className="bg-[#0C002B] text-white">Karnataka</option>
                  <option value="Kerala" className="bg-[#0C002B] text-white">Kerala</option>
                  <option value="Madhya Pradesh" className="bg-[#0C002B] text-white">Madhya Pradesh</option>
                  <option value="Maharashtra" className="bg-[#0C002B] text-white">Maharashtra</option>
                  <option value="Manipur" className="bg-[#0C002B] text-white">Manipur</option>
                  <option value="Meghalaya" className="bg-[#0C002B] text-white">Meghalaya</option>
                  <option value="Mizoram" className="bg-[#0C002B] text-white">Mizoram</option>
                  <option value="Nagaland" className="bg-[#0C002B] text-white">Nagaland</option>
                  <option value="Odisha" className="bg-[#0C002B] text-white">Odisha</option>
                  <option value="Punjab" className="bg-[#0C002B] text-white">Punjab</option>
                  <option value="Rajasthan" className="bg-[#0C002B] text-white">Rajasthan</option>
                  <option value="Sikkim" className="bg-[#0C002B] text-white">Sikkim</option>
                  <option value="Tamil Nadu" className="bg-[#0C002B] text-white">Tamil Nadu</option>
                  <option value="Telangana" className="bg-[#0C002B] text-white">Telangana</option>
                  <option value="Tripura" className="bg-[#0C002B] text-white">Tripura</option>
                  <option value="Uttar Pradesh" className="bg-[#0C002B] text-white">Uttar Pradesh</option>
                  <option value="Uttarakhand" className="bg-[#0C002B] text-white">Uttarakhand</option>
                  <option value="West Bengal" className="bg-[#0C002B] text-white">West Bengal</option>
                  
                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands" className="bg-[#0C002B] text-white">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh" className="bg-[#0C002B] text-white">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu" className="bg-[#0C002B] text-white">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi" className="bg-[#0C002B] text-white">Delhi</option>
                  <option value="Jammu and Kashmir" className="bg-[#0C002B] text-white">Jammu and Kashmir</option>
                  <option value="Ladakh" className="bg-[#0C002B] text-white">Ladakh</option>
                  <option value="Lakshadweep" className="bg-[#0C002B] text-white">Lakshadweep</option>
                  <option value="Puducherry" className="bg-[#0C002B] text-white">Puducherry</option>
                </select>
                {errors.state && <p className="text-red-400 text-xs mt-0.5">{errors.state}</p>}
              </div>

              {/* Trademark Searched Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Trademark You Searched
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="trademarkSearched"
                    value={formData.trademarkSearched}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-8 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 bg-transparent"
                    placeholder="Enter trademark name"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, trademarkSearched: '' }))}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <i className="fas fa-xmark text-sm"></i>
                  </button>
                </div>
              </div>

              {/* Class Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito text-left">
                  Class <span className="text-red-400">*</span>
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-white text-sm focus:outline-none focus:border-[#fbbf24] bg-transparent ${
                    errors.class ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                >
                  <option value="" className="bg-[#0C002B] text-white">Select Class</option>
                  <option value="1" className="bg-[#0C002B] text-white">Class 1 - Chemicals</option>
                  <option value="2" className="bg-[#0C002B] text-white">Class 2 - Paints</option>
                  <option value="3" className="bg-[#0C002B] text-white">Class 3 - Cosmetics & Cleaning Products</option>
                  <option value="4" className="bg-[#0C002B] text-white">Class 4 - Fuels & Industrial Oils</option>
                  <option value="5" className="bg-[#0C002B] text-white">Class 5 - Pharmaceuticals & Medical Supplies</option>
                  <option value="6" className="bg-[#0C002B] text-white">Class 6 - Metals & Metal Goods</option>
                  <option value="7" className="bg-[#0C002B] text-white">Class 7 - Machinery</option>
                  <option value="8" className="bg-[#0C002B] text-white">Class 8 - Hand Tools</option>
                  <option value="9" className="bg-[#0C002B] text-white">Class 9 - Electronics & Software</option>
                  <option value="10" className="bg-[#0C002B] text-white">Class 10 - Medical Instruments</option>
                  <option value="11" className="bg-[#0C002B] text-white">Class 11 - Appliances (Lighting, Heating, Plumbing)</option>
                  <option value="12" className="bg-[#0C002B] text-white">Class 12 - Vehicles</option>
                  <option value="13" className="bg-[#0C002B] text-white">Class 13 - Firearms & Explosives</option>
                  <option value="14" className="bg-[#0C002B] text-white">Class 14 - Jewelry & Precious Metals</option>
                  <option value="15" className="bg-[#0C002B] text-white">Class 15 - Musical Instruments</option>
                  <option value="16" className="bg-[#0C002B] text-white">Class 16 - Paper & Stationery</option>
                  <option value="17" className="bg-[#0C002B] text-white">Class 17 - Rubber & Plastics</option>
                  <option value="18" className="bg-[#0C002B] text-white">Class 18 - Leather Goods & Bags</option>
                  <option value="19" className="bg-[#0C002B] text-white">Class 19 - Building Materials (Non-Metallic)</option>
                  <option value="20" className="bg-[#0C002B] text-white">Class 20 - Furniture</option>
                  <option value="21" className="bg-[#0C002B] text-white">Class 21 - Household Utensils & Kitchenware</option>
                  <option value="22" className="bg-[#0C002B] text-white">Class 22 - Ropes, Nets & Sacks</option>
                  <option value="23" className="bg-[#0C002B] text-white">Class 23 - Yarns & Threads</option>
                  <option value="24" className="bg-[#0C002B] text-white">Class 24 - Fabrics & Textiles</option>
                  <option value="25" className="bg-[#0C002B] text-white">Class 25 - Clothing, Footwear & Headgear</option>
                  <option value="26" className="bg-[#0C002B] text-white">Class 26 - Lace, Embroidery & Accessories</option>
                  <option value="27" className="bg-[#0C002B] text-white">Class 27 - Carpets & Floor Coverings</option>
                  <option value="28" className="bg-[#0C002B] text-white">Class 28 - Toys, Games & Sporting Goods</option>
                  <option value="29" className="bg-[#0C002B] text-white">Class 29 - Foodstuffs (Meat, Fish, Dairy, Preserves)</option>
                  <option value="30" className="bg-[#0C002B] text-white">Class 30 - Foodstuffs (Staples: Coffee, Tea, Flour, Spices)</option>
                  <option value="31" className="bg-[#0C002B] text-white">Class 31 - Agricultural Products (Fresh Fruits, Vegetables, Grains)</option>
                  <option value="32" className="bg-[#0C002B] text-white">Class 32 - Beers & Non-Alcoholic Beverages</option>
                  <option value="33" className="bg-[#0C002B] text-white">Class 33 - Alcoholic Beverages (Except Beer)</option>
                  <option value="34" className="bg-[#0C002B] text-white">Class 34 - Tobacco, Smokers' Articles & Matches</option>
                  <option value="35" className="bg-[#0C002B] text-white">Class 35 - Business & Management Services</option>
                  <option value="36" className="bg-[#0C002B] text-white">Class 36 - Financial & Insurance Services</option>
                  <option value="37" className="bg-[#0C002B] text-white">Class 37 - Construction & Repair Services</option>
                  <option value="38" className="bg-[#0C002B] text-white">Class 38 - Telecommunications Services</option>
                  <option value="39" className="bg-[#0C002B] text-white">Class 39 - Transport & Storage Services</option>
                  <option value="40" className="bg-[#0C002B] text-white">Class 40 - Treatment of Materials (Manufacturing, Processing)</option>
                  <option value="41" className="bg-[#0C002B] text-white">Class 41 - Education & Training Services</option>
                  <option value="42" className="bg-[#0C002B] text-white">Class 42 - Scientific & IT Services (Technology, Software, Research)</option>
                  <option value="43" className="bg-[#0C002B] text-white">Class 43 - Hospitality (Restaurants, Hotels, Catering)</option>
                  <option value="44" className="bg-[#0C002B] text-white">Class 44 - Medical & Veterinary Services</option>
                  <option value="45" className="bg-[#0C002B] text-white">Class 45 - Legal & Security Services</option>
                </select>
                {errors.class && <p className="text-red-400 text-xs mt-0.5">{errors.class}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-2.5 rounded-lg transition-colors duration-300 text-sm ${
                  isSubmitting 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-[#fbbf24] hover:bg-[#e6a602] text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Creating Account...
                  </div>
                ) : (
                  'Unlock Full Report'
                )}
              </button>
            </form>
          </div>

          {/* Bottom Section - Grey Container with Search Results */}
          <div className="w-full bg-[#121212] p-6">
            {/* Trademark Check Results Container */}
            <div 
              className="relative p-4 mb-4"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              {/* Header Badges - Top Left and Top Right */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-brain text-white text-xs"></i>
                  <span className="text-white text-xs font-medium font-nunito">AI Trademark</span>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-shield-alt text-white text-xs"></i>
                  <span className="text-white text-xs font-medium font-nunito">Security Checking</span>
                </div>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-white text-base font-bold mb-1 font-nunito break-words">
                  Trademark Check Results for "{searchTerm}"
                </h2>
                <p className="text-gray-400 text-xs font-nunito">
                  Preliminary automated scan completed. Review quick insights below.
                </p>
              </div>
            </div>

            {/* Quick Insights Container */}
            <div 
              className="p-4 mb-4"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              <div 
                className="flex items-center gap-2 mb-3 px-3 py-1.5 w-fit"
                style={{
                  borderRadius: '5px',
                  background: 'rgba(0, 0, 0, 0.30)'
                }}
              >
                <i className="fas fa-lightbulb text-white text-xs"></i>
                <span className="text-white font-semibold font-nunito text-sm">Quick insights</span>
              </div>
              
              <div className="space-y-2">
                {searchResults ? (
                  <>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-tag text-white text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="text-white text-xs font-nunito break-words">
                        <span className="font-semibold">Class {searchResults.class.number} - {searchResults.class.name}:</span> {searchResults.class.description}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-chart-line text-white text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="text-white text-xs font-nunito break-words">
                        AI Confidence Score: {searchResults.confidenceScore}% chance your brand may face an objection
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-start gap-2">
                    <i className="fas fa-info-circle text-white text-xs mt-0.5 flex-shrink-0"></i>
                    <span className="text-white text-xs font-nunito break-words">
                      Please enter a trademark class to see detailed insights
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Report SVG */}
            <div className="w-full">
              <Image 
                src="/report.svg" 
                alt="Trademark Report" 
                width={797}
                height={335}
                className="w-full h-auto object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    {/* Loader Overlay */}
    {showLoader && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.95)' }}>
        <div className="loader-wrapper">
          <span className="loader-letter">G</span>
          <span className="loader-letter">e</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">e</span>
          <span className="loader-letter">r</span>
          <span className="loader-letter">a</span>
          <span className="loader-letter">t</span>
          <span className="loader-letter">i</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">g</span>
          <span className="loader-letter">.</span>
          <span className="loader-letter">.</span>
          <span className="loader-letter">.</span>
          <div className="loader"></div>
        </div>
      </div>
    )}
    </>
  );
}
