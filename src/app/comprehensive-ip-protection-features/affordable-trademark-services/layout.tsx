import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Trademark Services India | IPR Karo",
  description: validateAndNormalizeDescription("Get affordable trademark registration services in India with transparent pricing. Professional trademark filing at competitive rates with no hidden fees. Save up to 60% compared to traditional law firms.", "app/comprehensive-ip-protection-features/affordable-trademark-services/layout.tsx "),
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

