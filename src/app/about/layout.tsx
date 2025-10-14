import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IPR Karo | AI Trademark Registration",
  description: "Learn about IPR Karo - India's leading AI-powered trademark registration platform. Our story, mission, and commitment to making IP protection accessible to all businesses.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

