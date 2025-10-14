import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Protection India | IPR Karo",
  description: "Secure your creative works with copyright registration in India. AI-powered search, fast filing, and expert legal protection for your intellectual property.",
};

export default function CopyrightProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

