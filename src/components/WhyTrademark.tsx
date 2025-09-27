'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function WhyTrademark() {
  // State for dropdown selection and background image
  const [selectedService, setSelectedService] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Services data
  const services = [
    {
      title: "Copyright Protection",
      features: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication", 
        "Gives full ownership rights",
        "Strengthens your artistic recognition"
      ],
      backgroundImage: "/rs1.svg"
    },
    {
      title: "Copyright Protection",
      features: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication",
        "Gives full ownership rights", 
        "Strengthens your artistic recognition"
      ],
      backgroundImage: "/rs2.svg"
    },
    {
      title: "Copyright Protection", 
      features: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication",
        "Gives full ownership rights",
        "Strengthens your artistic recognition"
      ],
      backgroundImage: "/rs3.svg"
    }
  ];

  const cardIcons = [
    // Clock icon for "Expert Legal Guidance"
    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" viewBox="0 0 156 156" fill="none" className="w-full h-full">
      <g filter="url(#filter0_ii_1023_4516)">
        <path d="M78 153C119.421 153 153 119.421 153 78C153 36.5786 119.421 3 78 3C36.5786 3 3 36.5786 3 78C3 119.421 36.5786 153 78 153Z" stroke="url(#paint0_linear_1023_4516)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M69.6445 44.6777V86.3444H111.311" stroke="url(#paint1_linear_1023_4516)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_ii_1023_4516" x="0" y="0" width="156" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1023_4516"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1023_4516" result="effect2_innerShadow_1023_4516"/>
        </filter>
        <linearGradient id="paint0_linear_1023_4516" x1="3" y1="100.5" x2="153.736" y2="104.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1023_4516" x1="69.6445" y1="71.7611" x2="111.516" y2="72.8826" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Star icon for "Fast Processing"
    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" viewBox="0 0 156 156" fill="none" className="w-full h-full">
      <g filter="url(#filter0_ii_1023_4526)">
        <path d="M61.3333 36.3333L57.0333 47.95C51.4 63.1833 48.5833 70.8 43.025 76.3583C37.4667 81.9167 29.85 84.7333 14.6167 90.3667L3 94.6667L14.6167 98.9667C29.85 104.6 37.4667 107.425 43.025 112.975C48.5833 118.525 51.4 126.15 57.0333 141.383L61.3333 153L65.6333 141.383C71.2667 126.15 74.0917 118.533 79.6417 112.975C85.1917 107.417 92.8167 104.6 108.05 98.9667L119.667 94.6667L108.05 90.3667C92.8167 84.7333 85.2 81.9167 79.6417 76.3583C74.0833 70.8 71.2667 63.1833 65.6333 47.95L61.3333 36.3333ZM128 3L126.158 7.975C123.742 14.5083 122.533 17.775 120.158 20.15C117.775 22.5333 114.508 23.7417 107.975 26.15L103 28L107.983 29.8417C114.508 32.2583 117.775 33.4667 120.15 35.8417C122.533 38.225 123.742 41.4917 126.15 48.025L128 53L129.842 48.025C132.258 41.4917 133.467 38.225 135.842 35.85C138.225 33.4667 141.492 32.2583 148.025 29.85L153 28L148.017 26.1583C141.492 23.7417 138.225 22.5333 135.85 20.1583C133.467 17.775 132.258 14.5083 129.85 7.975L128 3Z" stroke="url(#paint0_linear_1023_4526)" strokeWidth="6" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_ii_1023_4526" x="0" y="0" width="156" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1023_4526"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1023_4526" result="effect2_innerShadow_1023_4526"/>
        </filter>
        <linearGradient id="paint0_linear_1023_4526" x1="3" y1="100.5" x2="153.736" y2="104.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // User check icon for "Comprehensive Search"
    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" viewBox="0 0 156 156" fill="none" className="w-full h-full">
      <g filter="url(#filter0_ii_1023_4528)">
        <path d="M50.7273 71.1818C59.7687 71.1818 68.4399 67.5901 74.8332 61.1968C81.2265 54.8035 84.8182 46.1324 84.8182 37.0909C84.8182 28.0494 81.2265 19.3783 74.8332 12.985C68.4399 6.59171 59.7687 3 50.7273 3C41.6858 3 33.0146 6.59171 26.6214 12.985C20.2281 19.3783 16.6364 28.0494 16.6364 37.0909C16.6364 46.1324 20.2281 54.8035 26.6214 61.1968C33.0146 67.5901 41.6858 71.1818 50.7273 71.1818ZM50.7273 71.1818C64.4523 71.1818 76.4455 76.3636 84.975 84.975C90.032 90.1022 93.8152 96.3445 96.0205 103.2M50.7273 71.1818C23.4545 71.1818 3 91.6364 3 118.909V153H71.1818M78 124.527L106.568 146.182L153 84.8182" stroke="url(#paint0_linear_1023_4528)" strokeWidth="6"/>
      </g>
      <defs>
        <filter id="filter0_ii_1023_4528" x="0" y="0" width="155.391" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1023_4528"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1023_4528" result="effect2_innerShadow_1023_4528"/>
        </filter>
        <linearGradient id="paint0_linear_1023_4528" x1="3" y1="100.5" x2="153.736" y2="104.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Flag icon for "End-to-End Support"
    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="143" viewBox="0 0 134 143" fill="none" className="w-full h-full">
      <path d="M84.5217 68.2738L78 3.06836H130.174L120.391 68.2738M48.6522 140L64.9565 133.479H117.13L126.913 123.698L123.652 113.918L130.174 100.876L123.652 87.8354L130.174 78.0546L123.652 68.2738H68.2174M3 100.876L29.087 91.0956L55.1739 48.7121L66.1435 41.4026" stroke="url(#paint0_linear_1023_4532)" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_1023_4532" x1="3" y1="92.0737" x2="130.81" y2="95.2533" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Lines icon for "Affordable Pricing"
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="106" viewBox="0 0 96 106" fill="none" className="w-full h-full">
      <path d="M12.5246 117.833L41.1336 44.3803L108.092 2.78372M2.78387 12.5243L127.42 116.056" stroke="url(#paint0_linear_1023_4545)" strokeWidth="6"/>
      <defs>
        <linearGradient id="paint0_linear_1023_4545" x1="36.0137" y1="137.344" x2="134.919" y2="24.0938" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Use the existing icon for "Government Certified"
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 135" fill="none" className="w-full h-full">
      <path d="M61.5041 25.0596L134.125 -4.05858C139.804 -6.33961 217.178 -38.6687 213.871 -33.1034L116.378 46.7276C114.399 50.0573 115.14 54.1582 118.043 55.8836L137.928 67.7007C142.443 70.3842 141.21 77.9387 135.907 80.0652L63.2864 109.183C57.6105 111.458 0.237221 137.119 3.5446 131.554L81.0371 58.3912C83.0159 55.0615 82.2695 50.9571 79.3721 49.2353L59.4874 37.4182C54.9719 34.7347 56.2011 27.1861 61.5041 25.0596Z" stroke="url(#paint0_linear_2029_359)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_2029_359" x1="42.7015" y1="53.6939" x2="130.982" y2="107.482" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>
  ];

  const featureCards = [
    {
      title: "Expert Legal Guidance",
      description: "Professional trademark attorneys to guide you through every step"
    },
    {
      title: "Fast Processing",
      description: "Quick turnaround times with efficient application handling"
    },
    {
      title: "Comprehensive Search",
      description: "Thorough trademark searches to ensure registrability"
    },
    {
      title: "End-to-End Support",
      description: "Complete assistance from application to registration"
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing structure"
    },
    {
      title: "Government Certified",
      description: "Authorized agents with official government recognition"
    }
  ];

  const checklistItems = [
    'MSME Registered',
    'ISO',
    'Govt. Registered',
    'PAN India Services',
    '35+ Years Experience',
    'Privacy & Data Security'
  ];

  return (
    <section className="w-full py-16 px-4 relative overflow-visible mt-5 rounded-t-[40px] md:min-h-fit min-h-[1200px]" style={{
      backgroundImage: `url('/figmacomp/herounderbg.svg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    }}>
      
    
      
      <div className="w-full mx-auto relative z-10 px-4 md:px-10">
      <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] font-medium leading-[32px] md:leading-[45px] w-full my-8 md:my-20">
            Why Trademark with IPRKaro?
        </h2>
        
        {/* Mobile Layout: Right column first, then left cards */}
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] items-stretch gap-4 md:gap-6">
          {/* Right Column - Info Panels (First on mobile) */}
          <div
            className="flex w-full py-6 md:py-10 px-4 md:px-7 flex-col justify-between items-center gap-4 md:gap-6 rounded-[15px] border-[6px] border-white/[0.07] bg-white/[0.05] mx-auto h-full order-1 lg:order-2"
          >
            {/* Trust & Rating Card */}
            <div
              className="flex p-2.5 justify-center items-center self-stretch rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px]"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.62) 0%, rgba(255, 255, 255, 0.62) 100%)',
              }}
            >
              <div className="flex items-start gap-4 w-full">
                {/* Left Column - Google Icon and 4.7 Rating */}
                <div className="flex items-center justify-start shrink-0">
                  {/* Google/Star Icon positioned close to left border */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="flex-shrink-0">
  <g clipPath="url(#clip0_829_5631)">
    <path d="M6.96721 1.15827C4.9689 1.8515 3.24556 3.16728 2.05032 4.91233C0.855082 6.65739 0.250946 8.73974 0.326651 10.8535C0.402355 12.9673 1.15391 15.0011 2.47092 16.6562C3.78794 18.3113 5.60099 19.5004 7.64377 20.0489C9.2999 20.4762 11.035 20.495 12.7 20.1036C14.2083 19.7648 15.6028 19.0401 16.7469 18.0005C17.9376 16.8854 18.802 15.4668 19.2469 13.8973C19.7305 12.1906 19.8166 10.3957 19.4985 8.65046H10.1985V12.5083H15.5844C15.4768 13.1236 15.2461 13.7108 14.9062 14.2349C14.5663 14.7589 14.1242 15.2091 13.6063 15.5583C12.9486 15.9933 12.2072 16.286 11.4297 16.4176C10.6499 16.5626 9.85011 16.5626 9.07033 16.4176C8.28 16.2542 7.53236 15.928 6.87502 15.4598C5.819 14.7123 5.02608 13.6503 4.6094 12.4255C4.18567 11.1776 4.18567 9.82484 4.6094 8.57702C4.906 7.70236 5.39632 6.90598 6.04377 6.24733C6.7847 5.47975 7.72273 4.93108 8.75495 4.66151C9.78718 4.39195 10.8737 4.41191 11.8953 4.71921C12.6934 4.96419 13.4232 5.39223 14.0266 5.96921C14.6339 5.36504 15.2401 4.75931 15.8453 4.15202C16.1578 3.82546 16.4985 3.51452 16.8063 3.18014C15.8853 2.32307 14.8042 1.65617 13.625 1.21764C11.4777 0.437939 9.12811 0.416985 6.96721 1.15827Z" fill="black"/>
    <path d="M6.96562 1.15707C9.12635 0.415288 11.4759 0.43569 13.6234 1.21489C14.8028 1.65639 15.8834 2.32651 16.8031 3.18676C16.4906 3.52114 16.1609 3.83364 15.8422 4.15864C15.2359 4.76384 14.6302 5.36697 14.025 5.96801C13.4216 5.39104 12.6918 4.963 11.8937 4.71801C10.8725 4.40964 9.78597 4.38852 8.75347 4.65698C7.72097 4.92544 6.78236 5.47311 6.04062 6.23989C5.39318 6.89854 4.90285 7.69491 4.60625 8.56957L1.36719 6.06176C2.52658 3.76264 4.53398 2.00399 6.96562 1.15707Z" fill="#E33629"/>
    <path d="M0.510152 8.54687C0.684247 7.68405 0.973283 6.84848 1.36953 6.0625L4.60859 8.57656C4.18486 9.82438 4.18486 11.1772 4.60859 12.425C3.52942 13.2583 2.44974 14.0958 1.36953 14.9375C0.377575 12.963 0.0750466 10.7133 0.510152 8.54687Z" fill="#F8BD00"/>
    <path d="M10.1999 8.64844H19.4999C19.818 10.3936 19.732 12.1885 19.2484 13.8953C18.8034 15.4648 17.9391 16.8834 16.7484 17.9984C15.703 17.1828 14.653 16.3734 13.6077 15.5578C14.126 15.2082 14.5683 14.7576 14.9082 14.233C15.2481 13.7084 15.4786 13.1205 15.5859 12.5047H10.1999C10.1984 11.2203 10.1999 9.93438 10.1999 8.64844Z" fill="#587DBD"/>
    <path d="M1.36719 14.9383C2.4474 14.1049 3.52708 13.2674 4.60625 12.4258C5.02376 13.6511 5.81782 14.7131 6.875 15.4602C7.53439 15.9262 8.28364 16.2497 9.075 16.4102C9.85478 16.5552 10.6546 16.5552 11.4344 16.4102C12.2119 16.2786 12.9533 15.9858 13.6109 15.5508C14.6563 16.3664 15.7063 17.1758 16.7516 17.9914C15.6076 19.0316 14.2132 19.7568 12.7047 20.0961C11.0397 20.4875 9.30457 20.4687 7.64844 20.0414C6.3386 19.6917 5.11512 19.0751 4.05469 18.2305C2.93228 17.3394 2.01556 16.2164 1.36719 14.9383Z" fill="#319F43"/>
  </g>
  <defs>
    <clipPath id="clip0_829_5631">
      <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
                  <span className="text-white font-nunito text-[25px] font-medium leading-[30px] ml-1">
                    4.7
                  </span>
                </div>
                
                {/* Right Column - Remaining Content */}
                <div className="flex-1">
                  <div className="text-white font-nunito text-[25px] font-medium leading-[30px] mb-2">
                    Loved and Trusted by<br />1.25L Indians
                  </div>
                  <div className="text-white font-nunito text-[15px] italic font-normal leading-[15px]">
                    Rated 5 stars by Startups, Entrepreneur<br />and Companies
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Checklist */}
            <div
              className="flex py-2.5 pl-2.5 pr-[119px] items-center self-stretch rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px]"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.62) 0%, rgba(255, 255, 255, 0.62) 100%)',
              }}
            >
              <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {/* Custom SVG Checkmark */}
                    <span className="w-5 h-[15px] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 18" fill="none">
                        <path
                          d="M2 10.2642C2 10.2642 4.66627 13.4352 6.3988 16.5C6.3988 16.5 14.131 5.12637 22 1.5"
                          stroke="url(#paint0_linear_900_3278)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_900_3278" x1="-0.51403" y1="1.00658" x2="22.8345" y2="4.73545" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1345C3"/>
                            <stop offset="1" stopColor="#069A81"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-white font-nunito text-[15px] font-medium leading-[18px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidelines Partners */}
            <div
              className="flex p-2.5 px-6 justify-center items-center self-stretch rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px]"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.62) 0%, rgba(255, 255, 255, 0.62) 100%)',
              }}
            >
              <div className="w-full">
                <div className="text-white text-center font-nunito text-[25px] font-medium leading-[30px] mb-4">
                  We work with Guidelines of
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                  {['/msme1.png', '/msme2.png', '/msme3.png', '/msme4.png'].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-20 rounded-3 flex items-center justify-center"
                      style={{
                        aspectRatio: '40/29',
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Partner logo ${idx + 1}`}
                        className="w-20 h-auto object-contain"
                        width={80}
                        height={29}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Feature Cards (Second on mobile) */}
          <div className="w-full order-2 lg:order-1">
            <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 lg:gap-6 w-full h-full">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-full min-h-[120px] md:min-h-[140px] lg:min-h-[160px] rounded-[15px] border-[6px] border-white/[0.07] bg-white/[0.05] flex items-center px-3 md:px-4 lg:px-8 py-3 md:py-4 lg:py-5 overflow-hidden group transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Decorative SVG Icon - Top Right */}
                  <div
                    className="w-20 md:w-32 h-20 md:h-32 flex-shrink-0 absolute top-0 right-0 z-[1] flex items-center justify-center pointer-events-none opacity-60"
                  >
                    {cardIcons[index]}
                  </div>
                  <div className="relative z-[2] w-full">
                    <h3 className="text-white font-nunito text-[16px] md:text-[20px] lg:text-[25px] font-semibold leading-tight mb-1 md:mb-1.5 lg:mb-2 break-words">
                      {card.title}
                    </h3>
                    <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium leading-snug m-0 break-words">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
       
        
       
      </div>

      {/* How It Works? */}
      <div className="w-full relative z-10 px-4 md:px-20 min-h-fit">
        <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] font-medium leading-[32px] md:leading-[45px] w-full my-8 md:my-20">
          How It Works?
        </h2>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row w-full gap-4">
          {/* Left Column */}
          <div className="flex-1 flex justify-center items-center">
            <div
              className="relative w-full h-full rounded-[25px] border-[6px] border-white/[0.07] bg-white/[0.05] flex flex-col overflow-hidden group transition-all duration-300"
            >
              {/* Background Image - heross.png in bottom right */}
              <div className="absolute bottom-[-30px] right-0 z-0">
                <Image
                  src="/figmacomp/heross.png"
                  alt="Hero background"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Text Content - Top */}
                <div className="flex flex-col justify-start px-3 md:px-4 lg:px-8 py-3 md:py-4 lg:py-5 items-start">
                  <h3 className="text-white font-nunito text-[18px] md:text-[22px] lg:text-[25px] font-semibold leading-tight mb-1 md:mb-2 break-words mt-6 md:mt-8 lg:mt-12">
                    Find Conflicts Instantly
                  </h3>
                  <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium leading-snug m-0 break-words">
                    Enter your brand name or logo and let our AI scan trademark databases in seconds. Get quick insights without manual searching.
                  </p>
                </div>
                
                {/* Search SVG - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-32 h-20 flex items-end justify-start">
                  <Image
                    src="/figmacomp/search.svg"
                    alt="Search icon"
                    width={120}
                    height={76}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: 2 equal rows */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Row 1 */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src="/hiwright.svg"
                alt="How it works right"
                width={350}
                height={100}
                className="w-full h-[250px] object-contain"
              />
            </div>
            {/* Row 2 */}
            <div className="flex-1 flex justify-center items-center">
              <div
                className="relative w-full rounded-[25px] border-[6px] border-white/[0.07] flex flex-col items-start justify-start px-3 md:px-4 lg:px-8 py-3 md:py-4 lg:py-5 overflow-hidden group transition-all duration-300"
              >
                <h3 className="text-white font-nunito text-[18px] md:text-[22px] lg:text-[25px] font-semibold leading-tight mb-1 md:mb-2 break-words">
                  Secure Your Brand Fast
                </h3>
                <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium leading-snug m-0 mb-3 md:mb-5 break-words">
                  File your trademark instantly with AI guidance — or hand it over to our experts for end-to-end protection.
                </p>
                <button
                  className="relative overflow-hidden border-2 border-[#FFB703] rounded-[10px] px-4 md:px-6 py-1.5 md:py-2 font-nunito font-semibold text-sm md:text-base mt-2 group"
                  style={{ color: '#FFB703', background: 'transparent' }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-white">
                    Check Your Registrability Now &rarr;
                  </span>
                  <span
                    className="absolute inset-0 z-0 transition-all duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(0deg, #FFB703 0%, #FFB703 0%, transparent 100%)',
                      opacity: 0,
                    }}
                  ></span>
                  <style jsx>{`
                    button {
                      position: relative;
                      overflow: hidden;
                    }
                    button .z-0 {
                      transition: opacity 0.3s;
                    }
                    button:hover .z-0,
                    button:focus .z-0 {
                      opacity: 1 !important;
                      background: linear-gradient(0deg, #FFB703 100%, transparent 0%);
                    }
                    button .z-10 {
                      transition: color 0.3s;
                    }
                    button:hover .z-10,
                    button:focus .z-10 {
                      color: #fff !important;
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - 1 column 3 rows */}
        <div className="flex md:hidden flex-col w-full gap-4 min-h-fit">
          {/* Row 1: Left column image (smaller) */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full max-w-sm h-48 rounded-[25px] border-[6px] border-white/[0.07] bg-white/[0.05] flex flex-col overflow-hidden group transition-all duration-300"
            >
              {/* Background Image - heross.png in bottom right */}
              <div className="absolute bottom-[-20px] right-0 z-0">
                <Image
                  src="/figmacomp/heross.png"
                  alt="Hero background"
                  width={200}
                  height={150}
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Text Content - Top */}
                <div className="flex flex-col justify-start px-3 py-3 items-start">
                  <h3 className="text-white font-nunito text-[16px] font-semibold leading-tight mb-1 break-words mt-4">
                    Find Conflicts Instantly
                  </h3>
                  <p className="text-white font-nunito text-[10px] font-medium leading-snug m-0 break-words">
                    Enter your brand name or logo and let our AI scan trademark databases in seconds. Get quick insights without manual searching.
                  </p>
                </div>
                
                {/* Search SVG - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-20 h-12 flex items-end justify-start">
                  <Image
                    src="/figmacomp/search.svg"
                    alt="Search icon"
                    width={80}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Right column image */}
          <div className="flex justify-center items-center">
            <Image
              src="/hiwright.svg"
              alt="How it works right"
              width={350}
              height={100}
              className="w-full h-[200px] object-contain"
            />
          </div>

          {/* Row 3: Secure Your Brand Fast container */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full rounded-[25px] border-[6px] border-white/[0.07] bg-white/[0.05] flex flex-col items-start justify-start px-3 py-3 overflow-hidden group transition-all duration-300"
            >
              <h3 className="text-white font-nunito text-[16px] font-semibold leading-tight mb-1 break-words">
                Secure Your Brand Fast
              </h3>
              <p className="text-white font-nunito text-[10px] font-medium leading-snug m-0 mb-3 break-words">
                File your trademark instantly with AI guidance — or hand it over to our experts for end-to-end protection.
              </p>
              <button
                className="relative overflow-hidden border-2 border-[#FFB703] rounded-[10px] px-4 py-1.5 font-nunito font-semibold text-sm mt-2 group"
                style={{ color: '#FFB703', background: 'transparent' }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-white">
                  Check Your Registrability Now &rarr;
                </span>
                <span
                  className="absolute inset-0 z-0 transition-all duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(0deg, #FFB703 0%, #FFB703 0%, transparent 100%)',
                    opacity: 0,
                  }}
                ></span>
                <style jsx>{`
                  button {
                    position: relative;
                    overflow: hidden;
                  }
                  button .z-0 {
                    transition: opacity 0.3s;
                  }
                  button:hover .z-0,
                  button:focus .z-0 {
                    opacity: 1 !important;
                    background: linear-gradient(0deg, #FFB703 100%, transparent 0%);
                  }
                  button .z-10 {
                    transition: color 0.3s;
                  }
                  button:hover .z-10,
                  button:focus .z-10 {
                    color: #fff !important;
                  }
                `}</style>
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
