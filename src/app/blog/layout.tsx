import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPR & Trademark Blog | IPR Karo",
  description: "Expert insights on trademark registration, intellectual property protection, and AI-powered brand protection strategies. Stay updated with the latest IP news and guides.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

