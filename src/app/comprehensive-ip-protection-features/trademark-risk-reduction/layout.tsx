import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Risk Reduction India | IPR Karo",
  description: validateAndNormalizeDescription("Reduce trademark registration risks in India with comprehensive risk assessment, advanced search methodologies, and expert legal analysis. Maximize approval chances and minimize conflicts.", "app/comprehensive-ip-protection-features/trademark-risk-reduction/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/trademark-risk-reduction",
  },
};

export default function RiskReductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

