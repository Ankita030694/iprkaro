import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patent Services India | IPR Karo",
  description: "Professional patent filing and registration services in India. AI-powered patent search, expert drafting, and complete legal support for your inventions.",
  alternates: {
    canonical: "https://iprkaro.com/services/patent-services",
  },
};

export default function PatentServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

