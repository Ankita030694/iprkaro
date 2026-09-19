import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Trademark Services India | IPR Karo",
  description: "Get affordable trademark registration services in India with transparent pricing. Professional trademark filing at competitive rates with no hidden fees. Save up to 60% compared to traditional law firms.",
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/affordable-trademark-services",
  },
};

export default function AffordableServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

