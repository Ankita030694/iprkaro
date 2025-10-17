'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

interface AnalysisData {
  trademarkName: string;
  classNumber: string;
  overallHealth: string;
  registrabilityScore: number;
  registrabilityReasoning: string;
  similarityScore: number;
  similarityReasoning: string;
  classFitScore: number;
  classFitReasoning: string;
  genericnessAssessment: {
    registrability: string;
    similarity: string;
    classFit: string;
  };
  keyFactors: {
    brandStrength: string;
    legalRisk: string;
    marketPosition: string;
    registrationSpeed: string;
    protectionLevel: string;
  };
  alternativeClasses: string[];
  overallRecommendation: {
    status: string;
    message: string;
  };
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [registrabilityScore, setRegistrabilityScore] = useState(75);
  const [similarityScore, setSimilarityScore] = useState(50);
  const [classScore, setClassScore] = useState(90);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{question: string, answer: string} | null>(null);
  const [showNoMatch, setShowNoMatch] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  // Calculate filing date (today) and estimated date (9 months from today)
  const getFilingDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getEstimatedDate = () => {
    const today = new Date();
    const estimatedDate = new Date(today);
    estimatedDate.setMonth(estimatedDate.getMonth() + 9);
    return estimatedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Fetch analysis data from Firebase
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const trademark = searchParams.get('trademark');
        const classNumber = searchParams.get('class');

        if (!trademark || !classNumber) {
          setError('Missing trademark or class information');
          setLoading(false);
          return;
        }

        // Normalize document ID
        const docId = `${trademark.toLowerCase().trim()}_${classNumber}`;
        const searchResultsRef = collection(db, 'searchResults');
        const docRef = doc(searchResultsRef, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as AnalysisData;
          setAnalysisData(data);
          setRegistrabilityScore(data.registrabilityScore);
          setSimilarityScore(data.similarityScore);
          setClassScore(data.classFitScore);
        } else {
          setError('Analysis data not found. Please try searching again.');
        }
      } catch (err) {
        console.error('Error fetching analysis data:', err);
        setError('Failed to load analysis data');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysisData();
  }, [searchParams]);

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  const handleScoreChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    const numValue = parseInt(value) || 0;
    const clampedValue = Math.max(0, Math.min(100, numValue));
    setter(clampedValue);
  };

  const calculateDashOffset = (score: number) => {
    return 251.2 * (1 - score / 100);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      setSearchResult(null);
      setShowNoMatch(false);
      const query = aiQuestion.toLowerCase().trim();
      const scoredFaqs = faqs.map(faq => {
        const questionLower = faq.question.toLowerCase();
        const answerLower = faq.answer.toLowerCase();
        let score = 0;
        const queryWords = query.split(' ').filter(word => word.length > 2);
        queryWords.forEach(word => {
          if (questionLower.includes(query)) score += 100;
          if (questionLower.includes(word)) score += 10;
          if (answerLower.includes(word)) score += 3;
        });
        return { faq, score };
      });
      const bestMatch = scoredFaqs.reduce((best, current) => current.score > best.score ? current : best);
      setTimeout(() => {
        if (bestMatch.score > 0) {
          setSearchResult(bestMatch.faq);
          setShowNoMatch(false);
        } else {
          setSearchResult(null);
          setShowNoMatch(true);
        }
      }, 50);
      setAiQuestion('');
    }
  };

  const faqs = [
    {
      question: "What is IPR Karo?",
      answer: "IPR Karo is a platform to search, register, and protect trademarks online using AI-powered search reports and expert legal support, making trademark registration fast and secure."
    },
    {
      question: "Who can use IPR Karo?",
      answer: "Startups, businesses, creative professionals, and entrepreneurs seeking hassle-free trademark registration, copyright filing, or patent protection online in India can use IPR Karo."
    },
    {
      question: "Is IPR Karo backed by legal experts?",
      answer: "Yes, all trademark and IP services with IPR Karo are reviewed by experienced attorneys to ensure complete legal compliance and robust intellectual property protection."
    },
    {
      question: "Why choose IPR Karo over traditional methods?",
      answer: "IPR Karo offers AI-driven trademark search, instant conflict checks, risk assessment reports, and seamless online filings, delivering faster results and more accurate protection than manual, offline methods."
    },
    {
      question: "How does AI help in trademark protection?",
      answer: "AI instantly scans trademark databases, detects similarities and conflicts, generates registerability scores, and guides users through every step to maximize the success of trademark registration."
    }
  ];

  const features = [
    { text: "Cost Effective", icon: 0 },
    { text: "Fast Process", icon: 1 },
    { text: "Risk Reduction", icon: 2 },
    { text: "AI Driven", icon: 3 },
    { text: "Expert Guidance", icon: 4 },
    { text: "24/7 Accessibility", icon: 5 }
  ];

  const mobileCardIcons = [
    // Lightning icon for "Cost Effective"
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none" key="lightning">
      <path d="M1.14933 11.2623L5.77496 6.29174C6.13652 5.90275 11 0.517143 11 1.03506L6.8147 10.5098C6.8147 10.8196 7.08042 11.0714 7.40893 11.0714H9.65895C10.1699 11.0714 10.4422 11.6413 10.1045 12.0043L5.47883 16.9748C5.11727 17.3633 1.59484 21.4729 1.59484 20.9549L4.43909 12.7563C4.43909 12.4464 4.17271 12.1946 3.84486 12.1946H1.59484C1.0839 12.1946 0.811567 11.6253 1.14933 11.2623Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // User check icon for "Fast Processing"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" key="usercheck">
      <path d="M7.36364 10.0909C8.56917 10.0909 9.72532 9.61201 10.5778 8.75958C11.4302 7.90714 11.9091 6.75098 11.9091 5.54545C11.9091 4.33993 11.4302 3.18377 10.5778 2.33133C9.72532 1.47889 8.56917 1 7.36364 1C6.15811 1 5.00195 1.47889 4.14951 2.33133C3.29708 3.18377 2.81818 4.33993 2.81818 5.54545C2.81818 6.75098 3.29708 7.90714 4.14951 8.75958C5.00195 9.61201 6.15811 10.0909 7.36364 10.0909ZM7.36364 10.0909C9.19364 10.0909 10.7927 10.7818 11.93 11.93C12.6043 12.6136 13.1087 13.4459 13.4027 14.36M7.36364 10.0909C3.72727 10.0909 1 12.8182 1 16.4545V21H10.0909M11 17.2036L14.8091 20.0909L21 11.9091" stroke="#FFD700" strokeWidth="1.5"/>
    </svg>,
    // Shield icon for "Risk Reduction"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none" key="shield">
      <path d="M17.8421 20.6537C17.5276 20.7959 17.189 20.8773 16.8442 20.8937C15.7168 20.9505 14.1379 21 12.0526 21C9.96737 21 8.38842 20.95 7.26105 20.8932C6.9163 20.877 6.57771 20.7957 6.26316 20.6537M20.2105 17.7784C19.8078 18.037 19.3443 18.1854 18.8663 18.2089C17.3989 18.2889 15.1637 18.3679 12.0526 18.3679C8.94158 18.3679 6.70632 18.2889 5.23895 18.2089C4.76094 18.1854 4.29746 18.037 3.89474 17.7784M1.20947 13.2158C1.33895 14.5289 2.39789 15.4726 3.71632 15.5447C5.41158 15.6379 8.13789 15.7368 12.0526 15.7368C15.9674 15.7368 18.6937 15.6379 20.3895 15.5447C21.7074 15.4726 22.7663 14.5289 22.8958 13.2158C23.0074 12.0847 23.1053 10.4879 23.1053 8.36842C23.1053 6.24895 23.0074 4.65211 22.8958 3.52105C22.7663 2.20737 21.7074 1.26421 20.3889 1.19211C18.6937 1.09895 15.9674 1 12.0526 1C8.13789 1 5.41158 1.09895 3.71579 1.19211C2.39789 1.26421 1.33895 2.20789 1.20947 3.52105C1.09789 4.65263 1 6.24895 1 8.36842C1 10.4879 1.09789 12.0847 1.20947 13.2158Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1583 6.00752C14.1583 6.00752 13.3162 5.36279 12.053 5.36279C11.0004 5.36279 9.94778 6.00752 9.94778 6.86647C9.94778 9.01489 14.1583 7.72595 14.1583 9.87437C14.1583 10.7333 13.1057 11.3781 12.053 11.3781M12.053 11.3781C10.7899 11.3781 9.94778 10.7333 9.94778 10.7333M12.053 11.3781V12.5812M12.053 5.36331V4.16016M18.8951 8.37068H18.3688M5.73725 8.37068H5.21094" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Star icon for "AI Driven"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" key="star">
      <path d="M11.1055 19C14.8765 19 16.7625 19 17.9335 17.828C19.1055 16.657 19.1055 14.771 19.1055 11M11.1055 19C7.33447 19 5.44847 19 4.27747 17.828C3.10647 16.656 3.10547 14.771 3.10547 11M11.1055 19V21M3.10547 11C3.10547 7.229 3.10547 5.343 4.27747 4.172C5.44947 3.001 7.33447 3 11.1055 3M3.10547 11H1.10547M11.1055 3C14.8765 3 16.7625 3 17.9335 4.172C19.1045 5.344 19.1055 7.229 19.1055 11M11.1055 3V1M19.1055 11H21.1055M7.10547 1V3M15.1055 1V3M7.10547 19V21M15.1055 19V21M21.1055 15H19.1055M3.10547 7H1.10547M3.10547 15H1.10547M21.1055 7H19.1055" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5864 6.86291C10.6255 6.75647 10.6963 6.6646 10.7893 6.5997C10.8823 6.5348 10.993 6.5 11.1064 6.5C11.2198 6.5 11.3304 6.5348 11.4234 6.5997C11.5164 6.6646 11.5873 6.75647 11.6264 6.86291L12.4264 9.02591C12.5384 9.32891 12.7784 9.56891 13.0814 9.68091L15.2444 10.4809C15.3508 10.52 15.4427 10.5909 15.5076 10.6839C15.5725 10.7768 15.6073 10.8875 15.6073 11.0009C15.6073 11.1143 15.5725 11.225 15.5076 11.318C15.4427 11.411 15.3508 11.4818 15.2444 11.5209L13.0814 12.3209C12.9311 12.3759 12.7947 12.463 12.6816 12.5761C12.5684 12.6892 12.4814 12.8257 12.4264 12.9759L11.6264 15.1389C11.5873 15.2453 11.5164 15.3372 11.4234 15.4021C11.3304 15.467 11.2198 15.5018 11.1064 15.5018C10.993 15.5018 10.8823 15.467 10.7893 15.4021C10.6963 15.3372 10.6255 15.2453 10.5864 15.1389L9.78638 12.9759C9.7314 12.8257 9.64431 12.6892 9.53118 12.5761C9.41806 12.463 9.28162 12.3759 9.13138 12.3209L6.96838 11.5209C6.86194 11.4818 6.77007 11.411 6.70517 11.318C6.64027 11.225 6.60547 11.1143 6.60547 11.0009C6.60547 10.8875 6.64027 10.7768 6.70517 10.6839C6.77007 10.5909 6.86194 10.52 6.96838 10.4809L9.13138 9.68091C9.28128 9.62534 9.41742 9.53805 9.53047 9.425C9.64352 9.31195 9.73081 9.17582 9.78638 9.02591L10.5864 6.86291Z" stroke="#FFD700" strokeWidth="1.5"/>
    </svg>,
    // Shield with check icon for "Expert Guidance"
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none" key="shieldcheck">
      <path d="M1 10L10 7L19 10M10 1V20.5" stroke="#FFD700" strokeWidth="1.5"/>
      <path d="M1.193 13C2.05 17.298 5.576 19.513 7.899 20.527C8.62 20.842 8.981 21 10 21C11.02 21 11.38 20.842 12.101 20.527C12.68 20.275 13.332 19.947 14 19.533M17 16.904C18.163 15.428 19 13.496 19 10.991V9.417C19 6.219 19 4.62 18.622 4.082C18.245 3.545 16.742 3.03 13.735 2.001L13.162 1.805C11.595 1.268 10.812 1 10 1C9.188 1 8.405 1.268 6.838 1.805L6.265 2C3.258 3.03 1.755 3.545 1.378 4.082C1 4.62 1 6.22 1 9.417V10" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // Clock icon for "24/7 Accessibility"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" key="clock">
      <circle cx="12" cy="12" r="9" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  const trademarkRequirements = [
    {
      text: "Govt. Registration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M1 26.5H26M9.33333 8.44444H10.7222M9.33333 14H10.7222M9.33333 19.5556H10.7222M16.2778 8.44444H17.6667M16.2778 14H17.6667M16.2778 19.5556H17.6667M3.77778 26.5V4.27778C3.77778 3.54107 4.07044 2.83453 4.59137 2.31359C5.1123 1.79266 5.81884 1.5 6.55556 1.5H20.4444C21.1812 1.5 21.8877 1.79266 22.4086 2.31359C22.9296 2.83453 23.2222 3.54107 23.2222 4.27778V26.5" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Personal Information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Trademark Name & Class",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M10.375 18.375V14.875M10.375 14.875V9.625H13.9463C14.8388 9.625 16.625 9.625 16.625 12.25C16.625 14.875 14.8388 14.875 13.9463 14.875M10.375 14.875H13.9463M13.9463 14.875L16.625 18.375" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 26.5C20.4037 26.5 26 20.9037 26 14C26 7.09625 20.4037 1.5 13.5 1.5C6.59625 1.5 1 7.09625 1 14C1 20.9037 6.59625 26.5 13.5 26.5Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Authorization Letter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
          <path d="M16.5405 1.5H5.72973C3.11757 1.5 1 3.61757 1 6.22973V21.7703C1 24.3824 3.11757 26.5 5.72973 26.5H16.5405C19.1527 26.5 21.2703 24.3824 21.2703 21.7703V6.22973C21.2703 3.61757 19.1527 1.5 16.5405 1.5Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.40625 6.91211H15.8657M6.40625 12.3175H15.8657M6.40625 17.7229H11.136" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const plans = [
    {
      id: 'standard',
      name: 'AI Trademark Filing: Standard',
      subtitle: 'Deeper search with risk insights',
      description: 'Best for small businesses/startups',
      content: 'Essential trademark protection',
      features: [
        'Complete online trademark filing included',
        'AI trademark search & conflict check',
        'Expert legal guidance throughout the process',
        'Essential trademark protection for your brand'
      ],
      price: '₹1,999',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium Trademark Registration: With AI Risk Checkup',
      subtitle: 'Complete filing included',
      description: 'Suited for growing brands',
      content: 'Enhanced trademark services',
      features: [
        'AI-powered trademark registration and risk report',
        'Advanced legal guidance and trademark filing',
        'Priority VIP support, fast application monitoring',
        'Enhanced trademark and brand safeguard'
      ],
      price: '₹2,999',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Brand Monitoring & Protection: AI Powered',
      subtitle: '24/7 brand monitoring',
      description: 'Enterprises, ongoing protection',
      content: 'Complete brand protection',
      features: [
        '24/7 AI-powered brand & trademark monitoring',
        'Instant alerts for conflicts and infringements',
        'Continuous protection against copycats',
        'Ongoing legal peace of mind for your brand'
      ],
      price: '₹3,999',
      highlighted: false
    }
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      }}>
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-white text-5xl mb-4"></i>
          <p className="text-white font-nunito text-xl">Analyzing your trademark...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !analysisData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      }}>
        <div className="text-center max-w-md mx-auto px-4">
          <i className="fas fa-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h2 className="text-white font-nunito text-2xl mb-4">{error || 'Data not found'}</h2>
          <a href="/" className="bg-[#FFB703] text-black px-6 py-3 rounded-lg font-nunito font-semibold hover:bg-[#e6a602] transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  // Helper to get color based on health
  const getHealthColor = (health: string) => {
    switch (health.toLowerCase()) {
      case 'excellent': return '#4ADE80';
      case 'good': return '#10B981';
      case 'fair': return '#F59E0B';
      case 'poor': return '#EF4444';
      default: return '#4ADE80';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-0" style={{ 
      background: '#0C002B',
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="ml-2 mr-2 md:mx-10 px-2 md:px-6 lg:px-8 py-8 lg:py-16">
        {/* Top Metrics Section */}
        <div className="mb-10">
          {/* Metrics Heading - Desktop Only */}
          <div className="hidden md:block text-left mb-5">
           
            <h1 className="text-white font-nunito text-lg md:text-2xl lg:text-3xl xl:text-2xl font-bold mb-1.5">
              Your Trademark Health Score for "{analysisData.trademarkName}" - Class {analysisData.classNumber}
            </h1>
            <p className="font-nunito text-base md:text-xl lg:text-2xl font-semibold" style={{ color: getHealthColor(analysisData.overallHealth) }}>
              {analysisData.overallHealth}
            </p>
          </div>

          {/* Mobile Heading */}
          <div className="block md:hidden text-center mb-5">
            <h1 className="text-white font-nunito text-lg font-bold mb-1.5">
              Register Today and get your Trademark in <span style={{ color: '#FFB703' }}>9 months</span>
            </h1>
          </div>

          {/* Metrics Container - Desktop Version */}
          <div
            className="hidden md:block w-full px-5 md:px-6 lg:px-8 py-6 md:py-8 lg:py-5 relative"
            style={{
              borderRadius: '32px',
              background: 'rgba(255, 255, 255, 0.10)',
              boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, 0 0 16px 5px rgba(255, 255, 255, 0.20) inset'
            }}
          >
            {/* Asterisk in top right */}
            <span className="absolute top-4 right-6 text-red-500 font-nunito text-xl font-bold">*</span>
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
              {/* First Container - 3/4 width */}
              <div className="lg:col-span-3 flex flex-col">
                {/* Heading */}
                <div
                  className="flex items-center justify-between px-5 py-3 mb-3"
                  style={{
                    borderRadius: '4px 4px 0 0',
                    background: 'rgba(0, 0, 0, 0.26)'
                  }}
                >
                  <h3 className="text-white font-nunito text-base md:text-lg font-semibold">
                    Your Trademark Health Score
                  </h3>
                  <span className="font-nunito text-base md:text-lg font-semibold" style={{ color: getHealthColor(analysisData.overallHealth) }}>
                    {analysisData.overallHealth}
                  </span>
                </div>
                
                {/* Content area - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 mt-2">
                  {/* Column 1 - Trademark Registrability */}
                  <div className="flex flex-col items-center h-full">
                    <h4 className="text-white font-nunito text-sm md:text-base font-semibold mb-3">
                      Trademark Registrability
                    </h4>
                    
                    {/* Curved Gauge */}
                    <div className="relative w-40 h-20 mb-4">
                      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                        {/* Outer glow circle */}
                        <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                        
                        {/* Background arc */}
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.15)"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Gradient arc - Red to Orange to Green */}
                        <defs>
                          <linearGradient id="gaugeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#EF4444" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                          <filter id="glow1">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="url(#gaugeGradient1)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeDasharray="251.2"
                          strokeDashoffset={calculateDashOffset(registrabilityScore)}
                          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#glow1)' }}
                        />
                        {/* Center text */}
                        <text x="100" y="78" textAnchor="middle" fill="white" className="text-[32px] xl:text-[26px]" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                          {registrabilityScore}
                        </text>
                      </svg>
                    </div>

                    {/* Assessment Container - Expanded */}
                    <div
                      className="w-full p-3 flex-1 flex flex-col"
                      style={{
                        borderRadius: '12px',
                        border: '1.5px solid #171717',
                        background: 'rgba(24, 24, 24, 0.15)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-white font-nunito text-md font-semibold">
                        Remarks
                        </h5>
                        <div className="transition-all duration-300">
                          {registrabilityScore < 50 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Reasoning as bullet point */}
                      <div className="mb-2 flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-md">•</span>
                        <p className="font-nunito text-sm leading-relaxed" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {analysisData.registrabilityReasoning}
                        </p>
                      </div>

                      {/* Assessment text as bullet point */}
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-sm">•</span>
                        <p className="font-nunito text-sm leading-relaxed" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                        {analysisData.genericnessAssessment.registrability}
                      </p>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 - Similarity Rate */}
                  <div className="flex flex-col items-center h-full">
                    <h4 className="text-white font-nunito text-sm md:text-base font-semibold mb-3">
                      Similarity Rate
                    </h4>
                    
                    {/* Curved Gauge */}
                    <div className="relative w-40 h-20 mb-4">
                      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                        {/* Outer glow circle */}
                        <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                        
                        {/* Background arc */}
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.15)"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Gradient arc - Reversed: Green to Red */}
                        <defs>
                          <linearGradient id="gaugeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#EF4444" />
                          </linearGradient>
                          <filter id="glow2">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="url(#gaugeGradient2)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeDasharray="251.2"
                          strokeDashoffset={calculateDashOffset(similarityScore)}
                          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#glow2)' }}
                        />
                        {/* Center text */}
                        <text x="100" y="78" textAnchor="middle" fill="white" className="text-[32px] xl:text-[26px]" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                          {similarityScore}
                        </text>
                      </svg>
                    </div>

                    {/* Assessment Container - Expanded */}
                    <div
                      className="w-full p-3 flex-1 flex flex-col"
                      style={{
                        borderRadius: '12px',
                        border: '1.5px solid #171717',
                        background: 'rgba(24, 24, 24, 0.15)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-white font-nunito text-md font-semibold">
                        Remarks
                        </h5>
                        <div className="transition-all duration-300">
                          {similarityScore > 50 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Reasoning as bullet point */}
                      <div className="mb-2 flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-md">•</span>
                        <p className="font-nunito text-sm leading-relaxed" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {analysisData.similarityReasoning}
                        </p>
                      </div>

                      {/* Assessment text as bullet point */}
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-md">•</span>
                        <p className="font-nunito text-sm leading-relaxed" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                        {analysisData.genericnessAssessment.similarity}
                      </p>
                      </div>
                    </div>
                  </div>

                  {/* Column 3 - Class Probability */}
                  <div className="flex flex-col items-center h-full">
                    <h4 className="text-white font-nunito text-sm md:text-base font-semibold mb-3">
                      Class Probability
                    </h4>
                    
                    {/* Curved Gauge */}
                    <div className="relative w-40 h-20 mb-4">
                      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                        {/* Outer glow circle */}
                        <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                        
                        {/* Background arc */}
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.15)"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Gradient arc */}
                        <defs>
                          <linearGradient id="gaugeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#EF4444" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                          <filter id="glow3">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d="M 20 90 A 80 80 0 0 1 180 90"
                          fill="none"
                          stroke="url(#gaugeGradient3)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeDasharray="251.2"
                          strokeDashoffset={calculateDashOffset(classScore)}
                          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#glow3)' }}
                        />
                        {/* Center text */}
                        <text x="100" y="78" textAnchor="middle" fill="white" className="text-[32px] xl:text-[26px]" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                          {classScore}
                        </text>
                      </svg>
                    </div>

                    {/* Assessment Container - Expanded */}
                    <div
                      className="w-full p-3 flex-1 flex flex-col"
                      style={{
                        borderRadius: '12px',
                        border: '1.5px solid #171717',
                        background: 'rgba(24, 24, 24, 0.15)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-white font-nunito text-md font-semibold">
                          Remarks
                        </h5>
                        <div className="transition-all duration-300">
                          {classScore < 50 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Reasoning as bullet point */}
                      <div className="mb-2 flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-md">•</span>
                        <p className="font-nunito text-sm xl:text-md leading-relaxed xl:leading-snug" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {analysisData.classFitReasoning}
                        </p>
                      </div>

                      {/* Assessment text as bullet point */}
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-base xl:text-md">•</span>
                        <p className="font-nunito text-sm xl:text-md leading-relaxed xl:leading-snug" style={{ 
                          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                        {analysisData.genericnessAssessment.classFit}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Container - 1/4 width */}
              <div className="lg:col-span-1 flex flex-col">
                {/* Heading */}
                <div
                  className="flex items-center justify-center px-5 py-3 mb-3"
                  style={{
                    borderRadius: '4px 4px 0 0',
                    background: 'rgba(0, 0, 0, 0.26)'
                  }}
                >
                  <h3 className="text-white font-nunito text-base md:text-lg xl:text-base font-semibold">
                    Key Factors
                  </h3>
                </div>
                
                {/* Content area - 5 Rows */}
                <div className="flex flex-col flex-1 space-y-2.5">
                  {/* Row 1 - Brand Strength */}
                  <div
                    className="p-2.5 flex items-center gap-2.5 flex-1"
                    style={{
                      borderRadius: '12px',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(158, 143, 143, 0.4) 100%)',
                      backdropFilter: 'blur(13px)'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xl:w-3 xl:h-3">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-white font-nunito text-xs font-semibold mb-0.5">
                        Brand Strength
                      </h4>
                      <p className="font-nunito text-[11px] leading-snug" style={{ 
                        background: 'linear-gradient(90deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'  
                      }}>
                        {analysisData.keyFactors.brandStrength}
                      </p>
                    </div>
                  </div>

                  {/* Row 2 - Legal Risk */}
                  <div
                    className="p-2.5 flex items-center gap-2.5 flex-1"
                    style={{
                      borderRadius: '12px',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(158, 143, 143, 0.4) 100%)',
                      backdropFilter: 'blur(13px)'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xl:w-3 xl:h-3">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                        <h4 className="text-white font-nunito text-xs font-semibold mb-0.5">
                        Legal Risk
                      </h4>
                      <p className="font-nunito text-[11px] leading-snug" style={{ 
                        background: 'linear-gradient(90deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {analysisData.keyFactors.legalRisk}
                      </p>
                    </div>
                  </div>

                  {/* Row 3 - Market Position */}
                  <div
                    className="p-2.5 flex items-center gap-2.5 flex-1"
                    style={{
                      borderRadius: '12px',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(158, 143, 143, 0.4) 100%)',
                      backdropFilter: 'blur(13px)',
                      minHeight: '60px',
                      maxHeight: '80px'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xl:w-3 xl:h-3">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-white font-nunito text-xs font-semibold mb-0.5">
                        Market Position
                      </h4>
                      <p className="font-nunito text-[11px] leading-snug" style={{ 
                        background: 'linear-gradient(90deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {analysisData.keyFactors.marketPosition}
                      </p>
                    </div>
                  </div>

                  {/* Row 4 - Registration Speed */}
                  <div
                    className="p-2.5 flex items-center gap-2.5 flex-1"
                    style={{
                      borderRadius: '12px',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(158, 143, 143, 0.4) 100%)',
                      backdropFilter: 'blur(13px)'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xl:w-3 xl:h-3">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-white font-nunito text-xs font-semibold mb-0.5">
                        Registration Speed
                      </h4>
                      <p className="font-nunito text-[11px] leading-snug" style={{ 
                        background: 'linear-gradient(90deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {analysisData.keyFactors.registrationSpeed}
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Your Trademark Health Score Heading */}
          <div
            className="block md:hidden w-full px-4 py-2.5 mb-3"
            style={{
              borderRadius: '5px',
              background: 'rgba(0, 0, 0, 0.44)'
            }}
          >
            <h3 className="text-white font-nunito text-sm font-semibold text-left">
              Your Trademark Health Score
            </h3>
          </div>

          {/* Metrics Container - Mobile Version */}
          <div
            className="block md:hidden w-full px-4 py-5 space-y-5 relative"
                    style={{
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.10)',
              boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, 0 0 16px 5px rgba(255, 255, 255, 0.20) inset'
            }}
          >
            {/* Asterisk in top right */}
            <span className="absolute top-3 right-4 text-red-500 font-nunito text-lg font-bold">*</span>
            {/* Mobile: Trademark Registrability */}
            <div className="space-y-3">
              <h4 className="text-white font-nunito text-sm font-semibold text-center">
                Trademark Registrability
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {/* Gauge */}
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-14">
                    <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="20" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="mobileGaugeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                        <filter id="mobileGlow1">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="url(#mobileGaugeGradient1)" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset={calculateDashOffset(registrabilityScore)} style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#mobileGlow1)' }} />
                      <text x="100" y="78" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        {registrabilityScore}
                      </text>
                    </svg>
                  </div>
                </div>
                {/* Assessment Container */}
                <div className="p-2" style={{ borderRadius: '8px', border: '1.5px solid #171717', background: 'rgba(24, 24, 24, 0.15)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-white font-nunito text-[10px] font-semibold">Remarks</h5>
                    <div>
                      {registrabilityScore < 50 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.registrabilityReasoning}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.genericnessAssessment.registrability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Similarity Rate */}
            <div className="space-y-3">
              <h4 className="text-white font-nunito text-sm font-semibold text-center">
                Similarity Rate
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {/* Gauge */}
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-14">
                    <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="20" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="mobileGaugeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                        <filter id="mobileGlow2">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="url(#mobileGaugeGradient2)" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset={calculateDashOffset(similarityScore)} style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#mobileGlow2)' }} />
                      <text x="100" y="78" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        {similarityScore}
                      </text>
                    </svg>
                  </div>
                </div>
                {/* Assessment Container */}
                <div className="p-2" style={{ borderRadius: '8px', border: '1.5px solid #171717', background: 'rgba(24, 24, 24, 0.15)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-white font-nunito text-[10px] font-semibold">Assessment</h5>
                    <div>
                      {similarityScore > 50 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.similarityReasoning}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.genericnessAssessment.similarity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Class Probability */}
            <div className="space-y-3">
              <h4 className="text-white font-nunito text-sm font-semibold text-center">
                Class Probability
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {/* Gauge */}
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-14">
                    <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="100" cy="90" r="85" fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="20" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="mobileGaugeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                        <filter id="mobileGlow3">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="url(#mobileGaugeGradient3)" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset={calculateDashOffset(classScore)} style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: 'url(#mobileGlow3)' }} />
                      <text x="100" y="78" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        {classScore}
                      </text>
                    </svg>
                  </div>
                </div>
                {/* Assessment Container */}
                <div className="p-2" style={{ borderRadius: '8px', border: '1.5px solid #171717', background: 'rgba(24, 24, 24, 0.15)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-white font-nunito text-[10px] font-semibold">Assessment</h5>
                    <div>
                      {classScore < 50 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.classFitReasoning}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
                      <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.genericnessAssessment.classFit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile: Key Factors - Separate Container */}
        <div className="mb-10 block md:hidden">
          {/* Mobile: Key Factors Heading */}
          <div
            className="w-full px-4 py-2.5 mb-3"
            style={{
              borderRadius: '5px',
              background: 'rgba(0, 0, 0, 0.44)'
            }}
          >
            <h3 className="text-white font-nunito text-sm font-semibold text-left">
              Key Factors
            </h3>
          </div>

          <div
            className="w-full px-4 py-5 relative"
            style={{
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.10)',
              boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, 0 0 16px 5px rgba(255, 255, 255, 0.20) inset'
            }}
          >
            {/* Asterisk in top right */}
            <span className="absolute top-3 right-4 text-red-500 font-nunito text-lg font-bold">*</span>
            
            <div className="space-y-2">
              {/* Brand Strength */}
              <div className="flex items-start gap-2 p-2" style={{ borderRadius: '8px', border: '1.5px solid rgba(255, 255, 255, 0.15)', background: 'linear-gradient(90deg, rgba(224, 163, 10, 0.4) 0%, rgba(255, 255, 255, 0.40) 100%)', backdropFilter: 'blur(13px)' }}>
                    <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-nunito text-[10px] font-semibold mb-0.5">Brand Strength</h5>
                  <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {analysisData.keyFactors.brandStrength}
                  </p>
                </div>
              </div>
              {/* Legal Risk */}
              <div className="flex items-start gap-2 p-2" style={{ borderRadius: '8px', border: '1.5px solid rgba(255, 255, 255, 0.15)', background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)', backdropFilter: 'blur(13px)' }}>
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-nunito text-[10px] font-semibold mb-0.5">Legal Risk</h5>
                  <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg,rgb(5, 5, 5) 0%,rgb(0, 0, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {analysisData.keyFactors.legalRisk}
                  </p>
                </div>
              </div>
              {/* Market Position */}
              <div className="flex items-start gap-2 p-2" style={{ borderRadius: '8px', border: '1.5px solid rgba(255, 255, 255, 0.15)', background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)', backdropFilter: 'blur(13px)' }}>
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-nunito text-[10px] font-semibold mb-0.5">Market Position</h5>
                  <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {analysisData.keyFactors.marketPosition}
                  </p>
                </div>
              </div>
              {/* Registration Speed */}
              <div className="flex items-start gap-2 p-2" style={{ borderRadius: '8px', border: '1.5px solid rgba(255, 255, 255, 0.15)', background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)', backdropFilter: 'blur(13px)' }}>
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-nunito text-[10px] font-semibold mb-0.5">Registration Speed</h5>
                  <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {analysisData.keyFactors.registrationSpeed}
                  </p>
                </div>
              </div>
              {/* Protection Level */}
              <div className="flex items-start gap-2 p-2" style={{ borderRadius: '8px', border: '1.5px solid rgba(255, 255, 255, 0.15)', background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)', backdropFilter: 'blur(13px)' }}>
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                  <h5 className="text-white font-nunito text-[10px] font-semibold mb-0.5">Protection Level</h5>
                  <p className="font-nunito text-[9px] leading-tight" style={{ background: 'linear-gradient(90deg,rgb(0, 0, 0) 0%,rgb(6, 6, 6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {analysisData.keyFactors.protectionLevel}
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Heading */}
      <h1 className="hidden md:block text-white font-nunito text-lg md:text-2xl lg:text-3xl xl:text-2xl font-bold text-center mb-10">
          Register Today and get your Trademark in <span style={{ color: '#FFB703' }}>9 months</span>
        </h1>

        {/* Main Content Layout */}
        <div className="relative flex justify-center">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_425px] gap-0 md:gap-6 lg:gap-10 items-start mb-12 w-full max-w-7xl">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-6 md:mx-auto w-full">
            {/* Google Trust Rating Card */}
            <div
              className="flex p-3 md:p-5 justify-center items-center rounded-[16px] border-2 border-white/[0.15] backdrop-blur-[13px]"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
              {/* Mobile Layout - Vertical Stack */}
              <div className="md:hidden flex flex-col items-center gap-2 w-full px-2 py-1">
                {/* Google Icon and 4.7 Rating - Top */}
                <div className="flex items-center justify-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 20 21" fill="none" className="flex-shrink-0">
                    <g clipPath="url(#clip0_829_5631_mobile)">
                      <path d="M6.96721 1.15827C4.9689 1.8515 3.24556 3.16728 2.05032 4.91233C0.855082 6.65739 0.250946 8.73974 0.326651 10.8535C0.402355 12.9673 1.15391 15.0011 2.47092 16.6562C3.78794 18.3113 5.60099 19.5004 7.64377 20.0489C9.2999 20.4762 11.035 20.495 12.7 20.1036C14.2083 19.7648 15.6028 19.0401 16.7469 18.0005C17.9376 16.8854 18.802 15.4668 19.2469 13.8973C19.7305 12.1906 19.8166 10.3957 19.4985 8.65046H10.1985V12.5083H15.5844C15.4768 13.1236 15.2461 13.7108 14.9062 14.2349C14.5663 14.7589 14.1242 15.2091 13.6063 15.5583C12.9486 15.9933 12.2072 16.286 11.4297 16.4176C10.6499 16.5626 9.85011 16.5626 9.07033 16.4176C8.28 16.2542 7.53236 15.928 6.87502 15.4598C5.819 14.7123 5.02608 13.6503 4.6094 12.4255C4.18567 11.1776 4.18567 9.82484 4.6094 8.57702C4.906 7.70236 5.39632 6.90598 6.04377 6.24733C6.7847 5.47975 7.72273 4.93108 8.75495 4.66151C9.78718 4.39195 10.8737 4.41191 11.8953 4.71921C12.6934 4.96419 13.4232 5.39223 14.0266 5.96921C14.6339 5.36504 15.2401 4.75931 15.8453 4.15202C16.1578 3.82546 16.4985 3.51452 16.8063 3.18014C15.8853 2.32307 14.8042 1.65617 13.625 1.21764C11.4777 0.437939 9.12811 0.416985 6.96721 1.15827Z" fill="black"/>
                      <path d="M6.96562 1.15707C9.12635 0.415288 11.4759 0.43569 13.6234 1.21489C14.8028 1.65639 15.8834 2.32651 16.8031 3.18676C16.4906 3.52114 16.1609 3.83364 15.8422 4.15864C15.2359 4.76384 14.6302 5.36697 14.025 5.96801C13.4216 5.39104 12.6918 4.963 11.8937 4.71801C10.8725 4.40964 9.78597 4.38852 8.75347 4.65698C7.72097 4.92544 6.78236 5.47311 6.04062 6.23989C5.39318 6.89854 4.90285 7.69491 4.60625 8.56957L1.36719 6.06176C2.52658 3.76264 4.53398 2.00399 6.96562 1.15707Z" fill="#E33629"/>
                      <path d="M0.510152 8.54687C0.684247 7.68405 0.973283 6.84848 1.36953 6.0625L4.60859 8.57656C4.18486 9.82438 4.18486 11.1772 4.60859 12.425C3.52942 13.2583 2.44974 14.0958 1.36953 14.9375C0.377575 12.963 0.0750466 10.7133 0.510152 8.54687Z" fill="#F8BD00"/>
                      <path d="M10.1999 8.64844H19.4999C19.818 10.3936 19.732 12.1885 19.2484 13.8953C18.8034 15.4648 17.9391 16.8834 16.7484 17.9984C15.703 17.1828 14.653 16.3734 13.6077 15.5578C14.126 15.2082 14.5683 14.7576 14.9082 14.233C15.2481 13.7084 15.4786 13.1205 15.5859 12.5047H10.1999C10.1984 11.2203 10.1999 9.93438 10.1999 8.64844Z" fill="#587DBD"/>
                      <path d="M1.36719 14.9383C2.4474 14.1049 3.52708 13.2674 4.60625 12.4258C5.02376 13.6511 5.81782 14.7131 6.875 15.4602C7.53439 15.9262 8.28364 16.2497 9.075 16.4102C9.85478 16.5552 10.6546 16.5552 11.4344 16.4102C12.2119 16.2786 12.9533 15.9858 13.6109 15.5508C14.6563 16.3664 15.7063 17.1758 16.7516 17.9914C15.6076 19.0316 14.2132 19.7568 12.7047 20.0961C11.0397 20.4875 9.30457 20.4687 7.64844 20.0414C6.3386 19.6917 5.11512 19.0751 4.05469 18.2305C2.93228 17.3394 2.01556 16.2164 1.36719 14.9383Z" fill="#319F43"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_829_5631_mobile">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-white font-nunito text-[14px] lg:text-[18px] font-medium leading-[17px] lg:leading-[20px]">
                    4.7
                  </span>
                </div>
                
                {/* Main Content - Center */}
                <div className="text-center">
                  <div className="text-white font-nunito text-[12.6px] lg:text-[16px] font-medium leading-[15px] lg:leading-[18px] mb-1">
                    Trusted by Over 1.25 Lakh Clients
                  </div>
                  <div className="text-white font-nunito text-[8.4px] lg:text-[11px] italic font-normal leading-[10px] lg:leading-[12px]">
                    Rated 4.7/5 stars for reliable trademark registration across India, startups, and enterprises.
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden md:flex items-start gap-4 w-full">
                {/* Left Column - Google Icon and 4.7 Rating */}
                <div className="flex items-center justify-start shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="flex-shrink-0">
                    <g clipPath="url(#clip0_829_5631_desktop)">
                      <path d="M6.96721 1.15827C4.9689 1.8515 3.24556 3.16728 2.05032 4.91233C0.855082 6.65739 0.250946 8.73974 0.326651 10.8535C0.402355 12.9673 1.15391 15.0011 2.47092 16.6562C3.78794 18.3113 5.60099 19.5004 7.64377 20.0489C9.2999 20.4762 11.035 20.495 12.7 20.1036C14.2083 19.7648 15.6028 19.0401 16.7469 18.0005C17.9376 16.8854 18.802 15.4668 19.2469 13.8973C19.7305 12.1906 19.8166 10.3957 19.4985 8.65046H10.1985V12.5083H15.5844C15.4768 13.1236 15.2461 13.7108 14.9062 14.2349C14.5663 14.7589 14.1242 15.2091 13.6063 15.5583C12.9486 15.9933 12.2072 16.286 11.4297 16.4176C10.6499 16.5626 9.85011 16.5626 9.07033 16.4176C8.28 16.2542 7.53236 15.928 6.87502 15.4598C5.819 14.7123 5.02608 13.6503 4.6094 12.4255C4.18567 11.1776 4.18567 9.82484 4.6094 8.57702C4.906 7.70236 5.39632 6.90598 6.04377 6.24733C6.7847 5.47975 7.72273 4.93108 8.75495 4.66151C9.78718 4.39195 10.8737 4.41191 11.8953 4.71921C12.6934 4.96419 13.4232 5.39223 14.0266 5.96921C14.6339 5.36504 15.2401 4.75931 15.8453 4.15202C16.1578 3.82546 16.4985 3.51452 16.8063 3.18014C15.8853 2.32307 14.8042 1.65617 13.625 1.21764C11.4777 0.437939 9.12811 0.416985 6.96721 1.15827Z" fill="black"/>
                      <path d="M6.96562 1.15707C9.12635 0.415288 11.4759 0.43569 13.6234 1.21489C14.8028 1.65639 15.8834 2.32651 16.8031 3.18676C16.4906 3.52114 16.1609 3.83364 15.8422 4.15864C15.2359 4.76384 14.6302 5.36697 14.025 5.96801C13.4216 5.39104 12.6918 4.963 11.8937 4.71801C10.8725 4.40964 9.78597 4.38852 8.75347 4.65698C7.72097 4.92544 6.78236 5.47311 6.04062 6.23989C5.39318 6.89854 4.90285 7.69491 4.60625 8.56957L1.36719 6.06176C2.52658 3.76264 4.53398 2.00399 6.96562 1.15707Z" fill="#E33629"/>
                      <path d="M0.510152 8.54687C0.684247 7.68405 0.973283 6.84848 1.36953 6.0625L4.60859 8.57656C4.18486 9.82438 4.18486 11.1772 4.60859 12.425C3.52942 13.2583 2.44974 14.0958 1.36953 14.9375C0.377575 12.963 0.0750466 10.7133 0.510152 8.54687Z" fill="#F8BD00"/>
                      <path d="M10.1999 8.64844H19.4999C19.818 10.3936 19.732 12.1885 19.2484 13.8953C18.8034 15.4648 17.9391 16.8834 16.7484 17.9984C15.703 17.1828 14.653 16.3734 13.6077 15.5578C14.126 15.2082 14.5683 14.7576 14.9082 14.233C15.2481 13.7084 15.4786 13.1205 15.5859 12.5047H10.1999C10.1984 11.2203 10.1999 9.93438 10.1999 8.64844Z" fill="#587DBD"/>
                      <path d="M1.36719 14.9383C2.4474 14.1049 3.52708 13.2674 4.60625 12.4258C5.02376 13.6511 5.81782 14.7131 6.875 15.4602C7.53439 15.9262 8.28364 16.2497 9.075 16.4102C9.85478 16.5552 10.6546 16.5552 11.4344 16.4102C12.2119 16.2786 12.9533 15.9858 13.6109 15.5508C14.6563 16.3664 15.7063 17.1758 16.7516 17.9914C15.6076 19.0316 14.2132 19.7568 12.7047 20.0961C11.0397 20.4875 9.30457 20.4687 7.64844 20.0414C6.3386 19.6917 5.11512 19.0751 4.05469 18.2305C2.93228 17.3394 2.01556 16.2164 1.36719 14.9383Z" fill="#319F43"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_829_5631_desktop">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-white font-nunito text-[25px] lg:text-[22px] font-medium leading-[30px] lg:leading-[24px] ml-1">
                    4.7
                  </span>
                </div>
                
                {/* Right Column - Remaining Content */}
                <div className="flex-1">
                  <div className="text-white font-nunito text-[20px] lg:text-[18px] font-medium leading-[24px] lg:leading-[20px] mb-2">
                    Trusted by Over 1.25 Lakh Clients
                  </div>
                  <div className="text-white font-nunito text-[12px] lg:text-[11px] italic font-normal leading-[14px] lg:leading-[12px]">
                    Rated 4.7/5 stars for reliable trademark registration across India, startups, and enterprises.
                  </div>
                </div>
              </div>
            </div>

            {/* Why Trademark with IPR Karo Section */}
            <div className="space-y-5">
              <h3 className="text-white font-nunito text-base md:text-xl font-medium text-center md:text-left">
                Why Trademark with IPRKaro ?
              </h3>

              {/* Mobile Layout */}
              <div className="md:hidden w-full">
                <div
                  className="w-full rounded-[5px] p-4"
                  style={{
                    background: 'linear-gradient(145deg, rgba(12, 0, 43, 0.20) 6.6%, rgba(255, 183, 3, 0.20) 120.24%), rgba(0, 0, 0, 0.78)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.10) inset'
                  }}
                >
                  <div className="grid grid-cols-2 grid-rows-3 gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center opacity-60">
                          {mobileCardIcons[feature.icon]}
                        </div>
                        <h3 className="text-white font-nunito text-[14px] font-medium leading-[14px] break-words flex-1">
                          {feature.text}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-0">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2"
                    >
                      <div
                        className="flex-shrink-0 text-white p-2"
                        style={{
                          borderRadius: '5px',
                          background: 'rgba(255, 255, 255, 0.25)'
                        }}
                      >
                        {mobileCardIcons[feature.icon]}
                      </div>
                      <span className="text-white font-nunito text-xs lg:text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Get a Guaranteed Trademark on Section */}
            <div className="mt-0 md:mt-12 mb-6 w-full">
              <div className="flex flex-col lg:flex-row items-center md:items-start gap-0 md:gap-8">
                {/* Left Side - Circle and Line - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* White outer circle */}
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '2.5px solid rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {/* Golden inner circle */}
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          background: '#FFD700'
                        }}
                      ></div>
                    </div>

                    {/* Curved line going down then right */}
                    <div className="absolute top-7 left-9 transform -translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="95" viewBox="0 0 62 119" fill="none">
                        <path d="M1 0V102C1 110.837 8.16344 118 17 118H61.5" stroke="white" strokeOpacity="0.7" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Side - Heading and Containers */}
                <div className="w-full md:flex-1 space-y-6">
                  {/* Heading */}
                  <div className="text-center md:text-left">
                    <h3 className="text-white font-nunito text-sm md:text-base lg:text-xl font-medium">
                      Get a Guaranteed Trademark on<span className="text-red-500">*</span>
                    </h3>
                  </div>

                  {/* Timeline Containers - Single Column, 2 Rows */}
                  <div className="space-y-3 mt-10 w-full flex flex-col">
                    {/* First Container - Filing Date */}
                    <div
                      className="relative p-3 rounded-xl w-full md:max-w-[400px]"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid rgba(128, 128, 128, 0.4)',
                        borderRadius: '13px'
                      }}
                    >
                      <div className="flex items-center justify-between px-4 md:px-8">
                        <div className="text-white font-nunito text-xs md:text-sm font-medium">
                          Filing Date
                        </div>
                        <div className="text-white font-nunito text-[10px] md:text-xs opacity-90">
                          {getFilingDate()}
                        </div>
                      </div>
                    </div>

                    {/* Second Container - Trademark Estimated Date */}
                    <div
                      className="relative p-3 rounded-xl w-full md:max-w-[400px]"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid rgba(128, 128, 128, 0.4)',
                        borderRadius: '13px'
                      }}
                    >
                      <div className="flex items-center justify-between px-4 md:px-8">
                        <div className="text-white font-nunito text-xs md:text-sm font-medium">
                          Trademark Estimated Date
                        </div>
                        <div className="text-white font-nunito text-[10px] md:text-xs opacity-90">
                          {getEstimatedDate()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trademark Requirements Section */}
            <div className="space-y-5">
              <h3 className="text-white font-nunito text-base md:text-xl font-medium text-center md:text-left">
                Trademark Requirements
              </h3>

              {/* Mobile Layout */}
              <div className="md:hidden w-full">
                <div
                  className="w-full rounded-[5px] p-4"
                  style={{
                    background: 'linear-gradient(145deg, rgba(12, 0, 43, 0.20) 6.6%, rgba(255, 183, 3, 0.20) 120.24%), rgba(0, 0, 0, 0.78)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.10) inset'
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {trademarkRequirements.map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center opacity-60">
                          {requirement.icon}
                        </div>
                        <h3 className="text-white font-nunito text-[14px] font-medium leading-[14px] break-words flex-1">
                          {requirement.text}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-2 gap-3">
                {trademarkRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2.5 p-3"
                  >
                    <div
                      className="flex-shrink-0 text-white p-2.5"
                      style={{
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.25)'
                      }}
                    >
                      {requirement.icon}
                    </div>
                    <span className="text-white font-nunito text-[8px] md:text-[10px] lg:text-xs font-medium">
                      {requirement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines Section */}
            <div className="space-y-5">
              <h3 className="text-white font-nunito text-base md:text-xl font-medium text-center md:text-left">
                We work with the Guidelines of
              </h3>

              {/* Mobile - Full width, no containers */}
              <div className="md:hidden flex items-center justify-between w-full gap-0">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/clientlogos/white9.png"
                    alt="Service 1"
                    className="w-full h-auto object-contain max-w-[80px]"
                    width={80}
                    height={60}
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/clientlogos/white10.png"
                    alt="Service 2"
                    className="w-full h-auto object-contain max-w-[80px]"
                    width={80}
                    height={60}
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/clientlogos/white11.png"
                    alt="Service 3"
                    className="w-full h-auto object-contain max-w-[80px]"
                    width={80}
                    height={60}
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/clientlogos/white12.png"
                    alt="Service 4"
                    className="w-full h-auto object-contain max-w-[80px]"
                    width={80}
                    height={60}
                  />
                </div>
              </div>

              {/* Desktop Guidelines Containers */}
              <div className="hidden md:flex items-center justify-start gap-6 md:gap-8">
                <div
                  className="flex items-center justify-center p-4 md:p-5"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    width: '112px',
                    height: '112px',
                    minWidth: '96px',
                    minHeight: '96px'
                  }}
                >
                  <Image src="/serv1.svg" alt="Service 1" className="w-11 h-11 md:w-13 md:h-13" width={52} height={52} />
                </div>

                <div
                  className="flex items-center justify-center p-4 md:p-5"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    width: '112px',
                    height: '112px',
                    minWidth: '96px',
                    minHeight: '96px'
                  }}
                >
                  <Image src="/serv2.svg" alt="Service 2" className="w-11 h-11 md:w-13 md:h-13" width={52} height={52} />
                </div>

                <div
                  className="flex items-center justify-center p-4 md:p-5"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    width: '112px',
                    height: '112px',
                    minWidth: '96px',
                    minHeight: '96px'
                  }}
                >
                  <Image src="/serv3.svg" alt="Service 3" className="w-11 h-11 md:w-13 md:h-13" width={52} height={52} />
                </div>

                <div
                  className="flex items-center justify-center p-4 md:p-5"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    width: '112px',
                    height: '112px',
                    minWidth: '96px',
                    minHeight: '96px'
                  }}
                >
                  <Image src="/serv4.svg" alt="Service 4" className="w-11 h-11 md:w-13 md:h-13" width={52} height={52} />
                </div>
              </div>
            </div>
          </div>

            {/* Right Column - Pricing Card */}
            <div className="hidden lg:block sticky top-24 ml-40" style={{ zoom: 0.68 }}>
            <div
              className="relative flex flex-col p-4 md:p-5 lg:p-6 w-full max-w-full md:max-w-[505px] mx-auto"
              style={{
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, 0 0 16px 5px rgba(255, 255, 255, 0.20) inset',
                minHeight: '520px'
              }}
            >
              {/* Heading Container */}
              <div
                className="mb-5 p-4 rounded-[16px] text-center relative"
                style={{
                  background: 'rgba(0, 0, 0, 0.26)'
                }}
              >
                <h3 className="text-white font-nunito font-medium text-base md:text-2xl leading-[50px]">
                  Get Your Trademark Registered
                </h3>
              </div>

              {/* Price Breakdown Section */}
              <div
                className="mb-6 p-4 rounded-[16px] w-full"
                style={{
                  background: 'transparent'
                }}
              >
                <h4 className="text-white font-nunito font-medium text-base md:text-2xl leading-[16px] mb-5 text-center">
                  Price Breakdown
                </h4>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                    <span className="text-white font-nunito text-sm md:text-xl opacity-90">Government Fee</span>
                    <span className="text-white font-nunito text-sm md:text-xl">₹4,500</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                    <span className="text-white font-nunito text-sm md:text-xl opacity-90">Professional Fee</span>
                    <span className="text-white font-nunito text-sm md:text-xl">₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                    <span className="text-white font-nunito text-sm md:text-xl opacity-90">GST (18%)</span>
                    <span className="text-white font-nunito text-sm md:text-xl">₹1,260</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 font-semibold">
                    <span className="text-white font-nunito text-base md:text-xl">Total</span>
                    <span className="text-white font-nunito text-base md:text-xl">₹8,260</span>
                  </div>

                  {/* Start Registration Button */}
                  <button
                    className="w-full py-2.5 px-3 rounded-lg font-nunito font-semibold text-base md:text-2xl transition-all duration-300 hover:scale-105 mt-3"
                    style={{
                      background: '#FFB703',
                      boxShadow: '0 0 16px 0 #000 inset',
                      color: '#0C002B'
                    }}
                  >
                    Start Registration
                  </button>
                </div>
              </div>

              {/* Our Plans Section */}
              <div className="flex-1 space-y-3">
                <h4 className="text-white font-nunito font-medium text-base md:text-2xl leading-[20px] mb-5 text-center">
                  Our Plans
                </h4>

                {plans.map((plan) => (
                  <div key={plan.id} className="mb-3">
                    {/* Plan Dropdown Header */}
                    <div
                      onClick={() => togglePlan(plan.id)}
                      className="w-full p-2.5 rounded-lg text-white font-nunito font-medium text-sm md:text-base border-2 border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300 flex items-center justify-between"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                      }}
                    >
                      <span className="text-xs md:text-lg">{plan.name} - {plan.price}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-3 h-3 transition-transform duration-300 ${
                          expandedPlan === plan.id ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>

                    {/* Plan Card - Only visible when expanded */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedPlan === plan.id ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className="relative p-5 rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.10)',
                          backdropFilter: 'blur(13px)',
                          WebkitBackdropFilter: 'blur(13px)',
                          border: plan.highlighted ? '1.5px solid #1345C3' : 'none',
                          boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, inset 0 0 16px rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {/* Plan Header */}
                        <div className="text-center mb-5">
                          <h3 className="text-white font-nunito text-base md:text-2xl font-semibold mb-1.5">
                            {plan.name}
                          </h3>
                          <div className="flex items-center justify-center gap-3 mb-3">
                            <span className="text-white font-nunito text-xs md:text-lg opacity-80">{plan.description}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-white font-nunito font-bold text-base md:text-2xl">
                              {plan.price}
                            </span>
                          </div>
                        </div>

                        {/* Plan Features */}
                        <div className="space-y-2.5 mb-5">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2.5">
                              <i className="fas fa-check text-green-400 mt-0.5 flex-shrink-0 text-xs"></i>
                              <span className="text-white font-nunito text-xs md:text-lg leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <button
                          className="w-full py-2.5 px-3 rounded-lg font-nunito font-semibold text-xs md:text-2xl transition-all duration-300 hover:scale-105"
                          style={{
                            background: '#1345C3',
                            boxShadow: '0 0 16px 0 #000 inset',
                            color: '#FFFFFF'
                          }}
                        >
                          Get Protected
                        </button>

                        {/* Plan Type Indicator */}
                        <div className="mt-3 text-center">
                          <span className="text-white font-nunito text-[10px] opacity-80">
                            {plan.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full blur-xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            
            {/* Left Section - Questions */}
            <div className="space-y-6 flex flex-col justify-start">
              <div className="space-y-4">
                <h2 className="text-white text-left font-nunito text-lg md:text-2xl font-medium leading-tight w-full">
                  Have Question?
                  <br />
                  <span style={{ color: '#FFB703' }}>
                    We've Got Answers.
                  </span>
                </h2>

                <p className="text-white font-nunito text-xs md:text-sm font-medium">
                  Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
                </p>
              </div>

              {/* AI Input */}
              <form onSubmit={handleAiSubmit} className="relative">
                <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3 max-w-lg">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Smart AI, Ask me Anything...."
                    className="bg-transparent text-white placeholder-white outline-none text-sm w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                    style={{ color: '#FFB703' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Search Result Display */}
              {searchResult && (
                <div key={searchResult.question} className="p-4 rounded-lg max-w-lg animate-fade-in-up" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-nunito text-sm md:text-base font-semibold leading-snug" style={{ color: '#FFB703' }}>{searchResult.question}</h4>
                    <button onClick={() => setSearchResult(null)} className="text-white hover:text-gray-300 transition-colors ml-2 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 rotate-180" /></button>
                  </div>
                  <p className="text-white font-nunito text-xs md:text-sm font-medium leading-relaxed">{searchResult.answer}</p>
                </div>
              )}
              {showNoMatch && (
                <div className="p-4 rounded-lg max-w-lg animate-fade-in-up" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                  <div className="flex justify-between items-start">
                    <p className="text-white font-nunito text-xs md:text-sm font-medium leading-relaxed">We're experiencing high traffic at the moment. Please try your search again in a few moments, or browse our FAQ section for answers.</p>
                    <button onClick={() => setShowNoMatch(false)} className="text-white hover:text-gray-300 transition-colors ml-2 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 rotate-180" /></button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - FAQ Items */}
            <div
              className="space-y-3 p-4"
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                boxShadow: '2px 2px 14px 0 rgba(0, 0, 0, 0.15), 0 0 12px 0.5px rgba(255, 255, 255, 0.10) inset',
                backdropFilter: 'blur(70px)'
              }}
            >
              {faqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                    style={{
                      borderRadius: '9px',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      ...(openFaq === index ? { boxShadow: `0 0 0 1px #FFB70380` } : {})
                    }}
                    onClick={() => toggleFaq(index)}
                  >

                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white font-nunito text-xs md:text-sm lg:text-base font-semibold pr-3 leading-snug">
                        {faq.question}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-4 h-4 transition-all duration-500 ease-in-out flex-shrink-0 ${
                          openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        style={{ color: '#000000' }}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-72 opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-3'
                      }`}
                    >
                      <div className="mt-3 pt-3 border-t border-black/20 transform transition-all duration-500 ease-in-out">
                        <p className="text-white font-nunito text-[10px] md:text-xs font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Overlay - Only visible on mobile */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          background: '#0C002B',
          boxShadow: '0 0 12.8px 1px rgba(255, 255, 255, 0.13) inset'
        }}
      >
        <div className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Left Side - Pay Now Text */}
            <div className="flex-1">
              <span className="text-white font-nunito font-semibold text-base">
                Pay Now ₹2,999
              </span>
            </div>

            {/* Right Side - Start Registration Button */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setShowMobilePopup(true)}
                className="px-4 py-2 font-nunito font-semibold text-base text-[#0C002B] transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '6px',
                  background: '#FFB703'
                }}
              >
                Start Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup - Shows desktop right section content */}
      {showMobilePopup && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobilePopup(false)}
          />

          {/* Popup Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0C002B] rounded-t-xl max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowMobilePopup(false)}
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Popup Content */}
            <div className="px-3 py-2 space-y-3">
              {/* Main Card Container */}
              <div
                className="relative flex flex-col p-3 w-full mx-auto"
                style={{
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset',
                  minHeight: 'auto'
                }}
              >
                {/* "Get Your Trademark Registered" Heading Container */}
                <div
                  className="mb-3 p-2 rounded-[12px] text-center relative"
                  style={{
                    background: 'rgba(0, 0, 0, 0.26)'
                  }}
                >
                  <h3
                    className="text-white font-nunito font-medium text-sm"
                  >
                    Get Your Trademark Registered
                  </h3>
                </div>

                {/* Price Breakdown Section */}
                <div
                  className="mb-4 p-2 rounded-[12px] w-full"
                  style={{
                    background: 'transparent'
                  }}
                >
                  <h4
                    className="text-white font-nunito font-medium text-xs mb-2 text-center"
                  >
                    Price Breakdown
                  </h4>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center py-1 border-b border-gray-400">
                      <span className="text-white font-nunito text-[10px] opacity-90">Government Fee</span>
                      <span className="text-white font-nunito text-[10px]">₹4,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-400">
                      <span className="text-white font-nunito text-[10px] opacity-90">Professional Fee</span>
                      <span className="text-white font-nunito text-[10px]">₹2,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-400">
                      <span className="text-white font-nunito text-[10px] opacity-90">GST (18%)</span>
                      <span className="text-white font-nunito text-[10px]">₹1,260</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 font-semibold">
                      <span className="text-white font-nunito text-xs">Total</span>
                      <span className="text-white font-nunito text-xs">₹8,260</span>
                    </div>

                    {/* Start Registration Button */}
                    <button
                      className="w-full py-2 px-3 rounded-lg font-nunito font-semibold text-xs transition-all duration-300 hover:scale-105 mt-2"
                      style={{
                        background: '#FFB703',
                        boxShadow: '0 0 20px 0 #000 inset',
                        color: '#0C002B'
                      }}
                    >
                      Start Registration
                    </button>
                  </div>
                </div>

                {/* Our Plans Section - Expandable Dropdowns */}
                <div className="flex-1 space-y-2">
                  <h4
                    className="text-white font-nunito font-medium text-xs mb-2 text-center"
                  >
                    Our Plans
                  </h4>

                  {/* Display all three plans as expandable dropdowns */}
                  {plans.map((plan) => (
                    <div key={plan.id} className="mb-2">
                      {/* Plan Dropdown Header - Clickable */}
                      <div
                        onClick={() => togglePlan(plan.id)}
                        className="w-full p-2 rounded-lg text-white font-nunito font-medium text-[10px] border border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300 flex items-center justify-between"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)'
                        }}
                      >
                        <span className="text-[9px] leading-tight">{plan.name} - {plan.price}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`w-2.5 h-2.5 transition-transform duration-300 flex-shrink-0 ml-1 ${
                            expandedPlan === plan.id ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </div>

                      {/* Plan Card - Only visible when expanded */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedPlan === plan.id ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div
                          className="relative p-2.5 rounded-lg transition-all duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.10)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: plan.highlighted ? '1px solid #1345C3' : 'none',
                            boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, inset 0 0 20px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {/* Plan Header */}
                          <div className="text-center mb-2">
                            <h3 className="text-white font-nunito text-[10px] font-semibold mb-0.5">
                              {plan.name}
                            </h3>
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <span className="text-white font-nunito text-[9px] opacity-80">{plan.description}</span>
                            </div>
                            <div className="text-right">
                              <span
                                className="text-white font-nunito font-bold text-sm"
                              >
                                {plan.price}
                              </span>
                            </div>
                          </div>

                          {/* Plan Features */}
                          <div className="space-y-1 mb-2">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-1.5">
                                <i className="fas fa-check text-green-400 mt-0.5 flex-shrink-0 text-[8px]"></i>
                                <span className="text-white font-nunito text-[9px] leading-tight">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <button
                            className="w-full py-1.5 px-3 rounded-lg font-nunito font-semibold text-[10px] transition-all duration-300 hover:scale-105"
                            style={{
                              background: '#1345C3',
                              boxShadow: '0 0 20px 0 #000 inset',
                              color: '#FFFFFF'
                            }}
                          >
                            Get Protected
                          </button>

                          {/* Plan Type Indicator */}
                          <div className="mt-1.5 text-center">
                            <span className="text-white font-nunito text-[8px] opacity-80">
                              {plan.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Learn More Link */}
                  <div className="mt-2 text-center">
                    <a
                      href="/services/trademark-registration"
                      className="inline-flex items-center px-2 py-1 text-[9px] font-medium text-[#0C002B] bg-[#FFB703] rounded-md hover:bg-[#e6a503] transition-colors duration-300"
                    >
                      Learn More About Trademark Services
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Insights Container */}
              <div
                className="relative flex flex-col p-3 w-full mx-auto"
                style={{
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset'
                }}
              >
                {/* Quick Insight's Heading */}
                <div className="mb-2 text-center">
                  <h3 className="text-white font-nunito text-xs font-medium">
                    Quick Insight's
                  </h3>
                </div>

                {/* Documents You'll Need Heading */}
                <div className="mb-2 text-center">
                  <h4 className="text-white font-nunito font-medium text-[10px]">
                    Documents You'll Need
                  </h4>
                </div>

                {/* Documents List with Special Styling */}
                <div className="space-y-2">
                  <div
                    className="p-2 text-center"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-[9px] font-medium">
                      Identity proof (PAN / Aadhaar / Passport)
                    </span>
                  </div>

                  <div
                    className="p-2 text-center"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-[9px] font-medium">
                      Address proof (utility bill / bank statement)
                    </span>
                  </div>

                  <div
                    className="p-2 text-center"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-[9px] font-medium">
                      Legal entity proof (if business, e.g. company registration certificate)
                    </span>
                  </div>

                  <div
                    className="p-2 text-center"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-[9px] font-medium">
                      Trademark/logo/wordmark images
                    </span>
                  </div>

                  <div
                    className="p-2 text-center"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-[9px] font-medium">
                      Power of Attorney (Form TM-48)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      }}>
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-white text-5xl mb-4"></i>
          <p className="text-white font-nunito text-xl">Loading dashboard...</p>
        </div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
