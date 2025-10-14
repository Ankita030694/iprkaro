'use client';
import Image from 'next/image';
import Link from 'next/link';
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

  // Mobile-specific icons
  const mobileCardIcons = [
    // Lightning icon for "Expert Legal Guidance"
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
      <path d="M1.14933 11.2623L5.77496 6.29174C6.13652 5.90275 11 0.517143 11 1.03506L6.8147 10.5098C6.8147 10.8196 7.08042 11.0714 7.40893 11.0714H9.65895C10.1699 11.0714 10.4422 11.6413 10.1045 12.0043L5.47883 16.9748C5.11727 17.3633 1.59484 21.4729 1.59484 20.9549L4.43909 12.7563C4.43909 12.4464 4.17271 12.1946 3.84486 12.1946H1.59484C1.0839 12.1946 0.811567 11.6253 1.14933 11.2623Z" stroke="url(#paint0_linear_1095_4992)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_1095_4992" x1="1" y1="14" x2="11.0544" y2="14.1347" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // User check icon for "Fast Processing"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <g filter="url(#filter0_ii_1099_5066)">
        <path d="M7.36364 10.0909C8.56917 10.0909 9.72532 9.61201 10.5778 8.75958C11.4302 7.90714 11.9091 6.75098 11.9091 5.54545C11.9091 4.33993 11.4302 3.18377 10.5778 2.33133C9.72532 1.47889 8.56917 1 7.36364 1C6.15811 1 5.00195 1.47889 4.14951 2.33133C3.29708 3.18377 2.81818 4.33993 2.81818 5.54545C2.81818 6.75098 3.29708 7.90714 4.14951 8.75958C5.00195 9.61201 6.15811 10.0909 7.36364 10.0909ZM7.36364 10.0909C9.19364 10.0909 10.7927 10.7818 11.93 11.93C12.6043 12.6136 13.1087 13.4459 13.4027 14.36M7.36364 10.0909C3.72727 10.0909 1 12.8182 1 16.4545V21H10.0909M11 17.2036L14.8091 20.0909L21 11.9091" stroke="url(#paint0_linear_1099_5066)" strokeWidth="1.5"/>
      </g>
      <defs>
        <filter id="filter0_ii_1099_5066" x="0.25" y="0.25" width="21.3477" height="25.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1099_5066"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1099_5066" result="effect2_innerShadow_1099_5066"/>
        </filter>
        <linearGradient id="paint0_linear_1099_5066" x1="1" y1="14" x2="21.0981" y2="14.5383" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Shield icon for "Comprehensive Search"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
      <g filter="url(#filter0_ii_1095_5003)">
        <path d="M17.8421 20.6537C17.5276 20.7959 17.189 20.8773 16.8442 20.8937C15.7168 20.9505 14.1379 21 12.0526 21C9.96737 21 8.38842 20.95 7.26105 20.8932C6.9163 20.877 6.57771 20.7957 6.26316 20.6537M20.2105 17.7784C19.8078 18.037 19.3443 18.1854 18.8663 18.2089C17.3989 18.2889 15.1637 18.3679 12.0526 18.3679C8.94158 18.3679 6.70632 18.2889 5.23895 18.2089C4.76094 18.1854 4.29746 18.037 3.89474 17.7784M1.20947 13.2158C1.33895 14.5289 2.39789 15.4726 3.71632 15.5447C5.41158 15.6379 8.13789 15.7368 12.0526 15.7368C15.9674 15.7368 18.6937 15.6379 20.3895 15.5447C21.7074 15.4726 22.7663 14.5289 22.8958 13.2158C23.0074 12.0847 23.1053 10.4879 23.1053 8.36842C23.1053 6.24895 23.0074 4.65211 22.8958 3.52105C22.7663 2.20737 21.7074 1.26421 20.3889 1.19211C18.6937 1.09895 15.9674 1 12.0526 1C8.13789 1 5.41158 1.09895 3.71579 1.19211C2.39789 1.26421 1.33895 2.20789 1.20947 3.52105C1.09789 4.65263 1 6.24895 1 8.36842C1 10.4879 1.09789 12.0847 1.20947 13.2158Z" stroke="url(#paint0_linear_1095_5003)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1583 6.00752C14.1583 6.00752 13.3162 5.36279 12.053 5.36279C11.0004 5.36279 9.94778 6.00752 9.94778 6.86647C9.94778 9.01489 14.1583 7.72595 14.1583 9.87437C14.1583 10.7333 13.1057 11.3781 12.053 11.3781M12.053 11.3781C10.7899 11.3781 9.94778 10.7333 9.94778 10.7333M12.053 11.3781V12.5812M12.053 5.36331V4.16016M18.8951 8.37068H18.3688M5.73725 8.37068H5.21094" stroke="url(#paint1_linear_1095_5003)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_ii_1095_5003" x="0.25" y="0.25" width="23.6055" height="25.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1095_5003"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1095_5003" result="effect2_innerShadow_1095_5003"/>
        </filter>
        <linearGradient id="paint0_linear_1095_5003" x1="1" y1="14" x2="23.2101" y2="14.6575" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1095_5003" x1="5.21094" y1="9.63384" x2="18.9461" y2="10.2317" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Star icon for "End-to-End Support"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <g filter="url(#filter0_ii_1099_5061)">
        <path d="M11.1055 19C14.8765 19 16.7625 19 17.9335 17.828C19.1055 16.657 19.1055 14.771 19.1055 11M11.1055 19C7.33447 19 5.44847 19 4.27747 17.828C3.10647 16.656 3.10547 14.771 3.10547 11M11.1055 19V21M3.10547 11C3.10547 7.229 3.10547 5.343 4.27747 4.172C5.44947 3.001 7.33447 3 11.1055 3M3.10547 11H1.10547M11.1055 3C14.8765 3 16.7625 3 17.9335 4.172C19.1045 5.344 19.1055 7.229 19.1055 11M11.1055 3V1M19.1055 11H21.1055M7.10547 1V3M15.1055 1V3M7.10547 19V21M15.1055 19V21M21.1055 15H19.1055M3.10547 7H1.10547M3.10547 15H1.10547M21.1055 7H19.1055" stroke="url(#paint0_linear_1099_5061)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5864 6.86291C10.6255 6.75647 10.6963 6.6646 10.7893 6.5997C10.8823 6.5348 10.993 6.5 11.1064 6.5C11.2198 6.5 11.3304 6.5348 11.4234 6.5997C11.5164 6.6646 11.5873 6.75647 11.6264 6.86291L12.4264 9.02591C12.5384 9.32891 12.7784 9.56891 13.0814 9.68091L15.2444 10.4809C15.3508 10.52 15.4427 10.5909 15.5076 10.6839C15.5725 10.7768 15.6073 10.8875 15.6073 11.0009C15.6073 11.1143 15.5725 11.225 15.5076 11.318C15.4427 11.411 15.3508 11.4818 15.2444 11.5209L13.0814 12.3209C12.9311 12.3759 12.7947 12.463 12.6816 12.5761C12.5684 12.6892 12.4814 12.8257 12.4264 12.9759L11.6264 15.1389C11.5873 15.2453 11.5164 15.3372 11.4234 15.4021C11.3304 15.467 11.2198 15.5018 11.1064 15.5018C10.993 15.5018 10.8823 15.467 10.7893 15.4021C10.6963 15.3372 10.6255 15.2453 10.5864 15.1389L9.78638 12.9759C9.7314 12.8257 9.64431 12.6892 9.53118 12.5761C9.41806 12.463 9.28162 12.3759 9.13138 12.3209L6.96838 11.5209C6.86194 11.4818 6.77007 11.411 6.70517 11.318C6.64027 11.225 6.60547 11.1143 6.60547 11.0009C6.60547 10.8875 6.64027 10.7768 6.70517 10.6839C6.77007 10.5909 6.86194 10.52 6.96838 10.4809L9.13138 9.68091C9.28128 9.62534 9.41742 9.53805 9.53047 9.425C9.64352 9.31195 9.73081 9.17582 9.78638 9.02591L10.5864 6.86291Z" stroke="url(#paint1_linear_1099_5061)" strokeWidth="1.5"/>
      </g>
      <defs>
        <filter id="filter0_ii_1099_5061" x="0.355469" y="0.25" width="21.5" height="25.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1099_5061"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1099_5061" result="effect2_innerShadow_1099_5061"/>
        </filter>
        <linearGradient id="paint0_linear_1099_5061" x1="1.10547" y1="14" x2="21.2035" y2="14.5383" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1099_5061" x1="6.60547" y1="12.3512" x2="15.6514" y2="12.5935" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Shield with check icon for "Affordable Pricing"
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <g filter="url(#filter0_ii_1095_4979)">
        <path d="M1 10L10 7L19 10M10 1V20.5" stroke="url(#paint0_linear_1095_4979)" strokeWidth="1.5"/>
        <path d="M1.193 13C2.05 17.298 5.576 19.513 7.899 20.527C8.62 20.842 8.981 21 10 21C11.02 21 11.38 20.842 12.101 20.527C12.68 20.275 13.332 19.947 14 19.533M17 16.904C18.163 15.428 19 13.496 19 10.991V9.417C19 6.219 19 4.62 18.622 4.082C18.245 3.545 16.742 3.03 13.735 2.001L13.162 1.805C11.595 1.268 10.812 1 10 1C9.188 1 8.405 1.268 6.838 1.805L6.265 2C3.258 3.03 1.755 3.545 1.378 4.082C1 4.62 1 6.22 1 9.417V10" stroke="url(#paint1_linear_1095_4979)" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      <defs>
        <filter id="filter0_ii_1095_4979" x="0.25" y="0.25" width="19.5" height="25.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1095_4979"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1095_4979" result="effect2_innerShadow_1095_4979"/>
        </filter>
        <linearGradient id="paint0_linear_1095_4979" x1="1" y1="13.675" x2="19.0902" y2="14.1223" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1095_4979" x1="1" y1="14" x2="19.0907" y2="14.4361" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>,
    // Clock icon for "Government Certified"
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
      <g filter="url(#filter0_ii_1095_4985)">
        <path d="M12.1766 21.0016C17.0505 21.0016 21.0016 17.0505 21.0016 12.1766C21.0016 7.30265 17.0505 3.35156 12.1766 3.35156C7.30265 3.35156 3.35156 7.30265 3.35156 12.1766C3.35156 17.0505 7.30265 21.0016 12.1766 21.0016Z" stroke="url(#paint0_linear_1095_4985)" strokeWidth="1.5"/>
        <path d="M4.56657 1C3.7113 1.22906 2.93142 1.67926 2.30534 2.30534C1.67926 2.93142 1.22906 3.7113 1 4.56656M19.7834 1C20.6387 1.22906 21.4186 1.67926 22.0446 2.30534C22.6707 2.93142 23.1209 3.7113 23.35 4.56656M12.175 7.13212V11.8598C12.175 12.0338 12.3162 12.175 12.4902 12.175H15.9571" stroke="url(#paint1_linear_1095_4985)" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      <defs>
        <filter id="filter0_ii_1095_4985" x="0.25" y="0.25" width="23.8516" height="25.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1095_4985"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_1095_4985" result="effect2_innerShadow_1095_4985"/>
        </filter>
        <linearGradient id="paint0_linear_1095_4985" x1="3.35156" y1="14.8241" x2="21.0881" y2="15.2992" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1095_4985" x1="1" y1="8.26373" x2="23.4114" y2="9.46434" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.490385" stopColor="#8A38F5"/>
          <stop offset="0.88" stopColor="#FFB703"/>
        </linearGradient>
      </defs>
    </svg>
  ];

  const featureCards = [
    {
      title: "Fast Trademark Registration",
      description: "Rapid, professional trademark filing handled by experienced attorneys for swift brand protection."
    },
    {
      title: "Expert Trademark Guidance",
      description: "Quick responses and expert support for every step of your trademark application, ensuring legal compliance."
    },
    {
      title: "Affordable Trademark Services",
      description: "Cost-effective and transparent trademark search and registration to maximize value and minimize risk."
    },
    {
      title: "AI-Powered Trademark Solutions",
      description: "Intelligent AI-driven search and reporting for complete assistance, from trademark search to registration."
    },
    {
      title: "Trademark Risk Reduction",
      description: "Robust trademark risk assessment with advanced search, lowering the chances of conflicts and rejections."
    },
    {
      title: "24/7 Trademark Protection",
      description: "Round-the-clock accessibility with certified trademark agents recognized by official authorities."
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
    <section className="w-full px-5 md:px-20 lg:px-10 relative overflow-visible mt-5 rounded-[40px] md:min-h-fit min-h-[1200px] py-8" style={{
      background: 'linear-gradient(to bottom,rgb(174, 173, 173) 0%, #6E5E93 20%, #160049 55%, #0C002B 100%)'
    }}>
      
    
      
      <div className="w-full mx-auto relative z-10 px-4 md:px-10 lg:px-8">
      <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] lg:text-[38px] font-medium leading-[32px] md:leading-[45px] lg:leading-[42px] w-full my-8 md:my-20 lg:my-16">
          <span
                          className="font-nunito font-bold text-[28px] md:text-[44px] lg:text-[37px]"
                         
                        >
                         Why Register Your Trademark with IPRKaro?
                        </span>
      
        </h2>
        
        {/* Mobile Layout: Right column first, then left cards */}
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:items-start gap-4 md:gap-6 lg:gap-4">
          {/* Right Column - Info Panels (First on mobile) */}
          <div
            className="flex w-full h-full py-4 md:py-6 lg:py-4 px-4 md:px-7 lg:px-4 flex-col justify-between items-center gap-2 md:gap-3 lg:gap-2 mx-auto order-1 lg:order-2"
            style={{
              borderRadius: '25px',
              border: '6px solid rgba(255, 255, 255, 0.07)',
              background: 'transparent',
              boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
              backdropFilter: 'blur(31.7px)'
            }}
          >
            {/* Trust & Rating Card */}
            <div
              className="flex p-1.5 md:p-2.5 justify-center items-center self-stretch rounded-[14px] md:rounded-[20px] border border-white/[0.15] md:border-2 backdrop-blur-[16px]"
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
                  {/* Google/Star Icon positioned close to left border */}
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

            {/* Certification Checklist */}
            <div
              className="flex flex-col py-2.5 pl-2.5 pr-[119px] lg:pr-[80px] items-start self-stretch rounded-[20px] lg:rounded-[16px] border-2 border-white/[0.15] backdrop-blur-[16px]"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
             
              <ul className="flex flex-col gap-3 lg:gap-2 m-0 p-0 list-none">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {/* Custom SVG Checkmark */}
                    <span className="w-5 h-[15px] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 18" fill="none">
                        <path
                          d="M2 10.2642C2 10.2642 4.66627 13.4352 6.3988 16.5C6.3988 16.5 14.131 5.12637 22 1.5"
                          stroke={`url(#paint0_linear_900_3278_${index})`}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id={`paint0_linear_900_3278_${index}`} x1="-0.51403" y1="1.00658" x2="22.8345" y2="4.73545" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1345C3"/>
                            <stop offset="1" stopColor="#069A81"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-white font-nunito text-[15px] lg:text-[13px] font-medium leading-[18px] lg:leading-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidelines Partners */}
            <div
              className="flex p-2.5 px-6 lg:px-4 justify-center items-center self-stretch rounded-[20px] lg:rounded-[16px] border-2 border-white/[0.15] backdrop-blur-[16px]"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
              <div className="w-full">
                <div className="text-white text-center font-nunito text-[18px] lg:text-[20px] font-medium leading-[30px] lg:leading-[26px] mb-4 lg:mb-3">
                  We work with Guidelines of
                </div>
                {/* Mobile Layout - Single Row */}
                <div className="md:hidden flex gap-2 justify-center flex-wrap">
                  {['/msme1.png', '/msme2.png', '/msme3.png', '/msme4.png'].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-12 rounded-3 flex items-center justify-center"
                      style={{
                        aspectRatio: '40/29',
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Partner logo ${idx + 1}`}
                        className="w-12 h-auto object-contain"
                        width={80}
                        height={29}
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop Layout - Single Row */}
                <div className="hidden md:flex gap-2 justify-center">
                  {['/msme1.png', '/msme2.png', '/msme3.png', '/msme4.png'].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-16 rounded-3 flex items-center justify-center flex-shrink-0"
                      style={{
                        aspectRatio: '40/29',
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Partner logo ${idx + 1}`}
                        className="w-16 h-auto object-contain"
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
          <div className="w-full h-full order-2 lg:order-1">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-2 md:gap-3 lg:gap-7 w-full h-full px-9">
              {featureCards.map((card, index) => {
                const featureRoutes = [
                  '/features/fast-trademark-registration',
                  '/features/expert-trademark-guidance',
                  '/features/affordable-trademark-services',
                  '/features/ai-powered-trademark-solutions',
                  '/features/trademark-risk-reduction',
                  '/features/247-trademark-protection'
                ];

                return (
                  <Link key={index} href={featureRoutes[index]} className="block h-full">
                    <div className="relative w-full h-full min-h-[108px] md:min-h-[126px] lg:min-h-[105px] rounded-[15px] lg:rounded-[11px] border-[6px] lg:border-[4px] border-white/[0.07] bg-white/[0.05] flex items-center justify-start px-3 md:px-4 lg:px-4 py-3 md:py-4 lg:py-2.5 overflow-hidden group transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                  {/* Decorative SVG Icon - Top Right */}
                  <div
                    className="w-20 md:w-32 lg:w-24 h-20 md:h-32 lg:h-24 flex-shrink-0 absolute top-0 right-0 z-[1] flex items-center justify-center pointer-events-none opacity-60"
                  >
                    {cardIcons[index]}
                  </div>
                  <div className="relative z-[2] w-full text-left">
                    <h3 className="text-white font-nunito text-[12px] md:text-[20px] lg:text-[18px] font-semibold leading-tight mb-1 md:mb-1.5 lg:mb-0.5 break-words">
                      {card.title}
                    </h3>
                    <p className="text-white font-nunito text-[10px] md:text-xs lg:text-[12px] font-medium leading-snug m-0 break-words">
                      {card.description}
                    </p>
                  </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden w-full">
              <div
                className="w-full rounded-[20px] p-4 border-2 border-white/[0.15] backdrop-blur-[16px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
                }}
              >
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                  {featureCards.map((card, index) => {
                    const featureRoutes = [
                      '/features/fast-trademark-registration',
                      '/features/expert-trademark-guidance',
                      '/features/affordable-trademark-services',
                      '/features/ai-powered-trademark-solutions',
                      '/features/trademark-risk-reduction',
                      '/features/247-trademark-protection'
                    ];

                    return (
                      <Link key={index} href={featureRoutes[index]} className="block">
                        <div className="flex items-center gap-3 cursor-pointer"
                      >
                      {/* Icon on the left */}
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center opacity-60">
                        {mobileCardIcons[index]}
                      </div>
                      {/* Title */}
                      <h3 
                        className="text-white font-nunito text-[14px] font-medium leading-[14px] break-words flex-1"
                        style={{
                          color: '#FFF',
                          fontFamily: 'Nunito',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          lineHeight: '14px'
                        }}
                      >
                        {card.title}
                      </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
        
       
      </div>

      {/* How It Works? */}
      <div className="w-full relative z-10 px-4 md:px-20 lg:px-20 min-h-fit mt-30 mb-30" style={{scale:1.1}}>
        <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] lg:text-[38px] font-medium leading-[32px] md:leading-[45px] lg:leading-[42px] w-full my-8 md:my-20 lg:my-16">
          How It Works
        </h2>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row w-full gap-4 lg:gap-3">
          {/* Step 1: Instant AI-Powered Trademark Search */}
          <div className="flex-1 flex justify-center items-center">
            <div
              className="relative w-full h-full rounded-[25px] lg:rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
              {/* Background Image - heross.png in bottom right */}
              <div className="absolute bottom-[-100px] lg:bottom-[-80px] right-[-100px] lg:right-[-80px] z-0">
                <Image
                  src="/figmacomp/heross.png"
                  alt="Hero background"
                  width={400}
                  height={300}
                  className="object-cover lg:w-[320px] lg:h-[200px] rounded-lg"
                />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col justify-start px-3 md:px-4 lg:px-5 py-3 md:py-4 lg:py-4 items-start">
                  <h3 className="text-white font-nunito text-[18px] md:text-[22px] lg:text-[20px] font-semibold leading-tight mb-1 md:mb-2 lg:mb-1.5 break-words mt-6 md:mt-8 lg:mt-6">
                    Instant AI-Powered Trademark Search
                  </h3>
                  <p className="text-white font-nunito text-[10px] md:text-[10px] lg:text-[13px] font-medium leading-snug m-0 break-words">
                    Enter your brand name or logo to instantly access a comprehensive AI-driven trademark database scan. Receive instant insights on potential conflicts, similarities, and risks with no manual searching needed.
                  </p>
                </div>
                {/* Search SVG - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-32 lg:w-24 h-10 lg:h-16 flex items-end justify-start">
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
          {/* Step 2 and 3: Report and Approval Chances */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-3">
            {/* Step 2: Comprehensive Trademark Search Report */}
            <div className="flex-1 flex justify-center items-center">
              <div
                className="relative w-full rounded-[25px] lg:rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col justify-start px-3 md:px-4 lg:px-5 py-3 md:py-4 lg:py-4 items-start">
                    <h3 className="text-white font-nunito text-[18px] md:text-[22px] lg:text-[20px] font-semibold leading-tight mb-1 md:mb-2 lg:mb-1.5 break-words mt-6 md:mt-8 lg:mt-6">
                      Comprehensive Trademark Search Report
                    </h3>
                    <p className="text-white font-nunito text-[10px] md:text-xs lg:text-[13px] font-medium leading-snug m-0 break-words">
                      Get a detailed trademark search report generated by AI, complete with conflict analysis, phonetic matching, and a registerability score to help you make informed filing decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 3: Know Your Approval Chances */}
            <div className="flex-1 flex justify-center items-center">
              <div
                className="relative w-full rounded-[25px] lg:rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col justify-start px-3 md:px-4 lg:px-5 py-3 md:py-4 lg:py-4 items-start">
                    <h3 className="text-white font-nunito text-[18px] md:text-[22px] lg:text-[20px] font-semibold leading-tight mb-1 md:mb-2 lg:mb-1.5 break-words mt-6 md:mt-8 lg:mt-6">
                      Know Your Approval Chances
                    </h3>
                    <p className="text-white font-nunito text-[10px] md:text-xs lg:text-[13px] font-medium leading-snug m-0 break-words">
                      Understand your brand's approval likelihood with a clear risk score and suggested trademark classes to increase registration success and reduce rejections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action: Check Your Registrability Now */}
          <div className="flex-1 flex flex-col items-stretch min-w-[260px] lg:min-w-[220px]">
            <div
              className="relative w-full h-full rounded-[25px] lg:rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col items-center justify-center px-6 lg:px-4 py-8 lg:py-6 overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.3) 0%, rgba(255, 183, 3, 0.2) 50%, rgba(138, 56, 245, 0.3) 100%)',
              }}
            >
              <h3 className="text-white font-nunito text-[20px] md:text-[24px] lg:text-[20px] font-semibold leading-tight mb-2 lg:mb-1.5 text-center -mt-20">
                Check Your Registrability Now
              </h3>
              <p className="text-white font-nunito text-[12px] md:text-[14px] lg:text-[13px] font-medium leading-snug m-0 mb-4 lg:mb-3 text-center">
                Use our AI-powered tool to check your trademark eligibility instantly and secure your brand with confidence.
              </p>
              <button
                className="relative overflow-hidden border-2 border-[#FFB703] rounded-[10px] px-4 md:px-6 lg:px-4 py-1.5 md:py-2 lg:py-1.5 font-nunito font-semibold text-sm md:text-base lg:text-sm mt-2 group"
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
              
              {/* Background Image - mess.png in bottom center */}
              <div className="hidden md:block absolute bottom-[-100px] lg:bottom-[-90px] left-1/2 transform -translate-x-1/2 z-0">
                <img
                  src="/mess.png"
                  alt="Messenger chat icon"
                  width={400}
                  height={300}
                  className="object-contain lg:w-[600px] lg:h-[250px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - 1 column, 4 rows */}
        <div className="flex md:hidden flex-col w-full gap-4 min-h-fit">
          {/* Step 1: Instant AI-Powered Trademark Search */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full max-w-sm h-48 rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
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
                <div className="flex flex-col justify-start px-3 py-3 items-start">
                  <h3 className="text-white font-nunito text-[16px] font-semibold leading-tight mb-1 break-words mt-4">
                    Instant AI-Powered Trademark Search
                  </h3>
                  <p className="text-white font-nunito text-[10px] font-medium leading-snug m-0 break-words">
                    Enter your brand name or logo to instantly access a comprehensive AI-driven trademark database scan. Receive instant insights on potential conflicts, similarities, and risks with no manual searching needed.
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
          {/* Step 2: Comprehensive Trademark Search Report */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full max-w-sm h-48 rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col justify-start px-3 py-3 items-start">
                  <h3 className="text-white font-nunito text-[16px] font-semibold leading-tight mb-1 break-words mt-4">
                    Comprehensive Trademark Search Report
                  </h3>
                  <p className="text-white font-nunito text-[10px] font-medium leading-snug m-0 break-words">
                    Get a detailed trademark search report generated by AI, complete with conflict analysis, phonetic matching, and a registerability score to help you make informed filing decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3: Know Your Approval Chances */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full max-w-sm h-48 rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.25) 0%, rgba(255, 183, 3, 0.15) 50%, rgba(138, 56, 245, 0.25) 100%)',
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col justify-start px-3 py-3 items-start">
                  <h3 className="text-white font-nunito text-[16px] font-semibold leading-tight mb-1 break-words mt-4">
                    Know Your Approval Chances
                  </h3>
                  <p className="text-white font-nunito text-[10px] font-medium leading-snug m-0 break-words">
                    Understand your brand’s approval likelihood with a clear risk score and suggested trademark classes to increase registration success and reduce rejections.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 4: Call to Action */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-full max-w-sm rounded-[20px] border-2 border-white/[0.15] backdrop-blur-[16px] flex flex-col items-center justify-center px-6 py-8 overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 56, 245, 0.3) 0%, rgba(255, 183, 3, 0.2) 50%, rgba(138, 56, 245, 0.3) 100%)',
              }}
            >
              <h3 className="text-white font-nunito text-[18px] font-semibold leading-tight mb-2 text-center">
                Check Your Registrability Now
              </h3>
              <p className="text-white font-nunito text-[11px] font-medium leading-snug m-0 mb-4 text-center">
                Use our AI-powered tool to check your trademark eligibility instantly and secure your brand with confidence.
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
              
              {/* Background Image - mess.png in bottom center */}
              <div className="hidden md:block absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-0">
                <img
                  src="/mess.png"
                  alt="Messenger chat icon"
                  width={200}
                  height={150}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
