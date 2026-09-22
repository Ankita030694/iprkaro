import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Trademark Guidance India | IPR Karo",
  description: validateAndNormalizeDescription("Get expert trademark guidance from experienced attorneys in India. 24/7 consultation, legal support, and professional advice for trademark registration, opposition, and protection.", "app/comprehensive-ip-protection-features/expert-trademark-guidance/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/expert-trademark-guidance",
  },
};

export default function ExpertGuidanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

