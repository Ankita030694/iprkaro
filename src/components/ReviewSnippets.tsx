"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const REVIEWS_DATA = [
  {
    author: "Rajesh Kumar",
    role: "Founder, SaaS Startup",
    rating: 5,
    date: "2024-01-15",
    text: "I was worried about the trademark process for my software company. IPR Karo's AI search was instant, and their team handled the objection so smoothly. Got my registration in record time!",
    avatar: "RK"
  },
  {
    author: "Anita Desai",
    role: "Creative Director, Design Agency",
    rating: 5,
    date: "2023-11-20",
    text: "Copyrighting our ad campaigns used to be a headache. With IPR Karo, it's just a few clicks. The dashboard is super intuitive and the legal support is top-notch. Highly recommended for creative agencies.",
    avatar: "AD"
  },
  {
    author: "Vikram Singh",
    role: "CEO, Organic FMCG Brand",
    rating: 5,
    date: "2023-12-05",
    text: "We needed to protect our brand across multiple categories. The team guided us on the right classifications and saved us money. Professional, transparent, and very effective service.",
    avatar: "VS"
  },
  {
    author: "Dr. A. Mehra",
    role: "Inventor & Researcher",
    rating: 4,
    date: "2024-02-10",
    text: "Filing a patent in India is complex. IPR Karo's patent agents understood my technical invention quickly and drafted a strong application. I felt very secure working with them.",
    avatar: "AM"
  },
  {
    author: "A Prominent Incubator",
    role: "Startup Mentor",
    rating: 5,
    date: "2024-01-30",
    text: "We recommend IPR Karo to all our portfolio startups. Their automated watch services and startup-friendly pricing make them the best IP partner in the ecosystem.",
    avatar: "PI"
  },
  {
    author: "Amit Verma",
    role: "Director, EdTech Platform",
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
  date: string;
  text: string;
  avatar: string;
}

interface ReviewSnippetsProps {
  reviews?: Review[];
}

export default function ReviewSnippets({ reviews }: ReviewSnippetsProps) {
  const displayReviews = reviews || REVIEWS_DATA;

  return (
    <section className="py-20 relative overflow-hidden bg-[#0C002B]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-[#FFB703]/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-nunito">
            Trusted by <span className="text-[#FFB703]">Innovators & Businesses</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what business owners, founders, and creators have to say about securing their IP with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative group hover:border-[#FFB703]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#FFB703]/20 transition-colors">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-white font-bold">{review.author}</h3>
                  <p className="text-white/50 text-xs">{review.role}</p>
                </div>
              </div>

              <div className="mb-4 text-[#FFB703] text-sm flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i < review.rating ? "text-[#FFB703]" : "text-gray-600"}
                  />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Date hidden visually but good for potential expansion/metadata */}
              {/* <meta itemProp="datePublished" content={review.date} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
