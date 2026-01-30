import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Developer | Full Stack Engineer",
  description:
    "A passionate frontend developer with expertise in React, Next.js, Node.js, AI and Web3 development.",
  keywords: ["Frontend Developer", "Full Stack", "React", "Next.js", "Node.js", "AI", "Web3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Frontend Developer | Full Stack Engineer",
    description:
      "A passionate frontend developer with expertise in React, Next.js, Node.js, AI and Web3 development.",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer | Full Stack Engineer",
    description:
      "A passionate frontend developer with expertise in React, Next.js, Node.js, AI and Web3 development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
