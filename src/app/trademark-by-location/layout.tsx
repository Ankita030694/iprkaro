import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trademark Registration by Location | IPR Karo",
  description: "Find expert trademark registration services in your specific location. Protect your brand identity with IPR Karo's localized legal assistance.",
};

export default function TrademarkByLocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
