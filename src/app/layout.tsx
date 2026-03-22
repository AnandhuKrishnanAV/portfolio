import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anandhu Krishnan Anitha Vijayan — Data Analyst",
  description: "Scroll-driven portfolio — data, design, and clarity.",
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={`${GeistSans.className} font-sans`}>{children}</body>
    </html>
  );
}
