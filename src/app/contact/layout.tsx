import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact IPR Karo | Get Expert Help",
  description: "Contact IPR Karo for trademark registration assistance. Connect with our expert team for AI-powered trademark search, filing support, and brand protection guidance.",
  alternates: {
    canonical: "https://iprkaro.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

