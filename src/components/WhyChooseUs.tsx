export default function WhyChooseUs() {
  return (
    <section className="flex flex-col items-center gap-[100px] w-full relative bg-[#0C002B] py-[100px]">
      {/* Header Content */}
      <div className="flex flex-col items-center gap-[60px] w-full max-w-[839px] mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-white text-center font-nunito text-[45px] font-medium leading-[45px] w-full">
          Why Choose IPRKaro?
        </h2>
        
        {/* Subtitle */}
        <p className="text-white text-center font-nunito text-[20px] font-normal leading-[25px] w-full">
          Protecting your brand shouldn't be complicated.<br />
          At iprKaro.com, we use Artificial Intelligence + Legal Expertise to make trademark registration
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative w-full max-w-[1543px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[68px] lg:gap-[68px] w-full">
          
          {/* Card 1: Instant AI Search */}
          <div className="flex justify-center items-center w-full max-w-[469px] h-[114px] px-[28px] py-[25px] rounded-[15px] bg-[rgba(255,183,3,0.1)] backdrop-blur-[17.7px]">
            <div className="flex items-center gap-[40px] w-full">
              {/* Lightning Icon */}
              <svg width="27" height="65" viewBox="0 0 30 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M1.9032 35.3524L14.3924 19.1982C15.3686 17.9339 28.5 0.430716 28.5 2.11394L17.1997 32.9067C17.1997 33.9138 17.9171 34.732 18.8041 34.732H24.8792C26.2587 34.732 26.994 36.5843 26.082 37.764L13.5929 53.9182C12.6166 55.1807 3.10607 68.5368 3.10607 66.8536L10.7856 40.2079C10.7856 39.2008 10.0663 38.3826 9.18112 38.3826H3.10608C1.72652 38.3826 0.991231 36.5321 1.9032 35.3524Z" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              {/* Text */}
              <span className="text-white font-nunito text-[20px] font-medium leading-[20px] flex-1">
                Instant AI search & class suggestions.
              </span>
            </div>
          </div>

          {/* Card 2: Risk Prediction */}
          <div className="flex justify-center items-center w-full max-w-[469px] h-[114px] px-[34px] py-[25px] rounded-[15px] bg-[rgba(255,183,3,0.1)]">
            <div className="flex items-center gap-[40px] w-full">
              {/* Brain/AI Icon */}
              <svg width="68" height="65" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M17.7493 40.9996C16.3306 41.0017 14.9295 41.3134 13.6437 41.9129C12.3579 42.5125 11.2184 43.3853 10.3047 44.4707C9.39108 45.556 8.72529 46.8277 8.35383 48.1969C7.98236 49.5661 7.91417 50.9999 8.15401 52.3982C8.39386 53.7965 8.93596 55.1256 9.74247 56.2927C10.549 57.4599 11.6005 58.437 12.8236 59.1558C14.0467 59.8746 15.412 60.3179 16.8241 60.4546C18.2362 60.5914 19.6611 60.4183 20.9994 59.9475" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.85714 46.2158C6.91218 45.2795 5.23099 43.8735 3.9653 42.1249C2.69962 40.3763 1.88927 38.34 1.6074 36.1999C1.32554 34.0597 1.58102 31.8831 2.35079 29.8664C3.12056 27.8497 4.38039 26.0564 6.01658 24.6484M6.11408 24.3851C5.0482 22.7902 4.58103 20.8695 4.79527 18.9631C5.00951 17.0568 5.89135 15.2877 7.28468 13.9691C8.678 12.6505 10.4929 11.8675 12.4082 11.7585C14.3234 11.6496 16.2155 12.2218 17.7493 13.3739M18.5228 13.5852C18.0044 12.4835 17.7401 11.2795 17.7496 10.062C17.759 8.84447 18.042 7.64466 18.5775 6.55123C19.1131 5.4578 19.8875 4.49871 20.8436 3.74484C21.7997 2.99098 22.913 2.46161 24.1011 2.19588C25.2893 1.93015 26.522 1.93484 27.7082 2.20961C28.8943 2.48439 30.0035 3.02221 30.9538 3.78334C31.9041 4.54446 32.6712 5.50942 33.1984 6.6069C33.7256 7.70438 33.9994 8.9063 33.9996 10.1238V60.4999C33.9996 62.2238 33.3148 63.8771 32.0958 65.0962C30.8768 66.3152 29.2235 67 27.4995 67C25.7756 67 24.1222 66.3152 22.9032 65.0962C21.6842 63.8771 20.9994 62.2238 20.9994 60.4999M33.9996 18.249C33.9996 20.8349 35.0269 23.3149 36.8554 25.1434C38.6839 26.972 41.1639 27.9992 43.7498 27.9992M50.25 40.9995C51.6687 41.0016 53.0698 41.3133 54.3556 41.9128C55.6415 42.5123 56.781 43.3852 57.6946 44.4705C58.6082 45.5559 59.274 46.8275 59.6455 48.1967C60.017 49.5659 60.0852 50.9997 59.8453 52.398C59.6055 53.7963 59.0634 55.1254 58.2569 56.2925C57.4503 57.4597 56.3988 58.4368 55.1757 59.1556C53.9526 59.8745 52.5874 60.3177 51.1753 60.4545C49.7632 60.5912 48.3382 60.4181 46.9999 59.9474" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M59.1425 46.2158C61.0875 45.2795 62.7687 43.8735 64.0343 42.1249C65.3 40.3763 66.1104 38.34 66.3922 36.1999C66.6741 34.0597 66.4186 31.8831 65.6489 29.8664C64.8791 27.8497 63.6193 26.0564 61.9831 24.6484M61.8856 24.3851C62.9515 22.7902 63.4186 20.8695 63.2044 18.9631C62.9901 17.0568 62.1083 15.2877 60.715 13.9691C59.3216 12.6505 57.5067 11.8675 55.5915 11.7585C53.6762 11.6496 51.7842 12.2218 50.2503 13.3739M34 10.1238C34.0002 8.9063 34.274 7.70438 34.8012 6.6069C35.3284 5.50942 36.0955 4.54446 37.0458 3.78334C37.9962 3.02221 39.1054 2.48439 40.2915 2.20961C41.4776 1.93484 42.7103 1.93015 43.8985 2.19588C45.0867 2.46161 46.2 2.99098 47.1561 3.74484C48.1121 4.49871 48.8866 5.4578 49.4221 6.55123C49.9577 7.64466 50.2406 8.84447 50.2501 10.062C50.2596 11.2795 49.9953 12.4835 49.4768 13.5852M47.0003 60.4999C47.0003 62.2238 46.3154 63.8771 45.0964 65.0962C43.8774 66.3152 42.2241 67 40.5001 67C38.7762 67 37.1229 66.3152 35.9038 65.0962C34.6848 63.8771 34 62.2238 34 60.4999" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              {/* Text */}
              <span className="text-white font-nunito text-[20px] font-medium leading-[20px] flex-1">
                Risk prediction & objection alerts.
              </span>
            </div>
          </div>

          {/* Card 3: Easy Filing */}
          <div className="flex justify-center items-center w-full max-w-[469px] h-[114px] px-[45px] py-[24px] rounded-[15px] bg-[rgba(255,183,3,0.1)]">
            <div className="flex items-center gap-[40px] w-full">
              {/* Document Icon */}
              <svg width="56" height="65" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M38.1292 57.25H31.6292C22.435 57.25 17.8395 57.25 14.986 54.3933C12.126 51.5398 12.126 46.941 12.126 37.75V21.5C12.126 12.309 12.126 7.71025 14.986 4.85675C17.8362 2 22.4317 2 31.626 2H35.994C38.6525 2 39.9785 2 41.1745 2.494C42.3672 2.988 43.3065 3.9305 45.185 5.809L53.8202 14.441C55.6987 16.3195 56.638 17.262 57.1352 18.4548C57.6292 19.6508 57.6292 20.9767 57.6292 23.6352V37.75C57.6292 46.941 57.6292 51.5398 54.7725 54.3933C51.919 57.25 47.3202 57.25 38.1292 57.25Z" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M39.7539 3.625V6.875C39.7539 13.0045 39.7539 16.066 41.6584 17.9705C43.5597 19.875 46.6244 19.875 52.7539 19.875H56.0039M12.1289 11.75C9.54305 11.75 7.0631 12.7772 5.23462 14.6057C3.40614 16.4342 2.37891 18.9141 2.37891 21.5V47.5C2.37891 56.691 2.37891 61.2898 5.23241 64.1433C8.08916 67 12.6847 67 21.8789 67H38.1289C40.7148 67 43.1947 65.9728 45.0232 64.1443C46.8517 62.3158 47.8789 59.8359 47.8789 57.25M23.5039 31.25H36.5039M23.5039 44.25H46.2539" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              {/* Text */}
              <span className="text-white font-nunito text-[20px] font-medium leading-[20px] flex-1">
                Easy filing with expert support.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
