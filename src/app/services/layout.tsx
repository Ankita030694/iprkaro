import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Protection Services India | IPR Karo",
  description: "Comprehensive intellectual property services including trademark registration, copyright protection, and patent filing. AI-powered solutions with expert legal support.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

