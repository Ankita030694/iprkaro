import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Risk Reduction India | IPR Karo",
  description: "Reduce trademark registration risks in India with comprehensive risk assessment, advanced search methodologies, and expert legal analysis. Maximize approval chances and minimize conflicts.",
};

export default function RiskReductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

