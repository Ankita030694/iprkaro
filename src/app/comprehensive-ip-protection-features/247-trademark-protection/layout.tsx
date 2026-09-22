import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Trademark Protection India | IPR Karo",
  description: validateAndNormalizeDescription("Get 24/7 trademark protection in India with certified trademark agents. Continuous monitoring, emergency response, and round-the-clock accessibility for comprehensive brand protection.", "app/comprehensive-ip-protection-features/247-trademark-protection/layout.tsx "),
  alternates: {
    canonical: "https://www.iprkaro.com/comprehensive-ip-protection-features/247-trademark-protection",
  },
};

export default function TwentyFourSevenProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

