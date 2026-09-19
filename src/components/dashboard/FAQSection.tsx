'use client';

import { faqs } from '@/lib/dashboard-data';
import FaqSection from '@/components/FaqSection';

export default function DashboardFAQSection() {
  return (
    <FaqSection 
      items={faqs}
      title={
        <>
          Have Question?
          <br className="md:hidden" />
          <span className="text-[#1952C7]">
            We've Got Answers.
          </span>
        </>
      }
    />
  );
}
