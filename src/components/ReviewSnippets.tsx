'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const REVIEWS_DATA = [
  {
    author: "Rajesh Kumar",
    role: "FOUNDER, SAAS STARTUP",
    rating: 5,
    date: "2024-01-15",
    text: "I was worried about the trademark process for my software company. IPR Karo's AI search was instant, and their team handled the objection so smoothly. Got my registration in record time!",
    avatar: "RK"
  },
  {
    author: "Anita Desai",
    role: "CREATIVE DIRECTOR, DESIGN AGENCY",
    rating: 5,
    date: "2023-11-20",
    text: "Copyrighting our ad campaigns used to be a headache. With IPR Karo, it's just a few clicks. The dashboard is super intuitive and the legal support is top notch. Highly recommended for creative agencies.",
    avatar: "AD"
  },
  {
    author: "Vikram Singh",
    role: "CEO, ORGANIC FMCG BRAND",
    rating: 5,
    date: "2023-12-05",
    text: "We needed to protect our brand across multiple categories. The team guided us on the right classifications and saved us money. Professional, transparent, and very effective service.",
    avatar: "VS"
  },
  {
    author: "Dr. A. Mehra",
    role: "INVENTOR & RESEARCHER",
    rating: 4,
    date: "2024-02-10",
    text: "Filing a patent in India is complex. IPR Karo's patent agents understood my technical invention quickly and drafted a strong application. I felt very secure working with them.",
    avatar: "AM"
  },
  {
    author: "A Prominent Incubator",
    role: "STARTUP MENTOR",
    rating: 5,
    date: "2024-01-30",
    text: "We recommend IPR Karo to all our portfolio startups. Their automated watch services and startup-friendly pricing make them the best IP partner in the ecosystem.",
    avatar: "PI"
  },
  {
    author: "Amit Verma",
    role: "DIRECTOR, EDTECH PLATFORM",
    rating: 5,
    date: "2024-02-15",
    text: "The trademark monitoring service is a lifesaver. We were alerted about a similar brand filing within days and could take action immediately. Highly proactive team!",
    avatar: "AV"
  }
];

interface Review {
  author: string;
  role: string;
  rating: number;
  date?: string;
  text: string;
  avatar: string;
}

interface ReviewSnippetsProps {
  reviews?: Review[];
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
}

export default function ReviewSnippets({
  reviews,
  showHeading = true,
  title,
  subtitle,
}: ReviewSnippetsProps) {
  const displayReviews = reviews || REVIEWS_DATA;

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {showHeading && (
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-[#0C002B] font-nunito text-[32px] sm:text-[44px] md:text-[50px] font-bold text-center mb-3 leading-[1.15] tracking-tight">
              {title || (
                <>
                  Trusted by <span className="text-[#1952C7]">Innovators & Businesses</span>
                </>
              )}
            </h3>
            <p className="text-[#334155] max-w-2xl mx-auto text-base sm:text-lg font-normal">
              {subtitle ||
                "Don't just take our word for it. Here is what business owners, founders, and creators have to say about securing their IP with us."}
            </p>
          </div>
        )}

        {/* 6 Testimonial Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 md:p-8 border border-slate-200/90 hover:border-[#1952C7]/30 shadow-[0_4px_24px_rgba(12,0,43,0.03)] hover:shadow-[0_12px_32px_rgba(25,82,199,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-[14px] bg-[#EAF2FC] flex items-center justify-center text-[#1952C7] font-bold text-[16px] flex-shrink-0 select-none">
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[#0C002B] font-bold text-[16px] sm:text-[17px] font-nunito leading-tight truncate">
                      {review.author}
                    </h4>
                    <p className="text-[#1952C7] text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.05em] mt-1 font-nunito truncate">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Light Blue Quotation Mark */}
                <div className="text-[#1952C7]/20 flex-shrink-0">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-[28px] sm:text-[32px]" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`text-[16px] sm:text-[17px] ${
                      i < review.rating ? 'text-[#F59E0B]' : 'text-[#E2E8F0]'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#1E293B] text-[14px] sm:text-[15px] leading-relaxed italic font-nunito">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
