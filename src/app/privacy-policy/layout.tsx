import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IPRKaro",
  description: "Read IPRKaro.com's privacy policy to understand how we collect, use, and protect your personal data. Learn about your data rights, information security measures, cookie usage, and how we safeguard your privacy during trademark registration and IP protection services.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

