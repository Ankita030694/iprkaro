import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | IPRKaro",
  description: "Review IPRKaro.com's terms and conditions, including our cancellation and refund policy. Understand your rights and obligations when using our trademark registration, copyright protection, and patent services. Learn about service terms, payment policies, and legal agreements.",
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

