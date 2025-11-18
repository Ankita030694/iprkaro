import { AnalysisData } from '@/lib/dashboard-utils';

interface MetricsSectionPDFPage2Props {
  analysisData: AnalysisData;
  userName?: string;
  generatedDate?: string;
}

export default function MetricsSectionPDFPage2({ 
  analysisData,
  userName = "Mr. XYZ",
  generatedDate = new Date().toLocaleDateString('en-GB')
}: MetricsSectionPDFPage2Props) {

  const keyFactors = [
    { 
      label: 'Brand Strength', 
      value: analysisData.keyFactors.brandStrength, 
      icon: 'brand' 
    },
    { 
      label: 'Legal Risk', 
      value: analysisData.keyFactors.legalRisk, 
      icon: 'legal' 
    },
    { 
      label: 'Market Position', 
      value: analysisData.keyFactors.marketPosition, 
      icon: 'market' 
    },
    { 
      label: 'Registration Speed', 
      value: analysisData.keyFactors.registrationSpeed, 
      icon: 'speed' 
    },
    { 
      label: 'Protection Level', 
      value: analysisData.keyFactors.protectionLevel, 
      icon: 'protection' 
    },
  ];

  const documents = [
    "Applicant's identity and address proof.",
    "Trademark/logo representation.",
    "List of goods/services with classes.",
    "Business registration proof (if applicable).",
    "Priority claim document (if applicable).",
    "Power of Attorney (Form TM-48).",
  ];

  const getIconSVG = (iconType: string) => {
    const iconStyle = { fill: 'none', stroke: 'black', strokeWidth: '2', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
    
    switch (iconType) {
      case 'brand':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...iconStyle}>
            <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"></path>
          </svg>
        );
      case 'legal':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...iconStyle}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'market':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...iconStyle}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'speed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...iconStyle}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        );
      case 'protection':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...iconStyle}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full font-[Poppins] pdf-page-2" style={{ padding: '8px', boxSizing: 'border-box' }}>
      {/* Key Factors Section */}
      <div className="w-full" style={{
        borderRadius: '25px',
        padding: '14px',
        paddingBottom: '14px',
        marginBottom: '8px',
        marginTop: '0px',
        paddingTop: '14px',
        backgroundColor: 'white',
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 6px rgba(0, 0, 0, 0.20) inset',
        boxSizing: 'border-box'
      }}>
        <h2 className="text-black text-xl font-medium" style={{ marginBottom: '12px', paddingBottom: '0px', boxSizing: 'border-box' }}>Key Factors</h2>
        <div className="flex flex-col" style={{ boxSizing: 'border-box' }}>
          {keyFactors.map((factor, index) => (
            <div
              key={index}
              className="flex items-center"
              style={{
                padding: '10px',
                borderRadius: '12px',
                border: '1.5px solid rgba(0, 0, 0, 0.15)',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                marginBottom: index < keyFactors.length - 1 ? '8px' : '0px',
                boxSizing: 'border-box'
              }}
            >
              <div className="flex-shrink-0" style={{ marginRight: '12px', boxSizing: 'border-box' }}>
                {getIconSVG(factor.icon)}
              </div>
              <div className="flex-1" style={{ boxSizing: 'border-box' }}>
                <h4 className="text-black text-base font-medium" style={{ marginBottom: '4px', paddingBottom: '0px', boxSizing: 'border-box' }}>
                  {factor.label}
                </h4>
                <p className="text-black text-sm font-normal" style={{ lineHeight: '16px', marginTop: '0px', paddingTop: '0px', marginBottom: '0px', boxSizing: 'border-box' }}>
                  {factor.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Required Section */}
      <div className="w-full" style={{
        borderRadius: '25px',
        padding: '14px',
        paddingBottom: '14px',
        marginBottom: '8px',
        marginTop: '0px',
        paddingTop: '14px',
        backgroundColor: 'white',
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 6px rgba(0, 0, 0, 0.20) inset',
        boxSizing: 'border-box'
      }}>
        <h2 className="text-black text-xl font-medium" style={{ marginBottom: '12px', paddingBottom: '0px', boxSizing: 'border-box' }}>Documents Required for Trademark Registration</h2>
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '16px',
            rowGap: '12px',
            boxSizing: 'border-box'
          }}
        >
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-start"
              style={{
                padding: '8px',
                marginBottom: '0px',
                boxSizing: 'border-box'
              }}
            >
              <span className="text-black text-base font-medium" style={{ marginRight: '8px', boxSizing: 'border-box' }}>•</span>
              <p className="text-black text-sm font-normal" style={{ lineHeight: '18px', marginTop: '0px', paddingTop: '0px', marginBottom: '0px', boxSizing: 'border-box', flex: 1 }}>
                {doc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-black/25" style={{ height: '110px', marginTop: '15px', paddingTop: '8px', boxSizing: 'border-box' }}>
        <div className="flex justify-between items-start" style={{ padding: '10px', boxSizing: 'border-box' }}>
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col" style={{ width: '224px', boxSizing: 'border-box' }}>
            <div className="relative" style={{ width: '65px', height: '49px', marginBottom: '8px', paddingBottom: '0px', boxSizing: 'border-box' }}>
              <img 
                src="/logo/iprlogo.svg" 
                alt="IPR Karo Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', boxSizing: 'border-box' }}
              />
            </div>
            <p className="text-white text-xs font-normal" style={{ marginTop: '0px', paddingTop: '0px', marginBottom: '0px', paddingBottom: '0px', boxSizing: 'border-box' }}>
              <span className="font-[Segoe_UI]">Turn Ideas Into Assets – </span>
              <span className="font-[Montserrat] bg-gradient-to-r from-[#069A81] via-[#3B82F6] to-[#069A81] bg-clip-text text-transparent">IPR Karo.</span>
            </p>
          </div>

          {/* Middle Section - Social Media */}
          <div className="flex flex-col" style={{ marginLeft: '32px', paddingLeft: '32px', boxSizing: 'border-box' }}>
            <p className="text-white text-xs font-medium font-[Nunito]" style={{ marginBottom: '8px', paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', boxSizing: 'border-box' }}>Follow us on</p>
            <div className="flex items-center" style={{ boxSizing: 'border-box' }}>
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '15px', paddingRight: '0px', boxSizing: 'border-box' }}>
                <path d="M17.6025 2.02764C17.4992 1.63573 17.2978 1.27844 17.0183 0.991343C16.7388 0.704248 16.391 0.497367 16.0095 0.3913C14.6126 0 8.99087 0 8.99087 0C8.99087 0 3.36883 0.0118444 1.972 0.403145C1.59045 0.509217 1.24261 0.716109 0.963115 1.00322C0.683623 1.29033 0.482232 1.64763 0.378998 2.03956C-0.0435099 4.58886 -0.207408 8.4734 0.390599 10.9207C0.493844 11.3126 0.69524 11.6699 0.974731 11.957C1.25422 12.2441 1.60206 12.451 1.9836 12.5571C3.38043 12.9484 9.00234 12.9484 9.00234 12.9484C9.00234 12.9484 14.6242 12.9484 16.0209 12.5571C16.4025 12.451 16.7503 12.2441 17.0298 11.957C17.3093 11.6699 17.5107 11.3126 17.614 10.9207C18.0596 8.36781 18.197 4.48565 17.6025 2.02764Z" fill="#FF0000"/>
                <path d="M7.20312 9.24849L11.8668 6.47385L7.20312 3.69922V9.24849Z" fill="white"/>
              </svg>
              
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '15px', paddingRight: '0px', boxSizing: 'border-box' }}>
                <path d="M13 6.5C13 2.91017 10.0898 0 6.5 0C2.91017 0 0 2.91017 0 6.5C0 9.74432 2.377 12.4334 5.48438 12.921V8.37891H3.83398V6.5H5.48438V5.06797C5.48438 3.43891 6.45477 2.53906 7.93945 2.53906C8.65072 2.53906 9.39453 2.66602 9.39453 2.66602V4.26563H8.57494C7.76743 4.26563 7.51562 4.76669 7.51562 5.28074V6.5H9.31836L9.03022 8.37891H7.51562V12.921C10.623 12.4334 13 9.74437 13 6.5Z" fill="#1877F2"/>
                <path d="M9.01648 8.37891L9.30469 6.5H7.50195V5.28074C7.50195 4.76663 7.75381 4.26563 8.56133 4.26563H9.38086V2.66602C9.38086 2.66602 8.63705 2.53906 7.92578 2.53906C6.4411 2.53906 5.47071 3.43891 5.47071 5.06797V6.5H3.82031V8.37891H5.47071V12.921C5.80669 12.9737 6.14627 13.0001 6.48633 13C6.82639 13.0001 7.16597 12.9737 7.50195 12.921V8.37891H9.01648Z" fill="white"/>
              </svg>

              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '15px', paddingRight: '0px', boxSizing: 'border-box' }}>
                <rect width="13" height="13" rx="3.04688" fill="url(#paint0_radial_instagram)"/>
                <rect width="13" height="13" rx="3.04688" fill="url(#paint1_radial_instagram)"/>
                <path d="M6.5005 1.42188C5.1213 1.42188 4.9482 1.42792 4.4066 1.45255C3.866 1.47733 3.4969 1.56289 3.1741 1.68848C2.84 1.81817 2.5567 1.99169 2.2745 2.27404C1.992 2.55633 1.8185 2.83964 1.6884 3.17352C1.5624 3.49649 1.4768 3.86567 1.4524 4.40604C1.4282 4.94772 1.4219 5.12088 1.4219 6.50005C1.4219 7.87922 1.428 8.05177 1.4525 8.59341C1.4774 9.13402 1.563 9.50305 1.6885 9.82592C1.8183 10.16 1.9918 10.4433 2.2741 10.7255C2.5563 11.008 2.8396 11.1819 3.1734 11.3116C3.4965 11.4372 3.8656 11.5228 4.4061 11.5476C4.9478 11.5722 5.1208 11.5782 6.4998 11.5782C7.8791 11.5782 8.0517 11.5722 8.5933 11.5476C9.1339 11.5228 9.5034 11.4372 9.8265 11.3116C10.1604 11.1819 10.4433 11.008 10.7254 10.7255C11.0079 10.4433 11.1814 10.16 11.3115 9.82607C11.4363 9.50305 11.5221 9.13392 11.5475 8.59351C11.5718 8.05188 11.5781 7.87922 11.5781 6.50005C11.5781 5.12088 11.5718 4.94782 11.5475 4.40614C11.5221 3.86552 11.4363 3.49654 11.3115 3.17368C11.1814 2.83964 11.0079 2.55633 10.7254 2.27404C10.443 1.99159 10.1605 1.81807 9.8262 1.68853C9.5024 1.56289 9.1332 1.47728 8.5926 1.45255C8.0509 1.42792 7.8785 1.42188 6.4989 1.42188H6.5005ZM6.0449 2.337C6.1801 2.3368 6.331 2.337 6.5005 2.337C7.8564 2.337 8.017 2.34188 8.5525 2.3662C9.0476 2.38885 9.3163 2.47157 9.4953 2.54109C9.7323 2.63311 9.9013 2.74315 10.0789 2.92094C10.2566 3.09867 10.3666 3.26793 10.4589 3.50492C10.5284 3.68367 10.6113 3.95241 10.6338 4.44752C10.6581 4.98286 10.6634 5.14363 10.6634 6.49888C10.6634 7.85413 10.6581 8.01496 10.6338 8.55024C10.6111 9.04536 10.5284 9.31409 10.4589 9.49289C10.3669 9.72989 10.2566 9.89864 10.0789 10.0763C9.9012 10.254 9.7324 10.364 9.4953 10.4561C9.3165 10.5259 9.0476 10.6084 8.5525 10.6311C8.0171 10.6554 7.8564 10.6607 6.5005 10.6607C5.1445 10.6607 4.9838 10.6554 4.4485 10.6311C3.9534 10.6082 3.6846 10.5255 3.5055 10.456C3.2685 10.3639 3.0992 10.2539 2.9215 10.0762C2.7438 9.89843 2.6338 9.72959 2.5415 9.49249C2.472 9.31369 2.3892 9.04495 2.3666 8.54984C2.3423 8.0145 2.3374 7.85373 2.3374 6.49761C2.3374 5.1415 2.3423 4.98159 2.3666 4.44625C2.3893 3.95114 2.472 3.6824 2.5415 3.5034C2.6336 3.2664 2.7438 3.09715 2.9215 2.91941C3.0993 2.74168 3.2685 2.63164 3.5055 2.53942C3.6845 2.46959 3.9534 2.38707 4.4485 2.36432C4.9169 2.34315 5.0985 2.3368 6.0449 2.33573V2.337ZM9.2112 3.18018C8.8747 3.18018 8.6018 3.45287 8.6018 3.78935C8.6018 4.12577 8.8747 4.39872 9.2112 4.39872C9.5476 4.39872 9.8205 4.12577 9.8205 3.78935C9.8205 3.45292 9.5476 3.17997 9.2112 3.17997V3.18018ZM6.5005 3.89218C5.0603 3.89218 3.8926 5.05984 3.8926 6.50005C3.8926 7.94026 5.0603 9.10736 6.5005 9.10736C7.9407 9.10736 9.1079 7.94026 9.1079 6.50005C9.1079 5.0599 7.9406 3.89218 6.5004 3.89218H6.5005ZM6.5005 4.80731C7.4353 4.80731 8.1932 5.56512 8.1932 6.50005C8.1932 7.43488 7.4353 8.19279 6.5005 8.19279C5.5656 8.19279 4.8078 7.43488 4.8078 6.50005C4.8078 5.56512 5.5656 4.80731 6.5005 4.80731Z" fill="white"/>
                <defs>
                  <radialGradient id="paint0_radial_instagram" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.45312 14.0013) rotate(-90) scale(12.884 11.9831)">
                    <stop stopColor="#FFDD55"/>
                    <stop offset="0.1" stopColor="#FFDD55"/>
                    <stop offset="0.5" stopColor="#FF543E"/>
                    <stop offset="1" stopColor="#C837AB"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_instagram" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.17756 0.936457) rotate(78.681) scale(5.7592 23.7396)">
                    <stop stopColor="#3771C8"/>
                    <stop offset="0.128" stopColor="#3771C8"/>
                    <stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>

              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.7368 5.50469L14.576 0H13.429L9.2274 4.77953L5.8711 0H2L7.0753 7.22759L2 13H3.1469L7.5845 7.95265L11.1289 13H15L9.7365 5.50469H9.7368ZM8.166 7.29117L7.6517 6.5715L3.5601 0.844797H5.3217L8.6235 5.4665L9.1377 6.18617L13.43 12.1936H11.6685L8.166 7.29148V7.29117Z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex flex-col text-right" style={{ boxSizing: 'border-box' }}>
            <p className="text-white text-sm font-normal" style={{ marginBottom: '8px', paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', boxSizing: 'border-box' }}>Website: www.iprkaro.com</p>
            <p className="text-white text-sm font-normal" style={{ marginBottom: '8px', paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', boxSizing: 'border-box' }}>Phone: 9289707648</p>
            <p className="text-white text-sm font-normal leading-4" style={{ marginBottom: '0px', paddingBottom: '0px', marginTop: '0px', paddingTop: '0px', boxSizing: 'border-box' }}>
              Address: 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

