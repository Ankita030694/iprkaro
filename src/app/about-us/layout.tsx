import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IPR Karo | Trademark Platform",
  description: validateAndNormalizeDescription("Learn about IPR Karo - India's leading AI-powered trademark registration platform. Our story, mission, and commitment to making IP protection accessible to all businesses.", "app/about-us/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/about-us",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

