import React from 'react';

const OurHeadOffice = () => {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M15.1493 20.3279L19.775 14.1147C20.1365 13.6284 25 6.89643 25 7.54382L20.8147 19.3872C20.8147 19.7745 21.0804 20.0892 21.4089 20.0892H23.659C24.1699 20.0892 24.4422 20.8016 24.1045 21.2554L19.4788 27.4686C19.1173 27.9541 15.5948 33.0911 15.5948 32.4437L18.4391 22.1953C18.4391 21.808 18.1727 21.4933 17.8449 21.4933H15.5948C15.0839 21.4933 14.8116 20.7816 15.1493 20.3279Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fast Process"
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M19.5 30C24.2137 30 26.5712 30 28.035 28.535C29.5 27.0712 29.5 24.7137 29.5 20M19.5 30C14.7863 30 12.4287 30 10.965 28.535C9.50125 27.07 9.5 24.7137 9.5 20M19.5 30V32.5M9.5 20C9.5 15.2863 9.5 12.9287 10.965 11.465C12.43 10.0012 14.7863 10 19.5 10M9.5 20H7M19.5 10C24.2137 10 26.5712 10 28.035 11.465C29.4987 12.93 29.5 15.2863 29.5 20M19.5 10V7.5M29.5 20H32M14.5 7.5V10M24.5 7.5V10M14.5 30V32.5M24.5 30V32.5M32 25H29.5M9.5 15H7M9.5 25H7M32 15H29.5" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.8511 14.8267C18.9 14.6936 18.9886 14.5788 19.1048 14.4977C19.2211 14.4165 19.3594 14.373 19.5011 14.373C19.6429 14.373 19.7812 14.4165 19.8975 14.4977C20.0137 14.5788 20.1022 14.6936 20.1511 14.8267L21.1511 17.5304C21.2911 17.9092 21.5911 18.2092 21.9699 18.3492L24.6736 19.3492C24.8067 19.3981 24.9215 19.4866 25.0026 19.6029C25.0838 19.7191 25.1273 19.8574 25.1273 19.9992C25.1273 20.1409 25.0838 20.2793 25.0026 20.3955C24.9215 20.5117 24.8067 20.6003 24.6736 20.6492L21.9699 21.6492C21.7821 21.7179 21.6115 21.8268 21.4701 21.9682C21.3287 22.1096 21.2199 22.2801 21.1511 22.4679L20.1511 25.1717C20.1022 25.3047 20.0137 25.4196 19.8975 25.5007C19.7812 25.5818 19.6429 25.6253 19.5011 25.6253C19.3594 25.6253 19.2211 25.5818 19.1048 25.5007C18.9886 25.4196 18.9 25.3047 18.8511 25.1717L17.8511 22.4679C17.7824 22.2801 17.6736 22.1096 17.5321 21.9682C17.3907 21.8268 17.2202 21.7179 17.0324 21.6492L14.3286 20.6492C14.1956 20.6003 14.0807 20.5117 13.9996 20.3955C13.9185 20.2793 13.875 20.1409 13.875 19.9992C13.875 19.8574 13.9185 19.7191 13.9996 19.6029C14.0807 19.4866 14.1956 19.3981 14.3286 19.3492L17.0324 18.3492C17.2198 18.2797 17.3899 18.1706 17.5312 18.0293C17.6726 17.888 17.7817 17.7178 17.8511 17.5304L18.8511 14.8267Z" stroke="#FFB703" strokeWidth="2"/>
        </svg>
      ),
      title: "AI Driven"
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M27.0526 31.5671C26.6595 31.7449 26.2363 31.8467 25.8053 31.8671C24.3961 31.9382 22.4224 32 19.8158 32C17.2092 32 15.2355 31.9375 13.8263 31.8664C13.3954 31.8462 12.9721 31.7446 12.5789 31.5671M30.0132 27.973C29.5098 28.2962 28.9304 28.4818 28.3329 28.5112C26.4987 28.6112 23.7046 28.7099 19.8158 28.7099C15.927 28.7099 13.1329 28.6112 11.2987 28.5112C10.7012 28.4818 10.1218 28.2962 9.61842 27.973M6.26184 22.2697C6.42368 23.9112 7.74737 25.0908 9.39539 25.1809C11.5145 25.2974 14.9224 25.4211 19.8158 25.4211C24.7092 25.4211 28.1171 25.2974 30.2368 25.1809C31.8842 25.0908 33.2079 23.9112 33.3697 22.2697C33.5092 20.8559 33.6316 18.8599 33.6316 16.2105C33.6316 13.5612 33.5092 11.5651 33.3697 10.1513C33.2079 8.50921 31.8842 7.33026 30.2362 7.24013C28.1171 7.12368 24.7092 7 19.8158 7C14.9224 7 11.5145 7.12368 9.39474 7.24013C7.74737 7.33026 6.42368 8.50987 6.26184 10.1513C6.12237 11.5658 6 13.5612 6 16.2105C6 18.8599 6.12237 20.8559 6.26184 22.2697Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.4498 13.2565C22.4498 13.2565 21.3972 12.4506 19.8183 12.4506C18.5025 12.4506 17.1867 13.2565 17.1867 14.3302C17.1867 17.0157 22.4498 15.4045 22.4498 18.09C22.4498 19.1637 21.134 19.9696 19.8183 19.9696M19.8183 19.9696C18.2393 19.9696 17.1867 19.1637 17.1867 19.1637M19.8183 19.9696V21.4736M19.8183 12.4512V10.9473M28.3709 16.2104H27.713M11.9235 16.2104H11.2656" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cost Effective"
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M15.9545 18.3636C17.4615 18.3636 18.9066 17.765 19.9722 16.6995C21.0377 15.6339 21.6364 14.1887 21.6364 12.6818C21.6364 11.1749 21.0377 9.72971 19.9722 8.66417C18.9066 7.59862 17.4615 7 15.9545 7C14.4476 7 13.0024 7.59862 11.9369 8.66417C10.8713 9.72971 10.2727 11.1749 10.2727 12.6818C10.2727 14.1887 10.8713 15.6339 11.9369 16.6995C13.0024 17.765 14.4476 18.3636 15.9545 18.3636ZM15.9545 18.3636C18.242 18.3636 20.2409 19.2273 21.6625 20.6625C22.5053 21.517 23.1359 22.5574 23.5034 23.7M15.9545 18.3636C11.4091 18.3636 8 21.7727 8 26.3182V32H19.3636M20.5 27.2545L25.2614 30.8636L33 20.6364" stroke="#FFB703" strokeWidth="2"/>
        </svg>
      ),
      title: "Expert Guidance"
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M9 18.75L20.25 15L31.5 18.75M20.25 7.5V31.875" stroke="#FFB703" strokeWidth="2"/>
          <path d="M9.24125 22.5C10.3125 27.8725 14.72 30.6413 17.6238 31.9088C18.525 32.3025 18.9762 32.5 20.25 32.5C21.525 32.5 21.975 32.3025 22.8762 31.9088C23.6 31.5938 24.415 31.1838 25.25 30.6663M29 27.38C30.4537 25.535 31.5 23.12 31.5 19.9888V18.0212C31.5 14.0237 31.5 12.025 31.0275 11.3525C30.5562 10.6812 28.6775 10.0375 24.9187 8.75125L24.2025 8.50625C22.2437 7.835 21.265 7.5 20.25 7.5C19.235 7.5 18.2563 7.835 16.2975 8.50625L15.5813 8.75C11.8225 10.0375 9.94375 10.6812 9.4725 11.3525C9 12.025 9 14.025 9 18.0212V18.75" stroke="#FFB703" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Risk Reduction"
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="5" fill="white" fillOpacity="0.25"/>
          <path d="M19.9688 32C26.0612 32 31 27.0612 31 20.9688C31 14.8764 26.0612 9.9375 19.9688 9.9375C13.8764 9.9375 8.9375 14.8764 8.9375 20.9688C8.9375 27.0612 13.8764 32 19.9688 32Z" stroke="#FFB703" strokeWidth="2"/>
          <path d="M10.4582 7C9.38913 7.28633 8.41427 7.84908 7.63168 8.63168C6.84908 9.41427 6.28633 10.3891 6 11.4582M29.4793 7C30.5483 7.28633 31.5232 7.84908 32.3058 8.63168C33.0884 9.41427 33.6511 10.3891 33.9375 11.4582M19.9687 14.6652V20.5748C19.9687 20.7922 20.1452 20.9687 20.3627 20.9687H24.6964" stroke="#FFB703" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "24/7 Accessibility"
    }
  ];

  return (
    <div
      className="bg-[#171717] py-6 sm:py-12 md:py-14 lg:py-14"
      style={{
        transform: 'scale(1)',
        transformOrigin: 'top center',
      }}
    >
      {/* Large screen scaling */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1024px) {
            .head-office-scale {
              transform: scale(0.8) !important;
            }
          }
        `
      }} />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-12 head-office-scale px-6 sm:px-10 md:px-12 lg:px-12 xl:px-[72px]">
        {/* Left Section - Our Head Office */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-10 w-full lg:max-w-[374px]">
          <div className="flex flex-col gap-8 sm:gap-8 md:gap-10">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-12">
              <h2 className="text-white font-nunito text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                Our Head Office
              </h2>
              <div className="flex flex-col gap-6 sm:gap-7">
                <a 
                  href="tel:+918700343611" 
                  className="text-white font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal leading-relaxed hover:text-[#FFB703] transition-colors"
                >
                  +918700343611
                </a>
                <a 
                  href="mailto:notify@amalegalsolutions.com" 
                  className="text-white font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal leading-relaxed hover:text-[#FFB703] transition-colors break-words"
                >
                  notify@amalegalsolutions.com
                </a>
              </div>
            </div>
            <div className="text-white font-nunito text-base sm:text-lg md:text-xl lg:text-xl font-normal leading-relaxed mt-2">
              2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-14 w-full lg:max-w-[794px]">
          {/* Google Rating Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10 md:gap-12">
            <div className="flex items-center gap-4 sm:gap-[15px] flex-shrink-0">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-[25px] sm:h-[25px]">
                <g clipPath="url(#clip0_977_4548)">
                  <path d="M8.70706 0.822834C6.20917 1.68937 4.055 3.3341 2.56095 5.51542C1.0669 7.69674 0.311729 10.2997 0.40636 12.9419C0.500991 15.5841 1.44043 18.1264 3.0867 20.1952C4.73297 22.2641 6.99928 23.7505 9.55276 24.4361C11.6229 24.9703 13.7918 24.9937 15.8731 24.5045C17.7585 24.081 19.5016 23.1751 20.9317 21.8756C22.4201 20.4817 23.5005 18.7085 24.0567 16.7467C24.6612 14.6132 24.7688 12.3696 24.3711 10.1881H12.7461V15.0103H19.4785C19.344 15.7795 19.0557 16.5135 18.6308 17.1686C18.2059 17.8237 17.6533 18.3863 17.0059 18.8228C16.1838 19.3666 15.2571 19.7325 14.2852 19.8971C13.3105 20.0783 12.3107 20.0783 11.336 19.8971C10.3481 19.6928 9.4135 19.2851 8.59182 18.6998C7.2718 17.7654 6.28065 16.4379 5.75979 14.9068C5.23013 13.347 5.23013 11.656 5.75979 10.0963C6.13055 9.00294 6.74345 8.00747 7.55276 7.18416C8.47892 6.22468 9.65146 5.53884 10.9417 5.20189C12.232 4.86493 13.5902 4.88989 14.8672 5.27401C15.8648 5.58024 16.7771 6.11529 17.5313 6.83651C18.2904 6.0813 19.0482 5.32414 19.8047 4.56502C20.1953 4.15682 20.6211 3.76815 21.0059 3.35018C19.8546 2.27884 18.5033 1.44521 17.0293 0.897053C14.3452 -0.0775763 11.4082 -0.103769 8.70706 0.822834Z" fill="white"/>
                  <path d="M8.70898 0.82183C11.4099 -0.105402 14.3469 -0.0798995 17.0312 0.894096C18.5055 1.44598 19.8562 2.28362 21.0059 3.35894C20.6152 3.77691 20.2031 4.16753 19.8047 4.57378C19.0469 5.33029 18.2897 6.0842 17.5332 6.8355C16.779 6.11429 15.8667 5.57924 14.8691 5.273C13.5925 4.88754 12.2344 4.86114 10.9438 5.19672C9.65316 5.53229 8.47991 6.21687 7.55273 7.17535C6.74342 7.99866 6.13052 8.99413 5.75977 10.0875L1.71094 6.95269C3.16017 4.07879 5.66943 1.88047 8.70898 0.82183Z" fill="#E33629"/>
                  <path d="M0.640619 10.0586C0.858239 8.98007 1.21953 7.9356 1.71484 6.95312L5.76367 10.0957C5.23401 11.6555 5.23401 13.3465 5.76367 14.9062C4.41471 15.9479 3.0651 16.9948 1.71484 18.0469C0.474898 15.5787 0.0967379 12.7666 0.640619 10.0586Z" fill="#F8BD00"/>
                  <path d="M12.7509 10.1855H24.3759C24.7735 12.3671 24.6659 14.6107 24.0614 16.7441C23.5052 18.706 22.4249 20.4792 20.9364 21.873C19.6298 20.8535 18.3173 19.8418 17.0106 18.8223C17.6584 18.3853 18.2114 17.8221 18.6362 17.1663C19.0611 16.5105 19.3492 15.7757 19.4833 15.0059H12.7509C12.7489 13.4004 12.7509 11.793 12.7509 10.1855Z" fill="#587DBD"/>
                  <path d="M1.71094 18.0469C3.0612 17.0052 4.41081 15.9583 5.75977 14.9062C6.28166 16.4379 7.27423 17.7654 8.5957 18.6992C9.41994 19.2818 10.3565 19.6862 11.3457 19.8867C12.3204 20.068 13.3202 20.068 14.2949 19.8867C15.2668 19.7222 16.1935 19.3563 17.0156 18.8125C18.3223 19.832 19.6348 20.8438 20.9414 21.8633C19.5115 23.1635 17.7684 24.0701 15.8828 24.4941C13.8016 24.9834 11.6327 24.96 9.5625 24.4258C7.9252 23.9886 6.39585 23.218 5.07031 22.1621C3.66731 21.0482 2.5214 19.6445 1.71094 18.0469Z" fill="#319F43"/>
                </g>
                <defs>
                  <clipPath id="clip0_977_4548">
                    <rect width="25" height="25" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-white font-nunito text-xl sm:text-2xl md:text-[25px] font-normal leading-relaxed">
                4.7
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-2">
              <h3 className="text-white font-nunito text-xl sm:text-2xl md:text-[28px] lg:text-[28px] font-bold leading-tight">
                Loved and Trusted by 1.25L Indians
              </h3>
              <p className="text-white font-nunito text-sm sm:text-sm md:text-[15px] font-normal italic leading-relaxed">
                Rated 5 stars by Startups, Entrepreneur and Companies
              </p>
            </div>
          </div>

          {/* Why Trademark Section */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-8">
            <h3 className="text-white font-nunito text-2xl sm:text-3xl md:text-[32px] lg:text-[32px] font-normal leading-tight">
              Why Trademark with IPRKaro ?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-4 sm:gap-y-10 sm:gap-x-6 md:gap-y-10 md:gap-x-8 lg:gap-y-12 lg:gap-x-12 xl:gap-10">
              {/* Feature Items */}
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-">
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-11 lg:h-11">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-white font-nunito text-sm sm:text-base md:text-[17px] lg:text-[17px] font-normal leading-relaxed">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHeadOffice;
