import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration Service | IPR Karo",
  description: "Complete trademark registration service in India. AI-powered search, expert filing, and legal support. Register your trademark online with IPR Karo.",
};

export default function TrademarkRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

