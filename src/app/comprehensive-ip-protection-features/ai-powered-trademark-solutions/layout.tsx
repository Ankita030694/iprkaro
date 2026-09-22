import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Trademark Solutions India | IPR Karo",
  description: validateAndNormalizeDescription("Revolutionary AI-powered trademark solutions in India. Get intelligent trademark search, risk assessment, and automated reporting with 98.5% accuracy. Advanced machine learning for brand protection.", "app/comprehensive-ip-protection-features/ai-powered-trademark-solutions/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/ai-powered-trademark-solutions",
  },
};

export default function AITrademarkSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

