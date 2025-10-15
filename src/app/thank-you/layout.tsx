import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - IPR Karo | Your Message Has Been Received',
  description: 'Thank you for contacting IPR Karo. Our trademark registration experts will review your inquiry and respond within 2-4 hours. Get expert guidance for trademark, copyright, and patent services in India.',
  keywords: 'IPR Karo contact, trademark registration inquiry, IP services India, thank you',
  openGraph: {
    title: 'Thank You - IPR Karo | Your Message Has Been Received',
    description: 'Thank you for contacting IPR Karo. Our trademark registration experts will review your inquiry and respond within 2-4 hours.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://iprkaro.com/thank-you',
  },
  robots: {
    index: false, // Don't index thank you pages
    follow: true,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

