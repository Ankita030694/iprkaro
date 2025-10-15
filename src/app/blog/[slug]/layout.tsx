import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Article - AMA Legal Solutions",
  description: "Read the latest legal insights and articles from AMA Legal Solutions",
};

export default function BlogSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}



