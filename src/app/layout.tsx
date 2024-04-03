import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "No Spoon Productions Zine",
  // description: "No Spoon Productions Zine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // xmlns="http://www.w3.org/1999/xhtml"
      vocab="https://hypervideo.tech/hvml#"
      prefix="hvml: https://hypervideo.tech/hvml#"
      // xmlLang="en"
      lang="en"
      className="csshyphens"
    >
      <body>{children}</body>
    </html>
  );
}
