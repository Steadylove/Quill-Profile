import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quill Lu",
  description:
    "A passionate frontend developer with expertise in React, Next.js, Node.js, AI and Web3 development.",
  keywords: [
    "Frontend Developer",
    "Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "AI",
    "Web3",
    "Quill Lu",
  ],
  authors: [{ name: "Quill Lu" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Quill Lu",
    description:
      "A passionate frontend developer with expertise in React, Next.js, Node.js, AI and Web3 development.",
    siteName: "Quill Lu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quill Lu",
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
