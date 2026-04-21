import Image from 'next/image';
import { AnalysisData, getFilingDate, getEstimatedDate } from '@/lib/dashboard-utils';
import { features, trademarkRequirements } from '@/lib/dashboard-data';

interface ContentSectionProps {
  analysisData: AnalysisData;
}

export default function ContentSection({ analysisData }: ContentSectionProps) {
  const filingDate = getFilingDate();
  const estimatedDate = getEstimatedDate();

  const mobileCardIcons = [
    <svg key="lightning" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
      <path d="M1.14933 11.2623L5.77496 6.29174C6.13652 5.90275 11 0.517143 11 1.03506L6.8147 10.5098C6.8147 10.8196 7.08042 11.0714 7.40893 11.0714H9.65895C10.1699 11.0714 10.4422 11.6413 10.1045 12.0043L5.47883 16.9748C5.11727 17.3633 1.59484 21.4729 1.59484 20.9549L4.43909 12.7563C4.43909 12.4464 4.17271 12.1946 3.84486 12.1946H1.59484C1.0839 12.1946 0.811567 11.6253 1.14933 11.2623Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    <svg key="usercheck" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M7.36364 10.0909C8.56917 10.0909 9.72532 9.61201 10.5778 8.75958C11.4302 7.90714 11.9091 6.75098 11.9091 5.54545C11.9091 4.33993 11.4302 3.18377 10.5778 2.33133C9.72532 1.47889 8.56917 1 7.36364 1C6.15811 1 5.00195 1.47889 4.14951 2.33133C3.29708 3.18377 2.81818 4.33993 2.81818 5.54545C2.81818 6.75098 3.29708 7.90714 4.14951 8.75958C5.00195 9.61201 6.15811 10.0909 7.36364 10.0909ZM7.36364 10.0909C9.19364 10.0909 10.7927 10.7818 11.93 11.93C12.6043 12.6136 13.1087 13.4459 13.4027 14.36M7.36364 10.0909C3.72727 10.0909 1 12.8182 1 16.4545V21H10.0909M11 17.2036L14.8091 20.0909L21 11.9091" stroke="currentColor" strokeWidth="1.5"/>
    </svg>,
    <svg key="shield" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
      <path d="M17.8421 20.6537C17.5276 20.7959 17.189 20.8773 16.8442 20.8937C15.7168 20.9505 14.1379 21 12.0526 21C9.96737 21 8.38842 20.95 7.26105 20.8932C6.9163 20.877 6.57771 20.7957 6.26316 20.6537M20.2105 17.7784C19.8078 18.037 19.3443 18.1854 18.8663 18.2089C17.3989 18.2889 15.1637 18.3679 12.0526 18.3679C8.94158 18.3679 6.70632 18.2889 5.23895 18.2089C4.76094 18.1854 4.29746 18.037 3.89474 17.7784M1.20947 13.2158C1.33895 14.5289 2.39789 15.4726 3.71632 15.5447C5.41158 15.6379 8.13789 15.7368 12.0526 15.7368C15.9674 15.7368 18.6937 15.6379 20.3895 15.5447C21.7074 15.4726 22.7663 14.5289 22.8958 13.2158C23.0074 12.0847 23.1053 10.4879 23.1053 8.36842C23.1053 6.24895 23.0074 4.65211 22.8958 3.52105C22.7663 2.20737 21.7074 1.26421 20.3889 1.19211C18.6937 1.09895 15.9674 1 12.0526 1C8.13789 1 5.41158 1.09895 3.71579 1.19211C2.39789 1.26421 1.33895 2.20789 1.20947 3.52105C1.09789 4.65263 1 6.24895 1 8.36842C1 10.4879 1.09789 12.0847 1.20947 13.2158Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1583 6.00752C14.1583 6.00752 13.3162 5.36279 12.053 5.36279C11.0004 5.36279 9.94778 6.00752 9.94778 6.86647C9.94778 9.01489 14.1583 7.72595 14.1583 9.87437C14.1583 10.7333 13.1057 11.3781 12.053 11.3781M12.053 11.3781C10.7899 11.3781 9.94778 10.7333 9.94778 10.7333M12.053 11.3781V12.5812M12.053 5.36331V4.16016M18.8951 8.37068H18.3688M5.73725 8.37068H5.21094" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    <svg key="star" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11.1055 19C14.8765 19 16.7625 19 17.9335 17.828C19.1055 16.657 19.1055 14.771 19.1055 11M11.1055 19C7.33447 19 5.44847 19 4.27747 17.828C3.10647 16.656 3.10547 14.771 3.10547 11M11.1055 19V21M3.10547 11C3.10547 7.229 3.10547 5.343 4.27747 4.172C5.44947 3.001 7.33447 3 11.1055 3M3.10547 11H1.10547M11.1055 3C14.8765 3 16.7625 3 17.9335 4.172C19.1045 5.344 19.1055 7.229 19.1055 11M11.1055 3V1M19.1055 11H21.1055M7.10547 1V3M15.1055 1V3M7.10547 19V21M15.1055 19V21M21.1055 15H19.1055M3.10547 7H1.10547M3.10547 15H1.10547M21.1055 7H19.1055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5864 6.86291C10.6255 6.75647 10.6963 6.6646 10.7893 6.5997C10.8823 6.5348 10.993 6.5 11.1064 6.5C11.2198 6.5 11.3304 6.5348 11.4234 6.5997C11.5164 6.6646 11.5873 6.75647 11.6264 6.86291L12.4264 9.02591C12.5384 9.32891 12.7784 9.56891 13.0814 9.68091L15.2444 10.4809C15.3508 10.52 15.4427 10.5909 15.5076 10.6839C15.5725 10.7768 15.6073 10.8875 15.6073 11.0009C15.6073 11.1143 15.5725 11.225 15.5076 11.318C15.4427 11.411 15.3508 11.4818 15.2444 11.5209L13.0814 12.3209C12.9311 12.3759 12.7947 12.463 12.6816 12.5761C12.5684 12.6892 12.4814 12.8257 12.4264 12.9759L11.6264 15.1389C11.5873 15.2453 11.5164 15.3372 11.4234 15.4021C11.3304 15.467 11.2198 15.5018 11.1064 15.5018C10.993 15.5018 10.8823 15.467 10.7893 15.4021C10.6963 15.3372 10.6255 15.2453 10.5864 15.1389L9.78638 12.9759C9.7314 12.8257 9.64431 12.6892 9.53118 12.5761C9.41806 12.463 9.28162 12.3759 9.13138 12.3209L6.96838 11.5209C6.86194 11.4818 6.77007 11.411 6.70517 11.318C6.64027 11.225 6.60547 11.1143 6.60547 11.0009C6.60547 10.8875 6.64027 10.7768 6.70517 10.6839C6.77007 10.5909 6.86194 10.52 6.96838 10.4809L9.13138 9.68091C9.28128 9.62534 9.41742 9.53805 9.53047 9.425C9.64352 9.31195 9.73081 9.17582 9.78638 9.02591L10.5864 6.86291Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>,
    <svg key="shieldcheck" xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path d="M1 10L10 7L19 10M10 1V20.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1.193 13C2.05 17.298 5.576 19.513 7.899 20.527C8.62 20.842 8.981 21 10 21C11.02 21 11.38 20.842 12.101 20.527C12.68 20.275 13.332 19.947 14 19.533M17 16.904C18.163 15.428 19 13.496 19 10.991V9.417C19 6.219 19 4.62 18.622 4.082C18.245 3.545 16.742 3.03 13.735 2.001L13.162 1.805C11.595 1.268 10.812 1 10 1C9.188 1 8.405 1.268 6.838 1.805L6.265 2C3.258 3.03 1.755 3.545 1.378 4.082C1 4.62 1 6.22 1 9.417V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    <svg key="clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <div className="space-y-4 md:space-y-6 md:mx-auto w-full">
      <div
        className="flex p-3 md:p-5 justify-center items-center rounded-[16px] border border-slate-200 bg-white shadow-sm"
      >
        <div className="md:hidden flex flex-col items-center gap-2 w-full px-2 py-1">
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
            <span className="text-[#0C002B] font-nunito text-[14px] lg:text-[18px] font-medium leading-[17px] lg:leading-[20px]">
              4.7
            </span>
          </div>
          <div className="text-center">
            <div className="text-[#0C002B] font-nunito text-[12.6px] lg:text-[16px] font-medium leading-[15px] lg:leading-[18px] mb-1">
              Trusted by Over 1.25 Lakh Clients
            </div>
            <div className="text-[#6B7280] font-nunito text-[8.4px] lg:text-[11px] italic font-normal leading-[10px] lg:leading-[12px]">
              Rated 4.7/5 stars for reliable trademark registration across India, startups, and enterprises.
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-start gap-4 w-full">
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
            <span className="text-[#0C002B] font-nunito text-[25px] lg:text-[22px] font-medium leading-[30px] lg:leading-[24px] ml-1">
              4.7
            </span>
          </div>
          <div className="flex-1">
            <div className="text-[#0C002B] font-nunito text-[20px] lg:text-[18px] font-medium leading-[24px] lg:leading-[20px] mb-2">
              Trusted by Over 1.25 Lakh Clients
            </div>
            <div className="text-[#6B7280] font-nunito text-[12px] lg:text-[11px] italic font-normal leading-[14px] lg:leading-[12px]">
              Rated 4.7/5 stars for reliable trademark registration across India, startups, and enterprises.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-[#0C002B] font-nunito text-lg md:text-2xl font-medium text-center md:text-left">
          Why Trademark with IPRKaro ?
        </h3>

        <div className="md:hidden w-full">
          <div
            className="w-full rounded-[12px] p-4 border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-[#1952C7]">
                    {mobileCardIcons[feature.icon]}
                  </div>
                  <h3 className="text-[#0C002B] font-nunito text-[14px] font-medium leading-[14px] break-words flex-1">
                    {feature.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 p-2">
                <div
                  className="flex-shrink-0 text-[#1952C7] p-2 rounded-md bg-slate-50"
                >
                  {mobileCardIcons[feature.icon]}
                </div>
                <span className="text-[#0C002B] font-nunito text-sm lg:text-base font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-12 mb-6 w-full">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-0 md:gap-8">
          <div className="hidden md:flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '2.5px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: '#FFD700'
                  }}
                ></div>
              </div>
              <div className="absolute top-7 left-9 transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="95" viewBox="0 0 62 119" fill="none">
                  <path d="M1 0V102C1 110.837 8.16344 118 17 118H61.5" stroke="white" strokeOpacity="0.7" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>

        <div className="flex-1 space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-[#0C002B] font-nunito text-base md:text-xl lg:text-2xl font-medium">
                Get a Guaranteed Trademark on
              </h3>
            </div>

            <div className="space-y-4 mt-13">
              <div
                className="relative p-4 rounded-2xl w-full max-w-[500px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between px-10">
                  <div className="text-[#0C002B] font-nunito text-sm md:text-base font-medium">
                    Filing Date
                  </div>
                  <div className="text-[#6B7280] font-nunito text-xs md:text-sm">
                    {filingDate}
                  </div>
                </div>
              </div>

              <div
                className="relative p-4 rounded-2xl w-full max-w-[500px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between px-10">
                  <div className="text-[#0C002B] font-nunito text-sm md:text-base font-medium">
                    Estimated Date
                  </div>
                  <div className="text-[#6B7280] font-nunito text-xs md:text-sm">
                    {estimatedDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-[#0C002B] font-nunito text-lg md:text-2xl font-medium text-center md:text-left">
          Documents Required
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {trademarkRequirements.map((req, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1952C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <span className="text-[#0C002B] font-nunito text-[8px] md:text-[10px] lg:text-xs font-medium text-center">
                {req.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-[#0C002B] font-nunito text-lg md:text-2xl font-medium text-center md:text-left">
          We work with the Guidelines of
        </h3>
        <div className="md:hidden flex items-center justify-between w-full gap-0 rounded-2xl bg-slate-900 px-4 py-3">
          {[9, 10, 11, 12].map((num) => (
            <div key={num} className="flex-1 flex items-center justify-center">
              <Image
                src={`/clientlogos/white${num}.png`}
                alt={`Service ${num}`}
                className="w-full h-auto object-contain max-w-[120px]"
                width={120}
                height={90}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-start gap-6 md:gap-8 rounded-2xl bg-slate-900 px-6 py-5">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="flex items-center justify-center p-4 md:p-5"
              style={{
                background: 'transparent',
                border: '1px solid rgba(148, 163, 184, 0.6)',
                borderRadius: '16px',
                width: '140px',
                height: '140px',
                minWidth: '120px',
                minHeight: '120px'
              }}
            >
              <Image src={`/serv${num}.svg`} alt={`Service ${num}`} className="w-14 h-14 md:w-16 md:h-16" width={64} height={64} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

