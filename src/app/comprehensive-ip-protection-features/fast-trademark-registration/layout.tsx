import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast Trademark Registration India | IPR Karo",
  description: validateAndNormalizeDescription("Get your trademark registered fast in India with IPRKaro's expedited service. Professional trademark filing, priority processing, and expert attorney support. Register your brand in 8-12 weeks.", "app/comprehensive-ip-protection-features/fast-trademark-registration/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/fast-trademark-registration",
  },
};

export default function FastRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

