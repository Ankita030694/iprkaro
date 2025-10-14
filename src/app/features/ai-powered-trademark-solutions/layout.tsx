import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Trademark Solutions India | IPR Karo",
  description: "Revolutionary AI-powered trademark solutions in India. Get intelligent trademark search, risk assessment, and automated reporting with 98.5% accuracy. Advanced machine learning for brand protection.",
  alternates: {
    canonical: "https://iprkaro.com/features/ai-powered-trademark-solutions",
  },
};

export default function AITrademarkSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

